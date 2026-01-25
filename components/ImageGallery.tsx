
import React from 'react';

const GALLERY_IMAGES = [
  { src: './Goodwill-medical-centre-front-view.jpg', title: 'Main Hospital Front', category: 'Facility' },
  { src: './signage.jpg', title: 'Quality Care Signage', category: 'Infrastructure' },
  { src: './baby.jpg', title: 'Pediatrics & Newborn Care', category: 'Clinical' },
  { src: './bridge-gate.jpg', title: 'Avah River Bridge Gate', category: 'Impact' },
  { src: './community-outreach.jpg', title: 'Community Outreach Group', category: 'Outreach' },
  { src: './staff-training.jpg', title: 'Medical Staff Training', category: 'Education' },
  { src: './women-training.jpg', title: 'Community Awareness Session', category: 'Education' },
  { src: './clinic-side-view.jpg', title: 'Hospital Side Gardens', category: 'Facility' },
  { src: './handover-docs.jpg', title: 'Partnership Handover', category: 'Milestone' },
  { src: './handover-docs-2.jpg', title: 'Strategic Collaboration', category: 'Milestone' },
  { src: './handover-docs-3.jpg', title: 'Handover Ceremony', category: 'Milestone' },
  { src: './waiting-room.jpg', title: 'Modern Waiting Areas', category: 'Facility' },
  { src: './patients-waiting.jpg', title: 'Patient Registration', category: 'Facility' },
  { src: './staff-training-2.jpg', title: 'Integrated Management Training', category: 'Education' },
  { src: './group-photo-staff.jpg', title: 'The GMC Medical Team', category: 'Staff' }
];

const ImageGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF9F2]" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase text-center">GMC in Focus</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Life at Goodwill Medical Centre</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">A visual journey through our facilities, community impact, and the dedicated professionals who make it all possible.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[2.5rem] shadow-md hover:shadow-2xl transition-all duration-500 border border-white bg-white">
              <div className="img-loading w-full min-h-[100px]">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 block" 
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).parentElement?.classList.remove('img-loading');
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/9333ea/ffffff?text=${encodeURIComponent(img.title)}`;
                    target.parentElement?.classList.remove('img-loading');
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <span className="text-[10px] text-purple-200 uppercase tracking-widest font-bold mb-2">{img.category}</span>
                <p className="text-white font-serif text-xl italic">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
