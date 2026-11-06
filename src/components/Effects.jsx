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
