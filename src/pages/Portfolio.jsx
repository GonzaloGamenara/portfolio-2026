const Portfolio = () => {
  // Un array con la info de tus proyectos para que sea fácil agregar más después
  const projects = [
    {
      id: 1,
      title: "Entre Vetas",
      category: "Frontend & Rebranding",
      tech: "React, Tailwind CSS",
      desc: "Desarrollo frontend para fábrica de muebles. Diseño minimalista y geométrico con foco en e-commerce y estrategias SEO para catálogo.",
      icon: "🪑",
      color: "bg-neo-yellow"
    },
    {
      id: 2,
      title: "HogarYa",
      category: "App UI/UX",
      tech: "Figma, User Journey",
      desc: "Diseño de interfaz para aplicación móvil de servicios. Arquitectura limpia orientada a la usabilidad y seguimiento de asistencias.",
      icon: "📱",
      color: "bg-neo-pink"
    },
    {
      id: 3,
      title: "Dark Medieval",
      category: "Game Development",
      tech: "Godot (GDScript), Pixel Art",
      desc: "Desarrollo de mecánicas y diseño de assets pixel art para un prototipo de juego oscuro estilo metroidvania/roguelike.",
      icon: "⚔️",
      color: "bg-neo-green"
    },
    {
      id: 4,
      title: "Docu-Style Creator",
      category: "Producción Audiovisual",
      tech: "4K ProRes, Premiere Pro",
      desc: "Producción, grabación y edición de contenido cinematográfico para redes, optimizando settings de cámara e iluminación.",
      icon: "🎥",
      color: "bg-white"
    }
  ];

  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight">Mis Proyectos</h1>
        <p className="font-medium mt-2">Una selección de mis últimos trabajos en desarrollo y diseño.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className={`${proj.color} border-[3px] border-black shadow-neo p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl bg-white border-2 border-black p-2 shadow-neo">{proj.icon}</span>
                <span className="text-[10px] font-bold uppercase bg-black text-white px-2 py-1">{proj.category}</span>
              </div>
              <h2 className="text-2xl font-black mb-2">{proj.title}</h2>
              <p className="text-sm font-bold border-b-2 border-black inline-block mb-3">{proj.tech}</p>
              <p className="text-sm font-medium leading-relaxed mb-6">{proj.desc}</p>
            </div>
            
            <button className="bg-white border-2 border-black font-bold py-2 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all mt-auto">
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;