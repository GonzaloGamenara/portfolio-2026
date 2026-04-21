import miFoto from "../assets/gonza.png";

const ProfileCard = () => {
  return (
    // Le sacamos el xl:w-2/3 de acá, lo va a manejar el Home
    <div className="bg-neo-yellow border-[3px] border-black shadow-neo p-6 w-full">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Avatar más grande (w-40 h-40 en vez de 32) */}
        <div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-65 md:h-80 border-[3px]  shrink-0 overflow-hidden animate-scale-up"
          style={{ animationDelay: "2300ms" }}
        >
          <img
            src={miFoto}
            alt="Gonza"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-4 sm:mb-0">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight ">
                Gonzalo Gamenara
              </h2>
              <p className="font-medium text-sm border-black inline-block pb-1 mb-4">
                gonzagamenara@gmail.com
              </p>
            </div>
            <div className="flex gap-4  ">
              <button className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors text-xl">
                <a
                  href="https://www.linkedin.com/in/gonzalo-gamenara-6bb130238/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>
              </button>
              <button className="w-10 h-10   border-2 border-black flex items-center justify-center bg-white font-bold hover:bg-neo-green transition-colors">
                <a
                  href="https://github.com/GonzaloGamenara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                </a>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="border-2 border-black p-2 text-center bg-neo-yellow-light">
              <p className="font-black font-mono text-lg sm:text-xl">
                Frontend
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">
                React/Tailwind
              </p>
            </div>
            <div className="border-2 border-black bg-neo-yellow-light p-2 text-center">
              <p className="font-black font-mono text-lg sm:text-xl">Backend</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">
                Node/Java
              </p>
            </div>
            <div className="border-2 border-black bg-neo-yellow-light p-2 text-center">
              <p className="font-black font-mono text-lg sm:text-xl">Data</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase">
                Python/PowerBi
              </p>
            </div>
          </div>

          <p className="text-sm font-medium mb-6 leading-relaxed">
            Estudiante de Ingeniería en Informática con una pasión por el
            desarrollo frontend, el diseño UI/UX y la creación de videojuegos.
            Con experiencia en React, diseño de interfaces y desarrollo con
            Godot, busco oportunidades para aplicar mis habilidades y seguir
            creciendo profesionalmente.
          </p>

          {/* Botones ajustados: ya no tienen flex-1, se adaptan a su contenido */}
          <div className="flex gap-4 font-mono w-full">
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
