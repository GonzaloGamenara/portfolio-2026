import { useCallback, useEffect, useMemo, useState } from "react";
import { PreferencesContext, initialLang, initialTheme, write } from "./preferences";
import { ui } from "../data/ui";

export default function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    write("lang", lang);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#1a3a25" : "#a3d9b1");
    write("theme", theme);
  }, [theme]);

  /** Resolve a bilingual value ({ es, en }) or pass a plain value through. */
  const t = useCallback(
    (value) => (value && typeof value === "object" && !Array.isArray(value) && "es" in value ? value[lang] : value),
    [lang],
  );

  const value = useMemo(
    () => ({
      lang,
      theme,
      t,
      s: ui[lang],
      toggleLang: () => setLang((l) => (l === "es" ? "en" : "es")),
      toggleTheme: () => setTheme((th) => (th === "dark" ? "light" : "dark")),
    }),
    [lang, theme, t],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
