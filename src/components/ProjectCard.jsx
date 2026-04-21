import { useState, useRef } from "react";

const ProjectCard = ({ name, videoUrl, resume, tech, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoPlayingRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoPlayingRef.current) {
      videoPlayingRef.current.currentTime = 0;
      videoPlayingRef.current
        .play()
        .catch((error) => console.log("Autoplay preventido:", error));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoPlayingRef.current?.pause();
  };

  return (
    <div
      className="bg-white border-[3px] border-black shadow-neo p-4 flex flex-col justify-between hover:bg-neo-bg transition-colors cursor-pointer animate-scale-up"
      style={{ animationDelay: delay }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {/* Título: Mantengo tu estilo original */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-black text-xl">{name}</span>
        </div>

        {/* Contenedor del video: Estilo Neobrutalista 100% */}
        {/* 1. Eliminé rounded */}
        {/* 2. Añadí border-2 border-black (afilado) */}
        {/* 3. Fondo de color plano para cuando el video carga */}
        <div className="relative w-full h-48 mb-3 border-2 border-black bg-gray-100 overflow-hidden">
          {/* 1. VIDEO DE FONDO (El primer frame) */}
          <video
            src={videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 2. CAPA ESTÉTICA NEOBRUTALISTA (Sobre el video estático) */}
          {/* Esta capa usa el color amarillo de tu diseño y oculta el video */}
          {/* Al hacer hover, desaparece con una transición rápida (duration-150) */}
          <div
            className={`absolute inset-0 bg-gray-300 transition-opacity duration-150 flex items-center justify-center ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Opcional: Un pequeño icono de "Play" estilo pixelart o minimalista aquí */}
            <span className="font-black text-xs uppercase text-black tracking-widest">
              Vista Previa
            </span>
          </div>

          {/* 3. VIDEO PRINCIPAL (Se reproduce en hover) */}
          <video
            ref={videoPlayingRef}
            src={videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Textos descriptivos: Mantengo tu estilo original */}
        <p className="text-[10px] font-bold text-gray-500 uppercase mb-3">
          {resume}
        </p>
        <p className="text-base font-medium leading-relaxed">"{tech}"</p>
      </div>
    </div>
  );
};

export default ProjectCard;
