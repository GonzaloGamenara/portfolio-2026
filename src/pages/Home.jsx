import ProfileCard from '../components/ProfileCard';
import ReviewCard from '../components/ReviewCard';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up" style={{ animationDelay: "50ms" }}>

      {/* Título */}
      <div className="mt-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-6xl font-black font-mono tracking-tight">Portafolio</h1>
          <h2 className="hidden xl:block text-3xl font-black tracking-tight w-1/3 pl-8 font-mono">Experiencia</h2>
        </div>
        
        {/* Contenedor dividido: Tarjeta Amarilla (2/3) y Work Experience (1/3) */}
        <div className="flex flex-col xl:flex-row gap-8">
          
          <div className="xl:w-2/3">
            <ProfileCard />
          </div>

          {/* Columna Derecha de Experiencia */}
          <div className="xl:w-1/3 flex flex-col gap-4">
            <h2 className="xl:hidden text-2xl font-black tracking-tight mt-4 font-mono">Experiencia</h2>
            
            <div className="bg-white border-[3px] border-black p-4 flex gap-3 hover:bg-neo-bg transition-colors shadow-neo">
              <div className="text-2xl border-2 border-black p-1 h-fit bg-neo-green">🪑</div>
              <div>
                <h4 className="font-black text-sm">Emprendedor</h4>
                <p className="text-[10px] font-bold text-gray-600 mb-1">Entre Vetas Fábrica de Muebles</p>
                <p className="text-xs font-medium">Nov 2023 - Present</p>
              </div>
            </div>

            <div className="bg-white border-[3px] border-black p-4 flex gap-3 hover:bg-neo-bg transition-colors shadow-neo">
              <div className="text-2xl border-2 border-black p-1 h-fit bg-neo-pink">📱</div>
              <div>
                <h4 className="font-black text-sm">Encargado</h4>
                <p className="text-[10px] font-bold text-gray-600 mb-1">Eneldo</p>
                <p className="text-xs font-medium">Mar 2020 - Nov 2025</p>
              </div>
            </div>

            <div className="bg-white border-[3px] border-black p-4 flex gap-3 hover:bg-neo-bg transition-colors shadow-neo">
              <div className="text-2xl border-2 border-black p-1 h-fit bg-neo-yellow">🎥</div>
              <div>
                <h4 className="font-black text-sm">Docu-Style Content Creator</h4>
                <p className="text-[10px] font-bold text-gray-600 mb-1">Freelance</p>
                <p className="text-xs font-medium">Apr 2026 - Present</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      

      {/* Acá metemos la cinta infinita */}
      <Marquee />

      <div className="flex justify-between items-end mb-4 mt-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
        <h2 className="text-4xl font-black tracking-tight">Reviews & Stats</h2>
        <button className="border-2 border-black px-4 py-1 text-sm font-bold bg-white hover:bg-neo-yellow shadow-neo transition-colors">Ver todos</button>  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "450ms" }}>
        {/* Caja de Stats */}
        <div className="bg-neo-pink border-[3px] border-black shadow-neo p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⭐</span><span className="font-black text-2xl">4.9 / 5.0</span>
            </div>
            <p className="font-bold text-sm">Satisfacción en proyectos</p>
          </div>
          <div className="mt-6">
            <p className="font-black text-3xl">100%</p>
            <p className="font-bold text-xs">Entregas a tiempo</p>
            <svg className="w-full h-12 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0,25 C15,25 20,5 35,10 C50,15 60,25 75,15 C90,5 100,20 100,20" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <ReviewCard client="Fábrica de Muebles" project="Identidad y E-commerce" rating="5.0" text="El rediseño de la identidad visual fue clave. La aplicación de estrategias SEO mejoró nuestra presencia." />
        <ReviewCard client="Startup Salud" project="App para Kinesiólogos" rating="4.8" text="Gran trabajo estructurando los layouts. El análisis del User Journey Map fue fundamental." />
        <ReviewCard client="Agencia Creativa" project="Producción Audiovisual" rating="5.0" text="Impecable. El material entregado mantuvo una calidad cinematográfica espectacular." />
      </div>
    </main>
  );
};

export default Home;