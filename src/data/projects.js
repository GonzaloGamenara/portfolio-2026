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
    imageFull: "/projects/entrevetas-full.webp", // full-page capture: scrolls on hover
    scrollDur: "9s",
    url: "https://entrevetas.com.ar",
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
    imageFull: "/projects/migra-full.webp", // full-page capture of the demo: scrolls on hover
    scrollDur: "4s",
    url: "https://migra-nine.vercel.app/demo",
    urlLabel: { es: "Probar la demo", en: "Try the demo" },
    cvSummary: {
      es: "Diario clínico de migraña: síntomas, desencadenantes y medicación, con informe para el neurólogo.",
      en: "Clinical migraine diary: symptoms, triggers and medication, with a report for the neurologist.",
    },
    summary: {
      es: "Diario clínico de migraña: registrás síntomas, comidas, hidratación y desencadenantes en segundos, controlás la medicación y llevás un informe listo para el neurólogo.",
      en: "A clinical migraine diary: log symptoms, meals, hydration and triggers in seconds, track medication and bring a ready-made report to your neurologist.",
    },
    details: {
      es: [
        "Registro en un toque de lo importante (\"algo raro\", dolor, agua, café) y una línea de tiempo del día para ver qué pasó antes de cada síntoma.",
        "Seguimiento de desencadenantes: estrés, horas de pantalla, actividad, clima, sueño y comidas salteadas.",
        "Control de medicación: toma nocturna con hora real y aviso de abuso de fármacos de rescate.",
        "Historial e informe clínico para la consulta; modo \"Atenuar\" para usarla con dolor.",
        "Cuentas privadas con login; la demo pública usa datos ficticios.",
      ],
      en: [
        "One-tap logging of what matters (\"something off\", pain, water, coffee) and a daily timeline to see what happened before each symptom.",
        "Trigger tracking: stress, screen time, activity, weather, sleep and skipped meals.",
        "Medication tracking: bedtime dose with real time and rescue-medication overuse alerts.",
        "History and clinical report for appointments; a dimmed mode to use it while in pain.",
        "Private accounts with login; the public demo uses fictional data.",
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
    imageFull: "/projects/titular-full.webp", // full-page capture: scrolls on hover
    scrollDur: "9s",
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
    imageFull: "/projects/gastos-full.webp", // full-page capture of the demo: scrolls on hover
    scrollDur: "4s",
    url: "https://moneybillscontrollergonza.vercel.app/demo",
    urlLabel: { es: "Probar la demo", en: "Try the demo" },
    cvSummary: {
      es: "Finanzas personales: gastos en segundos, techos por categoría y cuánto podés gastar hoy.",
      en: "Personal finance: expenses in seconds, category caps and how much you can spend today.",
    },
    summary: {
      es: "Finanzas personales sin vueltas: anotás un gasto en segundos, ponés techos por categoría y la app te dice cuánto podés gastar hoy para llegar a fin de mes.",
      en: "No-nonsense personal finance: log an expense in seconds, set category caps and the app tells you how much you can spend today to make it to month-end.",
    },
    details: {
      es: [
        "\"Hoy podés gastar\": presupuesto diario calculado con tus techos, lo comprometido y los días que faltan.",
        "Gastos fijos, tarjetas y suscripciones, con aviso cuando algo sube de precio.",
        "Techos por categoría, patrimonio, cierre de mes y división de cuentas entre personas.",
        "Pensada para usarse rápido: atajos de teclado (N gasto, I ingreso, / buscar).",
        "Cuentas con login; la demo pública usa datos ficticios y se borra al cerrar la pestaña.",
      ],
      en: [
        "\"You can spend today\": a daily budget computed from your caps, commitments and days left.",
        "Fixed costs, cards and subscriptions, with an alert when something gets more expensive.",
        "Category caps, net worth, month-end close and splitting bills between people.",
        "Built for speed: keyboard shortcuts (N expense, I income, / search).",
        "Accounts with login; the public demo uses fictional data and resets when you close the tab.",
      ],
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
