import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { usePreferences } from "../context/preferences";

const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Card that opens the project modal. Video previews play on hover/focus on desktop only. */
export default function ProjectCard({ project, onOpen, priority = false, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const { t, s } = usePreferences();
  const videoRef = useRef(null);
  const title = t(project.title);

  const play = () => {
    const v = videoRef.current;
    if (!v || !canHover()) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => videoRef.current?.pause();

  return (
    <article
      className={`card on-accent group flex cursor-pointer flex-col ${project.accent} transition-transform duration-200 hover:-translate-y-1`}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={() => onOpen(project.slug)}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-line bg-surface">
        <img
          src={project.image}
          alt=""
          width="960"
          height="600"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.video && (
          <>
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <span className="absolute right-2 bottom-2 grid h-8 w-8 place-items-center border-2 border-line bg-surface shadow-neo-sm group-hover:opacity-0">
              <Play size={14} aria-hidden="true" />
            </span>
          </>
        )}
        {project.url && project.tags.some((tag) => tag !== "data") && (
          <span className="absolute top-2 left-2 flex items-center gap-1.5 border-2 border-line bg-surface px-2 py-0.5 font-mono text-[11px] font-bold uppercase">
            <span className="h-2 w-2 rounded-full bg-[#16a34a]" aria-hidden="true" />
            {s.projects.live}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Heading className="font-mono text-xl font-bold leading-tight">{title}</Heading>
          <span className="shrink-0 font-mono text-xs font-bold">{project.year}</span>
        </div>
        <p className="eyebrow text-muted">{t(project.kind)}</p>
        <p className="text-[15px] leading-relaxed">{t(project.summary)}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label={s.projects.stack}>
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech} className="border-2 border-line bg-surface px-2 py-0.5 text-xs font-bold">
              {tech}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(project.slug);
          }}
          className="btn mt-2 w-full bg-surface"
          aria-label={`${s.projects.details}: ${title}`}
        >
          {s.projects.details} <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
