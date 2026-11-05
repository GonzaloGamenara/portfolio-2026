import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";
import photo from "../assets/gonza.webp";
import { usePreferences } from "../context/preferences";
import { experience, profile, stats } from "../data/profile";
import { projects } from "../data/projects";
import { cvFile } from "../data/ui";
import usePageMeta from "../hooks/usePageMeta";
import useProjectModal from "../hooks/useProjectModal";
import Marquee from "../components/Marquee";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionTitle from "../components/SectionTitle";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

export default function Home() {
  const { t, s, lang } = usePreferences();
  const modal = useProjectModal();
  usePageMeta(s.meta.home, s.meta.homeDesc);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-14 md:gap-16">
      {/* HERO */}
      <section aria-labelledby="hero-title" className="card on-accent bg-yellow p-5 sm:p-8">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto w-44 sm:w-52 md:w-60">
            <img
              src={photo}
              alt={s.home.photoAlt}
              width="447"
              height="559"
              fetchPriority="high"
              className="aspect-[4/5] w-full border-[3px] border-line bg-pink object-cover shadow-neo"
            />
            <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 border-2 border-line bg-surface px-3 py-1 font-mono text-xs font-bold whitespace-nowrap shadow-neo-sm">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
              </span>
              {t(profile.availability)}
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="eyebrow mb-2">{s.home.hello}</p>
            <h1 id="hero-title" className="font-mono text-4xl leading-none font-bold tracking-tight sm:text-5xl xl:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-bold sm:text-xl">{t(profile.role)}</p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-sm font-medium text-muted md:justify-start">
              <MapPin size={14} aria-hidden="true" /> {t(profile.location)}
            </p>

            <p className="mt-5 font-mono text-base leading-snug font-bold sm:text-lg">{t(profile.headline)}</p>
            <p className="mt-3 max-w-2xl leading-relaxed md:text-[17px]">{t(profile.summary)}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Link to="/projects" className="btn bg-black text-white">
                {s.home.viewProjects} <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn bg-surface">
                {s.home.contact}
              </Link>
              <a href={cvFile(lang)} download className="btn bg-pink">
                <Download size={16} aria-hidden="true" /> {s.home.downloadCv}
              </a>
              <div className="flex justify-center gap-3">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn bg-surface px-3.5">
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn bg-surface px-3.5">
                  <GitHubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section aria-label={t({ es: "En números", en: "By the numbers" })}>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value + i}
              className={`card on-accent flex flex-col p-4 text-center sm:p-5 ${["bg-pink", "bg-green", "bg-blue", "bg-orange"][i % 4]}`}
            >
              <dt className="order-2 mt-1 text-xs font-bold uppercase sm:text-sm">{t(stat.label)}</dt>
              <dd className="order-1 font-mono text-3xl font-bold sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Marquee />

      {/* FEATURED PROJECTS */}
      <section aria-labelledby="featured-title">
        <SectionTitle id="featured-title" link="/projects" linkLabel={s.home.seeAll}>
          {s.home.featured}
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} onOpen={modal.open} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section aria-labelledby="exp-title">
        <SectionTitle id="exp-title" link="/about" linkLabel={s.home.seeTrajectory}>
          {s.home.experience}
        </SectionTitle>
        <ol className="card divide-y-[3px] divide-line bg-surface">
          {experience.map((job) => (
            <li key={job.id} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
              <span className={`on-accent h-fit w-fit border-2 border-line px-2 py-0.5 font-mono text-xs font-bold ${job.accent}`}>
                {t(job.start)} — {t(job.end)}
              </span>
              <div className="flex-1">
                <p className="font-bold">{t(job.role)}</p>
                <p className="text-sm text-muted">{t(job.company)}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">{t(profile.pitch)}</p>
      </section>

      <ProjectModal project={modal.project} onClose={modal.close} />
    </div>
  );
}
