import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Copy, Download, FileText, Mail, MapPin, Send } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";
import { cvFile } from "../data/ui";
import usePageMeta from "../hooks/usePageMeta";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

// Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree form URL) to receive messages directly.
// Without it, the form opens the visitor's email client with everything pre-filled.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const field =
  "w-full border-2 border-line bg-surface px-4 py-3 text-ink shadow-sm transition-shadow placeholder:text-faint focus:shadow-card focus:outline-none";

function Channel({ href, icon, label, value, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 border-2 border-line bg-surface p-4 shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <span className="on-accent grid h-10 w-10 shrink-0 place-items-center border-2 border-line bg-green">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-faint">{label}</span>
        <span className="block truncate font-medium">{value}</span>
      </span>
      <ArrowUpRight size={16} aria-hidden="true" className="text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function Contact() {
  const { t, s, lang } = usePreferences();
  usePageMeta(s.meta.contact, s.meta.contactDesc);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.company_website) return; // honeypot: bots fill hidden fields

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio · ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, _subject: `Portfolio · ${data.name}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="container-page pt-12 pb-24 md:pt-20">
      <header className="max-w-2xl pb-12">
        <p className="eyebrow">{s.nav.contact}</p>
        <h1 className="mt-5 text-4xl sm:text-6xl">{s.contact.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">{s.contact.intro}</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <form data-reveal onSubmit={onSubmit} className="card on-accent relative flex flex-col gap-5 bg-yellow p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                {s.contact.name}
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" maxLength={120} placeholder={s.contact.namePh} className={field} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                {s.contact.email}
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" maxLength={160} placeholder={s.contact.emailPh} className={field} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              {s.contact.message}
            </label>
            <textarea id="message" name="message" required rows={7} maxLength={4000} placeholder={s.contact.messagePh} className={`${field} min-h-44 resize-y`} />
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p role="status" aria-live="polite" className="text-sm text-faint">
              {status === "sent" && <span className="font-bold">✓ {s.contact.sent}</span>}
              {status === "error" && (
                <span className="text-ink">
                  {s.contact.error}{" "}
                  <a className="link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </span>
              )}
              {status === "idle" && !ENDPOINT && s.contact.mailtoNote}
            </p>
            <button type="submit" disabled={status === "sending"} data-magnetic className="btn btn-dark shrink-0 disabled:opacity-60">
              <Send size={16} aria-hidden="true" /> {status === "sending" ? s.contact.sending : s.contact.send}
            </button>
          </div>
        </form>

        <aside data-reveal style={{ "--rd": "120ms" }} className="flex flex-col gap-8">
          <section aria-labelledby="direct">
            <h2 id="direct" className="text-xl">
              {s.contact.direct}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="min-w-0 flex-1">
                  <Channel href={`mailto:${profile.email}`} icon={<Mail size={18} aria-hidden="true" />} label="Email" value={profile.email} />
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={s.contact.copy}
                  title={copied ? s.contact.copied : s.contact.copy}
                  className="grid w-14 shrink-0 place-items-center border-2 border-line bg-surface shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  {copied ? <Check size={18} aria-hidden="true" className="text-accent" /> : <Copy size={18} aria-hidden="true" />}
                </button>
              </div>
              <Channel href={profile.linkedin} external icon={<LinkedInIcon className="h-4 w-4" />} label="LinkedIn" value="Gonzalo Gamenara" />
              <Channel href={profile.github} external icon={<GitHubIcon className="h-[18px] w-[18px]" />} label="GitHub" value="@GonzaloGamenara" />
            </div>
            <span className="sr-only" aria-live="polite">
              {copied ? s.contact.copied : ""}
            </span>
            <dl className="mt-5 flex flex-col gap-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <dt className="sr-only">{s.contact.location}</dt>
                <MapPin size={15} aria-hidden="true" className="text-faint" />
                <dd>{t(profile.location)}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">{s.contact.availability}</dt>
                <span className="mx-[3.5px] h-2 w-2 rounded-full bg-accent-solid" aria-hidden="true" />
                <dd>{t(profile.availability)}</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="cv" className="card on-accent bg-pink p-6">
            <h2 id="cv" className="flex items-center gap-2 font-bold">
              <FileText size={18} aria-hidden="true" className="text-faint" /> {s.contact.cvTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.contact.cvText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={cvFile(lang)} download data-magnetic className="btn btn-dark">
                <Download size={16} aria-hidden="true" /> {s.contact.cvDownload}
              </a>
              <Link viewTransition to="/cv" className="btn btn-secondary">
                {s.contact.cvView}
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
