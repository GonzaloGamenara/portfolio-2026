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
        <div className="flex justify-between items-center mb-2">
          <span className="font-black text-xl">{name}</span>
        </div>

        <div className="relative w-full h-48 mb-3 border-2 border-black bg-gray-100 overflow-hidden">
          <video
            src={videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className={`absolute inset-0 transition-opacity duration-150 flex items-center justify-center ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          ></div>

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

        <p className="text-[10px] font-bold text-gray-500 uppercase mb-3">
          {resume}
        </p>
        <p className="text-base font-medium leading-relaxed">"{tech}"</p>
      </div>
    </div>
  );
};

export default ProjectCard;
