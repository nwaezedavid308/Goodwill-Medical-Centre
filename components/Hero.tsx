import React, { useState } from 'react';
import { Calendar, Play, Phone, ShieldCheck, Heart, Users, Sparkles, Stethoscope, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenAppointment?: () => void;
  onOpenVideoModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenVideoModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="main-content"
      className="relative overflow-hidden bg-[#FFF9F2] pt-8 pb-16 md:pt-12 md:pb-24"
      aria-label="Hero section"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/50 rounded-full blur-[130px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left animate-fade-in">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-purple-100/80 border border-purple-200 rounded-full text-purple-900 text-xs font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accredited Secondary Healthcare Provider · NHIA & ESCHIS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] tracking-tight">
              Quality healthcare <br />
              <span className="text-purple-600 italic">for every one.</span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-lg text-slate-700 leading-relaxed font-light max-w-xl">
              Goodwill Medical Centre (GMC) provides compassionate, specialist-led secondary healthcare for Umuchigbo, Enugu East and neighboring communities—combining high clinical standards with cross-subsidies to protect vulnerable families.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transform hover:-translate-y-0.5 transition-all flex items-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                Book An Appointment
              </button>

              {onOpenVideoModal && (
                <button
                  type="button"
                  onClick={onOpenVideoModal}
                  className="px-6 py-4 bg-white hover:bg-purple-50 text-slate-900 border border-purple-200 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-purple-600 fill-current" />
                  Watch Facility Tour
                </button>
              )}

              <a
                href="tel:08000057777"
                className="px-6 py-4 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                Emergency: 0800 005 7777
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-purple-100/80">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Founded with TY Danjuma Foundation Support
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Heart className="w-4 h-4 text-purple-600" />
                Treatment for Two Indigent Subsidies
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Stethoscope className="w-4 h-4 text-indigo-600" />
                Specialist Consultant-Led Clinics
              </span>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Glow Card */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-[3rem] opacity-20 blur-xl transform rotate-2" />

              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/Goodwill-Medical-centre-front-view.jpeg"
                  alt="Goodwill Medical Centre front view in Umuchigbo Enugu"
                  className={`w-full h-[430px] object-cover transition-opacity duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/report/report-23.png';
                  }}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 img-loading flex items-center justify-center text-slate-400">
                    Loading facility preview...
                  </div>
                )}

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-purple-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      24/7
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Always Open for Care</p>
                      <p className="text-[11px] text-slate-500">Emergency & Maternal Care</p>
                    </div>
                  </div>
                  {onOpenVideoModal && (
                    <button
                      onClick={onOpenVideoModal}
                      className="p-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                      title="Watch Tour"
                      aria-label="Watch hospital tour"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Ribbon Below Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-sm text-center">
            <span className="block text-3xl sm:text-4xl font-serif font-bold text-slate-900">12,509+</span>
            <span className="text-xs uppercase font-bold text-purple-600 tracking-wider mt-1 block">
              Patients Treated
            </span>
            <p className="text-[11px] text-slate-500 mt-1">2024–2025 Inception Period</p>
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-sm text-center">
            <span className="block text-3xl sm:text-4xl font-serif font-bold text-emerald-600">91</span>
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider mt-1 block">
              Free C-Sections
            </span>
            <p className="text-[11px] text-slate-500 mt-1">₦40.9M Saved for Families</p>
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-sm text-center">
            <span className="block text-3xl sm:text-4xl font-serif font-bold text-slate-900">2,523</span>
            <span className="text-xs uppercase font-bold text-purple-600 tracking-wider mt-1 block">
              Eye Consultations
            </span>
            <p className="text-[11px] text-slate-500 mt-1">91 Cataract Surgeries Completed</p>
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-sm text-center">
            <span className="block text-3xl sm:text-4xl font-serif font-bold text-indigo-600">2,306</span>
            <span className="text-xs uppercase font-bold text-indigo-700 tracking-wider mt-1 block">
              Antenatal Visits
            </span>
            <p className="text-[11px] text-slate-500 mt-1">217 Safe Hospital Deliveries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
