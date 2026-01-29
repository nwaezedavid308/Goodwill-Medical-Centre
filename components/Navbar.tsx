
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFF9F2]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tighter text-slate-900">
            GOODWILL <span className="text-purple-600">MEDICAL</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">Our Services</Link>
          <Link to="/about" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">About</Link>
          <Link to="/gallery" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">Gallery</Link>
          <Link to="/blog" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">Blog</Link>
          <Link to="/get-involved" className="ml-4 px-6 py-2.5 bg-purple-600 text-white rounded-full text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
            Partner With Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
