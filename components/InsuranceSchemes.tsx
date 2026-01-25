
import React from 'react';

const SCHEMES = [
  {
    name: 'National Health Insurance Agent (NHIA)',
    description: 'Federal-level coverage providing a wide range of medical services for registered members.',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Enugu State Universal Health Coverage',
    description: 'Localized state insurance ensuring affordable healthcare access for every resident of Enugu.',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'CEMOC for Pregnancy Emergencies',
    description: 'Comprehensive Emergency Obstetric and Newborn Care, specifically designed to protect mothers and babies during crises.',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
      </svg>
    )
  }
];

const InsuranceSchemes: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="insurance">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Subsidized Healthcare</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">GMC supports the <br/>less privileged</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We believe quality healthcare is a right, not a privilege. GMC actively supports indigent patients through subsidized medical fees and participation in key insurance schemes.
            </p>
            <div className="p-8 bg-[#FFF9F2] rounded-[2rem] border border-purple-100 italic text-purple-900 font-serif">
              "Ensuring that financial barriers never stand in the way of life-saving medical intervention."
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {SCHEMES.map((scheme, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {scheme.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{scheme.name}</h4>
                  <p className="text-slate-500 leading-relaxed">{scheme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSchemes;
