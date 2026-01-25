
import React from 'react';

const BridgeImpact: React.FC = () => {
  const BRIDGE_IMAGE = './bridge-gate.jpg';

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-4 px-5 py-2 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-purple-400 font-bold text-xs uppercase tracking-widest italic">The Gateway to Hope</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              The Avah River <br/><span className="text-purple-400 italic">Bridge Impact</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                A symbol of progress. The bridge connects our center to five settlements that were previously isolated during the rainy season.
              </p>
              <p>
                By bridging this gap, we've enabled 24/7 access to emergency obstetric care and child health services.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/10">
              <div className="space-y-3">
                <div className="text-5xl font-bold text-white tracking-tighter">ZERO</div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">Transit Fatalities</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-purple-400 tracking-tighter">100%</div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">Access Growth</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group border-4 border-white/10 bg-slate-800">
              <img 
                src={BRIDGE_IMAGE} 
                alt="Bridge Commissioning" 
                className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/9333ea/ffffff?text=Bridge+Impact';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeImpact;
