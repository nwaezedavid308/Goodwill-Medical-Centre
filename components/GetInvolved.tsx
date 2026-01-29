
import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF9F2]" id="get-involved">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Make a Difference</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Get Involved</h3>
          <p className="text-slate-600">Join the healing movement. Whether you are a donor, a medical professional, or a community member, there is a place for you at GMC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: 'Donate',
              desc: 'Sponsor a surgery, fund a water project, or support cataract operations for the elderly.',
              cta: 'Donate Now'
            },
            {
              title: 'Volunteer',
              desc: 'Doctors, nurses, health workers, community members—everyone has something to give.',
              cta: 'Join Us'
            },
            {
              title: 'Partner',
              desc: 'Are you a business, NGO, or foundation? Let’s work together to expand services and reach more lives.',
              cta: 'Partner With Us'
            }
          ].map((item, idx) => (
            <div key={item.title} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                {idx + 1}
              </div>
              <h4 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">{item.desc}</p>
              <button className="mt-auto px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-purple-600 transition-colors">
                {item.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Current Needs Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-purple-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-12">
              <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Priority Support</span>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mt-2">Current Facility Needs</h3>
              <p className="text-slate-500 mt-4 max-w-2xl">
                To consolidate and expand our impact, GMC seeks support for critical equipment and infrastructure across our core departments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: 'Ophthalmology',
                  items: ['Pachymetry Machine', 'B-Scan Machine', 'Visual Field Analyser', 'Free School Screening Fund']
                },
                {
                  category: 'Pediatrics',
                  items: ['Incubators for newborns', 'Neonatal care equipment', 'Child wellness kits']
                },
                {
                  category: 'Obstetrics',
                  items: ['CTG Machines', 'Fetal monitors', 'Modern Delivery Beds']
                },
                {
                  category: 'Dental Clinic',
                  items: ['Establishment Funding', 'Dental Units', 'X-ray Equipment']
                }
              ].map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-purple-600 font-bold text-sm uppercase tracking-wider border-b border-purple-50 pb-2">
                    {section.category}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-purple-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-slate-900 font-bold">Help us close the gap.</p>
                <p className="text-slate-500 text-sm">Every piece of equipment saved lives and restores dignity.</p>
              </div>
              <button className="whitespace-nowrap px-8 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
