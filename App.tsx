
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ImpactSection from './components/ImpactSection.tsx';
import ServicesGrid from './components/ServicesGrid.tsx';
import BridgeImpact from './components/BridgeImpact.tsx';
import InsuranceSchemes from './components/InsuranceSchemes.tsx';
import ImageGallery from './components/ImageGallery.tsx';
import GetInvolved from './components/GetInvolved.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-slate-800 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Intro */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center" id="about">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              A Centre Built on Integrity & Excellence
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Goodwill Medical Centre (GMC) is a premier healthcare facility committed to providing excellence in medicine. We bridge the healthcare divide by ensuring accessible, top-tier clinical care through community-centered innovation.
            </p>
          </div>
        </section>

        <ImpactSection />
        <ServicesGrid />
        <BridgeImpact />
        <InsuranceSchemes />
        <ImageGallery />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default App;
