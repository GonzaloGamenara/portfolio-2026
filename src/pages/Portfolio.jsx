import { useState } from "react";

const Portfolio = () => {
  // Estado para saber qué proyecto está abierto. Si es null, el modal está cerrado.
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Stellar Sights",
      category: "Frontend & Backend Development",
      tech: "React, Tailwind CSS, Node.js, Express",
      desc: "Desarrollo de una aplicación web completa para exploración del espacio. Enfocada en experiencia e inmersión.",
      icon: "🚀",
      color: "bg-neo-yellow",
      details:
        "Stellar Sights es una plataforma interactiva que permite a los usuarios explorar el cosmos a través de una interfaz intuitiva. El frontend fue desarrollado con React y Tailwind CSS, priorizando la usabilidad y el diseño responsivo. El backend, construido con Node.js, maneja la integración de APIs de datos astronómicos en tiempo real de la base de datos de la NASA. El proyecto se centró en crear una experiencia fluida e inmersiva priorizando los reposivo.",
      repo: "https://github.com/GonzaloGamenara/stellar-sights-frontend",
      video: "/videos/stellar.mp4",
      url: "https://stellar-sights.netlify.app/",
    },
    {
      id: 2,
      title: "Accidentes Automovilisticos",
      category: "Normalizacion, Analisis de Datos, Visualizacion y Reportes",
      tech: "Excel, Power BI, DAX, MySQL",
      desc: "Análisis integral de datos de accidentes automovilísticos para identificar patrones y tendencias, con visualizaciones interactivas y reportes ejecutivos.",
      icon: "🚗",
      color: "bg-neo-pink",
      details:
        "Este proyecto consistió en la normalización y análisis de un extenso dataset de accidentes automovilísticos. Utilizando Excel para la limpieza inicial, se importaron los datos a Power BI para crear visualizaciones interactivas que destacaran patrones clave, como ubicaciones de alta incidencia, causas comunes y tendencias temporales. Se emplearon DAX para cálculos avanzados y MySQL para consultas personalizadas. El resultado final incluyó dashboards dinámicos y reportes ejecutivos que facilitaron la toma de decisiones informadas para mejorar la seguridad vial.",
      repo: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
      video: "/videos/accidentes.mp4",
      url: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
    },
    {
      id: 3,
      title: "Analisis e-Commerce",
      category: "Normalizacion, Analisis de Datos y Visualizacion",
      tech: "Excel, Power BI, DAX",
      desc: "Análisis detallado de datos de ventas y comportamiento del cliente para un e-commerce, con visualizaciones que impulsaron estrategias de marketing y optimización de inventario.",
      icon: "🛒",
      color: "bg-neo-green",
      details:
        "En este proyecto, se llevó a cabo un análisis exhaustivo de los datos de ventas y comportamiento del cliente para una tienda de e-commerce. Se utilizó Excel para la normalización y limpieza de los datos, seguido de Power BI para crear visualizaciones interactivas que destacaran tendencias de compra, segmentación de clientes y rendimiento de productos. Con DAX, se desarrollaron métricas personalizadas para evaluar el valor del cliente y la efectividad de las campañas de marketing. El análisis resultante proporcionó insights valiosos que impulsaron estrategias de marketing dirigidas y optimización del inventario, aumentando las ventas y mejorando la experiencia del cliente.",
      repo: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
      video: "/videos/ecommerce.mp4",
      url: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
    },
  ];

  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up relative">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight font-mono">
          Mis Proyectos
        </h1>
        <p className="font-medium mt-2">
          Una selección de mis últimos trabajos en desarrollo y diseño.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${proj.color} border-[3px] border-black shadow-neo p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl bg-white border-2 border-black p-2 shadow-neo">
                  {proj.icon}
                </span>
                <span className="text-[10px] font-bold uppercase bg-black text-white px-2 py-1">
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

            {/* Al hacer clic, guardamos el proyecto entero en el estado */}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Contenedor principal del Modal */}
          <div className="bg-neo-bg border-[3px] border-black shadow-neo w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col animate-slide-up">
            {/* Cabecera del Modal */}
            <div className="flex justify-between items-center border-b-[3px] border-black p-4 bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedProject.icon}</span>
                <h3 className="font-black text-2xl font-mono">
                  {selectedProject.title}
                </h3>
              </div>
              {/* Botón de cerrar */}
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

              {/* Caja de contenido multimedia (Acá podés meter Iframes después) */}
              <div className="w-full aspect-video bg-white border-[3px] border-black flex flex-col items-center justify-center relative overflow-hidden group">
                <span className="font-mono font-bold text-gray-500 z-10 bg-white px-4 border-2 border-black">
                  Espacio reservado para Demo / Video
                </span>
                <p className="text-xs font-medium text-gray-400 mt-2 z-10 text-center px-4">
                  <video
                    src={selectedProject.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </p>
                {/* Patrón de puntitos de fondo para la caja vacía */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(black 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
              </div>

              {/* Botón extra abajo */}
              <div className="mt-8 flex justify-between border-t-[3px] border-black pt-6">
                <a
                  href={selectedProject.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-neo-yellow border-2 border-black font-bold px-8 py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    Pagina web
                  </button>
                </a>
                <a
                  href={selectedProject.repo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-neo-yellow border-2 border-black font-bold px-8 py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    Visitar Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
