import { createContext, useContext } from "react";

export const PreferencesContext = createContext(null);

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used inside <PreferencesProvider>");
  return ctx;
}

const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode): preference simply isn't remembered */
  }
};

export function initialLang() {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "es" || param === "en") return param;
  const saved = read("lang");
  if (saved === "es" || saved === "en") return saved;
  const nav = typeof navigator !== "undefined" ? navigator.language || "es" : "es";
  return nav.toLowerCase().startsWith("en") ? "en" : "es";
}

export function initialTheme() {
  // index.html already applied the class before first paint; mirror it
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
