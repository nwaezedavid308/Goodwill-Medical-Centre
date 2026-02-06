
import React from 'react';

const Gallery: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('All');

    const CATEGORIES = ['All', 'Outreach', 'Clinical', 'Training', 'Team'];

    // OPTIMIZED: Using smaller images (< 2MB) to avoid GitHub sync issues
    const GALLERY_IMAGES = [
        // Outreach - Using smaller images
        { src: '/images/gallery/Community_Gathering_Stand.jpg', category: 'Outreach', caption: 'Town Hall Meeting' },
        { src: '/images/gallery/Community_Health_Walk.jpg', category: 'Outreach', caption: 'Health Walk' },
        { src: '/images/gallery/Community_Women_Walking_Together.jpg', category: 'Outreach', caption: 'Women in Solidarity' },
        { src: '/images/gallery/Gate_Entrance_Gathering.jpg', category: 'Outreach', caption: 'Community Gathering' },

        // Clinical
        { src: '/images/gallery/Newborn_Baby_Care.jpg', category: 'Clinical', caption: 'Newborn Care' },
        { src: '/images/gallery/Pediatric_Checkup_Waiting_Area.jpg', category: 'Clinical', caption: 'Pediatric Checkup' },
        { src: '/images/gallery/GMC_Laboratory_Equipment.jpg', category: 'Clinical', caption: 'Modern Lab Equipment' },
        { src: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg', category: 'Clinical', caption: 'Well-Stocked Pharmacy' },
        { src: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg', category: 'Clinical', caption: 'Dedicated Staff' },
        { src: '/images/gallery/Patient_Waiting_Area_Talk.jpg', category: 'Clinical', caption: 'Patient Care' },

        // Training
        { src: '/images/gallery/Maternal_Health_Training_Session_1.jpg', category: 'Training', caption: 'Maternal Health Training' },
        { src: '/images/gallery/Maternal_Health_Training_Session_2.jpg', category: 'Training', caption: 'Healthcare Workshop' },
        { src: '/images/gallery/Workshop_Training_Lecture_Room.jpg', category: 'Training', caption: 'Workshop Session' },
        { src: '/images/gallery/Presentation_Of_Certificate.jpg', category: 'Training', caption: 'Certificate Presentation' },
        { src: '/images/gallery/Health_Education_Session.jpg', category: 'Training', caption: 'Health Education' },
        { src: '/images/gallery/Training_Session_Audience.jpg', category: 'Training', caption: 'Training Audience' },

        // Team
        { src: '/images/gallery/GMC_Leadership_Team_Group_Photo_1.jpg', category: 'Team', caption: 'Leadership Team' },
        { src: '/images/gallery/Medical_Staff_Team_Photo_1.jpg', category: 'Team', caption: 'Medical Staff' },
        { src: '/images/gallery/Team_Selfie_Outdoor.jpg', category: 'Team', caption: 'Team Spirit' },
        { src: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg', category: 'Team', caption: 'Pharmacy Team' },
        { src: '/images/gallery/World_Sight_Day_Pharmacy_Staff_Pose.jpg', category: 'Team', caption: 'Team Celebration' },
    ];

    const filteredImages = activeTab === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeTab);

    return (
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen bg-[#FFF9F2]">
            {/* Header */}
            <header className="text-center mb-16">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">GMC in Focus</span>
                <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 mt-2">Our Gallery</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Capturing moments of care, community, and hope. See our impact in action.
                </p>
            </header>

            {/* Category Tabs */}
            <nav
                className="flex flex-wrap justify-center gap-4 mb-12"
                role="tablist"
                aria-label="Gallery categories"
            >
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        role="tab"
                        aria-selected={activeTab === category}
                        aria-controls="gallery-grid"
                        className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${activeTab === category
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                            : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            {/* Gallery Grid */}
            <div
                id="gallery-grid"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                role="tabpanel"
            >
                {filteredImages.map((image, index) => (
                    <GalleryImage
                        key={`${image.src}-${index}`}
                        image={image}
                        index={index}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
                <div className="text-center py-24">
                    <p className="text-slate-500 italic">No images found in this category.</p>
                </div>
            )}

            {/* Footer Quote */}
            <footer className="mt-24 py-12 border-t border-purple-100 text-center">
                <p className="text-slate-500 italic text-lg">"Every picture tells a story of a life touched."</p>
            </footer>
        </div>
    );
};

// Separate component for individual gallery images with loading states
const GalleryImage: React.FC<{ image: { src: string; category: string; caption: string }; index: number }> = ({ image, index }) => {
    const [loaded, setLoaded] = React.useState(false);
    const [error, setError] = React.useState(false);

    return (
        <article
            className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-100"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                {/* Loading State */}
                {!loaded && !error && (
                    <div className="absolute inset-0 img-loading" aria-label="Loading image" />
                )}

                {/* Image */}
                <img
                    src={image.src}
                    alt={`${image.caption} - ${image.category} at Goodwill Medical Centre`}
                    loading="lazy"
                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${loaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setLoaded(true)}
                    onError={(e) => {
                        setError(true);
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/9333ea/ffffff?text=GMC+Gallery';
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                        <span className="text-purple-300 text-xs font-bold uppercase tracking-widest block mb-1">
                            {image.category}
                        </span>
                        <h3 className="text-white font-serif text-lg">{image.caption}</h3>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Gallery;
