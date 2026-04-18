const Marquee = () => {
  return (
    <div className="w-full bg-neo-yellow border-y-[3px] border-black overflow-hidden py-2 my-8 shadow-neo relative rotate-1deg hover:rotate-0 transition-transform">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {/* Repetimos el texto varias veces para que el bucle sea fluido */}
        <div className="flex text-xl font-black uppercase w-1/2 justify-around">
          <span>⚡ React</span>
          <span>•</span>
          <span>🎨 TailWind</span>
          <span>•</span>
          <span>🕹️ Vite</span>
          <span>•</span>
          <span>🎥 Node</span>
          <span>•</span>
        </div>
        <div className="flex text-xl font-black uppercase w-1/2 justify-around">
          <span>⚡ React</span>
          <span>•</span>
          <span>🎨 TailWind</span>  
          <span>•</span>
          <span>🕹️ Vite</span>
          <span>•</span>
          <span>🎥 Node</span>
          <span>•</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;