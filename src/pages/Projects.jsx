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

  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-6 border-b-[3px] border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">{s.projects.title}</h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.projects.intro}</p>
        </div>
        <div role="group" aria-label={s.projects.filterLabel} className="flex flex-wrap gap-2.5">
          {projectFilters.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`btn px-4 py-2 ${active ? "on-accent bg-yellow" : "bg-surface"}`}
              >
                {t(f.label)}
              </button>
            );
          })}
        </div>
      </header>

      <section aria-live="polite">
        <p className="sr-only">{s.projects.count(visible.length)}</p>
        {visible.length === 0 ? (
          <p className="py-10 text-center font-mono font-bold text-muted">{s.projects.empty}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} onOpen={modal.open} priority={i < 2} headingLevel={2} />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="archive-title">
        <h2 id="archive-title" className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          {s.projects.archive}
        </h2>
        <p className="mt-2 text-muted">{s.projects.archiveIntro}</p>
        <ul className="card mt-5 divide-y-2 divide-dashed divide-line/40 bg-surface">
          {archive.map((a) => (
            <li key={a.title} className="grid gap-1 p-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <span className="font-mono font-bold">{a.title}</span>
              <span>
                {t(a.desc)}
                <span className="mt-1 block font-mono text-xs font-bold text-muted">{a.stack}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <ProjectModal project={modal.project} onClose={modal.close} />
    </div>
  );
}
