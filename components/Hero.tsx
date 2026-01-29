
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-[#FFF9F2] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpeg"
          alt="Goodwill Medical Centre Front View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F2] via-[#FFF9F2]/60 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex justify-start items-center">
        <div className="max-w-xl p-10 md:p-14 rounded-[3rem] bg-white/90 backdrop-blur-xl border border-white shadow-2xl shadow-purple-900/10 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-[1.1]">
            Compassionate Care <br />
            <span className="text-purple-600 italic">for Every Life.</span>
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed font-light">
            Bringing hope, healing, and quality medical care to those who need it most—especially low-income families and underserved communities.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-purple-600/30 hover:bg-purple-700 transition-all transform hover:-translate-y-1">
              Book Appointment
            </button>
            <button className="px-8 py-4 bg-[#FFF9F2] text-slate-950 border border-purple-200 rounded-2xl font-bold hover:bg-purple-50 transition-all transform hover:-translate-y-1">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Explore Our Centre</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
