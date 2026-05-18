const Contact = () => {
  return (
    <main className=" flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up flex flex-col bg-[#FDFBF7] justify-between">
      <div className="h-full w-full mx-auto flex flex-col gap-6 md:gap-8 my-auto">
        <div className=" border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="font-mono font-bold text-4xl md:text-5xl text-black tracking-tight">
            Contacto
          </h1>
          <p className="font-mono text-sm text-slate-600 mt-2">
            Hablemos de propuestas laborales, proyectos o simplemente
            colaboremos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono h-full">
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border-[3px] border-black bg-[#FFDE4D] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-5 h-full"
            >
              {/* Campo: Nombre / Empresa */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xl font-bold text-black uppercase tracking-wide">
                  Nombre / Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej. Nombre del Recruiter o Tech Company"
                  className="w-full p-3 border-2 border-black bg-white focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm text-slate-800"
                  required
                />
              </div>

              {/* Campo: Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xl font-bold text-black uppercase tracking-wide">
                  Tu Email
                </label>
                <input
                  type="email"
                  placeholder="recruiter@empresa.com"
                  className="w-full p-3 border-2 border-black bg-white focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm text-slate-800"
                  required
                />
              </div>

              {/* Campo: Mensaje */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xl font-bold text-black uppercase tracking-wide">
                  Mensaje
                </label>
                <textarea
                  rows="5"
                  placeholder="Contame sobre la propuesta laboral, feedback de mi portfolio o el proyecto que tenés en mente..."
                  className="w-full p-3 border-2 border-black bg-white focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm text-slate-800 resize-none flex-1 min-h-[140px]"
                  required
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full py-3.5 bg-black text-white font-bold text-sm uppercase tracking-wider border-2 border-black hover:bg-slate-900 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(100,100,100,0.3)] transition-all mt-2"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* COLUMNA DERECHA: Canales Directos e Info del CV */}
          <div className="flex flex-col gap-6 justify-between">
            {/* Tarjeta 1: Canales Directos */}
            <div className="border-[3px] border-black bg-[#A1E3CB] p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
              <h2 className="font-bold text-lg uppercase tracking-wide text-black flex items-center gap-1.5">
                <span>📩</span> Canales Directos
              </h2>

              <div className="flex flex-col gap-2.5">
                {/* Email */}
                <a
                  href="mailto:gonzagamenara@gmail.com"
                  className="flex items-center gap-3 bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-xs"
                >
                  <span className="text-xl">✉️</span>
                  <div className="truncate text-xl">
                    <span className="block text-[9px] uppercase font-bold text-slate-400 leading-none">
                      Email
                    </span>
                    <span className="font-bold text-black truncate">
                      gonzagamenara@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-xs"
                >
                  <span className="text-xl">💼</span>
                  <div>
                    <span className="text-xl block text-[9px] uppercase font-bold text-slate-400 leading-none">
                      LinkedIn
                    </span>
                    <span className="font-bold text-black text-xl">
                      Gonzalo Gamenara
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/GonzaloGamenara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-xs"
                >
                  <span className="text-xl">💻</span>
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400 leading-none">
                      GitHub
                    </span>
                    <span className="font-bold text-black text-xl">
                      @GonzaloGamenara
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Info de Currículum (Mini Ficha de Identificación) */}
            {/* Tarjeta 2: Info de Currículum (Mini Ficha de Identificación) */}
            <div className="border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-5 flex-1 justify-between font-mono">
              <div>
                {/* Encabezado de la Ficha */}
                <div className="flex items-center justify-between border-b-[3px] border-black pb-3 mb-4">
                  <h2 className="font-bold text-lg uppercase tracking-wide text-black flex items-center gap-1.5">
                    <span>📄</span> Currículum Vitae
                  </h2>
                  <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-wider select-none shadow-[2px_2px_0px_0px_rgba(161,227,203,1)]">
                    Ficha OK
                  </span>
                </div>

                {/* Grupo 1: Datos Personales */}
                <div className="mb-4">
                  <span className="text-[9px] font-bold bg-slate-100 px-1.5 py-0.5 text-slate-500 uppercase tracking-wider border border-slate-200">
                    01 / Identificación
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 mt-2">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Nombre:
                      </span>
                      <span className="font-bold text-black">
                        Gonzalo Gamenara
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Edad / Idioma:
                      </span>
                      <span className="font-bold text-black">
                        26 años • Inglés B1+
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Ubicación:
                      </span>
                      <span className="font-bold text-black">
                        San Martín, BSAS
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Grupo 2: Core Académico */}
                <div className="mb-4">
                  <span className="text-[9px] font-bold bg-slate-100 px-1.5 py-0.5 text-slate-500 uppercase tracking-wider border border-slate-200">
                    02 / Académico
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 mt-2">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Grado:
                      </span>
                      <span className="font-bold text-black text-right text-[11px]">
                        Lic. Software (UNSAM)
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Especialidad:
                      </span>
                      <span className="font-bold text-black text-[11px]">
                        Data Analytics (Coder)
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Bases:
                      </span>
                      <span className="font-bold text-slate-800 text-[11px]">
                        Sec. Técnico & Economía
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Grupo 3: Historial de Operaciones */}
                <div>
                  <span className="text-[9px] font-bold bg-slate-100 px-1.5 py-0.5 text-slate-500 uppercase tracking-wider border border-slate-200">
                    03 / Trayectoria Comercial
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 mt-2">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Management:
                      </span>
                      <span className="font-bold text-slate-800 text-right text-[11px]">
                        Encargado Gral (5a)
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Equipos / Barra:
                      </span>
                      <span className="font-bold text-slate-800 text-[11px]">
                        Jefe de Barra (Asterix)
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1 items-center">
                      <span className="text-slate-400 font-bold text-[10px]">
                        Atención / Presión:
                      </span>
                      <span className="font-bold text-slate-800 text-[11px]">
                        McDonald's S.A.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Botón de descarga con estados de animación Neo-brutalistas */}
              <a
                href="/tu-cv-file.pdf"
                download="CV_Gonzalo_Gamenara.pdf"
                className="w-full py-3 bg-[#FFB0B0] text-black font-black text-xs uppercase tracking-wider text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block select-none"
              >
                Descargar CV (PDF) 📥
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
