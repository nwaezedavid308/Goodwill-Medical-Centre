
import React from 'react';

const TreatmentForTwo: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-purple-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-800 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-white">Community-Powered. <br /> Donor-Supported.</h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                Our success is built on the spirit of shared responsibility. Through our <strong>“Treatment for Two” initiative</strong>, well-off patients can voluntarily support the medical costs of those who cannot afford care.
              </p>
              <p className="text-purple-200 text-lg leading-relaxed">
                Through our free shuttle, our dedicated staff arrive each day ready to serve. Through donations from partners like the TY Danjuma Foundation, we've built water systems, maternal care units, and more.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <p className="text-white font-medium italic">"You too can become a part of this impact."</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-end">
                  <p className="text-white text-3xl font-bold">Free</p>
                  <p className="text-purple-300 text-sm font-medium">Shuttle for Staff</p>
                </div>
                <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-end shadow-xl">
                  <img src="/images/waiting-area.jpg" alt="Waiting Area" className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30 mix-blend-overlay" />
                  <p className="text-purple-900 text-3xl font-bold relative z-10">Care</p>
                  <p className="text-purple-700 text-sm font-medium relative z-10">For the Indigent</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-purple-600 rounded-3xl p-8 flex flex-col justify-end shadow-xl">
                  <p className="text-white text-3xl font-bold">Water</p>
                  <p className="text-purple-100 text-sm font-medium">Systems Built</p>
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-end">
                  <p className="text-white text-3xl font-bold">Maternal</p>
                  <p className="text-purple-300 text-sm font-medium">Units Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentForTwo;
