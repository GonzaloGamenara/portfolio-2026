import { useState, useEffect } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState([
    "FrontEnd",
    "BackEnd",
    "Data",
  ]);

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
      hidden_category: ["FrontEnd", "BackEnd"],
      tech: "HTML, CSS, Node.js, Express",
      desc: "Aplicación web Fullstack interactiva para la exploración espacial, optimizada para ofrecer una navegación fluida, responsiva e inmersiva.",
      icon: "🚀",
      color: "bg-neo-yellow",
      details:
        "Stellar Sights es una plataforma interactiva que permite explorar el cosmos a través de una interfaz intuitiva y dinámica. El frontend fue desarrollado con React y Tailwind CSS, priorizando la usabilidad y un diseño 100% responsivo. El backend maneja la integración segura con APIs de la NASA.",
      repo: "https://github.com/GonzaloGamenara/stellar-sights-frontend",
      video: "/videos/stellar.mp4",
      url: "https://stellar-sights.netlify.app/",
    },
    {
      id: 2,
      title: "Accidentes Automovilísticos",
      category: "Normalización, Análisis de Datos y Reportes",
      hidden_category: ["Data"],
      tech: "Excel, Power BI, DAX, MySQL",
      desc: "Análisis integral de siniestros viales enfocado en la identificación de patrones y tendencias críticas mediante visualizaciones interactivas.",
      icon: "🚗",
      color: "bg-neo-pink",
      details:
        "Este proyecto consistió en la normalización y procesamiento de un dataset masivo de accidentes automovilísticos. Se utilizó Excel para la limpieza y MySQL para las consultas optimizadas, integrando todo en Power BI para diseñar tableros interactivos con KPIs clave.",
      repo: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
      video: "/videos/accidentes.mp4",
      url: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
    },
    {
      id: 3,
      title: "Análisis e-Commerce",
      category: "Normalización, Análisis de Datos y Visualización",
      hidden_category: ["Data"],
      tech: "Excel, Power BI, DAX",
      desc: "Auditoría de datos comerciales y comportamiento del consumidor orientada a la optimización de inventario y estrategias de marketing.",
      icon: "🛒",
      color: "bg-neo-green",
      details:
        "Procesamiento y análisis de datos de ventas de una tienda en línea. Modelado en Power BI para confeccionar tableros interactivos que revelan tendencias de compra y rendimiento de productos, aplicando DAX para métricas personalizadas.",
      repo: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
      video: "/videos/ecommerce.mp4",
      url: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
    },
    {
      id: 4,
      title: "Repes Web App",
      category: "Frontend & Backend Development",
      hidden_category: ["FrontEnd", "BackEnd"],
      tech: "Vite, React, Tailwind, Node.js, Express, SQL",
      desc: "Aplicación web Mobile-First diseñada para la gestión personalizada de rutinas de entrenamiento y seguimiento de cargas de peso.",
      icon: "💪🏻",
      color: "bg-neo-yellow",
      details:
        "Solución web progresiva orientada al uso diario en dispositivos móviles que centraliza la organización de entrenamientos físicos. Cuenta con un flujo CRUD completo y persistencia en SQL para registrar y consultar de forma inmediata el progreso histórico.",
      repo: "",
      video: "",
      url: "",
    },
    {
      id: 5,
      title: "Quizzer",
      category: "Fullstack, Web Scraping & Data",
      hidden_category: ["FrontEnd", "BackEnd", "Data"],
      tech: "Python, Pandas, SQL, Node.js, Angular, React, Vite",
      desc: "Aplicación web de quizzes interactivos construida con datos reales obtenidos a través de técnicas de Web Scraping.",
      icon: "🧠",
      color: "bg-purple-300",
      details:
        "Quizzer es una plataforma donde el jugador debe escribir respuestas ocultas para descubrir elementos de distintas categorías. La base de datos fue construida haciendo web scraping con Python y Pandas, estructurada en SQL. El backend opera con Node.js y Angular, mientras que la interfaz gráfica interactiva fue desarrollada con React, Vite y Tailwind.",
      repo: "",
      video: "",
      url: "",
    },
    {
      id: 6,
      title: "Hearo",
      category: "Frontend & Backend (WebSockets)",
      hidden_category: ["FrontEnd", "BackEnd"],
      tech: "React, Tailwind, Node.js, Express, Socket.io, MongoDB",
      desc: "Juego web musical multijugador en tiempo real para adivinar canciones a partir de un preview de audio.",
      icon: "🎧",
      color: "bg-blue-300",
      details:
        "Inspirado en el clásico formato de 'Tapados', Hearo te pone a prueba adivinando canciones consumiendo la API pública de Deezer. Ideal para jugar en grupo conectado a un parlante, cuenta con modo multijugador en tiempo real usando Socket.io, sistema de pistas progresivas y una 'Canción del Día' con leaderboard y sistema de rachas guardado en MongoDB.",
      repo: "",
      video: "",
      url: "",
    },
    {
      id: 7,
      title: "Letterflix",
      category: "Frontend & Backend Development",
      hidden_category: ["FrontEnd", "BackEnd"],
      tech: "React, Tailwind, TMDB API, Node.js, SQL",
      desc: "SPA interactiva que fusiona el estilo visual de Netflix con un enfoque dinámico en reseñas y puntuación de películas.",
      icon: "🍿",
      color: "bg-red-300",
      details:
        "Letterflix ofrece la experiencia de una plataforma de streaming pero potenciada por el feedback de los usuarios. Desarrollada de manera modular con React y Tailwind, consume la API de TMDB para mostrar portadas, sinopsis y plataformas disponibles. El backend en Node.js y SQL maneja la autenticación segura y el almacenamiento de reseñas personalizadas.",
      repo: "",
      video: "",
      url: "",
    },
    {
      id: 8,
      title: "Gamelitics",
      category: "Data Science & Machine Learning",
      hidden_category: ["Data", "BackEnd"],
      tech: "Python, Pandas, ML (XGBoost), Power BI, Flask",
      desc: "Análisis de tendencias en la industria de los videojuegos y predicción de éxito utilizando modelos de Machine Learning.",
      icon: "👾",
      color: "bg-emerald-300",
      details:
        "Proyecto de Análisis Exploratorio de Datos (EDA) que extrae información de las APIs de RAWG y Steam. Los datos fueron procesados con Pandas, NumPy y Seaborn, y visualizados en Power BI. Se implementaron algoritmos de Machine Learning (Random Forest y XGBoost) para predecir el éxito de un videojuego según diversos factores. El despliegue de la web interactiva se realizó con Flask.",
      repo: "",
      video: "",
      url: "",
    },
    {
      id: 9,
      title: "Mundialitos",
      category: "Frontend SPA",
      hidden_category: ["FrontEnd"],
      tech: "React, Tailwind, LocalStorage",
      desc: "Aplicación rápida para armar 'prodes' instantáneos con amigos sin necesidad de registro.",
      icon: "🏆",
      color: "bg-orange-300",
      details:
        "Mundialitos es una Single Page Application (SPA) enfocada 100% en el frontend. Está pensada para solucionar el problema de organizar 'prodes' improvisados en el momento con amigos, apostando por unas birras o unos chocolates. Al no requerir backend complejo para partidas casuales, ofrece una interfaz ultra rápida para cargar predicciones y calcular ganadores al instante.",
      repo: "",
      video: "",
      url: "",
    },
  ];

  const availableCategories = ["FrontEnd", "BackEnd", "Data"];

  const handleFiltro = (cat) => {
    setSelectedCategory((categoriasPrevias) => {
      const flag = categoriasPrevias.includes(cat);
      if (flag) {
        return categoriasPrevias.filter((item) => item !== cat);
      } else {
        return [...categoriasPrevias, cat];
      }
    });
  };

  const filteredProjects = projects.filter((proj) =>
    proj.hidden_category.some((cat) => selectedCategory.includes(cat)),
  );

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10 relative animate-slide-up overflow-y-auto">
      <div className="border-b-[3px] border-black mb-10 flex flex-col lg:flex-row lg:items-end justify-between pb-4 gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-mono">
            Mis Proyectos
          </h1>
          <p className="font-medium mt-2 text-sm sm:text-base text-gray-700">
            Una selección de mis últimos trabajos en desarrollo y análisis de
            datos.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono font-bold lg:justify-end">
          <span className="text-lg mr-2 hidden sm:inline-block">Filtros:</span>
          {availableCategories.map((cat) => {
            const isActive = selectedCategory.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => handleFiltro(cat)}
                className={`text-sm sm:text-base py-1.5 px-4 sm:py-2 sm:px-6 border-2 border-black shadow-neo cursor-pointer transition-all active:translate-y-1 active:shadow-none ${
                  isActive
                    ? "bg-amber-300 hover:scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* GRILLA DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <p className="font-mono font-bold text-gray-500 col-span-full text-center py-10">
            No hay proyectos seleccionados con estos filtros...
          </p>
        ) : (
          filteredProjects.map((proj) => (
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
                <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 text-black/90 line-clamp-4">
                  {proj.desc}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(proj)}
                className="w-full bg-white border-2 border-black font-black py-2.5 shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none lg:hover:translate-x-0.5 lg:hover:translate-y-0.5 lg:hover:shadow-none transition-all mt-auto text-sm uppercase tracking-wider cursor-pointer"
              >
                Ver detalles
              </button>
            </div>
          ))
        )}
      </div>

      {/* MODAL DETALLES - CORREGIDO */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 md:h-full flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-hidden scroll-auto"
          onClick={() => setSelectedProject(null)}
        >
          {/* Contenedor principal del modal (SIN SCROLL AQUI) */}
          <div
            className="bg-white border-[3px] border-black shadow-neo w-full max-w-2xl max-h-[90dvh] flex flex-col relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Fijo */}
            <div className="flex justify-between items-center border-b-[3px] border-black p-3 sm:p-4 bg-white shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-2xl sm:text-3xl shrink-0 select-none">
                  {selectedProject.icon}
                </span>
                <h3 className="font-black text-lg sm:text-2xl font-mono truncate">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 sm:w-10 sm:h-10 border-[3px] border-black bg-neo-pink hover:bg-amber-300 font-black text-lg transition-colors shadow-neo flex items-center justify-center shrink-0 cursor-pointer"
              >
                X
              </button>
            </div>

            {/* Cuerpo del Modal (SCROLL AQUI) */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
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

              {/* Contenedor del video/imagen */}
              <div className="w-full aspect-video bg-white border-[3px] border-black flex flex-col items-center justify-center relative overflow-hidden shadow-neo">
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

              {/* Botones de Links */}
              {(selectedProject.url || selectedProject.repo) && (
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-between border-t-[3px] border-black pt-5">
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-amber-300 text-center border-2 border-black font-black px-6 py-2.5 text-sm shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all uppercase"
                    >
                      Visitar sitio web
                    </a>
                  )}

                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-amber-300 text-center border-2 border-black font-black px-6 py-2.5 text-sm shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all uppercase"
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
