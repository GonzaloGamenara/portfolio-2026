import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-0 mobile-p sm:p-4 md:p-8 flex md:items-center md:justify-center ">
        <div
          className="w-full min-h-screen md:min-h-0 md:w-[70vw] max-w-400px md:h-[85vh] border-2 border-black shadow-neo flex flex-col md:flex-row overflow-visible md:overflow-hidden bg-neo-green transition-all duration-300"
          style={{ borderColor: "var(--color-neo-border)" }}
        >
          <Sidebar />

          <div
            className="flex-1 bg-neo-bg border-black md:border-2 md:my-5 md:mr-5 flex flex-col overflow-visible md:overflow-hidden transition-colors duration-300"
            style={{
              borderColor: "var(--color-neo-border)",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
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
