
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FFF9F2]/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center purple-glow">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            GOODWILL <span className="text-purple-600">MEDICAL</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">About Us</a>
          <a href="#impact" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Impact</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Services</a>
          <a href="#get-involved" className="px-5 py-2.5 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/20">
            Partner With Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
