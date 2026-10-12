import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  Menu,
  X,
  ShieldAlert,
  Heart,
  ChevronDown,
  MessageSquare,
  Stethoscope,
  Building2,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  BookOpen,
  Award,
  Users
} from 'lucide-react';

interface NavbarProps {
  onOpenAppointment?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isAboutActive = ['/about', '/inception-report', '/testimonials'].includes(location.pathname);
  const isServicesActive = ['/services', '/doctors'].includes(location.pathname);
  const isMediaActive = ['/gallery', '/blog', '/faq'].includes(location.pathname);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Organized Top Emergency & Facility Info Bar */}
      <div className="bg-slate-950 text-white text-[11px] font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Left: Prominent Emergency & Hotline */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-600/25 border border-rose-500/40 rounded-full text-rose-300 font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>TOLL-FREE EMERGENCY:</span>
              <a href="tel:08000057777" className="text-white hover:underline">
                0800 005 7777
              </a>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              <Phone className="w-3 h-3 text-purple-400" />
              <span>Hospital Desk:</span>
              <a href="tel:07032585626" className="text-white font-semibold hover:text-purple-300">
                0703 258 5626
              </a>
            </div>
          </div>

          {/* Right: Hospital Status & Indigent Support */}
          <div className="flex items-center gap-3 sm:gap-5 text-slate-300 text-[11px]">
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Emergency & Maternity</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Umuchigbo, Enugu East</span>
            </div>

            <a
              href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20support%20Treatment%20for%20Two."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700/50 hover:bg-purple-800 transition-colors"
            >
              <Heart className="w-3 h-3 text-rose-400 fill-current" />
              <span className="font-semibold">Treatment for Two</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-[#FFF9F2]/95 backdrop-blur-md border-b border-purple-100 transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
        }`}
        aria-label="Main navigation"
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 focus:outline-none" aria-label="Goodwill Medical Centre">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-700/20">
              G
            </div>
            <div>
              <span className="text-lg lg:text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                GOODWILL <span className="text-purple-600">MEDICAL</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 block">
                Secondary Care Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Subcategorized Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`
              }
            >
              Home
            </NavLink>

            {/* 2. Clinical Care Subcategory Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'clinical' ? null : 'clinical')}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isServicesActive
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
                aria-expanded={openDropdown === 'clinical'}
              >
                <span>Clinical Care</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2 space-y-1 transition-all duration-200 z-50 ${
                  openDropdown === 'clinical'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                }`}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <Stethoscope className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Medical Services</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Specialist clinics, emergency, scan & lab
                    </span>
                  </div>
                </NavLink>

                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <Users className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Doctors & Specialists</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Consultant profiles, duty days & schedules
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* 3. About GMC Subcategory Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isAboutActive
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
                aria-expanded={openDropdown === 'about'}
              >
                <span>About GMC</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2 space-y-1 transition-all duration-200 z-50 ${
                  openDropdown === 'about'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                }`}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <Building2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Our Story & Mission</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Founder, PACIEH & Avah River Bridge
                    </span>
                  </div>
                </NavLink>

                <NavLink
                  to="/inception-report"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <FileText className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Inception Report</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Official data, finances & impact metrics
                    </span>
                  </div>
                </NavLink>

                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Patient Testimonials</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Real stories of healing and survival
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* 4. Media & Resources Subcategory Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'media' ? null : 'media')}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isMediaActive
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
                aria-expanded={openDropdown === 'media'}
              >
                <span>Media & Info</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2 space-y-1 transition-all duration-200 z-50 ${
                  openDropdown === 'media'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                }`}
              >
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <ImageIcon className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Photo & Video Gallery</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Aerial tour, facilities & outreach
                    </span>
                  </div>
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <BookOpen className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Journal & Staff Essays</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Medical news & essay prize downloads
                    </span>
                  </div>
                </NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-700 hover:bg-purple-50/60'
                    }`
                  }
                >
                  <HelpCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">FAQs</span>
                    <span className="block text-[11px] text-slate-500 font-normal">
                      Insurance, NHIA, fees & schedules
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* 5. Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenAppointment) onOpenAppointment();
              }}
              className="px-5 py-2.5 bg-purple-600 text-white rounded-full text-xs font-bold hover:bg-purple-700 transition-all shadow-md shadow-purple-600/25 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>

            <a
              href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20reach%20your%20desk."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white text-emerald-600 border border-purple-200 rounded-full hover:bg-emerald-50 transition-colors shadow-sm"
              title="Chat with GMC Desk on WhatsApp"
              aria-label="WhatsApp Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="lg:hidden p-2 text-slate-800 hover:text-purple-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer with Accordion Subcategories */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-purple-100 px-5 py-6 space-y-3 animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-bold text-sm ${
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800'
                }`
              }
            >
              Home
            </NavLink>

            {/* Subcategory 1: Clinical Care */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'clinical' ? null : 'clinical')}
                className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-slate-900 font-bold text-sm"
              >
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-purple-600" />
                  Clinical Care
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileSubmenu === 'clinical' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'clinical' && (
                <div className="p-2 space-y-1 bg-white">
                  <NavLink
                    to="/services"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Medical Services & Clinics
                  </NavLink>
                  <NavLink
                    to="/doctors"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Doctors & Specialists Schedules
                  </NavLink>
                </div>
              )}
            </div>

            {/* Subcategory 2: About GMC */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
                className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-slate-900 font-bold text-sm"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-purple-600" />
                  About GMC
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileSubmenu === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'about' && (
                <div className="p-2 space-y-1 bg-white">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Our Story & Avah Bridge
                  </NavLink>
                  <NavLink
                    to="/inception-report"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Inception Report 2024–2025
                  </NavLink>
                  <NavLink
                    to="/testimonials"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Patient Stories & Impact
                  </NavLink>
                </div>
              )}
            </div>

            {/* Subcategory 3: Media & Information */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'media' ? null : 'media')}
                className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-slate-900 font-bold text-sm"
              >
                <span className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-purple-600" />
                  Media & Info
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileSubmenu === 'media' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'media' && (
                <div className="p-2 space-y-1 bg-white">
                  <NavLink
                    to="/gallery"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Photo & Video Gallery
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Journal & Staff Essays
                  </NavLink>
                  <NavLink
                    to="/faq"
                    className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50"
                  >
                    Frequently Asked Questions
                  </NavLink>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-bold text-sm ${
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800'
                }`
              }
            >
              Contact & Directions
            </NavLink>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="w-full py-3.5 bg-purple-600 text-white rounded-2xl font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Appointment Online
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:08000057777"
                  className="py-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  0800 005 7777
                </a>
                <a
                  href="https://wa.me/2347032585626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
