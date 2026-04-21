import { useState, useEffect, use } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("ES");

  useEffect(() => {
    console.log(`Idioma cambiado a: ${language}`);
  }, [language]);

  return (
    <button
      className="border-2 rounded-full pt-1 pb-1 pr-4 pl-4 bg-white text-lg hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
      onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
    >
      {language === "ES" ? (
        <>
          <div>
            <span className="font-mono font-bold">ES</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <span className="font-mono font-bold">EN</span>
          </div>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;
