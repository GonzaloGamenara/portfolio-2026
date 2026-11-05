import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { usePreferences } from "../context/preferences";

const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const host = (url) => url?.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

/** Screenshot inside a chunky browser window; video previews play on hover (desktop only). */
export function BrowserFrame({ project, priority = false, className = "", bordered = true }) {
  const videoRef = useRef(null);
  const isWeb = project.url && !project.url.includes("drive.google");

  const play = () => {
    const v = videoRef.current;
    if (!v || !canHover()) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => videoRef.current?.pause();

  return (
    <div className={`overflow-hidden bg-surface ${bordered ? "border-2 border-line" : "border-b-2 border-line"} ${className}`} onMouseEnter={play} onMouseLeave={stop}>
      <div className={`on-accent flex h-9 items-center gap-1.5 border-b-2 border-line px-3 ${project.accent}`} aria-hidden="true">
        <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
        <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
        <span className="h-3 w-3 border-[1.5px] border-line bg-white" />
        <span className="ml-2 max-w-[70%] truncate border-[1.5px] border-line bg-white px-2 font-mono text-[10.5px] leading-[18px] font-bold">
          {isWeb ? host(project.url) : "Power BI · dashboard"}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
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
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center border-2 border-line bg-surface shadow-sm transition-opacity group-hover:opacity-0">
              <Play size={14} aria-hidden="true" />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function Stack({ items, max = 5 }) {
  const { s } = usePreferences();
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={s.projects.stack}>
      {items.slice(0, max).map((tech) => (
        <li key={tech} className="tag">
          {tech}
        </li>
      ))}
    </ul>
  );
}

const lift = "shadow-card transition-[transform,box-shadow] duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lift";

/** Large alternating row used for featured projects on the home page. */
export function FeaturedProject({ project, onOpen, reverse = false, priority = false, index }) {
  const { t, s } = usePreferences();
  const title = t(project.title);
  return (
    <article className="group grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-14">
      <button
        type="button"
        onClick={() => onOpen(project.slug)}
        aria-label={`${s.projects.details}: ${title}`}
        className={`block cursor-pointer text-left ${reverse ? "md:order-2" : ""}`}
      >
        <BrowserFrame project={project} priority={priority} className={lift} />
      </button>
      <div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-faint">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-0.5 w-8 bg-line" aria-hidden="true" />
          <span className="font-mono text-xs font-bold tracking-wide text-muted uppercase">
            {t(project.kind)} · {project.year}
          </span>
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t(project.summary)}</p>
        <div className="mt-5">
          <Stack items={project.stack} />
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button type="button" onClick={() => onOpen(project.slug)} className="btn btn-secondary">
            {s.projects.details} <ArrowRight size={16} aria-hidden="true" />
          </button>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {project.urlLabel ? t(project.urlLabel) : s.projects.visit} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Compact card used in the projects grid. The whole card opens the detail. */
export default function ProjectCard({ project, onOpen, priority = false, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const { t, s } = usePreferences();
  const title = t(project.title);

  return (
    <article className={`group relative flex flex-col border-2 border-line bg-surface ${lift}`}>
      <BrowserFrame project={project} priority={priority} bordered={false} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <Heading className="text-xl">
            <button
              type="button"
              onClick={() => onOpen(project.slug)}
              aria-label={`${s.projects.details}: ${title}`}
              className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {title}
            </button>
          </Heading>
          <span className="font-mono text-xs font-bold text-faint">{project.year}</span>
        </div>
        <p className="mt-1 font-mono text-xs font-bold tracking-wide text-muted uppercase">{t(project.kind)}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{t(project.summary)}</p>
        <div className="mt-4">
          <Stack items={project.stack} max={4} />
        </div>
      </div>
      {/* keyboard focus ring for the stretched button */}
      <span aria-hidden="true" className="pointer-events-none absolute -inset-1.5 outline-blue group-has-[button:focus-visible]:outline-3" />
    </article>
  );
}
