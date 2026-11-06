import { Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PreferencesProvider from "./context/PreferencesProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import Intro from "./components/Intro";

// Data router (not <BrowserRouter>): required for <Link viewTransition> page transitions.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        {/* old URLs that may already be shared */}
        <Route path="detail" element={<Navigate to="/about" replace />} />
        <Route path="portfolio" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="cv" element={<CV />} />
    </>,
  ),
);

export default function App() {
  return (
    <PreferencesProvider>
      <Intro />
      <RouterProvider router={router} />
    </PreferencesProvider>
  );
}
