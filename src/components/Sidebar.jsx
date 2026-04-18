import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  // Este estado controla si el menú está abierto o cerrado en mobile
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú cuando hacemos clic en un link (solo en mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <aside className="w-full md:w-64 bg-neo-green border-b-[3px] md:border-b-0 md:border-r-[3px] border-black p-6 flex flex-col z-10">
      
      {/* Contenedor del Logo y el Botón Hamburguesa */}
      <div className="flex justify-between items-center mb-0 md:mb-10">
        <div className="font-bold text-2xl flex items-center gap-2">
          <span className="border-2 border-black px-2 py-1 bg-white text-sm">{"</>"}</span>
          GONZA
        </div>
        
        {/* Botón que SOLO aparece en celulares (md:hidden) */}
        <button 
          className="md:hidden border-2 border-black w-10 h-10 flex items-center justify-center bg-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {/* Navegación: Se oculta en mobile si isOpen es false, siempre visible en md */}
      <nav className={`flex-col gap-4 font-semibold mt-6 md:mt-0 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
        <Link 
          to="/" 
          onClick={closeMenu}
          className={location.pathname === '/' ? "bg-black text-white px-4 py-2 rounded-sm" : "hover:underline py-2 md:py-0"}
        >
          🏠 Home
        </Link>
        <Link 
          to="/schedule" 
          onClick={closeMenu}
          className={location.pathname === '/schedule' ? "bg-black text-white px-4 py-2 rounded-sm" : "hover:underline py-2 md:py-0"}
        >
          📅 Schedule
        </Link>
        <Link 
          to="/portfolio" 
          onClick={closeMenu}
          className={location.pathname === '/portfolio' ? "bg-black text-white px-4 py-2 rounded-sm" : "hover:underline py-2 md:py-0"}
        >
          🎓 Portfolio
        </Link>
        <Link 
          to="/contact" 
          onClick={closeMenu}
          className={location.pathname === '/contact' ? "bg-black text-white px-4 py-2 rounded-sm" : "hover:underline py-2 md:py-0"}
        >
          ✉️ Contacto
        </Link>
      </nav>

    </aside>
  );
};

export default Sidebar;