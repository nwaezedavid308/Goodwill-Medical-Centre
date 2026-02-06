
import React from 'react';

const SERVICES_DATA = [
    { title: 'General Outpatient Care', desc: 'Comprehensive medical consultations for all ages.', img: '/images/gallery/Patient_Waiting_Area_Talk.jpg' },
    { title: 'Eye Health & Cataract Surgeries', desc: 'Expert eye care, screenings, and life-changing surgeries.', img: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg' },
    { title: 'Maternal & Child Health', desc: 'Antenatal, delivery, and postnatal care ensuring safe births.', img: '/images/gallery/Maternal_Health_Training_Session_1.jpg' },
    { title: 'Diagnostic Laboratory & Scan', desc: 'Accurate and timely diagnostic services.', img: '/images/gallery/GMC_Laboratory_Equipment.jpg' },
    { title: 'Accident & Emergency', desc: '24/7 emergency care handling critical situations.', img: '/images/gallery/Gate_Entrance_Gathering.jpg' },
    { title: 'Paediatric Care', desc: 'Specialized care for newborns and children.', img: '/images/gallery/Newborn_Baby_Care.jpg' },
    { title: 'ENT Services', desc: 'Ear, Nose, and Throat diagnosis and treatment.', img: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg' },
    { title: 'Inpatient Admissions', desc: 'Comfortable wards and professional surgical procedures.', img: '/images/gallery/Clinic_Hallway_Waiting_Area.jpg' },
    { title: 'Health Education', desc: 'Community outreach and preventive health education.', img: '/images/gallery/Health_Education_Session.jpg' },
    { title: 'School-Based Eye Screening', desc: 'Protecting the vision of the next generation.', img: '/images/gallery/Community_Health_Walk.jpg' }
];

const Services: React.FC = () => {
    return (
        <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Header */}
            <header className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Excellence in Care</span>
                <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 mt-2">Medical Services</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We offer a wide range of specialized medical services designed to provide top-tier care to our community, ensuring that quality healthcare is accessible to everyone.
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
                        href="#contact"
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
