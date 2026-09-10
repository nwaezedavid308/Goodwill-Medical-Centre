
import React from 'react';

const ImpactSection: React.FC = () => {
  const OUTREACH_IMAGE = '/images/report/report-19.jpeg';
  const TENT_IMAGE = '/images/report/report-02.jpeg';

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="impact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-xl space-y-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-purple-600 uppercase">Our Impact So Far</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Real Impact, <br />Real Lives Changed
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              From February 2024 to December 2025, GMC expanded clinical care, outreach and financial protection across underserved communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-purple-500 rounded-[3rem] opacity-10 blur-xl" />
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
              <img
                src={OUTREACH_IMAGE}
                alt="GMC community outreach participants"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/9333ea/ffffff?text=Community+Outreach';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-serif">12,509+ Patients Served</h4>
                <p className="text-slate-200 text-xs uppercase tracking-widest font-bold">Since GMC Opened in 2024</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#FFF9F2] bg-slate-100">
              <img
                src={TENT_IMAGE}
                alt="A GMC clinician checking a patient during community outreach"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x450/9333ea/ffffff?text=Outreach+Tent';
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: '12,506', text: 'Outpatient Visits, 2024–2025' },
                { title: '1,058', text: 'Inpatient Admissions, 2024–2025' },
                { title: '2,306', text: 'Antenatal Visits, 2024–2025' },
                { title: '217', text: 'Total Deliveries, 2024–2025' },
                { title: '2,523', text: 'Eye Reviews, 2024–2025' },
                { title: '116', text: 'General Surgeries, 2024–2025' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 h-full bg-purple-200 rounded-full" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
