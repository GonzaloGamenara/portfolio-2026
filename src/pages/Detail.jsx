const Detail = () => {
  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up flex flex-col gap-8 bg-[#FDFBF7]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="border-[3px] border-black bg-[#FFDE4D] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-mono font-bold text-2xl mb-4 uppercase tracking-wider text-black">
              🎓 Educación & Universidad
            </h2>

            <div className="flex flex-col gap-4">
              <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono">
                <h3 className="font-bold text-xl text-black tracking-tight">
                  Licenciatura en Desarrollo de Software
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5 mb-4">
                  UNSAM (Universidad Nacional de San Martín) • 2025 - Presente
                </p>

                <p className="text-sm text-slate-700 leading-relaxed mb-4 border-l-2 border-black pl-3">
                  Formación universitaria enfocada en el diseño, arquitectura y
                  ciclo de vida completo de productos digitales.
                </p>

                <ul className="space-y-3 text-sm text-slate-800">
                  <li className="flex items-baseline gap-2">
                    <span className="text-black font-bold text-xs select-none">
                      ▪
                    </span>
                    <span>
                      <strong className="text-black font-bold">
                        Ingeniería:
                      </strong>{" "}
                      Arquitectura de sistemas, patrones de diseño y desarrollo
                      seguro.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-black font-bold text-xs select-none">
                      ▪
                    </span>
                    <span>
                      <strong className="text-black font-bold">Datos:</strong>{" "}
                      Modelado SQL/NoSQL, pipelines ETL e Inteligencia
                      Artificial.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-black font-bold text-xs select-none">
                      ▪
                    </span>
                    <span>
                      <strong className="text-black font-bold">Gestión:</strong>{" "}
                      Ingeniería de requisitos, metodologías ágiles y diseño
                      UX/UI.
                    </span>
                  </li>
                </ul>

                {/* SECCIÓN DE TRAYECTORIA PREVIA */}
                <div className="mt-5 pt-4 border-t-2 border-dashed border-slate-200">
                  <span className="text-[10px] font-extrabold bg-slate-100 px-2 py-0.5 text-slate-600 border border-slate-300 uppercase tracking-wider">
                    Trayectoria Previa
                  </span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    • Cursado primer año completo de la{" "}
                    <strong className="text-black font-bold">
                      Tecnicatura en Programación Informática
                    </strong>
                    , consolidando las bases de lógica algorítmica, estructuras
                    de datos y paradigmas de desarrollo antes de dar el salto al
                    título de grado actual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Rosa - Cursos y Certificaciones */}
          <div className="border-[3px] border-black bg-[#FFB0B0] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-mono font-bold text-2xl mb-4 uppercase tracking-wider text-black">
              📜 Cursos y Certificaciones
            </h2>
            <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono">
              <div className="space-y-6">
                {/* Certificado 1: Data Analytics */}
                <div className="border-l-2 border-black pl-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-base text-black tracking-tight">
                      Certificación en Data Analytics
                    </h4>
                    <span className="bg-[#FFFF00] text-black text-[10px] font-extrabold px-1.5 py-0.5 border border-black uppercase tracking-wider shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] select-none">
                      ⭐ Top 10%
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                    <span>Coderhouse • 2025</span>
                    <span>•</span>
                    <a
                      href="https://pub.coderhouse.com/certificates/d6a5811a-19eb-446b-861e-ba4331b45159?v=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-bold hover:text-slate-600 underline decoration-1 underline-offset-2 transition-colors"
                    >
                      Ver credencial ↗
                    </a>
                  </div>

                  <p className="text-xs md:text-sm text-slate-700 mt-2 leading-relaxed">
                    Modelado de bases de datos relacionales y manipulación
                    avanzada con{" "}
                    <strong className="text-black font-bold">SQL</strong> (Joins
                    y subconsultas). Estructuración de dashboards e inteligencia
                    de negocios mediante{" "}
                    <strong className="text-black font-bold">Power BI</strong>{" "}
                    utilizando funciones{" "}
                    <strong className="text-black font-bold">DAX</strong>{" "}
                    avanzadas. Introducción al análisis de tendencias
                    estadísticas con{" "}
                    <strong className="text-black font-bold">Python</strong> en
                    Google Colab.
                  </p>
                </div>

                {/* Certificado 2: Scientific Computing with Python */}
                <div className="border-l-2 border-slate-300 pl-3">
                  <h4 className="font-bold text-base text-slate-900 tracking-tight">
                    Scientific Computing with Python
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                    <span>freeCodeCamp • ~300 hs • 2025</span>
                    <span>•</span>
                    <a
                      href="https://freecodecamp.org/certification/gonzalogamenara/scientific-computing-with-python-v7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-bold hover:text-black underline decoration-1 underline-offset-2 transition-colors"
                    >
                      Ver credencial ↗
                    </a>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    Enfoque en desarrollo lógico puro, estructuras de datos
                    avanzadas y resolución de problemas algorítmicos complejos
                    utilizando{" "}
                    <strong className="text-black font-medium">Python</strong>.
                  </p>
                </div>

                {/* Certificado 3: Responsive Web Design */}
                <div className="border-l-2 border-slate-300 pl-3">
                  <h4 className="font-bold text-base text-slate-900 tracking-tight">
                    Responsive Web Design
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                    <span>freeCodeCamp • ~300 hs • 2024</span>
                    <span>•</span>
                    <a
                      href="https://freecodecamp.org/certification/gonzalogamenara/responsive-web-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-bold hover:text-black underline decoration-1 underline-offset-2 transition-colors"
                    >
                      Ver credencial ↗
                    </a>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    Estructuración de arquitecturas web semánticas, maquetación
                    adaptativa nativa y diseño responsivo utilizando{" "}
                    <strong className="text-black font-medium">
                      HTML5 y CSS3
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA (Habilidades blandas e Idiomas) */}
        <div className="flex flex-col gap-8">
          {/* HEADER DE LA SECCIÓN */}
          <div className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-max">
            <h1 className="font-mono font-bold text-4xl md:text-5xl text-black tracking-tight">
              Mi trayectoria
            </h1>
            <p className="font-mono text-sm text-slate-600 mt-2">
              En esta sección detallo mi trayectoria académica y laboral!
            </p>
          </div>
          {/* Tarjeta Verde - Soft Skills */}
          <div className="border-[3px] border-black bg-[#A1E3CB] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1">
            <h2 className="font-mono font-bold text-2xl mb-4 uppercase tracking-wider text-black flex items-center gap-2">
              <span>🧠</span> MÁS SOBRE MÍ
            </h2>

            <div className="flex flex-col gap-6 font-mono">
              {/* Idiomas */}
              <div>
                <h3 className="font-bold text-xs mb-2 uppercase text-slate-600 tracking-wider">
                  Idiomas
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 border-2 border-black text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Español (Nativo)
                  </span>
                  <span className="bg-white px-3 py-1 border-2 border-black text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Inglés (B1+ - Intermedio)
                  </span>
                </div>
              </div>

              {/* Habilidades Blandas */}
              <div>
                <h3 className="font-bold text-xs mb-2 uppercase text-slate-600 tracking-wider">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Resolutivo",
                    "Organizado",
                    "Gestión de Equipos",
                    "Facilidad de Aprendizaje",
                    "Trabajo en Equipo",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-3 py-1 border-2 border-black text-xs font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perfil Híbrido (¡Limpiado de bugs!) */}
              <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold text-sm mb-1.5 text-black flex items-center gap-1">
                  ⚡ Perfil Híbrido
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Combino una base de escuela técnica (electrónica y taller) que
                  estructuró mi pensamiento lógico y de sistemas, con más de 5
                  años de experiencia liderando y gestionando equipos en el
                  ámbito comercial como encargado. Un puente sólido entre la
                  resolución analítica y las habilidades interpersonales.
                </p>
              </div>

              {/* Metodologías & Prácticas */}
              <div>
                <h3 className="font-bold text-xs mb-2 uppercase text-slate-600 tracking-wider">
                  Metodologías & Prácticas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Scrum",
                    "Kanban",
                    "Git / GitHub",
                    "QA / Testing",
                    "CI/CD Básico",
                    "C++ Embebido",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-slate-900 text-white px-2.5 py-1 border border-black text-[11px] font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perfil en Cifras */}
              <div className="pt-2">
                <h3 className="font-bold text-xs mb-3 uppercase text-slate-600 tracking-wider">
                  Perfil en Cifras
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                    <span className="block font-black text-xl text-black">
                      +5 Años
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-tight block mt-0.5 leading-none">
                      Gestión Comercial
                    </span>
                  </div>
                  <div className="bg-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                    <span className="block font-black text-xl text-black">
                      +15
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-tight block mt-0.5 leading-none">
                      Proyectos Web
                    </span>
                  </div>
                  <div className="bg-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center col-span-2">
                    <span className="block font-black text-xl text-black">
                      600+ Horas
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-tight block mt-0.5 leading-none">
                      Especialización Autónoma Certificada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
