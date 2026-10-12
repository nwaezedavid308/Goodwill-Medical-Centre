import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, ChevronUp, X, ShieldAlert, HeartPulse } from 'lucide-react';

interface FloatingEmergencyProps {
  onOpenAppointment: () => void;
}

const FloatingEmergency: React.FC<FloatingEmergencyProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Action Card */}
      {isOpen && (
        <div className="w-80 bg-white rounded-3xl shadow-2xl border border-purple-100 p-5 space-y-4 animate-fade-in text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                24/7 Medical Care Line
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close fast dial"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Toll Free Emergency */}
            <a
              href="tel:08000057777"
              className="flex items-center gap-3 p-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-2xl text-rose-900 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-rose-600 tracking-wider block">
                  Toll-Free Emergency
                </span>
                <span className="font-bold text-sm text-rose-950">0800 005 7777</span>
              </div>
            </a>

            {/* Direct Hospital Line */}
            <a
              href="tel:07032585626"
              className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-2xl text-purple-900 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-purple-600 tracking-wider block">
                  Reception Desk
                </span>
                <span className="font-bold text-sm text-purple-950">0703 258 5626</span>
              </div>
            </a>

            {/* WhatsApp Chat */}
            <a
              href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20need%20medical%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-2xl text-emerald-900 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider block">
                  WhatsApp Consultation
                </span>
                <span className="font-bold text-sm text-emerald-950">Chat With Us Live</span>
              </div>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-700/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book An Appointment Online
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-full shadow-2xl hover:shadow-purple-700/50 hover:scale-105 transition-all focus:outline-none border-2 border-white/30"
        aria-label="Emergency and Quick Contact Menu"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
        <HeartPulse className="w-5 h-5 text-purple-200" />
        <span className="font-bold text-xs tracking-wider uppercase hidden sm:inline">
          Need Care? 24/7 Helpline
        </span>
      </button>
    </div>
  );
};

export default FloatingEmergency;
