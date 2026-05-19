import { useState, useEffect } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Stellar Sights",
      category: "Frontend & Backend Development",
      tech: "HTML, CSS, Node.js, Express",
      desc: "Aplicación web Fullstack interactiva para la exploración espacial, optimizada para ofrecer una navegación fluida, responsiva e inmersiva.",
      icon: "🚀",
      color: "bg-neo-yellow",
      details:
        "Stellar Sights es una plataforma interactiva que permite explorar el cosmos a través de una interfaz intuitiva y dinámica. El frontend fue desarrollado con React y Tailwind CSS, priorizando la usabilidad, el rendimiento de carga y un diseño 100% responsivo. El backend, construido con Node.js y Express, maneja la integración segura y el consumo de las APIs oficiales de datos astronómicos en tiempo real de la NASA, garantizando un flujo de información eficiente.",
      repo: "https://github.com/GonzaloGamenara/stellar-sights-frontend",
      video: "/videos/stellar.mp4",
      url: "https://stellar-sights.netlify.app/",
    },
    {
      id: 2,
      title: "Accidentes Automovilísticos",
      category: "Normalización, Análisis de Datos y Reportes",
      tech: "Excel, Power BI, DAX, MySQL",
      desc: "Análisis integral de siniestros viales enfocado en la identificación de patrones y tendencias críticas mediante visualizaciones interactivas y reportes ejecutivos.",
      icon: "🚗",
      color: "bg-neo-pink",
      details:
        "Este proyecto consistió en la normalización y procesamiento de un dataset masivo de accidentes automovilísticos. Se utilizó Excel para la limpieza inicial y transformación de datos, y MySQL para la ejecución de consultas optimizadas y estructuración relacional. Los datos se integraron en Power BI para diseñar tableros interactivos que destacan indicadores clave (KPIs) como zonas de alta incidencia, causas comunes y tendencias temporales, aplicando funciones DAX avanzadas para cálculos métricos estratégicos.",
      repo: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
      video: "/videos/accidentes.mp4",
      url: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
    },
    {
      id: 3,
      title: "Análisis e-Commerce",
      category: "Normalización, Análisis de Datos y Visualización",
      tech: "Excel, Power BI, DAX",
      desc: "Auditoría de datos comerciales y comportamiento del consumidor orientada a la optimización de inventario y al desarrollo de estrategias de marketing basadas en KPIs.",
      icon: "🛒",
      color: "bg-neo-green",
      details:
        "Procesamiento y análisis de datos de ventas de una tienda en línea. El flujo de trabajo comenzó con la normalización de datos en Excel, seguido del modelado en Power BI para confeccionar tableros interactivos que revelan tendencias de compra y rendimiento de productos. Mediante expresiones DAX avanzadas se desarrollaron métricas personalizadas para la segmentación de clientes y la evaluación de la efectividad de campañas, proporcionando insights clave para optimizar el stock y maximizar el retorno de inversión.",
      repo: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
      video: "/videos/ecommerce.mp4",
      url: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
    },
    {
      id: 4,
      title: "Repes Web App",
      category: "Frontend & Backend Development",
      tech: "Vite, React, Tailwind, Node.js, Express, SQL",
      desc: "Aplicación web Mobile-First diseñada para la gestión personalizada de rutinas de entrenamiento y el seguimiento histórico y evolutivo de cargas de peso.",
      icon: "💪🏻",
      color: "bg-neo-yellow",
      details:
        "Solución web progresiva orientada al uso diario en dispositivos móviles que centraliza la organización de entrenamientos físicos, reemplazando el uso de herramientas genéricas de notas. La aplicación cuenta con un flujo CRUD completo para la creación de rutinas y ejercicios personalizados. Su funcionalidad principal radica en la persistencia de datos relacionales en SQL para registrar y consultar de forma inmediata el progreso histórico de cargas de peso, e incluye un módulo de temporizador integrado para optimizar los tiempos de recuperación muscular.",
      repo: "",
      video: "",
      url: "",
    },
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10 relative animate-slide-up">
      {/* Cabecera de la sección */}
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight font-mono">
          Mis Proyectos
        </h1>
        <p className="font-medium mt-2 text-sm sm:text-base">
          Una selección de mis últimos trabajos en desarrollo y análisis de
          datos.
        </p>
      </div>

      {/* Grilla responsiva de tarjetas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${proj.color} border-[3px] border-black shadow-neo p-4 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-3xl sm:text-4xl bg-white border-2 border-black p-2 shadow-neo shrink-0 select-none">
                  {proj.icon}
                </span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase bg-black text-white px-2 py-1 text-right max-w-[70%] break-words tracking-tight">
                  {proj.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black mb-1.5 font-mono leading-tight">
                {proj.title}
              </h2>
              <p className="text-xs sm:text-sm font-bold border-b-2 border-black inline-block mb-3 pb-0.5">
                {proj.tech}
              </p>
              <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 text-black/90">
                {proj.desc}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(proj)}
              className="w-full bg-white border-2 border-black font-black py-2.5 shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none sm:hover:translate-x-0.5 sm:hover:translate-y-0.5 sm:hover:shadow-none transition-all mt-auto text-sm uppercase tracking-wider"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* MODAL (Ventana Emergente Adaptativa) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-neo-bg border-[3px] border-black shadow-neo w-full max-w-2xl max-h-[85vh] overflow-y-auto flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b-[3px] border-black p-4 bg-white sticky top-0 z-20 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-2xl sm:text-3xl shrink-0 select-none">
                  {selectedProject.icon}
                </span>
                <h3 className="font-black text-lg sm:text-2xl font-mono truncate balance">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 sm:w-10 sm:h-10 border-[3px] border-black bg-neo-pink hover:bg-neo-yellow font-black text-lg transition-colors shadow-neo flex items-center justify-center shrink-0"
              >
                X
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-4 sm:p-6 flex-1">
              <div className="mb-4 flex gap-1.5 flex-wrap">
                <span className="bg-black text-white text-[9px] sm:text-xs font-bold px-2.5 py-1 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="border-2 border-black text-[9px] sm:text-xs font-bold px-2.5 py-1 bg-white">
                  {selectedProject.tech}
                </span>
              </div>

              <p className="font-medium text-sm sm:text-base mb-6 leading-relaxed text-slate-800">
                {selectedProject.details}
              </p>

              <div className="w-full aspect-video bg-white border-[3px] border-black flex flex-col items-center justify-center relative overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <span className="font-mono font-bold text-xs sm:text-sm text-gray-500 z-10 bg-white px-3 py-1 border-2 border-black text-center mx-4">
                      Demo en desarrollo
                    </span>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(black 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                      }}
                    ></div>
                  </>
                )}
              </div>

              {(selectedProject.url || selectedProject.repo) && (
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-between border-t-[3px] border-black pt-5">
                  {selectedProject.url ? (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-neo-yellow text-center border-2 border-black font-black px-6 py-2.5 text-sm shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all uppercase"
                    >
                      Visitar sitio web
                    </a>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-neo-yellow text-center border-2 border-black font-black px-6 py-2.5 text-sm shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all uppercase"
                    >
                      Visitar Repositorio
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
