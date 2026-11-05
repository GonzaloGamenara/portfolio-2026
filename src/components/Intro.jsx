import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";

const KEY = "intro_seen";
const DURATION = 2250; // zoom ends at 1150 + 1000 ms, + margin (see "First-visit intro" in index.css)

// Letters are real Space Mono Bold text (same face as the logo and headings).
// viewBox is 800×800; these numbers are shared by the SVG and the canvas probe below.
const FONT_SIZE = 330;
const BASELINE = 515; // ≈ 400 + cap-height/2 → letters visually centred
const FONT = `700 ${FONT_SIZE}px "Space Mono"`;

function shouldPlay() {
  try {
    if (sessionStorage.getItem(KEY)) return false;
  } catch {
    /* storage blocked: play once per page load */
  }
  const url = new URL(window.location.href);
  if (url.searchParams.has("nointro") || url.pathname.startsWith("/cv")) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

/**
 * Find where to fly the camera: the middle of the spine of the 2nd "G", measured by
 * rasterising the exact same text on a canvas. Returns the transform-origin (in viewBox
 * units) and the zoom needed for that stroke to cover the whole screen.
 */
function aimCamera() {
  const c = document.createElement("canvas");
  c.width = c.height = 800;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.font = FONT;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("GG", 400, BASELINE);
  const data = ctx.getImageData(0, 0, 800, 800).data;
  const on = (x, y) => data[(y * 800 + x) * 4 + 3] > 128;

  const row = 400;
  let a = -1;
  let b = -1;
  for (let x = 405; x < 800; x++) {
    if (on(x, row) && a < 0) a = x;
    else if (!on(x, row) && a >= 0) {
      b = x;
      break;
    }
  }
  if (a < 0 || b < 0) return null; // font not rendered: caller falls back
  const cx = (a + b) / 2;
  let top = row;
  let bottom = row;
  while (top > 0 && on(Math.round(cx), top - 1)) top--;
  while (bottom < 799 && on(Math.round(cx), bottom + 1)) bottom++;
  const cy = (top + bottom) / 2;

  // visible area in viewBox units with preserveAspectRatio="meet"
  const unit = 800 / Math.min(window.innerWidth, window.innerHeight);
  const visW = window.innerWidth * unit;
  const visH = window.innerHeight * unit;
  // usable window = fill minus the inner half of the outline (7) and anti-aliasing
  const needX = (visW + 2 * Math.abs(cx - 400)) / Math.max(1, b - a - 12);
  const needY = (visH + 2 * Math.abs(cy - 400)) / Math.max(1, bottom - top - 12);
  return { ox: cx, oy: cy, scale: Math.ceil(Math.max(needX, needY) * 1.8) };
}

/**
 * First-visit intro: "GG" on paper turns into windows onto the site; the camera flies
 * through the 2nd G while the page emerges from depth into focus.
 * Decorative (aria-hidden); any click or key skips it.
 */
export default function Intro() {
  const { lang } = usePreferences();
  const [visible, setVisible] = useState(shouldPlay);
  const [aim, setAim] = useState(null);
  const started = useRef(false);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    delete document.documentElement.dataset.intro;
    setVisible(false);
  }, []);

  // 1) cover the page and wait for Space Mono, 2) aim the camera, 3) run the timeline
  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.dataset.intro = "wait";
    root.style.overflow = "hidden";
    let timer;
    let cancelled = false;

    const go = () => {
      if (cancelled || started.current) return;
      started.current = true;
      setAim(aimCamera() ?? { ox: 465, oy: 400, scale: 70 });
      root.dataset.intro = "go";
      if (!window.__introFreeze) timer = setTimeout(finish, DURATION);
    };
    Promise.race([document.fonts?.load(FONT) ?? Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]).then(go, go);

    window.addEventListener("keydown", finish);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("keydown", finish);
      root.style.overflow = "";
      delete root.dataset.intro;
    };
  }, [visible, finish]);

  if (!visible) return null;

  const letters = (props) => (
    <text x="400" y={BASELINE} textAnchor="middle" style={{ font: FONT }} {...props}>
      GG
    </text>
  );

  return createPortal(
    <div
      className={`intro fixed inset-0 z-[300] cursor-pointer select-none ${aim ? "ix-go" : ""}`}
      aria-hidden="true"
      onClick={finish}
      style={aim ? { "--ix-ox": `${aim.ox}px`, "--ix-oy": `${aim.oy}px`, "--ix-scale": aim.scale } : undefined}
    >
      <svg className="ix-svg absolute inset-0 h-full w-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="ix-holes" maskUnits="userSpaceOnUse" x="-20000" y="-20000" width="40800" height="40800">
            <rect x="-20000" y="-20000" width="40800" height="40800" fill="#fff" />
            {letters({ className: "ix-hole" })}
          </mask>
          <pattern id="ix-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" style={{ stroke: "var(--color-grid)" }} strokeWidth="2" />
          </pattern>
        </defs>

        <g className="ix-world">
          {/* the paper, with the letters cut out of it */}
          <g mask="url(#ix-holes)">
            <rect x="-20000" y="-20000" width="40800" height="40800" style={{ fill: "var(--color-bg)" }} />
            <rect className="ix-gridlayer" x="-20000" y="-20000" width="40800" height="40800" fill="url(#ix-grid)" />
          </g>

          <g className="ix-g">
            <g className="ix-shadow-fade">{letters({ className: "ix-shadow", style: { font: FONT, fill: "var(--color-shadow)" } })}</g>
            {letters({
              className: "ix-fill",
              fill: "#f7c236",
              strokeWidth: 7,
              strokeLinejoin: "round",
              paintOrder: "stroke",
              style: { font: FONT, stroke: "var(--color-line)" },
            })}
          </g>

          <text
            x="400"
            y="625"
            textAnchor="middle"
            className="ix-caption"
            style={{ fill: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700 }}
          >
            {profile.name.toUpperCase()} · PORTFOLIO
          </text>
        </g>
      </svg>

      <span className="ix-skip absolute right-4 bottom-4 border-2 border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-bold shadow-sm">
        {lang === "es" ? "clic o tecla para saltar" : "click or press a key to skip"}
      </span>
    </div>,
    document.body,
  );
}
