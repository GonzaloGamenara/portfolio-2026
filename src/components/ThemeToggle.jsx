import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex rounded-4xl text-black font-bold hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
    >
      {theme === "dark" ? (
        <>
          <div className="bg-neo-pink rounded-full border-2 pt-2 pb-2 pr-4 pl-4 border-black">
            <Moon size={18} />
          </div>
        </>
      ) : (
        <>
          <div className="bg-neo-yellow rounded-3xl border-2 pt-2 pb-2 pr-4 pl-4 border-black">
            <Sun size={18} />
          </div>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
