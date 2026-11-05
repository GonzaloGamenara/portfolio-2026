// Single source of truth for everything about me.
// Bilingual fields are { es, en } and resolved with `t()` from usePreferences().

export const SITE_URL = "https://portafolio-blond-six.vercel.app";

export const profile = {
  name: "Gonzalo Gamenara",
  initials: "GG",
  email: "gonzagamenara@gmail.com",
  linkedin: "https://www.linkedin.com/in/gonzalo-gamenara-6bb130238/",
  github: "https://github.com/GonzaloGamenara",
  location: {
    es: "San Martín, Buenos Aires, Argentina",
    en: "Buenos Aires, Argentina",
  },
  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  availability: {
    es: "Full Stack en Deheza (Shell)",
    en: "Full Stack Dev at Deheza (Shell)",
  },
  headline: {
    es: "Conecto backend, frontend e infraestructura para que el sistema funcione de punta a punta.",
    en: "I connect backend, frontend and infrastructure so the whole system works end to end.",
  },
  summary: {
    es: "Trabajo como Desarrollador Full Stack en Deheza (Shell): backend en PHP/Laravel y Node.js sobre MySQL y MariaDB, frontends en React con TypeScript y servicios en Azure. En paralelo desarrollo y opero el e-commerce de mi propia marca de muebles, EntreVetas, y curso la Licenciatura en Desarrollo de Software en la UNSAM.",
    en: "I work as a Full Stack Developer at Deheza (Shell): PHP/Laravel and Node.js backends on MySQL and MariaDB, React + TypeScript frontends and Azure services. On the side I build and run the e-commerce of my own furniture brand, EntreVetas, and study a Software Development degree at UNSAM.",
  },
  pitch: {
    es: "Vengo de más de 7 años liderando equipos en comercio y gastronomía. Eso me dejó algo que no se aprende en un tutorial: pensar el software como una herramienta para el negocio, hablar con clientes reales y entregar bajo presión.",
    en: "I spent 7+ years leading teams in retail and hospitality. That taught me something no tutorial does: treating software as a tool for the business, talking to real customers and shipping under pressure.",
  },
};

export const stats = [
  { value: "6+", label: { es: "Apps propias en producción", en: "Own apps in production" } },
  { value: "3", label: { es: "Años emprendiendo", en: "Years running a business" } },
  { value: "600+", label: { es: "Horas certificadas", en: "Certified hours" } },
  { value: "7+", label: { es: "Años liderando equipos", en: "Years leading teams" } },
];

export const experience = [
  {
    id: "deheza",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    company: "Deheza (Shell)",
    start: { es: "Jul 2026", en: "Jul 2026" },
    end: { es: "Presente", en: "Present" },
    current: true,
    accent: "bg-yellow",
    bullets: {
      es: [
        "Desarrollo y mantenimiento de backend en PHP con Laravel y Node.js, sobre bases MySQL y MariaDB.",
        "Interfaces en React con JavaScript y TypeScript conectadas a las APIs internas.",
        "Integración entre sistemas y despliegue de servicios en Azure.",
      ],
      en: [
        "Backend development and maintenance in PHP with Laravel and Node.js, on MySQL and MariaDB databases.",
        "React interfaces in JavaScript and TypeScript connected to internal APIs.",
        "Systems integration and service deployment on Azure.",
      ],
    },
  },
  {
    id: "entrevetas",
    role: { es: "Fundador & Desarrollador Full Stack", en: "Founder & Full Stack Developer" },
    company: "EntreVetas · Muebles de madera a medida",
    url: "https://entrevetas.com.ar",
    start: { es: "Nov 2023", en: "Nov 2023" },
    end: { es: "Presente", en: "Present" },
    current: true,
    accent: "bg-green",
    bullets: {
      es: [
        "Diseñé y desarrollé el e-commerce de la marca con Next.js, TypeScript y Supabase: catálogo con precios online, pedidos a medida y stock de entrega inmediata.",
        "Construí herramientas internas en Python y tableros de métricas para seguir pedidos, costos y márgenes con datos reales.",
        "Opero el negocio completo: proveedores, ventas por MercadoLibre y canal directo, y campañas en Meta Ads.",
      ],
      en: [
        "Designed and built the brand's e-commerce with Next.js, TypeScript and Supabase: online price catalogue, custom orders and ready-to-ship stock.",
        "Built internal Python tools and metrics dashboards to track orders, costs and margins with real data.",
        "Run the whole operation: suppliers, sales through MercadoLibre and direct channels, and Meta Ads campaigns.",
      ],
    },
  },
  {
    id: "freelance",
    role: { es: "Desarrollador Web", en: "Web Developer" },
    company: { es: "Proyectos propios", en: "Personal projects" },
    start: { es: "2025", en: "2025" },
    end: { es: "Presente", en: "Present" },
    current: true,
    accent: "bg-blue",
    bullets: {
      es: [
        "Productos propios del relevamiento al deploy en Vercel: MIGRA, Titular y Gastos, entre otros.",
        "Foco en mobile-first, performance y una identidad visual propia para cada producto.",
      ],
      en: [
        "Own products from discovery to Vercel deploy: MIGRA, Titular and Gastos, among others.",
        "Focus on mobile-first, performance and a distinct visual identity for each product.",
      ],
    },
  },
  {
    id: "eneldo",
    role: { es: "Encargado General", en: "Store Manager" },
    company: "Eneldo Dietética",
    start: { es: "Mar 2020", en: "Mar 2020" },
    end: { es: "Nov 2025", en: "Nov 2025" },
    accent: "bg-pink",
    bullets: {
      es: ["Gestión integral del local: equipo, caja, compras a proveedores y control de stock durante más de 5 años."],
      en: ["Full store management for 5+ years: staff, cash, supplier purchasing and inventory control."],
    },
  },
  {
    id: "asterix",
    role: { es: "Jefe de Barra", en: "Head Bartender" },
    company: "Asterix Bar",
    start: { es: "Abr 2018", en: "Apr 2018" },
    end: { es: "Ene 2020", en: "Jan 2020" },
    accent: "bg-orange",
    bullets: {
      es: ["Coordinación del equipo de barra en noches de alto volumen y atención al público bajo presión."],
      en: ["Led the bar team on high-volume nights, with customer service under pressure."],
    },
  },
];

