import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - 2 ** (-10 * t));

/** Count a "600+"-style label up from 0 once it scrolls into view. */
function countUp(el) {
  const target = el.dataset.count;
  const m = target.match(/^(\D*)(\d+)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const end = Number(num);
  const t0 = performance.now();
  const step = (now) => {
    const p = easeOutExpo(Math.min(1, (now - t0) / 1300));
    el.textContent = `${pre}${Math.round(end * p)}${post}`;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * Site-wide micro-interactions, all opt-in via data attributes and all disabled with
 * prefers-reduced-motion:
 *   [data-reveal]  fades/slides in when it enters the viewport (stagger with --rd)
 *   [data-count]   numbers count up the first time they are seen
 *   --mx / --my    pointer position for the grid "flashlight" (desktop only, see CSS)
 *   [data-magnetic] buttons lean towards the pointer (desktop only)
 *   Konami code    replays the first-visit intro
 */
export default function Effects() {
  const { pathname } = useLocation();

  // scroll reveals + count-ups, re-armed on every page
  useEffect(() => {
    if (reduced() || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");
    const counters = [...document.querySelectorAll("[data-count]")];
    counters.forEach((el) => (el.textContent = el.dataset.count.replace(/\d+/, "0")));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          if (e.target.dataset.count) countUp(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    // wait a frame so the new route's DOM is in place
    const id = requestAnimationFrame(() => {
      document.querySelectorAll("[data-reveal]:not(.is-in), [data-count]").forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
      counters.forEach((el) => (el.textContent = el.dataset.count));
    };
  }, [pathname]);

  // magnetic buttons: [data-magnetic] leans towards the pointer while hovered
  useEffect(() => {
    if (reduced() || !finePointer()) return;
    const els = [...document.querySelectorAll("[data-magnetic]")];
    const offs = els.map((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        // subtle: ~8% of the distance, capped at 4px
        const clamp = (v) => Math.max(-4, Math.min(4, v));
        el.style.setProperty("--mg-x", `${clamp(dx * 0.08).toFixed(1)}px`);
        el.style.setProperty("--mg-y", `${clamp(dy * 0.12).toFixed(1)}px`);
      };
      const leave = () => {
        el.style.removeProperty("--mg-x");
        el.style.removeProperty("--mg-y");
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
        leave();
      };
    });
    return () => offs.forEach((off) => off());
  }, [pathname]);

  // easter egg: Konami code (↑↑↓↓←→←→BA) replays the intro
  useEffect(() => {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let i = 0;
    const onKey = (e) => {
      if (e.target.closest?.("input, textarea, [contenteditable]")) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      i = k === code[i] ? i + 1 : k === code[0] ? 1 : 0;
      if (i === code.length) {
        try {
          sessionStorage.removeItem("intro_seen");
        } catch {
          /* ignore */
        }
        window.scrollTo(0, 0);
        window.location.reload();
      }
    };
    window.addEventListener("keydown", onKey);
    try {
      if (!sessionStorage.getItem("egg_hint")) {
        console.info("%c↑ ↑ ↓ ↓ ← → ← → B A", "font: 700 14px monospace; background:#f7c236; color:#0a0a0a; padding:4px 8px; border:2px solid #0a0a0a");
        sessionStorage.setItem("egg_hint", "1");
      }
    } catch {
      /* storage blocked: no hint */
    }
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // pointer flashlight on the background grid
  useEffect(() => {
    if (reduced() || !finePointer()) return;
    const root = document.documentElement;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
        root.dataset.pointer = "on";
      });
    };
    const onLeave = () => delete root.dataset.pointer;
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      delete root.dataset.pointer;
    };
  }, []);

  return null;
}
