import { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  // Por defecto es true, pero chequeamos el storage inmediatamente
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    return !sessionStorage.getItem("animation_played");
  });

  useEffect(() => {
    if (isFirstLoad) {
      // El tiempo debe coincidir con tu animación más larga de la intro
      const timer = setTimeout(() => {
        sessionStorage.setItem("animation_played", "true");
        setIsFirstLoad(false);
      }, 2250);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  return (
    <AnimationContext.Provider value={isFirstLoad}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useIntro = () => useContext(AnimationContext);
