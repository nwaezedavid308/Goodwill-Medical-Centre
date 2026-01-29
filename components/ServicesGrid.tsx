
import React from 'react';

const SERVICES = [
  { title: 'General Outpatient Care', desc: 'Comprehensive medical consultations for all ages.' },
  { title: 'Eye Health & Cataract Surgeries', desc: 'Expert eye care, screenings, and life-changing surgeries.' },
  { title: 'Maternal & Child Health', desc: 'Antenatal, delivery, and postnatal care ensuring safe births.' },
  { title: 'Diagnostic Laboratory & Scan', desc: 'Accurate and timely diagnostic services.' },
  { title: 'Accident & Emergency', desc: '24/7 emergency care handling critical situations.' },
  { title: 'Paediatric Care', desc: 'Specialized care for newborns and children.' },
  { title: 'ENT Services', desc: 'Ear, Nose, and Throat diagnosis and treatment.' },
  { title: 'Inpatient Admissions', desc: 'Comfortable wards and professional surgical procedures.' },
  { title: 'Health Education', desc: 'Community outreach and preventive health education.' },
  { title: 'School-Based Eye Screening', desc: 'Protecting the vision of the next generation.' }
];

const ServicesGrid: React.FC = () => {
  const PEDIATRICS_IMAGE = '/images/pediatrics.jpg';

  return (
    <section className="py-24 bg-[#FFF9F2]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Comprehensive Services <br />Under One Roof</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {SERVICES.map((s) => (
                <div key={s.title} className="p-5 bg-white rounded-2xl border border-purple-50 shadow-sm hover:border-purple-200 transition-all">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{s.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative sticky top-24">
            <div className="absolute inset-0 bg-purple-600 rounded-[3rem] rotate-3 transform scale-95 opacity-10" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
              <img
                src={PEDIATRICS_IMAGE}
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
