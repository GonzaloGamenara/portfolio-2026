import { useCallback, useEffect, useState } from "react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";

const KEY = "intro_seen";
const DURATION = 2750; // must match the last keyframe in index.css (.intro-*)

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
 * First-visit intro: terminal "boot" typed frame by frame, block progress bar,
 * name slam and a cascade of brand-colour panels that reveals the site.
 * Decorative only (aria-hidden); any click or key skips it.
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
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(finish, DURATION);
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", skip);
      document.documentElement.style.overflow = "";
    };
  }, [visible, finish]);

  if (!visible) return null;

  return (
    <div className="intro fixed inset-0 z-[300] cursor-pointer select-none" aria-hidden="true" onClick={finish}>
      {/* stage: paper + grid, holds the terminal and the name */}
      <div className="intro-stage absolute inset-0 grid place-items-center bg-bg px-6">
        <div className="intro-card w-full max-w-md border-2 border-line bg-surface shadow-lift [grid-area:1/1]">
          <div className="on-accent flex h-8 items-center gap-1.5 border-b-2 border-line bg-green px-3">
            <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
            <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
            <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
            <span className="ml-2 font-mono text-[11px] font-bold">~/portfolio</span>
          </div>
          <div className="p-5 font-mono text-sm sm:text-base">
            <p className="flex">
              <span className="mr-2 text-faint">&gt;</span>
              <span className="intro-typing">npm run gonzalo</span>
              <span className="intro-cursor">▌</span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="intro-bar flex flex-1 gap-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <span key={i} className="intro-block h-4 flex-1 border-[1.5px] border-line" style={{ animationDelay: `${700 + i * 55}ms` }} />
                ))}
              </div>
              <span className="intro-pct w-12 text-right text-xs font-bold" />
            </div>
            <p className="intro-ready mt-3 text-xs font-bold text-accent">✓ {lang === "es" ? "listo" : "ready"}</p>
          </div>
        </div>

        <div className="intro-name pointer-events-none text-center [grid-area:1/1]">
          <p className="font-mono text-5xl leading-none font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="on-accent inline-block -rotate-2 border-2 border-line bg-yellow px-3 shadow-card">{profile.name.split(" ")[1]}</span>
          </p>
        </div>
      </div>

      {/* reveal panels */}
      <div className="absolute inset-0 flex">
        {["bg-yellow", "bg-pink", "bg-green", "bg-blue"].map((c, i) => (
          <span key={c} className={`intro-panel h-full flex-1 border-x border-[#0a0a0a] ${c}`} style={{ "--i": i }} />
        ))}
      </div>

      <span className="intro-skip absolute right-4 bottom-4 border-2 border-line bg-surface px-2 py-1 font-mono text-[11px] font-bold shadow-sm">
        {lang === "es" ? "clic para saltar" : "click to skip"}
      </span>
    </div>
  );
}
