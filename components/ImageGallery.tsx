import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Eye, Shield, Users, Building, Heart } from 'lucide-react';
import VideoModal from './VideoModal';

const HIGHLIGHT_PHOTOS = [
  {
    src: '/images/Goodwill-Medical-centre-front-view.jpeg',
    category: 'Facilities',
    title: 'Goodwill Medical Centre Complex',
    description: 'Purpose-built secondary hospital with modern outpatient, diagnostic and surgical infrastructure in Umuchigbo.',
  },
  {
    src: '/images/gallery/Medical_Staff_Team_Photo_1.jpg',
    category: 'Team',
    title: 'Multidisciplinary Medical Personnel',
    description: 'Our consultant surgeons, obstetricians, nurses, and laboratory scientists dedicated to quality care.',
  },
  {
    src: '/images/gallery/IMG-20251215-WA0037.jpg',
    category: 'Maternal',
    title: 'Maternal & Newborn Care Unit',
    description: 'Delivering safe child births, comprehensive emergency obstetric care, and newborn resuscitation.',
  },
  {
    src: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg',
    category: 'Pharmacy',
    title: '24/7 Fully Stocked Pharmacy',
    description: 'Providing genuine, quality-assured, and heavily subsidized medications around the clock.',
  },
  {
    src: '/images/report/report-31.jpeg',
    category: 'Bridge',
    title: 'Commissioning the Avah River Bridge',
    description: 'The historic iron bridge opening on 8 April 2025, reconnecting four isolated communities with GMC.',
  },
  {
    src: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg',
    category: 'Team',
    title: 'World Sight Day Outreach Team',
    description: 'Screening and performing cataract surgeries for elderly and rural community members in Enugu East.',
  },
];

const ImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoModalType, setVideoModalType] = useState<'aerial' | 'inside'>('aerial');

  const categories = ['All', 'Facilities', 'Team', 'Maternal', 'Pharmacy', 'Bridge'];

  const filteredImages = selectedCategory === 'All'
    ? HIGHLIGHT_PHOTOS
    : HIGHLIGHT_PHOTOS.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-24 bg-[#FFF9F2] relative overflow-hidden" id="gallery-preview">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-purple-600 uppercase">
              Visual Highlights · Life at GMC
            </span>
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Compassionate Care in Focus
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light">
              Explore our modern facilities, specialist medical staff, vibrant community outreach programs, and life-changing health interventions in Umuchigbo, Enugu East.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setVideoModalType('aerial');
                setIsVideoModalOpen(true);
              }}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
            >
              <Play className="w-4 h-4 fill-current text-purple-400" />
              Watch Video Tours
            </button>
            <Link
              to="/gallery"
              className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-purple-600/25 transition-all"
            >
              Full Gallery ({HIGHLIGHT_PHOTOS.length}+)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-purple-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img loading="lazy"
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/fallback.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-900 shadow-sm">
                  {img.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2 line-clamp-3">
                    {img.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-purple-600 font-bold">Goodwill Medical Centre</span>
                  <Link
                    to="/gallery"
                    className="text-slate-400 group-hover:text-purple-700 flex items-center gap-1 font-semibold transition-colors"
                  >
                    View <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Banner Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Play className="w-3.5 h-3.5 fill-current" /> Video Walkthrough Experience
            </span>
            <h3 className="text-2xl md:text-3xl font-sans font-bold">
              Take a Virtual Aerial & Facility Tour of GMC
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              See the complete landscape of Goodwill Medical Centre, our emergency entrance, consulting wings, and modern surgical wards from the comfort of your screen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => {
                setVideoModalType('aerial');
                setIsVideoModalOpen(true);
              }}
              className="px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/30"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Aerial Tour
            </button>
            <button
              onClick={() => {
                setVideoModalType('inside');
                setIsVideoModalOpen(true);
              }}
              className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Building className="w-4 h-4" />
              Watch Inside Tour
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        initialVideo={videoModalType}
      />
    </section>
  );
};

export default ImageGallery;
