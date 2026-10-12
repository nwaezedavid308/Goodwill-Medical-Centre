import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Maximize2, Video, Image as ImageIcon, Camera, Building, Sparkles } from 'lucide-react';
import VideoModal from '../components/VideoModal';

interface GalleryItem {
  id: number;
  src: string;
  category: 'Facilities' | 'Clinical' | 'Maternal' | 'Training' | 'Team' | 'Bridge';
  title: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  // Facilities
  {
    id: 1,
    src: '/images/Goodwill-Medical-centre-front-view.jpeg',
    category: 'Facilities',
    title: 'GMC Main Medical Complex',
    description: 'Front view of the purpose-built secondary hospital building in Umuchigbo, Enugu East.',
  },
  {
    id: 2,
    src: '/images/report/report-53.jpeg',
    category: 'Facilities',
    title: 'Hospital Entrance & Emergency Gate',
    description: 'GMC entrance with covered ambulance drop-off bay and wheelchair access ramp.',
  },
  {
    id: 3,
    src: '/images/gallery/Clinic_Hallway_Waiting_Area.jpg',
    category: 'Facilities',
    title: 'Outpatient Reception & Waiting Hall',
    description: 'Spacious, clean, and well-ventilated waiting area for outpatient consultations.',
  },
  {
    id: 4,
    src: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg',
    category: 'Facilities',
    title: 'Hospital Pharmacy Dispensary',
    description: 'Fully stocked pharmacy dispensary equipped with certified medications.',
  },
  {
    id: 5,
    src: '/images/gallery/GMC_Laboratory_Workspace.jpg',
    category: 'Facilities',
    title: 'Diagnostic Laboratory Workspace',
    description: 'Advanced hematology and chemistry analyzers supporting rapid clinical decisions.',
  },

  // Maternal & Child Health
  {
    id: 6,
    src: '/images/report/report-03.jpeg',
    category: 'Maternal',
    title: 'Maternal & Newborn Care Ward',
    description: 'Mother and newborn baby recovering safely under the supervision of GMC midwives.',
  },
  {
    id: 7,
    src: '/images/gallery/Newborn_Baby_Care.jpg',
    category: 'Maternal',
    title: 'Neonatal Care & Assessment',
    description: 'Clinical examination and vital signs monitoring for newborns.',
  },
  {
    id: 8,
    src: '/images/gallery/IMG-20251215-WA0037.jpg',
    category: 'Maternal',
    title: 'Postnatal Ward Joy',
    description: 'Healthy delivery celebration in the maternal inpatient wing.',
  },
  {
    id: 9,
    src: '/images/gallery/Group_Photo_With_Maternal_Kits.jpg',
    category: 'Maternal',
    title: 'Free Maternal Delivery Kit Distribution',
    description: 'Equipping expectant mothers with sterile delivery essentials during ANC clinics.',
  },

  // Clinical & Surgical
  {
    id: 10,
    src: '/images/report/report-02.jpeg',
    category: 'Clinical',
    title: 'Comprehensive Health Screening',
    description: 'Blood pressure and glucose checkups during a community medical outreach.',
  },
  {
    id: 11,
    src: '/images/report/report-11.jpeg',
    category: 'Clinical',
    title: 'Eye Examination Clinic',
    description: 'Slit-lamp examination by Consultant Ophthalmologist in the eye care unit.',
  },
  {
    id: 12,
    src: '/images/report/report-16.png',
    category: 'Clinical',
    title: 'Medical Laboratory Diagnostics',
    description: 'Microscopic and microbiological evaluations performed by medical scientists.',
  },
  {
    id: 13,
    src: '/images/gallery/Medical_Staff_Late_Night_Shift.jpg',
    category: 'Clinical',
    title: '24/7 Night Duty Medical Shift',
    description: 'Round-the-clock emergency team ensuring constant patient surveillance.',
  },

  // Team & Leadership
  {
    id: 14,
    src: '/images/gallery/Medical_Staff_Team_Photo_1.jpg',
    category: 'Team',
    title: 'GMC Medical Staff Team',
    description: 'Specialists, doctors, nurses, pharmacists, and support staff.',
  },
  {
    id: 15,
    src: '/images/gallery/GMC_Leadership_Team_Group_Photo_1.jpg',
    category: 'Team',
    title: 'Clinical Leadership & Management',
    description: 'Hospital administrators and heads of clinical departments.',
  },
  {
    id: 16,
    src: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg',
    category: 'Team',
    title: 'Pharmacy & Outreach Personnel',
    description: 'Commemorating World Sight Day eye screening and medicine distribution.',
  },
  {
    id: 17,
    src: '/images/gallery/Team_Selfie_Outdoor.jpg',
    category: 'Team',
    title: 'Outreach Team Spirit',
    description: 'Our enthusiastic healthcare volunteers preparing for school health screenings.',
  },

