import React, { useState } from 'react';
import { Calendar, Clock, Stethoscope, Eye, Baby, HeartPulse, Activity, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onBookService?: (serviceTitle: string) => void;
}

const SERVICES_DATA = [
  {
    title: 'General Outpatient Care (GOPD)',
    category: 'Outpatient',
    schedule: 'Mondays to Saturdays · 8:00 AM – 5:00 PM',
    desc: 'Consultant-led diagnostic consultations for acute and chronic conditions, preventive medicine, hypertension and diabetes management. GMC recorded over 12,506 outpatient visits in its initial two years.',
    img: '/images/report/report-02.jpeg',
    features: ['Blood pressure & blood glucose monitoring', 'Adult health screening', 'Subsidized prescription medicines'],
  },
  {
    title: 'Maternal, Newborn & Child Health (CEmONC)',
    category: 'Maternal',
    schedule: 'Antenatal: Tuesdays & Thursdays · Delivery: 24/7',
    desc: 'Comprehensive Emergency Obstetric and Newborn Care. Includes ultrasound fetal assessment, high-risk antenatal supervision, sterile labour suites, and life-saving Caesarean sections (91 free C-sections funded).',
    img: '/images/report/report-03.jpeg',
    features: ['Free CEmONC emergency C-sections', 'Free maternal delivery kits', 'Neonatal resuscitation & care'],
  },
  {
    title: 'Eye Health & Cataract Surgery',
    category: 'Eye Care',
    schedule: 'Wednesdays & Saturdays · 9:00 AM – 2:00 PM',
    desc: 'Consultant Ophthalmologist-led diagnosis, refractive testing, glaucoma screening, and high-volume Small-Incision Cataract Surgeries (SICS) in partnership with Sightsavers Nigeria at 30–60% below city hospital fees.',
    img: '/images/report/report-11.jpeg',
    features: ['2,523+ eye reviews conducted', '91 sight-restoring cataract surgeries', 'Subsidized corrective eyeglasses'],
  },
  {
    title: 'Diagnostic Laboratory & Imaging',
    category: 'Diagnostics',
    schedule: 'Open 24/7 for Routine & Emergency Tests',
    desc: 'Clinical hematology, chemical pathology, microbiology, malaria and typhoid rapid diagnostics, and ultrasound scans ensuring prompt, evidence-based medical decisions.',
    img: '/images/report/report-16.png',
    features: ['Same-day test turnarounds', 'High-resolution obstetric scans', 'Strict quality control standards'],
  },
  {
    title: 'Accident & Emergency (A&E)',
    category: 'Emergency',
    schedule: 'Open 24 Hours · 7 Days a Week (365 Days)',
    desc: 'Rapid medical stabilization and trauma assessment for urgent surgical, medical, and pediatric emergencies supported by our dedicated ambulance bay and toll-free hotline.',
    img: '/images/report/report-07.jpeg',
    features: ['Toll-free emergency line: 0800 005 7777', 'Immediate triage protocol', 'Direct emergency surgical theater'],
  },
  {
    title: 'Paediatric & Neonatal Care',
    category: 'Paediatric',
    schedule: 'Daily Outpatient & 24/7 Inpatient Pediatric Ward',
    desc: 'Specialist paediatrician-led care for newborns, infants, and growing children, including childhood immunizations, nutritional rehabilitation, and respiratory treatments.',
    img: '/images/report/report-13.jpeg',
    features: ['Child wellness & immunization programs', 'Neonatal phototherapy', 'Family-centered paediatric ward'],
  },
  {
    title: 'Inpatient & Surgical Theater',
    category: 'Surgery',
    schedule: 'Elective Surgeries: Mon/Thu · Emergency: 24/7',
    desc: 'Modern operating theater and serene recovery wards for general, obstetric, and trauma surgeries supported by experienced anesthetists and surgical nursing officers.',
    img: '/images/report/report-09.jpeg',
    features: ['Consultant surgeon supervision', 'Sterile theater environment', 'Compassionate post-operative care'],
  },
  {
    title: 'Ear, Nose & Throat (ENT) Services',
    category: 'Outpatient',
    schedule: 'Specialist Clinic Days',
    desc: 'Diagnosis and medical treatment of hearing disorders, tonsillitis, chronic sinusitis, foreign body removal, and upper airway complaints in adults and children.',
    img: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg',
    features: ['Otoscopic examinations', 'Ear syringing & foreign body extraction', 'Specialist ENT referrals'],
  },
  {
    title: '24/7 Pharmacy Dispensary',
    category: 'Pharmacy',
    schedule: 'Open 24 Hours Every Day',
    desc: 'Fully stocked hospital dispensary with direct procurement from certified manufacturers, cold-chain storage for vaccines, and strict batch monitoring.',
    img: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg',
    features: ['100% genuine NAFDAC approved drugs', 'Patient medication counseling', 'Subsidized indigent medicine fund'],
  },
  {
    title: 'Community & School Health Outreach',
    category: 'Outreach',
    schedule: 'Monthly Community & School Missions',
    desc: 'Mobile screening clinics, health education in primary and secondary schools, deworming campaigns, and direct referrals via our trained Traditional Birth Attendants network.',
    img: '/images/report/report-19.jpeg',
    features: ['Over 30 trained TBAs engaged', 'School vision & hygiene screenings', 'Free medicine distribution camps'],
  },
];

const Services: React.FC<ServicesPageProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Maternal', 'Eye Care', 'Outpatient', 'Diagnostics', 'Emergency', 'Pharmacy'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <main className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Comprehensive Clinical Services
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
          Specialist-Led Healthcare in Umuchigbo
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          From round-the-clock emergency and maternal care to subsidized cataract surgeries, Goodwill Medical Centre delivers quality secondary health services designed to leave no family behind.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
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

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Medical services offered">
        {filteredServices.map((service, idx) => (
          <article
            key={idx}
            className="group bg-white rounded-[2.5rem] overflow-hidden border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Frame */}
              <div className="h-52 overflow-hidden relative bg-slate-100">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/9333ea/ffffff?text=' + encodeURIComponent(service.title);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-900 shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* Service Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                  {service.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-purple-700 bg-purple-50/80 p-2.5 rounded-xl border border-purple-100">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{service.schedule}</span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 sm:p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  if (onBookService) {
                    onBookService(service.title);
                  } else {
                    window.location.href = `https://wa.me/2347032585626?text=${encodeURIComponent(
                      `Hello Goodwill Medical Centre, I would like to book an appointment for: ${service.title}.`
                    )}`;
                  }
                }}
                className="w-full py-3.5 bg-slate-900 hover:bg-purple-600 text-white rounded-2xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book This Service
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Box */}
      <section className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">
            Healthcare Cross-Subsidy
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Subsidised Care For Every Vulnerable Family
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            No patient is turned away from emergency intervention at GMC due to immediate inability to pay. Learn about our subsidized schemes, NHIA GIFSHIP coverage, and how to enroll.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={() => {
                if (onBookService) onBookService('General Outpatient Care (GOPD)');
              }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-purple-600/30 transition-all"
            >
              Book an Appointment
            </button>
            <a
              href="https://wa.me/2347032585626?text=Hello%20GMC%2C%20I%20want%20to%20enquire%20about%20subsidised%20care%20and%20NHIA%20insurance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-sm transition-all"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
