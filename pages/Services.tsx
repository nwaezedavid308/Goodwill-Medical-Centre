import React, { useState } from 'react';
import { Calendar, Clock, Stethoscope, Eye, Baby, HeartPulse, Activity, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onBookService?: (serviceTitle: string) => void;
}

import { SERVICES_DATA, serviceId } from '../data/care';

const Services: React.FC<ServicesPageProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Maternal', 'Eye Care', 'Outpatient', 'Diagnostics', 'Emergency', 'Pharmacy', 'Paediatric', 'Surgery', 'Outreach'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Comprehensive Clinical Services
        </span>
        <h1 className="text-4xl md:text-6xl font-sans text-slate-900 leading-tight">
          Specialist-Led Healthcare in Umuchigbo
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          From round-the-clock emergency and maternal care to subsidized cataract surgeries, Goodwill Medical Centre delivers quality secondary health services designed to leave no family behind.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Medical services offered">
        {filteredServices.map((service, idx) => (
          <article
            key={idx}
            className="group bg-white rounded-[2.5rem] overflow-hidden border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Frame */}
              <div className="h-52 overflow-hidden relative bg-slate-100">
                <img loading="lazy"
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/fallback.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-900 shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* Service Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                  {service.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-purple-700 bg-purple-50/80 p-2.5 rounded-xl border border-purple-100">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{service.schedule}</span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 sm:p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  if (onBookService) {
                    onBookService(serviceId(service.title));
                  } else {
                    window.location.href = `https://wa.me/2347032585626?text=${encodeURIComponent(
                      `Hello Goodwill Medical Centre, I would like to book an appointment for: ${service.title}.`
                    )}`;
                  }
                }}
                className="w-full py-3.5 bg-slate-900 hover:bg-purple-600 text-white rounded-2xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Request a visit
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Box */}
      <section className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">
            Healthcare Cross-Subsidy
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold">
            Subsidised Care For Every Vulnerable Family
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            No patient is turned away from emergency intervention at GMC due to immediate inability to pay. Learn about our subsidized schemes, NHIA GIFSHIP coverage, and how to enroll.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={() => {
                if (onBookService) onBookService('0');
              }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-purple-600/30 transition-all"
            >
              Request an appointment
            </button>
            <a
              href="https://wa.me/2347032585626?text=Hello%20GMC%2C%20I%20want%20to%20enquire%20about%20subsidised%20care%20and%20NHIA%20insurance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-sm transition-all"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
