import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ShieldAlert, ArrowUpRight, MessageSquare, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Col 1: About GMC & Donation */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-2xl font-bold tracking-tight text-white uppercase block">
                Goodwill Medical <span className="text-purple-400">Centre</span>
              </span>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.25em] block">
                Model Secondary Hospital · Umuchigbo, Enugu
              </span>
            </div>

            <p className="text-sm leading-relaxed font-light text-slate-300 max-w-md">
              Bridging the healthcare divide in Enugu East through specialist secondary care, subsidized treatments, and life-saving community interventions supported by the TY Danjuma Foundation and PACIEH.
            </p>

            {/* Donation Account Box */}
            <div className="p-6 bg-white/5 border border-purple-500/20 rounded-3xl space-y-4 max-w-md">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-4 h-4 text-rose-400 fill-current" />
                <h5 className="font-serif font-bold text-base">Support the "Treatment for Two" Fund</h5>
              </div>
              <p className="text-xs text-slate-400">
                Directly fund free maternal care, indigent surgeries, and emergency medications:
              </p>
              <div className="space-y-2 text-xs bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between">
                  <span className="text-purple-300 uppercase font-bold text-[10px] tracking-wider">Account Name</span>
                  <span className="font-medium text-white">Goodwill Medicals Enugu</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300 uppercase font-bold text-[10px] tracking-wider">Account Number</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">5521840293</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300 uppercase font-bold text-[10px] tracking-wider">Bank</span>
                  <span className="font-medium text-white">Moniepoint</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Explore GMC</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-purple-400 transition-colors">
                  Medical Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-purple-400 transition-colors">
                  Doctors & Specialists
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors">
                  About GMC & Avah Bridge
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-purple-400 transition-colors">
                  Photo & Video Tours
                </Link>
              </li>
              <li>
                <Link to="/inception-report" className="hover:text-purple-400 transition-colors">
                  Inception Report 2024–2025
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-purple-400 transition-colors">
                  Patient Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-purple-400 transition-colors">
                  Journal & Staff Essays
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">
                  Contact & Route Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Emergency */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Emergency & Contact</h4>
            <div className="space-y-4 text-xs">
              {/* Emergency Hotline */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-600/20 text-rose-400 rounded-xl flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-rose-400 uppercase text-[10px] tracking-wider block">
                    Toll-Free Emergency
                  </span>
                  <a href="tel:08000057777" className="text-white font-bold text-sm hover:underline">
                    0800 005 7777
                  </a>
                </div>
              </div>

              {/* Hospital Phones */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-300 uppercase text-[10px] tracking-wider block">
                    Desk & Consultations
                  </span>
                  <p className="text-white">
                    0703 258 5626 · 0802 409 4488
                  </p>
                  <a
                    href="https://wa.me/2347032585626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp Live Chat
                  </a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-300 uppercase text-[10px] tracking-wider block">
                    Location
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    No. 3, Chief Jude Agu Street, Umuchigbo, <br />
                    Enugu East LGA, Enugu State, Nigeria
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-300 uppercase text-[10px] tracking-wider block">
                    Email
                  </span>
                  <a
                    href="mailto:goodwillhospital25@gmail.com"
                    className="text-purple-300 hover:text-white hover:underline"
                  >
                    goodwillhospital25@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Goodwill Medical Centre (GMC) · All rights reserved.</p>

          <p className="text-purple-400 font-semibold">
            Supported by TY Danjuma Foundation & PACIEH
          </p>

          {/* Niuxverse Web Agency Developer Credit */}
          <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Website Designed & Developed by</span>
            <a
              href="https://wa.me/2348110607341"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 transition-colors"
            >
              Niuxverse Web Agency (+2348110607341)
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
