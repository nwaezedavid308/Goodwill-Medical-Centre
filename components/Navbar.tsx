
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
      className={`sticky top-0 left-0 right-0 z-50 bg-[#FFF9F2] border-b border-purple-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
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
        <div className="hidden md:flex items-center gap-5" role="menubar">
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
          <NavLink to="/inception-report" className={navLinkClass} role="menuitem">
            Inception Report
          </NavLink>
          <NavLink to="/blog" className={navLinkClass} role="menuitem">
            Blog
          </NavLink>
          <a
            href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20discuss%20a%20partnership."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-purple-600 text-white rounded-full text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            role="menuitem"
            aria-label="Partner with Goodwill Medical Centre"
          >
            Partner With Us
          </a>
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
        {isMenuOpen && <div
          className="md:hidden shadow-xl"
          style={{ backgroundColor: '#FFF9F2', position: 'fixed', inset: '77px 0 0', zIndex: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <NavLink to="/" className={mobileLinkClass} role="menuitem">Home</NavLink>
            <NavLink to="/services" className={mobileLinkClass} role="menuitem">Our Services</NavLink>
            <NavLink to="/about" className={mobileLinkClass} role="menuitem">About</NavLink>
            <NavLink to="/gallery" className={mobileLinkClass} role="menuitem">Gallery</NavLink>
            <NavLink to="/inception-report" className={mobileLinkClass} role="menuitem">Inception Report</NavLink>
            <NavLink to="/blog" className={mobileLinkClass} role="menuitem">Blog</NavLink>
            <a
              href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20discuss%20a%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-bold shadow-lg shadow-purple-600/20"
              role="menuitem"
            >
              Partner With Us
            </a>
          </div>
        </div>}
      </div>
    </nav>
  );
};

export default Navbar;
