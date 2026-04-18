import miFoto from '../assets/gonza.png';

const ProfileCard = () => {
  return (
    // Le sacamos el xl:w-2/3 de acá, lo va a manejar el Home
    <div className="bg-neo-yellow border-[3px] border-black shadow-neo p-6 w-full">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        
        {/* Avatar más grande (w-40 h-40 en vez de 32) */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-65 md:h-80 border-[3px]  shrink-0 overflow-hidden">
          <img src={miFoto} alt="Gonza" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-4 sm:mb-0">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight ">Gonzalo Gamenara</h2>
              <p className="font-medium text-sm border-black inline-block pb-1 mb-4">gonzagamenara@gmail.com</p>
            </div>
            <div className="flex gap-4  ">
              <button className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors">in</button>
              <button className="w-10 h-10   border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors">gh</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="border-2 border-black p-2 text-center bg-neo-yellow-light"> 
              <p className="font-black font-mono text-lg sm:text-xl">React</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Frontend</p>
            </div>
            <div className="border-2 border-black bg-neo-yellow-light p-2 text-center">
              <p className="font-black font-mono text-lg sm:text-xl">UI/UX</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Diseño</p>
            </div>
            <div className="border-2 border-black bg-neo-yellow-light p-2 text-center">
              <p className="font-black font-mono text-lg sm:text-xl">Godot</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Game Dev</p>
            </div>
          </div>

          <p className="text-sm font-medium mb-6 leading-relaxed">
            Estudiante de Ingeniería en Informática con una pasión por el desarrollo frontend, el diseño UI/UX y la creación de videojuegos. Con experiencia en React, diseño de interfaces y desarrollo con Godot, busco oportunidades para aplicar mis habilidades y seguir creciendo profesionalmente.
          </p>

          {/* Botones ajustados: ya no tienen flex-1, se adaptan a su contenido */}
          <div className="flex gap-4 font-mono w-full" >
            <button className="flex flex-1 items-center justify-center gap-2 bg-black text-white font-bold py-2 border-2 border-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                {/* Ícono de teléfono en SVG */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                        >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            Contactar
            </button>
            <button className="flex-1 bg-white font-bold py-2 border-2 border-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;