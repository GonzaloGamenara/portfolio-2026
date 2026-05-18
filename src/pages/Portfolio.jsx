import { useState, useEffect } from "react";

const Portfolio = () => {
  // Estado para saber qué proyecto está abierto. Si es null, el modal está cerrado.
  const [selectedProject, setSelectedProject] = useState(null);

  // Efecto para bloquear el scroll del body cuando el modal está abierto
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
    <main className="flex-1 p-6 md:p-10 relative animate-slide-up">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight font-mono">
          Mis Proyectos
        </h1>
        <p className="font-medium mt-2">
          Una selección de mis últimos trabajos en desarrollo y análisis de
          datos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${proj.color} border-[3px] border-black shadow-neo p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-4xl bg-white border-2 border-black p-2 shadow-neo shrink-0">
                  {proj.icon}
                </span>
                <span className="text-[10px] font-bold uppercase bg-black text-white px-2 py-1 text-right max-w-[70%] break-words">
                  {proj.category}
                </span>
              </div>
              <h2 className="text-2xl font-black mb-2 font-mono">
                {proj.title}
              </h2>
              <p className="text-sm font-bold border-b-2 border-black inline-block mb-3">
                {proj.tech}
              </p>
              <p className="text-sm font-medium leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(proj)}
              className="bg-white border-2 border-black font-bold py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mt-auto"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* MODAL (Ventana Emergente) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)} // Cierra el modal al clickear afuera en el overlay
        >
          {/* Contenedor principal del Modal */}
          <div
            className="bg-neo-bg border-[3px] border-black shadow-neo w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic adentro del modal
          >
            {/* Cabecera del Modal */}
            <div className="flex justify-between items-center border-b-[3px] border-black p-4 bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedProject.icon}</span>
                <h3 className="font-black text-2xl font-mono">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 border-[3px] border-black bg-neo-pink hover:bg-neo-yellow font-black text-xl transition-colors shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none flex items-center justify-center"
              >
                X
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6">
              <div className="mb-6 flex gap-2 flex-wrap">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="border-2 border-black text-xs font-bold px-3 py-1 bg-white">
                  {selectedProject.tech}
                </span>
              </div>

              <p className="font-medium text-lg mb-8 leading-relaxed">
                {selectedProject.details}
              </p>

              {/* Caja de contenido multimedia */}
              <div className="w-full aspect-video bg-white border-[3px] border-black flex flex-col items-center justify-center relative overflow-hidden">
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
                    <span className="font-mono font-bold text-gray-500 z-10 bg-white px-4 border-2 border-black text-center mx-4">
                      Demo en desarrollo
                    </span>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(black 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    ></div>
                  </>
                )}
              </div>

              {/* Botones de Links Externos Condicionales */}
              {(selectedProject.url || selectedProject.repo) && (
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between border-t-[3px] border-black pt-6">
                  {selectedProject.url ? (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full bg-neo-yellow border-2 border-black font-bold px-8 py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                        Visitar sitio web
                      </button>
                    </a>
                  ) : (
                    <div />
                  )}{" "}
                  {/* Spacer para empujar el repo a la derecha si no hay url */}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full bg-neo-yellow border-2 border-black font-bold px-8 py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                        Visitar Repositorio
                      </button>
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
