import { ArrowUpRight, Award, Briefcase, GraduationCap, Languages, Sparkles } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { certifications, education, experience, languages, skills, softSkills } from "../data/profile";
import usePageMeta from "../hooks/usePageMeta";

function Heading({ Icon, children, id }) {
  return (
    <h2 id={id} className="mb-5 flex items-center gap-3 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
      <span className="on-accent grid h-10 w-10 place-items-center border-2 border-line bg-yellow shadow-neo-sm">
        <Icon size={20} aria-hidden="true" />
      </span>
      {children}
    </h2>
  );
}

export default function About() {
  const { t, s } = usePreferences();
  usePageMeta(s.meta.about, s.meta.aboutDesc);

  return (
    <div className="flex flex-col gap-14">
      <header className="border-b-[3px] border-line pb-6">
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">{s.about.title}</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{s.about.intro}</p>
      </header>

      {/* EXPERIENCE TIMELINE */}
      <section aria-labelledby="exp">
        <Heading Icon={Briefcase} id="exp">
          {s.about.experience}
        </Heading>
        <ol className="relative ml-3 border-l-[3px] border-line pl-6 sm:ml-5 sm:pl-8">
          {experience.map((job) => (
            <li key={job.id} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute top-5 -left-[36px] h-5 w-5 border-[3px] border-line sm:-left-[44px] ${job.accent}`}
              />
              <article className="card bg-surface p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold sm:text-xl">{t(job.role)}</h3>
                  <span className={`on-accent border-2 border-line px-2 py-0.5 font-mono text-xs font-bold ${job.accent}`}>
                    {t(job.start)} — {t(job.end)}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm font-bold text-muted">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:no-underline">
                      {t(job.company)} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    t(job.company)
                  )}
                </p>
                <ul className="mt-4 space-y-2">
                  {t(job.bullets).map((b) => (
                    <li key={b} className="flex gap-2.5 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-ink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section aria-labelledby="skills">
        <Heading Icon={Sparkles} id="skills">
          {s.about.skills}
        </Heading>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={t(g.group)} className={`card on-accent p-5 ${g.accent}`}>
              <h3 className="eyebrow mb-3">{t(g.group)}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={t(item)} className="chip">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card on-accent mt-5 bg-purple p-5">
          <h3 className="font-mono text-lg font-bold">⚡ {s.about.hybridTitle}</h3>
          <p className="mt-2 leading-relaxed">{s.about.hybrid}</p>
        </div>
      </section>

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-8">
        {/* EDUCATION */}
        <section aria-labelledby="edu">
          <Heading Icon={GraduationCap} id="edu">
            {s.about.education}
          </Heading>
          <div className="flex flex-col gap-5">
            {education.map((e) => (
              <article key={t(e.title)} className="card bg-surface p-5">
                <h3 className="text-lg font-bold">{t(e.title)}</h3>
                <p className="mt-1 font-mono text-sm font-bold text-muted">
                  {e.school} · {t(e.period)}
                </p>
                <p className="mt-3 leading-relaxed">{t(e.detail)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section aria-labelledby="certs">
          <Heading Icon={Award} id="certs">
            {s.about.certifications}
          </Heading>
          <div className="flex flex-col gap-5">
            {certifications.map((c) => (
              <article key={t(c.title)} className="card bg-surface p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold">{t(c.title)}</h3>
                  {c.badge && <span className="on-accent border-2 border-line bg-yellow px-2 py-0.5 font-mono text-xs font-bold">⭐ {t(c.badge)}</span>}
                </div>
                <p className="mt-1 font-mono text-sm font-bold text-muted">
                  {c.issuer} · {c.year}
                </p>
                <p className="mt-3 leading-relaxed">{t(c.detail)}</p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-sm font-bold underline underline-offset-4 hover:no-underline"
                >
                  {s.about.credential} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* LANGUAGES & SOFT SKILLS */}
      <section aria-labelledby="langs" className="grid gap-5 sm:grid-cols-2">
        <div className="card on-accent bg-mint p-5">
          <h2 id="langs" className="mb-3 flex items-center gap-2 font-mono text-lg font-bold">
            <Languages size={18} aria-hidden="true" /> {s.about.languages}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={t(l.name)} className="chip">
                {t(l.name)} — {t(l.level)}
              </li>
            ))}
          </ul>
        </div>
        <div className="card on-accent bg-coral p-5">
          <h2 className="mb-3 font-mono text-lg font-bold">{s.about.soft}</h2>
          <ul className="flex flex-wrap gap-2">
            {t(softSkills).map((k) => (
              <li key={k} className="chip">
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
