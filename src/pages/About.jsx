import { ArrowUpRight } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { certifications, education, experience, languages, profile, skills, softSkills } from "../data/profile";
import usePageMeta from "../hooks/usePageMeta";

function Row({ title, children, id }) {
  return (
    <section aria-labelledby={id} className="grid gap-6 border-t-2 border-line py-14 md:grid-cols-[14rem_1fr] md:gap-12">
      <h2 id={id} className="text-2xl md:sticky md:top-24 md:self-start">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export default function About() {
  const { t, s } = usePreferences();
  usePageMeta(s.meta.about, s.meta.aboutDesc);

  return (
    <div className="container-page pt-12 pb-16 md:pt-20">
      <header className="max-w-3xl pb-14">
        <p className="eyebrow">{s.nav.about}</p>
        <h1 className="mt-5 text-4xl sm:text-6xl">{s.about.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">{s.about.intro}</p>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t(profile.pitch)}</p>
      </header>

      <Row title={s.about.experience} id="exp">
        <ol className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <li key={job.id} className="relative">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-xl font-bold">
                  {t(job.role)}
                  {i === 0 && (
                    <span className="on-accent ml-3 border-2 border-line bg-green px-2 py-0.5 align-middle font-mono text-xs font-bold">{s.about.current}</span>
                  )}
                </h3>
                <span className="shrink-0 font-mono text-sm text-faint">
                  {t(job.start)} — {t(job.end)}
                </span>
              </div>
              <p className="mt-1 text-muted">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 font-normal text-muted">
                    {t(job.company)} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  t(job.company)
                )}
              </p>
              <ul className="mt-4 space-y-2.5">
                {t(job.bullets).map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-line-strong" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Row>

      <Row title={s.about.skills} id="skills">
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={t(g.group)}>
              <h3 className="font-bold">{t(g.group)}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={t(item)} className="tag">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card on-accent mt-10 bg-purple p-6">
          <h3 className="font-bold">{s.about.hybridTitle}</h3>
          <p className="mt-2 leading-relaxed text-muted">{s.about.hybrid}</p>
        </div>
      </Row>

      <Row title={s.about.education} id="edu">
        <ul className="flex flex-col gap-8">
          {education.map((e) => (
            <li key={t(e.title)}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-bold">{t(e.title)}</h3>
                <span className="shrink-0 font-mono text-sm text-faint">{t(e.period)}</span>
              </div>
              <p className="mt-1 text-muted">{e.school}</p>
              <p className="mt-2 leading-relaxed text-muted">{t(e.detail)}</p>
            </li>
          ))}
        </ul>
      </Row>

      <Row title={s.about.certifications} id="certs">
        <ul className="grid gap-4 sm:grid-cols-3">
          {certifications.map((c) => (
            <li key={t(c.title)} className="card flex flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold">{t(c.title)}</h3>
                {c.badge && <span className="on-accent shrink-0 -rotate-2 border-2 border-line bg-yellow px-2 py-0.5 font-mono text-xs font-bold">{t(c.badge)}</span>}
              </div>
              <p className="mt-1 text-sm text-faint">
                {c.issuer} · {c.year}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(c.detail)}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-flex items-center gap-1 text-sm">
                {s.about.credential} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Row>

      <Row title={`${s.about.languages} & ${s.about.soft}`} id="langs">
        <ul className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <li key={t(l.name)} className=" border-2 border-line bg-surface px-3.5 py-1.5 text-sm">
              <span className="font-medium">{t(l.name)}</span> <span className="text-faint">· {t(l.level)}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2">
          {t(softSkills).map((k) => (
            <li key={k} className=" border-2 border-line px-3.5 py-1.5 text-sm text-muted">
              {k}
            </li>
          ))}
        </ul>
      </Row>
    </div>
  );
}
