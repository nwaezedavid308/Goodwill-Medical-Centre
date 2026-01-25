
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/20">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div>
                <span className="block text-2xl font-bold tracking-tight text-white uppercase">
                  Goodwill Medical
                </span>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em]">Health Centre</span>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed font-light text-slate-300 max-w-sm">
              Bridging the healthcare divide by enabling the well-off to support the vulnerable through quality care.
            </p>

            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 hover:bg-purple-600 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-70" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] pt-2">Our Mission</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About PACIEH</a></li>
              <li><a href="#impact" className="hover:text-purple-400 transition-colors">Impact & Milestones</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Medical Services</a></li>
              <li><a href="#get-involved" className="hover:text-purple-400 transition-colors">How You Can Help</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] pt-2">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-purple-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="text-sm leading-relaxed">
                  No. 3, Chief Jude Agu Street, <br/>
                  Umuchigbo, Enugu East LGA, <br/>
                  Enugu State, Nigeria
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-sm">goodwillmedicalcentre23@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-600">
            © {new Date().getFullYear()} Goodwill Medical Centre (GMC)
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-purple-600">
            Powered by PACIEH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
