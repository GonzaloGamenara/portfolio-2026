import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const isFirstLoad = !sessionStorage.getItem("introVista");

  // trabajando...
  if (isFirstLoad) {
    sessionStorage.setItem("introVista", "true");
  }

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto scroll-smooth animate-slide-up">
      {/* Título */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight">
            Mi resumen
          </h1>
          <h2 className="hidden xl:block text-3xl font-black tracking-tight w-1/3 pl-8 font-mono">
            Experiencia
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-2/3">
            <ProfileCard />
          </div>

          <div className="xl:w-1/3 flex flex-col border-[3px] border-black shadow-neo bg-white">
            <h2 className="xl:hidden text-3xl font-black tracking-tight p-4 border-b-[3px] border-black bg-neo-yellow font-mono">
              Experiencia
            </h2>

            <div className="bg-white p-4 sm:pl-8 flex gap-3 hover:bg-neo-bg transition-colors border-b-2 py-6 items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-green border-2 flex-shrink-0">
                💼
              </div>
              <div>
                <h4 className="font-black text-lg leading-tight">
                  Emprendedor - dueño
                </h4>
                <p className="text-[15px] font-bold text-gray-600 my-1">
                  Entre Vetas Fábrica de Muebles
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Nov 2023 - Presente
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:pl-8 flex gap-3 hover:bg-neo-bg transition-colors border-b-2 py-6 items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-pink border-2 flex-shrink-0">
                💼
              </div>
              <div>
                <h4 className="font-black text-lg leading-tight">
                  Encargado general
                </h4>
                <p className="text-[15px] font-bold text-gray-600 my-1">
                  Eneldo Dietetica
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Mar 2020 - Nov 2025
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:pl-8 flex gap-3 hover:bg-neo-bg transition-colors py-6 items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-yellow border-2 flex-shrink-0">
                💼
              </div>
              <div>
                <h4 className="font-black text-lg leading-tight">
                  Encargado general
                </h4>
                <p className="text-[15px] font-bold text-gray-600 my-1">
                  Asterix Bar
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Abr 2018 - Ene 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <Marquee />
      </div>

      <div className="flex justify-between items-center mb-6 mt-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-mono leading-tight">
          Proyectos destacados
        </h2>
        <button
          onClick={() => navigate("/portfolio")}
          className="border-2 border-black px-4 py-2 text-xs sm:text-sm font-bold bg-white hover:bg-neo-yellow shadow-neo transition-colors whitespace-nowrap"
        >
          Ver todos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-neo-pink border-[3px] border-black shadow-neo p-5 flex flex-col gap-4 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-center border-b-[3px] border-black pb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-black text-lg uppercase tracking-tighter">
                Impacto
              </span>
            </div>
            <div className="bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase rotate-2">
              Live 🔴
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-5xl tracking-tighter">30+</span>
            </div>
            <p className="font-bold text-sm uppercase text-black mt-1">
              Proyectos desplegados
            </p>

            <div className="flex gap-4 mt-3 pt-3 border-t-2 border-black/20">
              <div>
                <p className="font-black text-lg">180+</p>
                <p className="text-[10px] uppercase font-bold text-gray-700">
                  Commits
                </p>
              </div>
              <div>
                <p className="font-black text-lg">20+</p>
                <p className="text-[10px] uppercase font-bold text-gray-700">
                  Repos
                </p>
              </div>
            </div>

            <svg
              className="w-full h-12 mt-4"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <path
                d="M0,25 C20,25 30,5 50,10 C70,15 80,25 100,5"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <Link to="/Portfolio" className="cursor-pointer block">
          <ProjectCard
            name="StellarSights"
            videoUrl="/videos/stellar.mp4"
            resume="Web completa con Frontend y backend"
            tech="React, Tailwind"
            delay="0ms"
          />
        </Link>

        <Link to="/Portfolio" className="cursor-pointer block">
          <ProjectCard
            name="Accidentes Automovilisticos"
            videoUrl="/videos/accidentes.mp4"
            resume="Analisis de Datos y Visualizacion"
            tech="Excel, Power BI, DAX"
            delay="0ms"
          />
        </Link>

        <Link to="/Portfolio" className="cursor-pointer block">
          <ProjectCard
            name="Analisis E-Commerce"
            videoUrl="/videos/ecommerce.mp4"
            resume="Analisis de Datos y Visualizacion"
            tech="Excel, Power BI, DAX"
            delay="0ms"
          />
        </Link>
      </div>
    </main>
  );
};

export default Home;
