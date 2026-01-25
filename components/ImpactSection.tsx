
import React from 'react';

const ImpactSection: React.FC = () => {
  const OUTREACH_IMAGE = './community-outreach.jpg';
  const TRAINING_IMAGE = './staff-training.jpg';

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="impact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-xl space-y-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-purple-600 uppercase">Our Track Record</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Real Stories, <br />Heartfelt Impact
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Serving the elderly and low-income families in Enugu East with dignity. Our progress is built on community trust and clinical integrity.
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
                <h4 className="text-2xl font-serif">Community Outreach</h4>
                <p className="text-slate-200 text-xs uppercase tracking-widest font-bold">Health Equity in Action</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#FFF9F2] bg-slate-100">
              <img 
                src={TRAINING_IMAGE} 
                alt="Staff Training" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x450/9333ea/ffffff?text=Staff+Training';
                }}
              />
            </div>
            <div className="space-y-6">
              {[
                { title: 'Vision Restored', text: 'Specialized eye care and surgeries for community elders.' },
                { title: 'Continuous Learning', text: 'Ongoing medical training sessions to maintain excellence.' },
                { title: 'Access for All', text: 'Ensuring high-quality care is reachable for every citizen.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
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
