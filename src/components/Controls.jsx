import { Moon, Sun } from "lucide-react";
import { usePreferences } from "../context/preferences";

export function LanguageToggle() {
  const { lang, toggleLang, s } = usePreferences();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={s.langSwitch}
      title={s.langSwitch}
      className="flex h-10 items-stretch border-2 border-line bg-surface font-mono text-xs font-bold shadow-sm transition-transform hover:-translate-y-0.5"
    >
      {["es", "en"].map((l) => (
        <span key={l} className={`grid w-10 place-items-center uppercase ${lang === l ? "bg-ink text-bg" : "text-faint"}`}>
          {l}
        </span>
      ))}
    </button>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme, s } = usePreferences();
  const dark = theme === "dark";
  const label = dark ? s.themeToLight : s.themeToDark;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`on-accent inline-grid h-10 w-10 place-items-center border-2 border-line shadow-sm transition-transform hover:-translate-y-0.5 ${
        dark ? "bg-purple" : "bg-yellow"
      }`}
    >
      {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
