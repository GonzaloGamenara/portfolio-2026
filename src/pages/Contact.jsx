import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Download, FileText, Mail, MapPin, Send } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";
import { cvFile } from "../data/ui";
import usePageMeta from "../hooks/usePageMeta";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

// Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree form URL) to receive messages directly.
// Without it, the form opens the visitor's email client with everything pre-filled.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const field =
  "w-full border-2 border-line bg-surface p-3 text-ink shadow-neo-sm placeholder:text-muted/70 focus:shadow-neo focus:outline-none";

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
    <div className="flex flex-col gap-10">
      <header className="border-b-[3px] border-line pb-6">
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">{s.contact.title}</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{s.contact.intro}</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} className="card on-accent relative flex flex-col gap-5 bg-yellow p-5 sm:p-7">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="eyebrow">
              {s.contact.name}
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" maxLength={120} placeholder={s.contact.namePh} className={field} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="eyebrow">
              {s.contact.email}
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" maxLength={160} placeholder={s.contact.emailPh} className={field} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="eyebrow">
              {s.contact.message}
            </label>
            <textarea id="message" name="message" required rows={6} maxLength={4000} placeholder={s.contact.messagePh} className={`${field} min-h-40 resize-y`} />
          </div>
          {/* honeypot */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <button type="submit" disabled={status === "sending"} className="btn bg-black text-white disabled:opacity-60">
            <Send size={16} aria-hidden="true" /> {status === "sending" ? s.contact.sending : s.contact.send}
          </button>

          <p role="status" aria-live="polite" className="min-h-5 text-sm font-bold">
            {status === "sent" && `✅ ${s.contact.sent}`}
            {status === "error" && (
              <>
                ⚠️ {s.contact.error}{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </>
            )}
            {status === "idle" && !ENDPOINT && <span className="font-medium text-muted">{s.contact.mailtoNote}</span>}
          </p>
        </form>

        <div className="flex flex-col gap-8">
          <section aria-labelledby="direct" className="card on-accent bg-mint p-5">
            <h2 id="direct" className="mb-4 font-mono text-lg font-bold">
              {s.contact.direct}
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-stretch gap-2">
                <a href={`mailto:${profile.email}`} className="flex min-w-0 flex-1 items-center gap-3 border-2 border-line bg-surface p-3 shadow-neo-sm transition-transform hover:-translate-y-0.5">
                  <Mail size={20} aria-hidden="true" className="shrink-0" />
                  <span className="truncate font-bold">{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={s.contact.copy}
                  title={copied ? s.contact.copied : s.contact.copy}
                  className="grid w-12 shrink-0 place-items-center border-2 border-line bg-surface shadow-neo-sm"
                >
                  {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                </button>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-2 border-line bg-surface p-3 shadow-neo-sm transition-transform hover:-translate-y-0.5">
                  <LinkedInIcon className="h-5 w-5 shrink-0" />
                  <span className="font-bold">LinkedIn</span>
                  <span className="ml-auto truncate text-sm text-muted">/in/gonzalo-gamenara</span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-2 border-line bg-surface p-3 shadow-neo-sm transition-transform hover:-translate-y-0.5">
                  <GitHubIcon className="h-5 w-5 shrink-0" />
                  <span className="font-bold">GitHub</span>
                  <span className="ml-auto truncate text-sm text-muted">@GonzaloGamenara</span>
                </a>
              </li>
            </ul>
            <span className="sr-only" aria-live="polite">
              {copied ? s.contact.copied : ""}
            </span>
            <dl className="mt-5 grid gap-2 border-t-2 border-line pt-4 text-sm">
              <div className="flex items-center gap-2">
                <dt className="sr-only">{s.contact.location}</dt>
                <MapPin size={16} aria-hidden="true" />
                <dd className="font-bold">{t(profile.location)}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">{s.contact.availability}</dt>
                <span className="mx-[3px] h-2.5 w-2.5 rounded-full bg-[#16a34a]" aria-hidden="true" />
                <dd className="font-bold">{t(profile.availability)}</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="cv" className="card on-accent bg-coral p-5">
            <h2 id="cv" className="flex items-center gap-2 font-mono text-lg font-bold">
              <FileText size={18} aria-hidden="true" /> {s.contact.cvTitle}
            </h2>
            <p className="mt-2 leading-relaxed">{s.contact.cvText}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col 2xl:flex-row">
              <a href={cvFile(lang)} download className="btn flex-1 bg-surface">
                <Download size={16} aria-hidden="true" /> {s.contact.cvDownload}
              </a>
              <Link to="/cv" className="btn flex-1 bg-surface">
                {s.contact.cvView}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
