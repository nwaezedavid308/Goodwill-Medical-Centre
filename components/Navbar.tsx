
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-all ${isActive
      ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
      : 'text-slate-900 hover:text-purple-600'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-semibold py-2 transition-all block ${isActive
      ? 'text-purple-600'
      : 'text-slate-900'
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
          className="flex items-center focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-4 rounded z-50 relative"
          aria-label="Goodwill Medical Centre home"
        >
          {/* Ensure text color is readable when menu is open (if menu background is light, slate-900 is fine) */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#FFF9F2] z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <NavLink to="/" className={mobileLinkClass} role="menuitem">Home</NavLink>
            <NavLink to="/services" className={mobileLinkClass} role="menuitem">Our Services</NavLink>
            <NavLink to="/about" className={mobileLinkClass} role="menuitem">About</NavLink>
            <NavLink to="/gallery" className={mobileLinkClass} role="menuitem">Gallery</NavLink>
            <NavLink to="/blog" className={mobileLinkClass} role="menuitem">Blog</NavLink>
            <Link
              to="/get-involved"
              className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-bold shadow-lg shadow-purple-600/20"
              role="menuitem"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
