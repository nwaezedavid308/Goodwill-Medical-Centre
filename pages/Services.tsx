
import React from 'react';

const SERVICES_DATA = [
    { title: 'General Outpatient Care', desc: 'Consultant-led consultations for medical and surgical conditions. GMC recorded 12,506 outpatient visits in its first two years.', img: '/images/report/report-02.jpeg' },
    { title: 'Eye Health & Cataract Surgery', desc: 'Diagnostic, surgical and preventive eye care, including 2,523 reviews and 91 cataract surgeries by December 2025.', img: '/images/report/report-11.jpeg' },
    { title: 'Maternal, Newborn & Child Health', desc: 'Antenatal education, delivery, postnatal support and comprehensive emergency obstetric and newborn care.', img: '/images/report/report-03.jpeg' },
    { title: 'Diagnostic Laboratory & Scan', desc: 'Laboratory testing and imaging to support accurate and timely diagnosis.', img: '/images/report/report-16.png' },
    { title: 'Accident & Emergency', desc: 'Round-the-clock assessment and treatment for urgent medical and surgical conditions.', img: '/images/report/report-07.jpeg' },
    { title: 'Paediatric Care', desc: 'Specialist care for newborns, infants and children in a family-centred setting.', img: '/images/report/report-13.jpeg' },
    { title: 'ENT Services', desc: 'Specialist assessment and treatment for ear, nose and throat conditions.', img: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg' },
    { title: 'Inpatient & Surgical Care', desc: 'Hospital admission, general surgery and postoperative care supported by specialist consultants.', img: '/images/report/report-09.jpeg' },
    { title: 'Pharmacy Services', desc: 'Stronger inventory controls, weekly checks and a dedicated procurement account improve medicine availability.', img: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg' },
    { title: 'Community & School Outreach', desc: 'Screenings, preventive health education, medicines and referrals delivered directly to underserved communities.', img: '/images/report/report-19.jpeg' }
];

const Services: React.FC = () => {
    return (
        <main className="pt-16 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Header */}
            <header className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Excellence in Care</span>
                <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 mt-2">Medical Services</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Specialist-led secondary healthcare for adults, mothers, newborns and children, supported by diagnostics, pharmacy, emergency services and community referral pathways.
                </p>
            </header>

            {/* Services Grid */}
            <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                aria-label="Medical services offered"
            >
                {SERVICES_DATA.map((service, idx) => (
                    <ServiceCard key={idx} service={service} index={idx} />
                ))}
            </section>

            {/* CTA Section */}
            <section
                className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
                aria-labelledby="cta-heading"
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/gallery/Community_Gathering_Stand.jpg')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 id="cta-heading" className="text-3xl md:text-5xl font-serif">Need Specialized Care?</h2>
                    <p className="text-slate-300 text-lg">
                        Our doors are open to everyone. Whether you need a routine check-up or specialized surgery, we are here to serve you with dignity.
                    </p>
                    <a
                        href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/50 hover:shadow-xl hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        aria-label="Book an appointment at Goodwill Medical Centre"
                    >
                        Book an Appointment
                    </a>
                </div>
            </section>
        </main>
    );
};

// Individual Service Card Component with Loading States
const ServiceCard: React.FC<{ service: typeof SERVICES_DATA[0]; index: number }> = ({ service, index }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
        <article
            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            style={{ animationDelay: `${index * 75}ms` }}
        >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative">
                {/* Loading State */}
                {!imageLoaded && (
                    <div className="absolute inset-0 img-loading" aria-label="Loading service image" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10" />

                {/* Image */}
                <img
                    src={service.img}
                    alt={`${service.title} service at Goodwill Medical Centre`}
                    className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/9333ea/ffffff?text=Service';
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <div
                    className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 font-bold mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors"
                    aria-hidden="true"
                >
                    {index + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                </p>
            </div>
        </article>
    );
};

export default Services;
