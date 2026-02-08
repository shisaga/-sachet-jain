import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// AnimatedRoutes to handle AnimatePresence correctly
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/ai-images"
          element={<Gallery title="AI Images" category="image" description="Still life, portraits, and abstract compositions generated through iterative prompting." />}
        />
        <Route
          path="/ai-videos"
          element={<Gallery title="AI Videos" category="video" description="Cinematic motion, dream loops, and temporal experiments." />}
        />
        <Route
          path="/ai-projects"
          element={<Gallery title="Full Projects" category="project" description="Comprehensive visual studies, world-building, and thematic collections." />}
        />
        <Route
          path="/experiments"
          element={<Gallery title="Experiments" category="experiment" description="Raw outputs, glitch studies, and conceptual sketches." />}
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow relative">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}