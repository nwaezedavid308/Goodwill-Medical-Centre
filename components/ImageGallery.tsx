
import React from 'react';
import { Link } from 'react-router-dom';

const ImageGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF9F2]" id="gallery">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase">GMC in Focus</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Life at Goodwill Medical Centre</h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            A visual journey through our facilities, community impact, and the dedicated professionals who make it all possible.
          </p>
          <div className="pt-8">
            <Link
              to="/gallery"
              className="inline-block px-10 py-5 bg-purple-600 text-white rounded-[2rem] font-bold shadow-xl shadow-purple-600/20 hover:bg-purple-700 transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Explore Our Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
