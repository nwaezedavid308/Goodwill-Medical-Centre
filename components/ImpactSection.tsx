
import React from 'react';

const ImpactSection: React.FC = () => {
  const OUTREACH_IMAGE = '/images/community-outreach.jpg';
  const TENT_IMAGE = '/images/impact-tent.jpg';

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
              March – August 2024. These aren’t just numbers—they are stories of healing, moments of hope, and lives forever changed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-purple-500 rounded-[3rem] opacity-10 blur-xl" />
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
              <img
                src={OUTREACH_IMAGE}
                alt="Community Outreach"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/9333ea/ffffff?text=Community+Outreach';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-serif">1,345+ People Served</h4>
                <p className="text-slate-200 text-xs uppercase tracking-widest font-bold">Via Free Outreach Events</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#FFF9F2] bg-slate-100">
              <img
                src={TENT_IMAGE}
                alt="Health Outreach Tent"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x450/9333ea/ffffff?text=Outreach+Tent';
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: '3,536', text: 'Outpatient Consultations' },
                { title: '122', text: 'Admissions' },
                { title: '51', text: 'Surgeries' },
                { title: '22', text: 'Deliveries (incl. 2 sets of triplets)' },
                { title: '32', text: 'Eye Surgeries (20 free cataract)' },
                { title: '767', text: 'Laboratory Tests' }
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
