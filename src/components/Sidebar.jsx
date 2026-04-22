import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import {
  Home,
  Calendar,
  GraduationCap,
  FileText,
  Languages,
  MessageSquareCode,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Definición de enlaces para facilitar el renderizado
  const navLinks = [
    { name: "Resumen", path: "/", icon: <Home size={20} /> },
    { name: "Detalle", path: "/Detail", icon: <FileText size={20} /> },
    { name: "Proyectos", path: "/Portfolio", icon: <Calendar size={20} /> },
    { name: "Contacto", path: "/Contact", icon: <GraduationCap size={20} /> },
  ];

  return (
    <div
      className="w-full md:w-64 bg-neo-green p-6 flex flex-col font-mono animate-scale-up"
      style={{ animationDelay: "2500ms" }}
    >
      <div>
        <aside>
          <div></div>
          <div className="mb-20 flex items-center gap-4 justify-center">
            <MessageSquareCode size={40} />
            <h1 className="text-4xl font-black tracking-tight font-mono">
              JELLY
            </h1>
          </div>

          <nav
            className={`flex-col text-lg gap-2 font-semibold ${isOpen ? "flex" : "hidden md:flex"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  location.pathname === link.path
                    ? "bg-black text-white"
                    : "text-black hover:bg-black/10"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
      <div className="mt-auto">
        {/* Separador */}
        <div className=" mb-4 mt-4 border border-black/50" />
        <div className="flex justify-center items-center gap-10">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
