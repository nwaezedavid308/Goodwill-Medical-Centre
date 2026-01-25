
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
              <h2 className="text-4xl md:text-5xl font-serif text-white">Treatment for Two</h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                Innovative philanthropy that fosters solidarity. Through this program, wealthier patients subsidize the care of indigent patients, creating a sustainable culture of shared responsibility.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full border border-purple-400/50 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-white font-medium italic">"Every treatment becomes a gift to another."</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-end">
                  <p className="text-white text-3xl font-bold">60+</p>
                  <p className="text-purple-300 text-sm font-medium">Poor Families Covered</p>
                </div>
                <div className="aspect-square bg-sky-500 rounded-3xl p-8 flex flex-col justify-end shadow-xl">
                  <p className="text-white text-3xl font-bold">NHIA</p>
                  <p className="text-sky-100 text-sm font-medium">Accredited Facility</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-purple-600 rounded-3xl p-8 flex flex-col justify-end shadow-xl">
                  <p className="text-white text-3xl font-bold">Universal</p>
                  <p className="text-purple-100 text-sm font-medium">Health Coverage Goal</p>
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-end">
                  <p className="text-white text-3xl font-bold">2028</p>
                  <p className="text-purple-300 text-sm font-medium">School Screening Target</p>
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
