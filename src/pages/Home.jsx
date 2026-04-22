import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <main
      className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up "
      style={{ animationDelay: "2000ms" }}
    >
      {/* Título */}
      <div className="animate-scale-up" style={{ animationDelay: "2100ms" }}>
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-6xl font-black font-mono tracking-tight">
            Portafolio
          </h1>
          <h2 className="hidden xl:block text-3xl font-black tracking-tight w-1/3 pl-8 font-mono">
            Experiencia
          </h2>
        </div>

        {/* Contenedor dividido: Tarjeta Amarilla (2/3) y Work Experience (1/3) */}
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-2/3">
            <ProfileCard />
          </div>

          {/* Columna Derecha de Experiencia */}
          <div className="xl:w-1/4 flex flex-col h-window justify-evenly border-[3px] border-black shadow-neo ">
            <h2 className="xl:hidden text-2xl font-black tracking-tight mt-4 font-mono">
              Experiencia
            </h2>

            <div className="bg-white pl-8 flex gap-3 hover:bg-neo-bg transition-colors border-b-2 h-full items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-green border-2">💼</div>
              <div>
                <h4 className="font-black text-lg">Emprendedor - dueño</h4>
                <p className="text-[15px] font-bold text-gray-600 mb-1">
                  Entre Vetas Fábrica de Muebles
                </p>
                <p className="text-sm font-medium">Nov 2023 - Presente</p>
              </div>
            </div>

            <div className="bg-white pl-8 flex gap-3 hover:bg-neo-bg transition-colors border-b-2 h-full items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-pink border-2">💼</div>
              <div>
                <h4 className="font-black text-lg">Encargado general</h4>
                <p className="text-[15px] font-bold text-gray-600 mb-1">
                  Eneldo Dietetica
                </p>
                <p className="text-sm font-medium">Mar 2020 - Nov 2025</p>
              </div>
            </div>

            <div className="bg-white pl-8 flex gap-3 hover:bg-neo-bg transition-colors h-full items-center justify-start">
              <div className="text-2xl p-1 h-fit bg-neo-yellow border-2">
                💼
              </div>
              <div>
                <h4 className="font-black text-lg">Encargado general</h4>
                <p className="text-[15px] font-bold text-gray-600 mb-1">
                  Asterix Bar
                </p>
                <p className="text-sm font-medium">Abr 2018 - Ene 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acá metemos la cinta infinita */}
      <Marquee />

      <div
        className="flex justify-between items-end mb-4 mt-12 animate-slide-up"
        style={{ animationDelay: "2600ms" }}
      >
        <h2 className="text-4xl font-black tracking-tight font-mono">
          {" "}
          Proyectos destacados
        </h2>
        <button className="border-2 border-black px-4 py-1 text-sm font-bold bg-white hover:bg-neo-yellow shadow-neo transition-colors">
          Ver todos
        </button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-scale-up"
        style={{ animationDelay: "2700ms" }}
      >
        {/* Caja de Stats */}
        <div className="bg-neo-pink border-[3px] border-black shadow-neo p-5 flex flex-col gap-4 transition-transform hover:-translate-y-1">
          {/* Cabecera */}
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

          {/* Métricas */}
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-5xl tracking-tighter">30+</span>
            </div>
            <p className="font-bold text-sm uppercase text-black mt-1">
              Proyectos desplegados
            </p>

            {/* Sub-métrica de respaldo */}
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

            {/* Gráfico decorativo */}
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

        <ProjectCard
          name="StellarSights"
          videoUrl="/videos/stellar.mp4" // Solo necesitas el video
          resume="Web completa con Frontend y backend"
          tech="React, Tailwind"
          delay="2900ms"
        />
        <ProjectCard
          name="Accidentes Automovilisticos"
          videoUrl="/videos/accidentes.mp4" // Solo necesitas el video
          resume="Analisis de Datos y Visualizacion"
          tech="Excel, Power BI, DAX"
          delay="3100ms"
        />
        <ProjectCard
          name="Analisis E-Commerce"
          videoUrl="/videos/ecommerce.mp4" // Solo necesitas el video
          resume="Analisis de Datos y Visualizacion"
          tech="Excel, Power BI, DAX"
          delay="3300ms"
        />
      </div>
    </main>
  );
};

export default Home;
