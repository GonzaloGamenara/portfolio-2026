import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import photo from "../assets/gonza.webp";
import { usePreferences } from "../context/preferences";
import { experience, profile, skills, stats } from "../data/profile";
import { projects } from "../data/projects";
import { cvFile } from "../data/ui";
import usePageMeta from "../hooks/usePageMeta";
import useProjectModal from "../hooks/useProjectModal";
import { FeaturedProject } from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionTitle from "../components/SectionTitle";
import { Socials } from "../components/Layout";
import TiltPhoto from "../components/TiltPhoto";

const statColors = ["bg-yellow", "bg-pink", "bg-green", "bg-blue"];

function StatusPill() {
  const { t } = usePreferences();
  return (
    <span className="inline-flex items-center gap-2 border-2 border-line bg-surface px-3 py-1 font-mono text-xs font-bold shadow-sm">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-solid opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-solid" />
      </span>
      {t(profile.availability)}
    </span>
  );
}

export default function Home() {
  const { t, s, lang } = usePreferences();
  const modal = useProjectModal();
  usePageMeta(s.meta.home, s.meta.homeDesc);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="container-page pt-10 pb-14 md:pt-20 md:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] lg:gap-20">
          <div className="order-2 md:order-1">
            <StatusPill />
            <h1 id="hero-title" className="mt-6 text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-bold sm:text-2xl">
              <span className="on-accent border-2 border-line bg-green px-2 py-0.5 shadow-sm">{t(profile.role)}</span>
              <span className="inline-flex items-center gap-1.5 text-base font-medium text-muted">
                <MapPin size={16} aria-hidden="true" /> Buenos Aires, AR
              </span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t(profile.summary)}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn btn-primary">
                {s.home.viewProjects} <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={cvFile(lang)} download className="btn btn-secondary">
                <Download size={16} aria-hidden="true" /> {s.home.downloadCv}
              </a>
              <Socials className="sm:ml-1" />
            </div>
          </div>

          <TiltPhoto className="relative order-1 mx-auto w-48 sm:w-56 md:order-2 md:w-72 lg:w-80">
            <div aria-hidden="true" className="tilt-plate absolute inset-0 border-2 border-line bg-yellow" />
            <img
              src={photo}
              alt={s.home.photoAlt}
              width="447"
              height="559"
              fetchPriority="high"
              className="tilt-card relative aspect-[4/5] w-full border-2 border-line bg-pink object-cover"
            />
            <span className="sticker-wave on-accent absolute -bottom-4 -left-4 border-2 border-line bg-pink px-2.5 py-1 font-mono text-xs font-bold shadow-sm">
              {t({ es: "Hola 👋", en: "Hi 👋" })}
            </span>
          </TiltPhoto>
        </div>

        {/* METRICS */}
        <dl data-reveal className="card mt-14 grid grid-cols-2 md:mt-20 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 p-5 sm:p-6 ${i % 2 ? "border-l-2 border-line" : ""} ${i > 1 ? "border-t-2 border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l-2" : ""}`}
            >
              <dt className="order-2 flex items-center gap-2 text-sm font-medium text-muted">
                <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 border-[1.5px] border-line ${statColors[i]}`} />
                {t(stat.label)}
              </dt>
              <dd className="order-1 font-mono text-3xl font-bold tracking-tight tabular-nums sm:text-4xl">
                <span aria-hidden="true" data-count={stat.value}>
                  {stat.value}
                </span>
                <span className="sr-only">{stat.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FEATURED PROJECTS */}
      <section aria-labelledby="featured-title" className="border-y-2 border-line bg-surface/70">
        <div className="container-page py-16 md:py-24">
          <SectionTitle
            id="featured-title"
            eyebrow={s.nav.projects}
            title={s.home.featured}
            intro={s.home.featuredIntro}
            link="/projects"
            linkLabel={s.home.seeAll}
          />
          <div className="flex flex-col gap-16 md:gap-24">
            {featured.map((p, i) => (
              <FeaturedProject key={p.slug} project={p} index={i} onOpen={modal.open} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section aria-labelledby="stack-title" className="container-page py-16 md:py-24">
        <SectionTitle id="stack-title" eyebrow={s.home.stack} title={s.home.stackTitle} intro={s.home.stackIntro} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <div key={t(g.group)} data-reveal style={{ "--rd": `${i * 80}ms` }} className="card flex flex-col">
              <h3 className={`on-accent border-b-2 border-line px-5 py-3 font-mono text-sm ${g.accent}`}>{t(g.group)}</h3>
              <ul className="flex flex-wrap gap-1.5 p-5">
                {g.items.map((item) => (
                  <li key={t(item)} className="tag">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section aria-labelledby="exp-title" className="container-page pb-16 md:pb-24">
        <SectionTitle
          id="exp-title"
          eyebrow={s.nav.about}
          title={s.home.experience}
          intro={s.home.expIntro}
          link="/about"
          linkLabel={s.home.seeTrajectory}
        />
        <ol data-reveal className="card divide-y-2 divide-line">
          {experience.map((job, i) => (
            <li key={job.id} className="group grid gap-2 p-5 transition-colors duration-200 hover:bg-subtle sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:gap-6 sm:px-6">
              <span className="w-fit border-[1.5px] border-line bg-subtle px-2 py-0.5 font-mono text-xs font-bold transition-[background-color,transform] duration-200 group-hover:-rotate-2 group-hover:bg-yellow group-hover:text-[#0a0a0a]">
                {t(job.start)} — {t(job.end)}
              </span>
              <div>
                <p className="font-mono font-bold">{t(job.role)}</p>
                <p className="text-muted">{t(job.company)}</p>
              </div>
              {i === 0 && (
                <span className="on-accent w-fit border-2 border-line bg-green px-2 py-0.5 font-mono text-xs font-bold">{s.home.current}</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-title" className="container-page pb-20 md:pb-28">
        <div data-reveal className="on-accent relative overflow-hidden border-2 border-line bg-pink px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
          <span aria-hidden="true" className="idle-spin absolute top-5 left-6 font-mono text-3xl">✦</span>
          <span aria-hidden="true" className="idle-spin idle-spin-rev absolute right-7 bottom-5 font-mono text-2xl">✦</span>
          <h2 id="cta-title" className="text-3xl sm:text-4xl">
            {s.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg">{s.home.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-dark">
              {s.home.ctaButton} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn bg-white text-[#0a0a0a]">
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </a>
          </div>
        </div>
      </section>

      <ProjectModal project={modal.project} onClose={modal.close} />
    </>
  );
}
