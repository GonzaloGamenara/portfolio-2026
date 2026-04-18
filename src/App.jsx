import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl border-[3px] border-black shadow-neo flex flex-col md:flex-row overflow-hidden bg-neo-bg h-[90vh]">
          
          {/* El Sidebar queda fijo siempre */}
          <Sidebar />

          {/* Acá cambian las pantallas mágicamente */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;