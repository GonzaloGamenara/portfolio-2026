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
      className="flex h-10 items-center border-2 border-line bg-surface font-mono text-sm font-bold shadow-neo-sm transition-transform hover:-translate-y-0.5"
    >
      <span className={`px-2.5 py-1.5 ${lang === "es" ? "bg-ink text-paper" : ""}`}>ES</span>
      <span className={`px-2.5 py-1.5 ${lang === "en" ? "bg-ink text-paper" : ""}`}>EN</span>
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
      className={`on-accent flex h-10 w-12 items-center justify-center border-2 border-line shadow-neo-sm transition-transform hover:-translate-y-0.5 ${dark ? "bg-purple" : "bg-yellow"}`}
    >
      {dark ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
    </button>
  );
}
