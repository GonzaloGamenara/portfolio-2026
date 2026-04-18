import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado para el modo oscuro
  const [isDark, setIsDark] = useState(false);

  // Cada vez que cambie isDark, agregamos o sacamos la clase del HTML
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <aside className="w-full md:w-64 bg-neo-green    p-6 flex flex-col z-10 transition-colors duration-300" style={{borderColor: 'var(--color-neo-border)'}}>
      
      <div className="flex justify-center items-center mb-0 md:mb-10">
        <div className="font-mono font-bold text-3xl flex items-center gap-5">
          <span className="border-2 border-black px-2 py-1 bg-white text-sm text-black">{"</>"}</span>
          JELLY
        </div>
        
        <button 
          className="md:hidden border-2 border-black w-10 h-10 flex items-center justify-center bg-white text-black shadow-neo"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      <nav className={`flex-col gap-4 font-semibold mt-6 md:mt-0 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
        <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? "bg-black text-white px-4 py-2 border-2 border-black" : "hover:underline py-2 md:py-0 px-4"}>
          🏠 Home
        </Link>
        <Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? "bg-black text-white px-4 py-2 border-2 border-black" : "hover:underline py-2 md:py-0 px-4"}>
          🎓 Portfolio
        </Link>
        <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? "bg-black text-white px-4 py-2 border-2 border-black" : "hover:underline py-2 md:py-0 px-4"}>
          ✉️ Contacto
        </Link>

        {/* BOTÓN DE MODO OSCURO */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="mt-4 border-2 border-black bg-white text-black px-4 py-2 font-bold shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
        >
          {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;