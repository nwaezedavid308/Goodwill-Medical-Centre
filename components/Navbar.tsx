
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-all ${isActive
      ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
      : 'text-slate-900 hover:text-purple-600'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFF9F2]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-4 rounded"
          aria-label="Goodwill Medical Centre home"
        >
          <span className="text-xl font-bold tracking-tighter text-slate-900">
            GOODWILL <span className="text-purple-600">MEDICAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          <NavLink to="/" className={navLinkClass} role="menuitem">
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass} role="menuitem">
            Our Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass} role="menuitem">
            About
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass} role="menuitem">
            Gallery
          </NavLink>
          <NavLink to="/blog" className={navLinkClass} role="menuitem">
            Blog
          </NavLink>
          <Link
            to="/get-involved"
            className="ml-4 px-6 py-2.5 bg-purple-600 text-white rounded-full text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            role="menuitem"
            aria-label="Partner with Goodwill Medical Centre"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
