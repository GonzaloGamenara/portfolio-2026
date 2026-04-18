import ProfileCard from '../components/ProfileCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto">
      <header className="flex justify-between items-center mb-8 border-b-[3px] border-black pb-4 animate-slide-up">
        <button className="border-2 border-black p-1 hover:bg-neo-green transition-colors">←</button>
        <div className="flex gap-4">
          <input type="text" placeholder="Find projects, skills..." className="border-2 border-black px-4 py-1 outline-none focus:bg-white bg-transparent" />
        </div>
      </header>

      <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
        <h1 className="text-4xl font-black mb-6 tracking-tight">Trainer info</h1>
        <ProfileCard />
      </div>

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