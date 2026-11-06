import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { GitHubIcon } from "./Icons";

/** Native <dialog>: Esc to close, focus containment and inert background for free. */
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
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-3xl overflow-hidden border-2 border-line bg-bg p-0 text-ink shadow-[8px_8px_0_0_var(--color-shadow)]"
    >
      {project && (
        <div className="flex max-h-[92dvh] flex-col">
          <header className={`on-accent flex items-start justify-between gap-4 border-b-2 border-line px-5 py-4 sm:px-7 ${project.accent}`}>
            <div className="min-w-0">
              <p className="font-mono text-xs font-bold tracking-wide uppercase">
                {t(project.kind)} · {project.year}
              </p>
              <h2 id="project-modal-title" className="mt-1.5 truncate text-3xl">
                {t(project.title)}
              </h2>
            </div>
            <button type="button" onClick={() => ref.current?.close()} aria-label={s.projects.close} className="btn-icon shrink-0">
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">
            <div className="aspect-video overflow-hidden border-2 border-line bg-subtle">
              {project.video ? (
                <video src={project.video} poster={project.image} autoPlay loop muted playsInline controls className="h-full w-full object-cover" />
              ) : (
                <img
                  src={project.image}
                  alt={t({ es: `Captura de ${t(project.title)}`, en: `${t(project.title)} screenshot` })}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>

            <p className="mt-6 text-lg leading-relaxed">{t(project.summary)}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_11rem]">
              <div>
                <h3 className="font-mono text-sm">{s.projects.highlights}</h3>
                <ul className="mt-3 space-y-3">
                  {t(project.details).map((d) => (
                    <li key={d} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 border-[1.5px] border-line bg-yellow" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-sm">{s.projects.stack}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {(project.url || project.repo) && (
            <footer className="flex flex-col-reverse gap-3 border-t-2 border-line px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <GitHubIcon className="h-4 w-4" /> {s.projects.repo}
                </a>
              )}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {project.urlLabel ? t(project.urlLabel) : s.projects.visit} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </footer>
          )}
        </div>
      )}
    </dialog>
  );
}
