const ProfileCard = () => {
  return (
    <div className="bg-neo-yellow border-[3px] border-black shadow-neo p-6 xl:w-2/3">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        
        {/* Avatar cuadrado */}
        <div className="w-32 h-32 bg-neo-pink border-[3px] border-black shadow-neo shrink-0 overflow-hidden">
          <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Gonza&backgroundColor=fca5d3" alt="Gonza" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-4 sm:mb-0">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Gonza</h2>
              <p className="font-medium text-sm border-b-2 border-black inline-block pb-1 mb-4">hola@tudominio.com</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors">in</button>
              <button className="w-8 h-8 border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors">gh</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="border-2 border-black bg-transparent p-2 text-center">
              <p className="font-black text-lg sm:text-xl">React</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Frontend</p>
            </div>
            <div className="border-2 border-black bg-transparent p-2 text-center">
              <p className="font-black text-lg sm:text-xl">UI/UX</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Diseño</p>
            </div>
            <div className="border-2 border-black bg-transparent p-2 text-center">
              <p className="font-black text-lg sm:text-xl">Godot</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">Game Dev</p>
            </div>
          </div>

          <p className="text-sm font-medium mb-6 leading-relaxed">
            Desarrollador frontend apasionado por crear interfaces limpias, modernas y geométricas. Experiencia en e-commerce y maquetado de aplicaciones móviles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-black text-white font-bold py-2 border-2 border-black hover:bg-gray-800 transition-colors">
              Contactar
            </button>
            <button className="flex-1 bg-white font-bold py-2 border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;