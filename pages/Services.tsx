
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
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Excellence in Care</span>
                <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 mt-2">Medical Services</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We offer a wide range of specialized medical services designed to provide top-tier care to our community, ensuring that quality healthcare is accessible to everyone.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES_DATA.map((service, idx) => (
                    <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/9333ea/ffffff?text=Service';
                                }}
                            />
                        </div>
                        <div className="p-8">
                            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 font-bold mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/gallery/Community_Celebration_Procession.jpg')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif">Need Specialized Care?</h2>
                    <p className="text-slate-300 text-lg">
                        Our doors are open to everyone. Whether you need a routine check-up or specialized surgery, we are here to serve you with dignity.
                    </p>
                    <button className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/50">
                        Book an Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