  // Training & Capacity Building
  {
    id: 18,
    src: '/images/gallery/Maternal_Health_Training_Session_1.jpg',
    category: 'Training',
    title: 'Traditional Birth Attendant (TBA) Training',
    description: 'Capacity-building workshop training local birth attendants on early danger signs.',
  },
  {
    id: 19,
    src: '/images/gallery/Presentation_Of_Certificate.jpg',
    category: 'Training',
    title: 'Clinical Certification Ceremony',
    description: 'Awarding certificates to trained health workers and clinical interns.',
  },
  {
    id: 20,
    src: '/images/gallery/Workshop_Training_Session_Discussion.jpg',
    category: 'Training',
    title: 'Continuing Medical Education (CME)',
    description: 'Interactive peer review and quality improvement session for hospital clinicians.',
  },

  // Avah River Bridge & Outreach
  {
    id: 21,
    src: '/images/report/report-31.jpeg',
    category: 'Bridge',
    title: 'Avah River Iron Bridge Commissioning',
    description: 'Official opening of the iron pedestrian and keke bridge linking isolated towns to GMC.',
  },
  {
    id: 22,
    src: '/images/gallery/Community_Health_Walk.jpg',
    category: 'Bridge',
    title: 'Community Health Awareness Walk',
    description: 'Community members and hospital staff marching together to champion preventive health.',
  },
  {
    id: 23,
    src: '/images/report/report-19.jpeg',
    category: 'Bridge',
    title: 'Rural Community Health Outreach Camp',
    description: 'Delivering free medications, eye drops, and consultations directly to villages.',
  },
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<'aerial' | 'inside'>('aerial');

  const tabs = ['All', 'Facilities', 'Maternal', 'Clinical', 'Team', 'Training', 'Bridge'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <main className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Visual Archive · Media Hub
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
          Goodwill Medical Centre Gallery
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Witness our model healthcare environment, cutting-edge clinical tools, dedicated medical teams, and the communities whose lives are changed every day.
        </p>
      </header>

      {/* Video Features Section */}
      <section className="mb-16 bg-slate-900 text-white rounded-[3rem] p-8 md:p-14 overflow-hidden relative shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="px-3.5 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-purple-500/30">
              <Video className="w-3.5 h-3.5" /> High-Definition Video Tours
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Experience GMC Through Official Video Tours
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Watch drone footage capturing our hospital architecture, serene Umuchigbo grounds, alongside walk-through footage of inpatient wards, consulting clinics, laboratory, and pharmacy.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveVideo('aerial');
                  setIsVideoModalOpen(true);
                }}
                className="px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-600/30"
              >
                <Play className="w-4 h-4 fill-current" />
                Play Aerial & Grounds Video
              </button>
              <button
                onClick={() => {
                  setActiveVideo('inside');
                  setIsVideoModalOpen(true);
                }}
                className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 transition-all border border-slate-700"
              >
                <Building className="w-4 h-4" />
                Play Interior Clinic Tour
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onClick={() => {
                setActiveVideo('aerial');
                setIsVideoModalOpen(true);
              }}
              className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border-4 border-white/10"
            >
              <img
                src="/images/Goodwill-Medical-centre-front-view.jpeg"
                alt="Video thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-lg text-white text-[11px] font-bold">
                2 Video Tours Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === tab
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Photos Masonry/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <article
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group bg-white rounded-[2rem] overflow-hidden border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/600x400/9333ea/ffffff?text=' + encodeURIComponent(item.title);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-900 shadow-sm">
                {item.category}
              </span>

              <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light line-clamp-2">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-bold uppercase">
                {filteredItems[lightboxIndex].category} · Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo Container with navigation */}
            <div className="relative aspect-video max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 p-3 rounded-full bg-slate-900/70 hover:bg-purple-600 text-white transition-all backdrop-blur-sm"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 p-3 rounded-full bg-slate-900/70 hover:bg-purple-600 text-white transition-all backdrop-blur-sm"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-6 bg-slate-950/90 space-y-2">
              <h3 className="text-white font-serif font-bold text-lg sm:text-xl">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        initialVideo={activeVideo}
      />
    </main>
  );
};

export default Gallery;
