import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
      <div className="text-center md:text-left">
        <h4 className="text-lg font-bold tracking-wider uppercase text-slate-900">Sachet Jain</h4>
        <p className="text-sm text-slate-500 font-light mt-1">AI Visual Artist & Digital Creator</p>
      </div>
      
      <div className="flex gap-6 text-sm text-slate-500 tracking-wide">
        <NavLink to="/ai-projects" className="hover:text-purple-600 transition-colors">Projects</NavLink>
        <NavLink to="/contact" className="hover:text-purple-600 transition-colors">Contact</NavLink>
        <a href="#" className="hover:text-purple-600 transition-colors">Instagram</a>
        <a href="#" className="hover:text-purple-600 transition-colors">Twitter</a>
      </div>

      <div className="text-xs text-slate-400 font-light">
        © {new Date().getFullYear()} Sachet Jain. All rights reserved.
      </div>
    </footer>
  );
};