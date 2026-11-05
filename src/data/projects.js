// Projects shown on the site. `tags` drive the filters, `featured` the home page.
// Images live in /public/projects, videos in /public/videos.

export const projectFilters = [
  { id: "all", label: { es: "Todos", en: "All" } },
  { id: "frontend", label: { es: "Frontend", en: "Frontend" } },
  { id: "backend", label: { es: "Backend", en: "Backend" } },
  { id: "data", label: { es: "Datos", en: "Data" } },
];

export const projects = [
  {
    slug: "entrevetas",
    title: "EntreVetas",
    year: "2026",
    featured: true,
    accent: "bg-green",
    tags: ["frontend", "backend"],
    kind: { es: "E-commerce · Negocio real", en: "E-commerce · Real business" },
    stack: ["Next.js", "TypeScript", "React", "Supabase", "Vercel"],
    image: "/projects/entrevetas.webp",
    url: "https://entrevetas-web.vercel.app",
    summary: {
      es: "La tienda online de mi propia marca de muebles de madera: catálogo con precios, pedidos a medida y piezas con entrega inmediata.",
      en: "The online store of my own solid-wood furniture brand: priced catalogue, custom orders and ready-to-ship pieces.",
    },
    details: {
      es: [
        "Catálogo dinámico con Supabase como backend (base de datos y almacenamiento de imágenes).",
        "Flujo de cotización a medida y contacto directo por WhatsApp para cerrar ventas.",
        "SEO técnico y metadatos para compartir en redes; desplegado en Vercel.",
        "No es una demo: el sitio se usa todos los días para vender y lo mantengo en producción.",
      ],
      en: [
        "Dynamic catalogue backed by Supabase (database and image storage).",
        "Custom-quote flow and direct WhatsApp contact to close sales.",
        "Technical SEO and social metadata; deployed on Vercel.",
        "Not a demo: the site sells every day and I maintain it in production.",
      ],
    },
  },
  {
    slug: "migra",
    title: "MIGRA",
    year: "2026",
    featured: true,
    accent: "bg-purple",
    tags: ["frontend"],
    kind: { es: "Health-tech · Mobile-first", en: "Health-tech · Mobile-first" },
    stack: ["React", "TypeScript", "Vite"],
    image: "/projects/migra.webp",
    url: "https://migra-nine.vercel.app",
    summary: {
      es: "Diario clínico de migrañas: registrás una crisis en dos toques, controlás la medicación y generás un informe para tu neurólogo.",
      en: "A clinical migraine diary: log an attack in two taps, track medication and generate a report for your neurologist.",
    },
    details: {
      es: [
        "\"Modo crisis\" pensado para usarse con dolor: interfaz mínima, contraste alto y acciones grandes.",
        "Control de abuso de medicación (MOH) con límites mensuales y alertas.",
        "Informe clínico listo para llevar a la consulta con el especialista.",
      ],
      en: [
        "\"Crisis mode\" designed to be used while in pain: minimal UI, high contrast and big targets.",
        "Medication-overuse (MOH) tracking with monthly limits and alerts.",
        "Clinical report ready to bring to the specialist.",
      ],
    },
  },
  {
    slug: "titular",
    title: "Titular",
    year: "2026",
    featured: true,
    accent: "bg-yellow",
    tags: ["frontend", "backend"],
    kind: { es: "Agregador de noticias", en: "News aggregator" },
    stack: ["Next.js", "TypeScript", "React"],
    image: "/projects/titular.webp",
    url: "https://news-rho-neon.vercel.app",
    summary: {
      es: "Noticias de cine, videojuegos, teatro, libros, tecnología y ciencia en un solo feed, ordenado por lo que te gusta.",
      en: "Film, games, theatre, books, tech and science news in a single feed, ranked by what you like.",
    },
    details: {
      es: [
        "Feed \"Para vos\" que aprende de tus reacciones y prioriza las categorías que más leés.",
        "Agregación de múltiples fuentes con categorías y tendencias.",
        "Interfaz mobile-first con navegación por categorías.",
      ],
      en: [
        "\"For you\" feed that learns from your reactions and boosts the categories you read most.",
        "Multi-source aggregation with categories and trending.",
        "Mobile-first UI with category navigation.",
      ],
    },
  },
  {
    slug: "gastos",
    title: "Gastos",
    year: "2026",
    accent: "bg-mint",
    tags: ["frontend", "backend"],
    kind: { es: "Finanzas personales", en: "Personal finance" },
    stack: ["Next.js", "TypeScript", "React"],
    image: "/projects/gastos.webp",
    url: "https://moneybillscontrollergonza.vercel.app",
    summary: {
      es: "Anotá gastos e ingresos en segundos y mirá a dónde se va tu plata.",
      en: "Log expenses and income in seconds and see where your money goes.",
    },
    details: {
      es: ["Autenticación con cuentas de usuario.", "Carga rápida de movimientos y resumen por categoría."],
      en: ["User accounts with authentication.", "Fast entry of transactions and per-category summary."],
    },
  },
  {
    slug: "stellar-sights",
    title: "Stellar Sights",
    year: "2025",
    accent: "bg-blue",
    tags: ["frontend", "backend"],
    kind: { es: "Full stack · APIs de la NASA", en: "Full stack · NASA APIs" },
    stack: ["React", "Tailwind CSS", "Node.js", "Express"],
    image: "/projects/stellar-poster.webp",
    video: "/videos/stellar.mp4",
    url: "https://stellar-sights.netlify.app/",
    repo: "https://github.com/GonzaloGamenara/stellar-sights-frontend",
    summary: {
      es: "Exploración interactiva del sistema solar con datos de las APIs de la NASA.",
      en: "Interactive solar-system explorer powered by NASA APIs.",
    },
    details: {
      es: [
        "Frontend en React y Tailwind, 100% responsive.",
        "Backend propio en Node.js + Express que actúa de proxy seguro hacia las APIs de la NASA.",
        "Nota: el backend corre en un plan gratuito y puede tardar 1–2 minutos en despertar.",
      ],
      en: [
        "React + Tailwind frontend, fully responsive.",
        "Custom Node.js + Express backend acting as a secure proxy to NASA APIs.",
        "Note: the backend runs on a free tier and may take 1–2 minutes to wake up.",
      ],
    },
  },
  {
    slug: "accidentes",
    title: { es: "Siniestros viales", en: "Road accidents" },
    year: "2025",
    accent: "bg-coral",
    tags: ["data"],
    kind: { es: "Análisis de datos", en: "Data analysis" },
    stack: ["MySQL", "Excel", "Power BI", "DAX"],
    image: "/projects/accidentes-poster.webp",
    video: "/videos/accidentes.mp4",
    url: "https://drive.google.com/drive/folders/1CbPeh0vd95jZwlD36E9OuQ_5jyTGAhGc?usp=sharing",
    urlLabel: { es: "Ver informe y dashboard", en: "View report & dashboard" },
    summary: {
      es: "Normalización y análisis de un dataset masivo de accidentes para detectar patrones y zonas críticas.",
      en: "Cleaning and analysis of a large accident dataset to find patterns and critical areas.",
    },
    details: {
      es: [
        "Limpieza y normalización en Excel; consultas optimizadas en MySQL.",
        "Dashboard interactivo en Power BI con KPIs y medidas DAX.",
        "Informe final con hallazgos y recomendaciones.",
      ],
      en: [
        "Cleaning and normalisation in Excel; optimised MySQL queries.",
        "Interactive Power BI dashboard with KPIs and DAX measures.",
        "Final report with findings and recommendations.",
      ],
    },
  },
  {
    slug: "ecommerce-analytics",
    title: { es: "Análisis e-commerce", en: "E-commerce analytics" },
    year: "2025",
    accent: "bg-orange",
    tags: ["data"],
    kind: { es: "Análisis de datos", en: "Data analysis" },
    stack: ["Excel", "Power BI", "DAX"],
    image: "/projects/ecommerce-poster.webp",
    video: "/videos/ecommerce.mp4",
    url: "https://drive.google.com/drive/folders/1UdVVrCSh7gxDEA7psC93LIKaHFuaCXXb?usp=sharing",
    urlLabel: { es: "Ver informe y dashboard", en: "View report & dashboard" },
    summary: {
      es: "Auditoría de ventas y comportamiento de compra para optimizar inventario y marketing.",
      en: "Sales and customer-behaviour audit to optimise inventory and marketing.",
    },
    details: {
      es: [
        "Modelo de datos en Power BI con métricas DAX personalizadas.",
        "Tableros de tendencias de compra y rendimiento por producto.",
      ],
      en: ["Power BI data model with custom DAX measures.", "Dashboards for purchase trends and product performance."],
    },
  },
];

