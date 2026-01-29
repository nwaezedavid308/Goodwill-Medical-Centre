
import React from 'react';
import Hero from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import ServicesGrid from '../components/ServicesGrid';
import BridgeImpact from '../components/BridgeImpact';
import InsuranceSchemes from '../components/InsuranceSchemes';
import ImageGallery from '../components/ImageGallery';
import GetInvolved from '../components/GetInvolved';

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
