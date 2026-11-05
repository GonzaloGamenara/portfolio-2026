import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { GitHubIcon } from "./Icons";

/**
 * Native <dialog>: gives us Esc-to-close, focus containment, top-layer rendering
 * and inert background for free.
 */
export default function ProjectModal({ project, onClose }) {
  const { t, s } = usePreferences();
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const onBackdrop = (e) => {
    if (e.target === ref.current) ref.current.close();
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={onBackdrop}
      aria-labelledby="project-modal-title"
      className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden border-[3px] border-line bg-paper p-0 text-ink shadow-neo-lg backdrop:bg-black/70"
    >
      {project && (
        <div className="flex max-h-[92dvh] flex-col">
          <header className={`on-accent flex items-center justify-between gap-3 border-b-[3px] border-line p-4 ${project.accent}`}>
            <div className="min-w-0">
              <p className="eyebrow text-muted">
                {t(project.kind)} · {project.year}
              </p>
              <h2 id="project-modal-title" className="truncate font-mono text-2xl font-bold sm:text-3xl">
                {t(project.title)}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label={s.projects.close}
              className="grid h-11 w-11 shrink-0 place-items-center border-2 border-line bg-surface shadow-neo-sm transition-transform hover:rotate-90"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </header>

          <div className="overflow-y-auto overscroll-contain p-4 sm:p-6">
            <div className="mb-6 aspect-video overflow-hidden border-[3px] border-line bg-surface shadow-neo">
              {project.video ? (
                <video
                  src={project.video}
                  poster={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                />
              ) : (
                <img src={project.image} alt={t({ es: `Captura de ${t(project.title)}`, en: `${t(project.title)} screenshot` })} className="h-full w-full object-contain" />
              )}
            </div>

            <p className="mb-6 text-base leading-relaxed sm:text-lg">{t(project.summary)}</p>

            <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="eyebrow mb-3">{s.projects.highlights}</h3>
                <ul className="space-y-2.5">
                  {t(project.details).map((d) => (
                    <li key={d} className="flex gap-2.5 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-ink" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-48">
                <h3 className="eyebrow mb-3">{s.projects.stack}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {(project.url || project.repo) && (
              <div className="mt-8 flex flex-col gap-3 border-t-[3px] border-line pt-6 sm:flex-row">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn on-accent bg-yellow">
                    {project.urlLabel ? t(project.urlLabel) : s.projects.visit} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn bg-surface">
                    <GitHubIcon className="h-4 w-4" /> {s.projects.repo}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
