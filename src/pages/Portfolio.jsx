import { useState } from 'react';

const Portfolio = () => {
  // Estado para saber qué proyecto está abierto. Si es null, el modal está cerrado.
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Entre Vetas",
      category: "Frontend & Rebranding",
      tech: "React, Tailwind CSS",
      desc: "Desarrollo frontend para fábrica de muebles. Diseño minimalista y geométrico con foco en e-commerce y estrategias SEO para catálogo.",
      icon: "🪑",
      color: "bg-neo-yellow",
      details: "Para este proyecto, el foco estuvo en la velocidad de carga y en estructurar correctamente las etiquetas semánticas para potenciar el SEO en los listados de productos."
    },
    {
      id: 2,
      title: "HogarYa",
      category: "App UI/UX",
      tech: "Figma, User Journey",
      desc: "Diseño de interfaz para aplicación móvil de servicios. Arquitectura limpia orientada a la usabilidad y seguimiento de asistencias.",
      icon: "📱",
      color: "bg-neo-pink",
      details: "Se realizó un análisis exhaustivo del User Journey Map para garantizar que personas de todas las edades puedan solicitar asistencia domiciliaria en menos de 3 clics."
    },
    {
      id: 3,
      title: "Dark Medieval",
      category: "Game Development",
      tech: "Godot (GDScript), Pixel Art",
      desc: "Desarrollo de mecánicas y diseño de assets pixel art para un prototipo de juego oscuro estilo metroidvania/roguelike.",
      icon: "⚔️",
      color: "bg-neo-green",
      details: "Prototipo jugable. Lógica de inventario, sistema de combate y colisiones programados en GDScript. Assets diseñados a medida manteniendo una paleta de colores restringida."
    },
    {
      id: 4,
      title: "Docu-Style Creator",
      category: "Producción Audiovisual",
      tech: "4K ProRes, Premiere Pro",
      desc: "Producción, grabación y edición de contenido cinematográfico para redes, optimizando settings de cámara e iluminación.",
      icon: "🎥",
      color: "bg-white",
      details: "Color grading técnico y montaje dinámico. El material fue masterizado priorizando la retención de audiencia sin perder el look documental y cinematográfico."
    }
  ];

  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up relative">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight font-mono">Mis Proyectos</h1>
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
              <h2 className="text-2xl font-black mb-2 font-mono">{proj.title}</h2>
              <p className="text-sm font-bold border-b-2 border-black inline-block mb-3">{proj.tech}</p>
              <p className="text-sm font-medium leading-relaxed mb-6">{proj.desc}</p>
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
                <h3 className="font-black text-2xl font-mono">{selectedProject.title}</h3>
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
                <span className="bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">{selectedProject.category}</span>
                <span className="border-2 border-black text-xs font-bold px-3 py-1 bg-white">{selectedProject.tech}</span>
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
                   Acá vas a pegar el &lt;iframe&gt; de YouTube o el export HTML5 de tu juego.
                 </p>
                 {/* Patrón de puntitos de fondo para la caja vacía */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              </div>

              {/* Botón extra abajo */}
              <div className="mt-8 flex justify-end border-t-[3px] border-black pt-6">
                 <button className="bg-neo-yellow border-2 border-black font-bold px-8 py-2 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                  Visitar Repositorio
                 </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;