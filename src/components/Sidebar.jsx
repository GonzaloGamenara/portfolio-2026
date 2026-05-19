import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import {
  Home,
  Calendar,
  GraduationCap,
  FileText,
  MessageSquareCode,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Resumen", path: "/", icon: <Home size={20} /> },
    { name: "Detalle", path: "/Detail", icon: <FileText size={20} /> },
    { name: "Proyectos", path: "/Portfolio", icon: <Calendar size={20} /> },
    { name: "Contacto", path: "/Contact", icon: <GraduationCap size={20} /> },
  ];

  return (
    <>
      <header className="md:hidden w-full bg-neo-green border-b-[3px] border-black p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <MessageSquareCode size={30} />
          <h1 className="text-2xl font-black tracking-tight font-mono">
            JELLY
          </h1>
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        className={`
          /* Comportamiento base en Escritorio */
          md:w-64 md:h-screen md:sticky md:top-0 md:flex md:flex-col md:border-r-[3px] md:border-black p-6 bg-neo-green font-mono z-40 shrink-0
          
          /* Comportamiento en Móvil (Menú desplegable) */
          fixed inset-0 top-[71px] flex-col justify-between transition-transform duration-300
          ${isOpen ? "flex translate-x-0" : "hidden md:flex translate-x-full md:translate-x-0"}
        `}
      >
        <aside className="w-full">
          <div className="hidden md:flex mb-16 items-center gap-4 justify-center">
            <MessageSquareCode size={40} />
            <h1 className="text-4xl font-black tracking-tight font-mono">
              JELLY
            </h1>
          </div>

          <nav className="flex flex-col text-xl md:text-lg gap-3 font-semibold w-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`flex items-center gap-4 px-4 py-3.5 border-2 border-transparent transition-all font-bold
                    ${
                      isActive
                        ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] md:shadow-none"
                        : "text-black hover:bg-black/10 hover:border-black/20"
                    }
                  `}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="mt-auto w-full pb-20 md:pb-0">
          <div className="mb-4 mt-4 border-t-2 border-black/30 md:border-black/50" />
          <div className="flex justify-center items-center gap-10 bg-white/40 md:bg-transparent py-4 md:py-0 border-2 border-black md:border-transparent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-none">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
