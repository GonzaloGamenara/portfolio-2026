import Sidebar from './components/Sidebar';
import ReviewCard from './components/ReviewCard';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    // Contenedor principal que centra todo en la pantalla
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      
      {/* La "Ventana" principal con el estilo Neo-Brutalista */}
      <div className="w-full max-w-6xl border-[3px] border-black shadow-neo flex flex-col md:flex-row overflow-hidden bg-neo-bg">
        
          {/* Sidebar (Columna Izquierda) */}
        <Sidebar />

        {/* Área de Contenido Principal (Columna Derecha) */}
        <main className="flex-1 p-6 md:p-10">
          
          {/* Header del contenido (Barra de búsqueda, etc) */}
          <header className="flex justify-between items-center mb-8 border-b-[3px] border-black pb-4 animate-slide-up">
            <button className="border-2 border-black p-1 hover:bg-neo-green transition-colors">
               ← 
            </button>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Find projects, skills..." 
                className="border-2 border-black px-4 py-1 outline-none focus:bg-white bg-transparent"
              />
            </div>
          </header>

          {/* Acá va a ir la info principal */}
          <div>
            <h1 className="text-4xl font-black mb-6 tracking-tight">Trainer info</h1>
            {/* Contenedor de la Tarjeta y Proyectos */}
          <div className="flex flex-col xl:flex-row gap-8 mb-8 animate-slide-up" 
                style={{ animationDelay: "150ms" }}>
            
            {/* Tarjeta Amarilla de Perfil importada */}
            <ProfileCard />

            {/* Columna de Proyectos (Equivalente al Work Experience de la imagen) */}
            <div className="xl:w-1/3 flex flex-col gap-4">
              <h3 className="font-black text-xl mb-1">Proyectos Destacados</h3>
              
              {/* Proyecto 1 */}
              <div className="bg-white border-[3px] border-black p-4 shadow-neo flex gap-3 hover:bg-neo-bg transition-colors">
                <div className="text-2xl">🪑</div>
                <div>
                  <h4 className="font-black text-sm">Entre Vetas</h4>
                  <p className="text-[11px] font-bold uppercase mb-1">E-commerce • React & Tailwind</p>
                  <p className="text-xs font-medium leading-tight">Desarrollo frontend y rebranding de identidad visual geométrica.</p>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="bg-white border-[3px] border-black p-4 shadow-neo flex gap-3 hover:bg-neo-bg transition-colors">
                <div className="text-2xl">📱</div>
                <div>
                  <h4 className="font-black text-sm">HogarYa</h4>
                  <p className="text-[11px] font-bold uppercase mb-1">App Móvil • UI Layout</p>
                  <p className="text-xs font-medium leading-tight">Diseño de interfaz de usuario y análisis de User Journey Map.</p>
                </div>
              </div>

            </div>
          </div>
          {/* Título de la sección inferior */}
          <div className="flex justify-between items-end mb-4 mt-12 animate-slide-up" 
                style={{ animationDelay: "300ms" }}>
            <h2 className="text-4xl font-black tracking-tight">Reviews & Stats</h2>
            <button className="border-2 border-black px-4 py-1 text-sm font-bold bg-white hover:bg-neo-yellow shadow-neo transition-colors">
              Ver todos
            </button>
          </div>

          {/* Grid Inferior (Stats rosas + Reviews blancos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-slide-up" 
                style={{ animationDelay: "450ms" }}>
            
            {/* Caja Rosa de Estadísticas */}
            <div className="bg-neo-pink border-[3px] border-black shadow-neo p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⭐</span>
                  <span className="font-black text-2xl">4.9 / 5.0</span>
                </div>
                <p className="font-bold text-sm">Satisfacción en proyectos</p>
              </div>
              
              <div className="mt-6">
                <p className="font-black text-3xl">100%</p>
                <p className="font-bold text-xs">Entregas a tiempo</p>
                
                {/* SVG simulando un gráfico de línea abstracto */}
                <svg className="w-full h-12 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path 
                    d="M0,25 C15,25 20,5 35,10 C50,15 60,25 75,15 C90,5 100,20 100,20" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Reviews generadas con el nuevo componente */}
            <ReviewCard 
              client="Fábrica de Muebles"
              project="Identidad y E-commerce"
              rating="5.0"
              text="El rediseño de la identidad visual fue clave. La aplicación de estrategias SEO en las descripciones y la interfaz mejoraron nuestra presencia online."
            />
            
            <ReviewCard 
              client="Startup Salud"
              project="App para Kinesiólogos"
              rating="4.8"
              text="Gran trabajo estructurando los layouts. El análisis del User Journey Map fue fundamental para que la navegación fuera súper intuitiva para los pacientes."
            />

            <ReviewCard 
              client="Agencia Creativa"
              project="Producción Audiovisual"
              rating="5.0"
              text="Impecable. No solo tiene buen ojo para la estética minimalista, sino que el material entregado en 4K ProRes mantuvo una calidad cinematográfica."
            />

          </div>
          </div>

        </main>

      </div>
    </div>
  )
}

export default App