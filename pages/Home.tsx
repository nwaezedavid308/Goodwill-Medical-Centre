import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import ServicesGrid from '../components/ServicesGrid';
import BridgeImpact from '../components/BridgeImpact';
import InsuranceSchemes from '../components/InsuranceSchemes';
import ImageGallery from '../components/ImageGallery';
import GetInvolved from '../components/GetInvolved';
import VideoModal from '../components/VideoModal';
import { Stethoscope, Calendar, ArrowRight, ShieldCheck, Heart, Sparkles, Quote } from 'lucide-react';

interface HomeProps {
  onOpenAppointment?: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenAppointment }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* Upgraded Hero with Call to Actions & Metrics Ribbon */}
      <Hero
        onOpenAppointment={onOpenAppointment}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* About Intro & Commitment Statement */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center" id="about">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-purple-600 uppercase">
            Our Foundation & Purpose
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 leading-tight">
            A Model Secondary Hospital Built for Accessible Care
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Goodwill Medical Centre was established with visionary support from the <strong>TY Danjuma Foundation</strong> and is managed under the governance of <strong>PACIEH</strong>. Located in Umuchigbo, Enugu East, GMC combines specialist-led medical expertise with a sustainable cross-subsidy model—ensuring that every life, regardless of economic background, receives world-class medical attention.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Link
              to="/about"
              className="px-6 py-3 bg-purple-600 text-white rounded-2xl text-xs font-bold hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 inline-flex items-center gap-2"
            >
              Read Our Full Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/doctors"
              className="px-6 py-3 bg-white text-slate-800 border border-purple-200 rounded-2xl text-xs font-bold hover:bg-purple-50 transition-all inline-flex items-center gap-2"
            >
              Meet Our Medical Consultants <Stethoscope className="w-3.5 h-3.5 text-purple-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hospital Impact Numbers & Case Studies */}
      <ImpactSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Avah River Bridge Impact Feature */}
      <BridgeImpact />

      {/* Subsidized Healthcare & Insurance Schemes */}
      <InsuranceSchemes />

      {/* Gallery Showcase with Real Photos & Video Tour Trigger */}
      <ImageGallery />

      {/* Featured Patient Story Spotlight */}
      <section className="py-20 bg-white border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FFF9F2] rounded-[3rem] p-8 md:p-14 border border-purple-100 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl">
              <span className="text-purple-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Quote className="w-4 h-4" /> Patient Story Spotlight
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                "Today, my baby boy and I are alive because GMC was ready."
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                Mrs. Chinyere Nnamani arrived in obstructed labour and received an emergency Caesarean section free of charge under the federally supported CEmONC initiative, saving her family ₦450,000.
              </p>
              <div className="pt-2">
                <Link
                  to="/testimonials"
                  className="text-purple-700 font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
                >
                  Read More Patient Stories <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 flex-shrink-0">
              <img
                src="/images/gallery/IMG-20251215-WA0037.jpg"
                alt="Mother and baby at GMC"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/report/report-03.jpeg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved & Priority Roadmap */}
      <GetInvolved />

      {/* Video Modal Triggerable from Home */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        initialVideo="aerial"
      />
    </>
  );
};

export default Home;
