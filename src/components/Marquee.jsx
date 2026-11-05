import { marquee } from "../data/profile";

export default function Marquee() {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {marquee.map((item) => (
        <li key={item} className="flex items-center gap-6 font-mono text-sm font-bold whitespace-nowrap uppercase sm:text-base">
          {item}
          <span aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="on-accent -mx-4 overflow-hidden border-y-[3px] border-line bg-yellow py-3 sm:mx-0 sm:border-x-[3px] sm:shadow-neo md:-rotate-1">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