export const education = [
  {
    title: { es: "Licenciatura en Desarrollo de Software", en: "B.Sc. in Software Development" },
    school: "UNSAM · Universidad Nacional de San Martín",
    period: { es: "2025 – Presente", en: "2025 – Present" },
    detail: {
      es: "Arquitectura y patrones de diseño, modelado SQL/NoSQL, ingeniería de requisitos, metodologías ágiles y UX/UI.",
      en: "Architecture and design patterns, SQL/NoSQL modelling, requirements engineering, agile methods and UX/UI.",
    },
  },
  {
    title: { es: "Tecnicatura en Programación Informática (1er año)", en: "Programming Technician degree (1st year)" },
    school: "UNSAM",
    period: { es: "Previo", en: "Previous" },
    detail: {
      es: "Bases de lógica algorítmica, estructuras de datos y paradigmas de programación.",
      en: "Foundations in algorithms, data structures and programming paradigms.",
    },
  },
];

export const certifications = [
  {
    title: { es: "Data Analytics", en: "Data Analytics" },
    issuer: "Coderhouse",
    year: "2025",
    badge: { es: "Top 10%", en: "Top 10%" },
    url: "https://pub.coderhouse.com/certificates/d6a5811a-19eb-446b-861e-ba4331b45159?v=1",
    detail: {
      es: "SQL (joins, subconsultas), modelado relacional, dashboards en Power BI con DAX y análisis estadístico con Python.",
      en: "SQL (joins, subqueries), relational modelling, Power BI dashboards with DAX and statistical analysis in Python.",
    },
  },
  {
    title: { es: "Scientific Computing with Python", en: "Scientific Computing with Python" },
    issuer: "freeCodeCamp · 300 h",
    year: "2025",
    url: "https://freecodecamp.org/certification/gonzalogamenara/scientific-computing-with-python-v7",
    detail: {
      es: "Algoritmia, estructuras de datos y resolución de problemas con Python.",
      en: "Algorithms, data structures and problem solving in Python.",
    },
  },
  {
    title: { es: "Responsive Web Design", en: "Responsive Web Design" },
    issuer: "freeCodeCamp · 300 h",
    year: "2024",
    url: "https://freecodecamp.org/certification/gonzalogamenara/responsive-web-design",
    detail: {
      es: "HTML semántico, CSS moderno, accesibilidad y diseño adaptativo.",
      en: "Semantic HTML, modern CSS, accessibility and responsive design.",
    },
  },
];

export const skills = [
  {
    group: { es: "Frontend", en: "Frontend" },
    accent: "bg-yellow",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Vite"],
  },
  {
    group: { es: "Backend & bases de datos", en: "Backend & databases" },
    accent: "bg-pink",
    items: ["PHP", "Laravel", "Node.js", "Express", "MySQL", "MariaDB", "PostgreSQL", "Supabase", "MongoDB", "REST APIs"],
  },
  {
    group: { es: "Datos", en: "Data" },
    accent: "bg-green",
    items: ["SQL", "Python", "Pandas", "Power BI", "DAX", "Excel"],
  },
  {
    group: { es: "Herramientas & prácticas", en: "Tools & practices" },
    accent: "bg-blue",
    items: ["Azure", "Git & GitHub", "Vercel", "Scrum", { es: "Análisis funcional", en: "Functional analysis" }, "Meta Ads", "Java", "C++"],
  },
];

export const marquee = [
  "PHP",
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Supabase",
  "MySQL",
  "Azure",
  "Python",
  "SQL",
  "Power BI",
  "MongoDB",
  "Java",
];

export const languages = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "Intermedio (B1+)", en: "Intermediate (B1+)" } },
];

export const softSkills = {
  es: ["Resolución de problemas", "Liderazgo de equipos", "Comunicación con clientes", "Gestión del tiempo", "Aprendizaje rápido"],
  en: ["Problem solving", "Team leadership", "Client communication", "Time management", "Fast learner"],
};
