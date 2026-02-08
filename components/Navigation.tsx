import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'AI Work', path: '/ai-images' },
  { name: 'AI Visuals', path: '/ai-videos' },
  { name: 'Projects', path: '/ai-projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Identify pages that have a dark background to adjust nav text color
  // Home and AI Visuals (videos) are dark themes.
  // About is now Red/White (Light), AI Work is Orange/White (Light).
  const isDarkPage = location.pathname === '/' || location.pathname === '/ai-videos';
  
  // Styles based on page type (Dark vs Light)
  const textColorClass = isDarkPage ? 'text-white/90' : 'text-slate-900';
  const hoverColorClass = isDarkPage ? 'hover:text-white' : 'hover:text-purple-600';
  const activeColorClass = isDarkPage ? 'text-white font-bold' : 'text-purple-600 font-bold';
  const lineColorClass = isDarkPage ? 'bg-white' : 'bg-slate-900';
  const logoColorClass = isDarkPage ? 'text-white' : 'text-slate-900';
  
  // Navigation Background Logic
  const navBgClass = isDarkPage
    ? (scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8')
    : (scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-[0.22,1,0.36,1] px-6 md:px-12 flex justify-between items-center ${navBgClass}`}
      >
        <NavLink to="/" className="relative z-50 group">
            <h1 className={`text-xl md:text-2xl font-light tracking-widest uppercase transition-colors duration-500 ${logoColorClass}`}>
              Sachet<span className="font-bold">Jain</span>
            </h1>
            <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${lineColorClass}`}></div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative group text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${hoverColorClass} ${
                  isActive ? activeColorClass : textColorClass
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-500 ease-out ${lineColorClass} ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 focus:outline-none transition-colors duration-300 ${logoColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-slate-900" /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-30 flex flex-col justify-center items-center gap-10"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-3xl font-serif font-light tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-purple-600' : 'text-slate-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};