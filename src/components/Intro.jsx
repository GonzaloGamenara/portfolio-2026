import { useCallback, useEffect, useState } from "react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";

const KEY = "intro_seen";
const DURATION = 2200; // zoom ends at 1150 + 1000 ms (see "First-visit intro" in index.css)

// Block "G" as ONE outline polygon in a 300×300 box, stroke 70 (no inner seams when it
// becomes a window). Known geometry lets the camera aim at the centre of a stroke.
const G_OUTLINE = [
  [0, 0], [300, 0], [300, 70], [70, 70], [70, 230], [230, 230],
  [230, 210], [150, 210], [150, 150], [300, 150], [300, 300], [0, 300],
];
const gPath = (x, y) => `M${G_OUTLINE.map(([px, py]) => `${x + px} ${y + py}`).join("L")}Z`;

// viewBox 0 0 800 800: G #1 at x=70, G #2 at x=430, both at y=250.
// Camera target = centre of G #2's spine: (430 + 35, 250 + 150) = (465, 400) → .ix-world origin.
const LETTERS = [gPath(70, 250), gPath(430, 250)];

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
 * First-visit intro: two block G's on paper turn into windows onto the site and the
 * camera flies through one of them while the page counter-zooms into focus.
 * Pure CSS keyframes on an SVG mask. Decorative (aria-hidden); any click or key skips it.
 */
export default function Intro() {
  const { lang } = usePreferences();
  const [visible, setVisible] = useState(shouldPlay);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    delete document.documentElement.dataset.intro;
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.dataset.intro = "playing";
    root.style.overflow = "hidden";
    if (window.__introFreeze) return; // test hook: frame-by-frame capture drives the timeline
    const timer = setTimeout(finish, DURATION);
    window.addEventListener("keydown", finish);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", finish);
      root.style.overflow = "";
      delete root.dataset.intro;
    };
  }, [visible, finish]);

  if (!visible) return null;

  return (
    <div className="intro fixed inset-0 z-[300] cursor-pointer select-none" aria-hidden="true" onClick={finish}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="ix-holes" maskUnits="userSpaceOnUse" x="-20000" y="-20000" width="40800" height="40800">
            <rect x="-20000" y="-20000" width="40800" height="40800" fill="#fff" />
            {LETTERS.map((d, i) => (
              <path key={i} d={d} className="ix-hole" />
            ))}
          </mask>
          <pattern id="ix-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" style={{ stroke: "var(--color-grid)" }} strokeWidth="2" />
          </pattern>
        </defs>

        <g className="ix-world">
          {/* the paper, with the letters cut out of it */}
          <g mask="url(#ix-holes)">
            <rect x="-20000" y="-20000" width="40800" height="40800" style={{ fill: "var(--color-bg)" }} />
            <rect x="-20000" y="-20000" width="40800" height="40800" fill="url(#ix-grid)" />
          </g>

          {LETTERS.map((d, i) => (
            <g key={i} className="ix-g" style={{ "--i": i }}>
              <g className="ix-shadow-fade">
                <path d={d} className="ix-shadow" style={{ fill: "var(--color-shadow)", "--i": i }} />
              </g>
              <path d={d} className="ix-fill" fill="#f7c236" style={{ stroke: "var(--color-line)" }} strokeWidth="6" strokeLinejoin="miter" paintOrder="stroke" />
            </g>
          ))}

          <text
            x="400"
            y="640"
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
    </div>
  );
}
