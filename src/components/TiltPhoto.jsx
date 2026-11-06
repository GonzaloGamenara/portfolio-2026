import { useRef } from "react";

const canTilt = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Photo card that tilts in 3D towards the pointer; the yellow plate behind moves the other way (parallax). */
export default function TiltPhoto({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (!canTilt()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    el.style.setProperty("--px", `${(-x * 10).toFixed(1)}px`);
    el.style.setProperty("--py", `${(-y * 10).toFixed(1)}px`);
  };
  const onLeave = () => {
    const el = ref.current;
    ["--rx", "--ry", "--px", "--py"].forEach((p) => el.style.removeProperty(p));
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}