// Earlier / learning projects: listed compactly, no demo.
export const archive = [
  {
    title: "Move Uptempo",
    stack: "React · Vite",
    desc: {
      es: "Sitio para un ecosistema de danza y teatro musical en Zona Oeste (proyecto en pausa).",
      en: "Website for a dance and musical-theatre ecosystem in Buenos Aires (on hold).",
    },
  },
  {
    title: "Hearo",
    stack: "React · Node.js · Socket.io · MongoDB",
    desc: {
      es: "Juego musical multijugador en tiempo real: adiviná la canción a partir de un preview (API de Deezer).",
      en: "Real-time multiplayer music game: guess the song from a preview (Deezer API).",
    },
  },
  {
    title: "Gamelitics",
    stack: "Python · Pandas · XGBoost · Flask",
    desc: {
      es: "EDA de la industria de videojuegos (RAWG + Steam) y modelo para predecir el éxito de un juego.",
      en: "Video-game industry EDA (RAWG + Steam) and a model to predict a game's success.",
    },
  },
  {
    title: "Quizzer",
    stack: "Python · Web scraping · SQL · React",
    desc: {
      es: "Quizzes de respuesta oculta construidos con datos reales obtenidos por web scraping.",
      en: "Hidden-answer quizzes built on real data collected via web scraping.",
    },
  },
  {
    title: "Letterflix",
    stack: "React · TMDB API · Node.js · SQL",
    desc: {
      es: "SPA estilo streaming centrada en reseñas y puntajes de películas.",
      en: "Streaming-style SPA focused on film reviews and ratings.",
    },
  },
  {
    title: "Repes",
    stack: "React · TypeScript · Node.js · SQL",
    desc: {
      es: "App mobile-first para planificar rutinas y seguir la progresión de cargas.",
      en: "Mobile-first app to plan workouts and track lifting progress.",
    },
  },
  {
    title: "Mundialitos",
    stack: "React · LocalStorage",
    desc: {
      es: "Prodes instantáneos con amigos, sin registro.",
      en: "Instant prediction games with friends, no sign-up.",
    },
  },
];
