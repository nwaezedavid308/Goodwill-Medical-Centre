
import React from 'react';

const SERVICES = [
  { title: 'Ophthalmology', desc: 'Expert eye care, glaucoma management, and vision restoration.' },
  { title: 'Maternal Health', desc: 'Comprehensive obstetric care ensuring safe deliveries.' },
  { title: 'Pediatrics', desc: 'Specialized newborn care and child development screening.' },
  { title: 'Dental & Outreach', desc: 'Dental services and school-based health programs.' }
];

const ServicesGrid: React.FC = () => {
  const BABY_IMAGE = './baby.jpg';

  return (
    <section className="py-24 bg-[#FFF9F2]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Specialized Care <br/>for Every Stage of Life</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {SERVICES.map((s) => (
                <div key={s.title} className="p-6 bg-white rounded-2xl border border-purple-50 shadow-sm hover:border-purple-200 transition-all">
                  <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 rounded-[3rem] rotate-3 transform scale-95 opacity-10" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
              <img 
                src={BABY_IMAGE} 
                alt="Pediatrics Care" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x750/9333ea/ffffff?text=Pediatrics+Care';
                }}
              />
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
                <p className="text-purple-600 font-bold text-xs uppercase tracking-widest mb-1">Pediatrics</p>
                <p className="text-slate-900 font-serif text-xl italic leading-tight">"Where life begins with dignity."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
