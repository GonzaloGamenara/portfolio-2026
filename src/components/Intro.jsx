import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";
import { GG_PATHS, GG_TARGET } from "./introGlyphs";

const KEY = "intro_seen";
const DURATION = 2250; // zoom ends at 1150 + 1000 ms, + margin (see "First-visit intro" in index.css)

// Letters are the real Space Mono Bold "G" outlines (same face as the logo and headings),
// pre-extracted as paths — see introGlyphs.js for why not <text>.
function shouldPlay() {
  try {
    if (sessionStorage.getItem(KEY)) return false;
  } catch {
    /* storage blocked: play once per page load */
  }
  const url = new URL(window.location.href);
  if (url.searchParams.has("nointro") || url.pathname.startsWith("/cv"))
    return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return false;
  return true;
}

/**
 * Zoom needed for the deepest circle of the 2nd G (GG_TARGET) to cover the farthest
 * screen corner, so no edge of the letter can cross the screen at the end of the flight.
 */
function aimCamera() {
  const { x, y, r } = GG_TARGET;
  const usable = Math.max(1, r - 7); // minus inner half of the outline (3.5) + anti-aliasing
  const unit = 800 / Math.min(window.innerWidth, window.innerHeight); // "meet" scaling
  const halfW = (window.innerWidth * unit) / 2;
  const halfH = (window.innerHeight * unit) / 2;
  const farCorner = Math.hypot(
    halfW + Math.abs(x - 400),
    halfH + Math.abs(y - 400),
  );
  // ×2: with the symmetric expo in-out curve, progress hits 0.5 exactly at mid-zoom, so the
  // hole covers the whole screen by then and the overlay can be dropped (see .intro in CSS)
  return { ox: x, oy: y, scale: Math.ceil((farCorner / usable) * 2) };
}

/**
 * First-visit intro: "GG" on paper turns into windows onto the site; the camera flies
 * through the 2nd G while the page emerges from depth into focus.
 * Decorative (aria-hidden); any click or key skips it.
 */
export default function Intro() {
  const { lang } = usePreferences();
  const [visible, setVisible] = useState(shouldPlay);
  const [aim] = useState(aimCamera); // computed once for this screen size

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    delete document.documentElement.dataset.intro;
    setVisible(false);
  }, []);

  // cover the page, aim the camera for this screen size, run the timeline
  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    let timer;
    root.dataset.intro = "go";
    if (!window.__introFreeze) timer = setTimeout(finish, DURATION);
    window.addEventListener("keydown", finish);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", finish);
      root.style.overflow = "";
      delete root.dataset.intro;
    };
  }, [visible, finish]);

  if (!visible) return null;

  const letters = (props) => <path d={GG_PATHS.join(" ")} {...props} />;

  return createPortal(
    <div
      className={`intro fixed inset-0 z-[300] cursor-pointer select-none ${aim ? "ix-go" : ""}`}
      aria-hidden="true"
      onClick={finish}
      style={
        aim
          ? {
              "--ix-ox": `${aim.ox}px`,
              "--ix-oy": `${aim.oy}px`,
              "--ix-scale": aim.scale,
            }
          : undefined
      }
    >
      <svg
        className="ix-svg absolute inset-0 h-full w-full"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask
            id="ix-holes"
            maskUnits="userSpaceOnUse"
            x="-3000"
            y="-3000"
            width="6800"
            height="6800"
          >
            <rect x="-3000" y="-3000" width="6800" height="6800" fill="#fff" />
            {letters({ className: "ix-hole" })}
          </mask>
          <pattern
            id="ix-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              style={{ stroke: "var(--color-grid)" }}
              strokeWidth="2"
            />
          </pattern>
        </defs>

        <g className="ix-world">
          {/* the paper, with the letters cut out of it */}
          <g mask="url(#ix-holes)">
            <rect
              x="-3000"
              y="-3000"
              width="6800"
              height="6800"
              style={{ fill: "var(--color-bg)" }}
            />
            <rect
              className="ix-gridlayer"
              x="-3000"
              y="-3000"
              width="6800"
              height="6800"
              fill="url(#ix-grid)"
            />
          </g>

          {/* letter + shadow fly in from below the screen as ONE rigid piece (shadow never slides) */}
          <g className="ix-g">
            <g className="ix-shadow-fade">
              {letters({
                transform: "translate(16 16)",
                style: { fill: "var(--color-shadow)" },
              })}
            </g>
            {letters({
              className: "ix-fill",
              fill: "#f7c236",
              strokeWidth: 7,
              strokeLinejoin: "round",
              paintOrder: "stroke",
              style: { stroke: "var(--color-line)" },
            })}
          </g>

          <text
            x="400"
            y="625"
            textAnchor="middle"
            className="ix-caption"
            style={{
              fill: "var(--color-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {profile.name.toUpperCase()} · PORTFOLIO
          </text>
        </g>
      </svg>

      <span className="ix-skip absolute right-4 bottom-4 border-2 border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-bold shadow-sm">
        {lang === "es"
          ? "clic o tecla para saltar"
          : "click or press a key to skip"}
      </span>
    </div>,
    document.body,
  );
}
