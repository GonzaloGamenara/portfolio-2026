import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";
import { LanguageToggle, ThemeToggle } from "./Controls";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Effects from "./Effects";

const links = [
  { to: "/projects", key: "projects" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
];

function Brand({ onClick }) {
  const { s } = usePreferences();
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label={`${profile.name} · ${s.nav.home}`}>
      <span className="on-accent grid h-10 w-10 place-items-center border-2 border-line bg-yellow font-mono text-sm font-bold shadow-sm transition-transform group-hover:-rotate-6">
        {profile.initials}
      </span>
      <span className="font-mono text-[15px] leading-tight font-bold">{profile.name}</span>
    </Link>
  );
}

export function Socials({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon">
        <GitHubIcon className="h-[18px] w-[18px]" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon">
        <LinkedInIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function Layout() {
  const { s } = usePreferences();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef(null);
  const firstRender = useRef(true);

  // New page: back to top and move focus to the content (screen-reader friendly)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  // header earns its hard shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const navClass = ({ isActive }) =>
    `border-2 px-3.5 py-1.5 font-mono text-sm font-bold transition-colors ${
      isActive ? "border-line bg-ink text-bg shadow-sm" : "border-transparent hover:border-line hover:bg-surface"
    }`;

  return (
    <>
      <a
        href="#main"
        className="on-accent sr-only z-[200] border-2 border-line bg-yellow px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {s.skip}
      </a>

      <header className={`sticky top-0 z-50 border-b-2 border-line bg-frame transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_0_0_var(--color-shadow)]" : ""}`}>
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <Brand onClick={close} />

          <nav aria-label={s.navLabel} className="hidden items-center gap-1 md:flex">
            {links.map(({ to, key }) => (
              <NavLink key={to} to={to} className={navClass}>
                {s.nav[key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? s.menuClose : s.menuOpen}
            className="btn-icon md:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="h-[calc(100dvh-68px)] animate-fade-up overflow-y-auto border-t-2 border-line bg-frame md:hidden">
            <nav aria-label={s.navLabel} className="container-page flex flex-col gap-3 py-6">
              {[{ to: "/", key: "home" }, ...links].map(({ to, key }, i) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={close}
                  style={{ animationDelay: `${60 + i * 55}ms` }}
                  className={({ isActive }) =>
                    `flex animate-fade-up items-center justify-between border-2 border-line px-4 py-4 font-mono text-xl font-bold shadow-card ${
                      isActive ? "bg-ink text-bg" : "bg-surface"
                    }`
                  }
                >
                  {s.nav[key]}
                  <ArrowRight size={20} aria-hidden="true" />
                </NavLink>
              ))}
            </nav>
            <div className="container-page flex items-center justify-between border-t-2 border-line py-5">
              <Socials />
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>

      <Effects />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <div key={pathname} className="animate-fade-up">
          <Outlet />
        </div>
      </main>

      <footer className="border-t-2 border-line bg-frame">
        <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono font-bold">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">
              © {new Date().getFullYear()} · {s.footer}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="link text-sm">
              {profile.email}
            </a>
            <Socials />
          </div>
        </div>
      </footer>
    </>
  );
}
