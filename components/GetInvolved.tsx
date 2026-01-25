
import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF9F2]" id="get-involved">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Join the Movement</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">How You Can Help</h3>
          <p className="text-slate-600">Whether you are a donor, a medical professional, or a community member, there is a place for you at GMC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Sponsor a Surgery', 
              desc: 'Help restore vision or provide safe deliveries for indigent mothers.',
              cta: 'Donate Now'
            },
            { 
              title: 'Support Patient Bills', 
              desc: 'Help us cover medical costs for less privileged patients in our community.',
              cta: 'Give Support'
            },
            { 
              title: 'Volunteer Your Time', 
              desc: 'Medical professionals and community members are welcome to help.',
              cta: 'Sign Up'
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
      </div>
    </section>
  );
};

export default GetInvolved;
