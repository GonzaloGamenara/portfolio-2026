import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        {/* Contenedor Exterior: Fondo verde y bordes principales */}
        <div
          className="w-[70vw] max-w-400px h-[85vh] border-2 border-black shadow-neo flex flex-col md:flex-row overflow-hidden bg-neo-green transition-all duration-300 animate-main-morph"
          style={{ borderColor: "var(--color-neo-border)" }}
        >
          {/* El Sidebar queda fijo a la izquierda */}
          <Sidebar />

          {/* Contenedor Interior (La hoja crema): Tiene su propio borde y margen (my-5 mr-5) para dejar ver el verde */}
          <div
            className="flex-1 bg-neo-bg md:border-2 border-black md:my-5 md:mr-5 flex flex-col overflow-hidden transition-colors duration-300"
            style={{
              borderColor: "var(--color-neo-border)",
            }}
          >
            {/* Acá cambian las pantallas mágicamente */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
