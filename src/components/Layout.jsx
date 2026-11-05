import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FolderGit2, House, Mail, Menu, Route, X } from "lucide-react";
import { usePreferences } from "../context/preferences";
import { profile } from "../data/profile";
import { LanguageToggle, ThemeToggle } from "./Controls";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const links = [
  { to: "/", key: "home", Icon: House },
  { to: "/about", key: "about", Icon: Route },
  { to: "/projects", key: "projects", Icon: FolderGit2 },
  { to: "/contact", key: "contact", Icon: Mail },
];

function Logo({ onClick }) {
  return (
    <NavLink to="/" onClick={onClick} className="group flex items-center gap-3" aria-label={profile.name}>
      <span className="on-accent grid h-11 w-11 shrink-0 place-items-center border-[3px] border-line bg-yellow font-mono text-lg font-bold shadow-neo-sm transition-transform group-hover:-rotate-6">
        {profile.initials}
      </span>
      <span className="font-mono text-base leading-tight font-bold">
        Gonzalo
        <br />
        Gamenara
      </span>
    </NavLink>
  );
}

function NavItems({ onNavigate }) {
  const { s } = usePreferences();
  return (
    <ul className="flex flex-col gap-2">
      {links.map(({ to, key, Icon }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 border-2 px-4 py-3 font-mono text-base font-bold transition-colors ${
                isActive
                  ? "border-line bg-ink text-paper shadow-neo-sm"
                  : "border-transparent hover:border-line hover:bg-surface/60"
              }`
            }
          >
            <Icon size={20} aria-hidden="true" />
            {s.nav[key]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function Socials() {
  return (
    <div className="flex gap-2">
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid h-10 w-10 place-items-center border-2 border-line bg-surface shadow-neo-sm transition-transform hover:-translate-y-0.5"
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid h-10 w-10 place-items-center border-2 border-line bg-surface shadow-neo-sm transition-transform hover:-translate-y-0.5"
      >
        <GitHubIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

export default function Layout() {
  const { s } = usePreferences();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const mainRef = useRef(null);
  const firstRender = useRef(true);

  // New page: scroll to top and move focus to the content (screen-reader friendly)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mainRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  // Mobile drawer: Esc to close + lock page scroll while open
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

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[200] border-2 border-line bg-yellow px-4 py-2 font-bold text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {s.skip}
      </a>

      <div className="flex min-h-dvh lg:items-center lg:justify-center lg:p-8">
        <div className="flex w-full flex-col border-line bg-frame lg:h-[calc(100dvh-4rem)] lg:max-h-[980px] lg:max-w-[1480px] lg:flex-row lg:border-[3px] lg:shadow-neo-lg">
          {/* Mobile / tablet header */}
          <header className="sticky top-0 z-50 flex items-center justify-between border-b-[3px] border-line bg-frame px-4 py-3 lg:hidden">
            <Logo onClick={close} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? s.menuClose : s.menuOpen}
              className="grid h-11 w-11 place-items-center border-2 border-line bg-surface shadow-neo-sm"
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </header>

          {/* Mobile drawer */}
          <div
            id="mobile-nav"
            className={`fixed inset-x-0 top-[71px] bottom-0 z-40 flex-col justify-between overflow-y-auto bg-frame p-5 lg:hidden ${
              open ? "flex animate-slide-up" : "hidden"
            }`}
          >
            <nav aria-label={s.navLabel}>
              <NavItems onNavigate={close} />
            </nav>
            <div className="flex items-center justify-between gap-3 border-t-[3px] border-line pt-5">
              <Socials />
              <div className="flex gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden w-60 shrink-0 flex-col justify-between p-6 lg:flex xl:w-64">
            <div className="flex flex-col gap-10">
              <Logo />
              <nav aria-label={s.navLabel}>
                <NavItems />
              </nav>
            </div>
            <div className="flex flex-col gap-4 border-t-[3px] border-line pt-5">
              <Socials />
              <div className="flex gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </aside>

          <main
            id="main"
            ref={mainRef}
            tabIndex={-1}
            className="flex-1 bg-paper outline-none lg:my-4 lg:mr-4 lg:overflow-y-auto lg:border-[3px] lg:border-line"
          >
            <div key={pathname} className="mx-auto w-full max-w-6xl animate-slide-up px-4 py-8 sm:px-6 md:px-10 md:py-10">
              <Outlet />
            </div>
            <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t-2 border-dashed border-line/40 px-4 py-6 font-mono text-xs text-muted sm:px-6 md:px-10">
              <span>
                © {new Date().getFullYear()} {profile.name}
              </span>
              <span>{s.footer}</span>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
