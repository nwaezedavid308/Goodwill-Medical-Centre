
import React from 'react';

const Gallery: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('All');

    const CATEGORIES = ['All', 'Outreach', 'Clinical', 'Training', 'Team'];

    const GALLERY_IMAGES = [
        // Outreach
        { src: '/images/gallery/Community_Celebration_Procession.jpg', category: 'Outreach', caption: 'Community Celebration' },
        { src: '/images/gallery/Community_Gathering_Stand.jpg', category: 'Outreach', caption: 'Town Hall Meeting' },
        { src: '/images/gallery/Community_Health_Walk.jpg', category: 'Outreach', caption: 'Health Walk' },
        { src: '/images/gallery/Community_Women_Walking_Together.jpg', category: 'Outreach', caption: 'Women in Solidarity' },
        { src: '/images/gallery/Joyful_Community_Dancing.jpg', category: 'Outreach', caption: 'Joyful Moments' },
        { src: '/images/gallery/Women_Singing_Celebration.jpg', category: 'Outreach', caption: 'Songs of Hope' },

        // Clinical
        { src: '/images/gallery/Newborn_Baby_Care.jpg', category: 'Clinical', caption: 'Newborn Care' },
        { src: '/images/gallery/Pediatric_Checkup_Waiting_Area.jpg', category: 'Clinical', caption: 'Pediatric Checkup' },
        { src: '/images/gallery/GMC_Laboratory_Equipment.jpg', category: 'Clinical', caption: 'Modern Lab Equipment' },
        { src: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg', category: 'Clinical', caption: 'Well-Stocked Pharmacy' },
        { src: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg', category: 'Clinical', caption: 'Dedicated Staff' },

        // Training
        { src: '/images/gallery/Maternal_Health_Training_Session_1.jpg', category: 'Training', caption: 'Maternal Health Training' },
        { src: '/images/gallery/Workshop_Training_Lecture_Room.jpg', category: 'Training', caption: 'Workshop Session' },
        { src: '/images/gallery/Presentation_Of_Certificate.jpg', category: 'Training', caption: 'Certificate Presentation' },
        { src: '/images/gallery/Health_Education_Session.jpg', category: 'Training', caption: 'Health Education' },

        // Team
        { src: '/images/gallery/GMC_Leadership_Team_Group_Photo_1.jpg', category: 'Team', caption: 'Leadership Team' },
        { src: '/images/gallery/Medical_Staff_Team_Photo_1.jpg', category: 'Team', caption: 'Medical Staff' },
        { src: '/images/gallery/Team_Selfie_Outdoor.jpg', category: 'Team', caption: 'Team Spirit' },
    ];

    const filteredImages = activeTab === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeTab);

    return (
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen bg-[#FFF9F2]">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Our Gallery</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Capturing moments of care, community, and hope. See our impact in action.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${activeTab === category
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-masonry">
                {filteredImages.map((image, index) => (
                    <div key={index} className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-100">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.caption}
                                loading="lazy"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/9333ea/ffffff?text=GMC+Gallery';
                                }}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div>
                                <span className="text-purple-300 text-xs font-bold uppercase tracking-widest block mb-1">{image.category}</span>
                                <h3 className="text-white font-serif text-lg">{image.caption}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 py-12 border-t border-purple-100 text-center">
                <p className="text-slate-500 italic">"Every picture tells a story of a life touched."</p>
            </div>
        </div>
    );
};

export default Gallery;
