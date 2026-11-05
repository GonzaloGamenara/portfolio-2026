import { Link } from "react-router-dom";
import { ArrowLeft, Printer } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { SITE_URL, certifications, education, experience, languages, profile, skills } from "../data/profile";
import { projects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

function Block({ title, children }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="mb-2 border-b-2 border-black pb-1 text-[11px] font-semibold tracking-[0.14em] text-black uppercase">{title}</h2>
      {children}
    </section>
  );
}

/** One-page A4 résumé generated from the same data as the site. Also rendered to PDF at build time. */
export default function CV() {
  const { t, s, lang } = usePreferences();
  usePageMeta(`${s.meta.cv} · ${profile.name}`, s.meta.homeDesc);
  const L = (es, en) => (lang === "es" ? es : en);
  const selected = projects.slice(0, 4);

  return (
    <main className="min-h-dvh bg-neutral-100 py-8 text-black print:bg-white print:py-0">
      <nav className="no-print mx-auto mb-4 flex max-w-[210mm] justify-between gap-3 px-4">
        <Link to="/contact" className="btn btn-secondary">
          <ArrowLeft size={16} aria-hidden="true" /> {s.cv.back}
        </Link>
        <button type="button" onClick={() => window.print()} className="btn btn-primary">
          <Printer size={16} aria-hidden="true" /> {s.cv.print}
        </button>
      </nav>

      <article className="mx-auto flex min-h-[297mm] max-w-[210mm] flex-col gap-4 bg-white p-[12mm] text-[11.5px] leading-snug shadow-xl print:shadow-none" style={{ colorScheme: "light" }}>
        <header className="flex items-start justify-between gap-6 border-b-[3px] border-black pb-4">
          <div>
            <h1 className="text-[30px] leading-none font-semibold tracking-tight">{profile.name}</h1>
            <p className="mt-1.5 text-[15px] font-bold">{t(profile.role)}</p>
            <p className="mt-1 max-w-[120mm] text-[11.5px]">{t(profile.summary)}</p>
          </div>
          <ul className="shrink-0 space-y-0.5 text-right text-[11px]">
            <li>{profile.email}</li>
            <li>{t(profile.location)}</li>
            <li>linkedin.com/in/gonzalo-gamenara-6bb130238</li>
            <li>github.com/GonzaloGamenara</li>
            <li className="font-bold">{SITE_URL.replace("https://", "")}</li>
          </ul>
        </header>

        <div className="grid flex-1 grid-cols-[1fr_62mm] gap-6">
          <div className="flex flex-col gap-4">
            <Block title={L("Experiencia", "Experience")}>
              <ul className="space-y-2.5">
                {experience.map((job) => (
                  <li key={job.id} className="break-inside-avoid">
                    <div className="flex justify-between gap-2">
                      <strong className="text-[12.5px]">{t(job.role)}</strong>
                      <span className="shrink-0 font-mono text-[10.5px]">
                        {t(job.start)} – {t(job.end)}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-neutral-600">{t(job.company)}</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4">
                      {t(job.bullets).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={s.cv.selected}>
              <ul className="space-y-1.5">
                {selected.map((p) => (
                  <li key={p.slug}>
                    <strong>{t(p.title)}</strong> <span className="font-mono text-[10px] text-neutral-600">· {p.stack.slice(0, 4).join(", ")}</span>
                    <br />
                    {t(p.summary)}
                    {p.url && p.tags.some((tag) => tag !== "data") && (
                      <span className="font-mono text-[10px] text-neutral-600"> {p.url.replace(/^https:\/\//, "").replace(/\/$/, "")}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <div className="flex flex-col gap-4">
            <Block title={L("Habilidades", "Skills")}>
              <div className="space-y-2">
                {skills.map((g) => (
                  <div key={t(g.group)}>
                    <p className="font-bold">{t(g.group)}</p>
                    <p>{g.items.map((i) => t(i)).join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block title={L("Educación", "Education")}>
              <ul className="space-y-2">
                {education.map((e) => (
                  <li key={t(e.title)}>
                    <strong>{t(e.title)}</strong>
                    <br />
                    {e.school} · {t(e.period)}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={L("Certificaciones", "Certifications")}>
              <ul className="space-y-1.5">
                {certifications.map((c) => (
                  <li key={t(c.title)}>
                    <strong>{t(c.title)}</strong>
                    {c.badge && ` (${t(c.badge)})`}
                    <br />
                    {c.issuer} · {c.year}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={L("Idiomas", "Languages")}>
              <ul>
                {languages.map((l) => (
                  <li key={t(l.name)}>
                    <strong>{t(l.name)}</strong> — {t(l.level)}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </article>
    </main>
  );
}
