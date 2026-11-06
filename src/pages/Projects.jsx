import { useState } from "react";
import { usePreferences } from "../context/preferences";
import { archive, projectFilters, projects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";
import useProjectModal from "../hooks/useProjectModal";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const { t, s } = usePreferences();
  const modal = useProjectModal();
  const [filter, setFilter] = useState("all");
  usePageMeta(s.meta.projects, s.meta.projectsDesc);

  const visible = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));
  const count = (id) => (id === "all" ? projects.length : projects.filter((p) => p.tags.includes(id)).length);

  return (
    <div className="container-page pt-12 pb-24 md:pt-20">
      <header className="flex flex-col gap-8 pb-12">
        <div className="max-w-2xl">
          <p className="eyebrow">{s.nav.projects}</p>
          <h1 className="mt-5 text-4xl sm:text-6xl">{s.projects.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted">{s.projects.intro}</p>
        </div>
        <div role="group" aria-label={s.projects.filterLabel} className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pt-1 pb-2 sm:mx-0 sm:px-0">
          {projectFilters.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`btn h-10 shrink-0 px-4 text-sm ${active ? "btn-primary" : "btn-secondary"}`}
              >
                {t(f.label)}
                <span className="font-mono text-[11px] opacity-70">{count(f.id)}</span>
              </button>
            );
          })}
        </div>
      </header>

      <section aria-live="polite">
        <p className="sr-only">{s.projects.count(visible.length)}</p>
        {visible.length === 0 ? (
          <p className="py-10 text-center text-muted">{s.projects.empty}</p>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((p, i) => (
              <div key={p.slug} data-reveal style={{ "--rd": `${(i % 3) * 90}ms` }} className="flex">
                <ProjectCard project={p} onOpen={modal.open} priority={i < 3} headingLevel={2} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="archive-title" className="mt-20 border-t-2 border-line pt-14">
        <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-12">
          <div>
            <h2 id="archive-title" className="text-2xl">
              {s.projects.archive}
            </h2>
            <p className="mt-2 text-muted">{s.projects.archiveIntro}</p>
          </div>
          <ul className="card divide-y-2 divide-line">
            {archive.map((a) => (
              <li key={a.title} className="grid gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <span className="font-mono font-bold">{a.title}</span>
                <span className="text-muted">
                  {t(a.desc)}
                  <span className="mt-1 block font-mono text-xs text-faint">{a.stack}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProjectModal project={modal.project} onClose={modal.close} />
    </div>
  );
}
