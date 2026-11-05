import { useCallback, useEffect, useState } from "react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";

const KEY = "intro_seen";
const REVEAL_AT = 2620; // panels start leaving: the page rises in underneath
const DURATION = 3330; // last panel out (2620 + 3*55 + 520) + margin

// Brand tiles: where each one flies in from (vw/vh so it works on any screen) and its spin
const TILES = [
  { c: "bg-yellow", fx: "-62vw", fy: "-52vh", fr: "-140deg", letter: "G" },
  { c: "bg-pink", fx: "60vw", fy: "-56vh", fr: "120deg" },
  { c: "bg-green", fx: "-58vw", fy: "54vh", fr: "100deg" },
  { c: "bg-blue", fx: "64vw", fy: "50vh", fr: "-110deg", letter: "G" },
];

// Impact particles: deterministic "random" burst (no Math.random → same on every render)
const PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2 + (i % 3) * 0.21;
  const r = 150 + ((i * 47) % 110);
  return {
    px: `${Math.round(Math.cos(a) * r)}px`,
    py: `${Math.round(Math.sin(a) * r)}px`,
    pr: `${(i % 2 ? 1 : -1) * (90 + ((i * 37) % 180))}deg`,
    size: 6 + ((i * 5) % 9),
    d: `${(i % 4) * 12}ms`,
    c: ["bg-yellow", "bg-pink", "bg-green", "bg-blue"][i % 4],
  };
});

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
 * First-visit intro. Pure CSS keyframes (see "First-visit intro" in index.css):
 * curved tile flights, squash & stretch impact with shockwave and particles,
 * masked type reveal and a skewed panel transition into the page.
 * Decorative (aria-hidden); any click or key skips it.
 */
export default function Intro() {
  const { lang, t } = usePreferences();
  const [visible, setVisible] = useState(shouldPlay);

  const reveal = () => delete document.documentElement.dataset.intro;

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    reveal();
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.dataset.intro = "playing";
    root.style.overflow = "hidden";
    if (window.__introFreeze) return; // test hook: frame-by-frame capture drives the timeline
    const revealTimer = setTimeout(reveal, REVEAL_AT);
    const doneTimer = setTimeout(finish, DURATION);
    window.addEventListener("keydown", finish);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", finish);
      root.style.overflow = "";
      reveal();
    };
  }, [visible, finish]);

  if (!visible) return null;

  const [first, last] = profile.name.toUpperCase().split(" ");

  return (
    <div className="intro fixed inset-0 z-[300] cursor-pointer overflow-hidden select-none" aria-hidden="true" onClick={finish}>
      <div className="ix-stage absolute inset-0 bg-bg">
        <div className="ix-grid absolute inset-0" />

        <div className="ix-camera absolute inset-0 grid place-items-center px-6">
          <div className="flex flex-col items-center">
            {/* monogram + impact VFX */}
            <div className="ix-mono relative grid place-items-center">
              <span className="ix-shock pointer-events-none absolute h-28 w-28 border-line border-solid" />
              <span className="ix-shock ix-shock-2 pointer-events-none absolute h-28 w-28 border-solid border-yellow" />
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className={`ix-particle absolute border-[1.5px] border-line ${p.c}`}
                  style={{ width: p.size, height: p.size, "--px": p.px, "--py": p.py, "--pr": p.pr, "--d": p.d }}
                />
              ))}

              <div className="ix-squash grid grid-cols-2 gap-1.5">
                {TILES.map((tile, i) => (
                  <div key={tile.c} className="ix-tile-x" style={{ "--fx": tile.fx, "--i": i }}>
                    <div className="ix-tile-y" style={{ "--fy": tile.fy, "--i": i }}>
                      <div
                        className={`ix-tile on-accent grid h-14 w-14 place-items-center border-2 border-line font-mono text-2xl font-bold shadow-card sm:h-16 sm:w-16 ${tile.c}`}
                        style={{ "--fr": tile.fr, "--i": i }}
                      >
                        {tile.letter}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <span className="ix-flash pointer-events-none absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.9)_0%,rgb(255_255_255/0)_65%)] mix-blend-soft-light dark:mix-blend-screen dark:opacity-0" />
            </div>

            {/* name */}
            <p className="mt-9 font-mono text-5xl leading-none font-bold tracking-tighter sm:text-7xl lg:text-8xl">
              <span className="block overflow-hidden pb-[0.08em]">
                {first.split("").map((ch, i) => (
                  <span key={i} className="ix-letter" style={{ "--i": i }}>
                    {ch}
                  </span>
                ))}
              </span>
            </p>
            <p className="mt-3 font-mono text-4xl leading-none font-bold tracking-tighter sm:text-6xl lg:text-7xl">
              <span className="ix-tag on-accent inline-block border-2 border-line bg-yellow px-3 py-1">
                <span className="ix-tag-text">{last}</span>
              </span>
            </p>
            <p className="ix-role mt-7 text-center font-mono text-[11px] font-bold text-muted uppercase sm:text-xs">
              {t({ es: "Desarrollador Full Stack", en: "Full Stack Developer" })} · Buenos Aires
            </p>
          </div>
        </div>

        <div className="ix-vignette pointer-events-none absolute inset-0" />
        <div className="ix-grain pointer-events-none absolute" />
      </div>

      {/* exit curtain */}
      <div className="pointer-events-none absolute inset-0 flex">
        {["bg-yellow", "bg-pink", "bg-green", "bg-blue"].map((c, i) => (
          <span key={c} className={`ix-panel -mx-px h-full flex-1 border-x-2 border-[#0a0a0a] ${c}`} style={{ "--i": i }} />
        ))}
      </div>

      <span className="ix-skip absolute right-4 bottom-4 border-2 border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-bold shadow-sm">
        {lang === "es" ? "clic o tecla para saltar" : "click or press a key to skip"}
      </span>
    </div>
  );
}
