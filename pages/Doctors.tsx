import React, { useState } from 'react';
import { Calendar, Clock, Award, Stethoscope, Heart, CheckCircle2, Phone, Search } from 'lucide-react';

interface DoctorsPageProps {
  onBookDoctor?: (doctorName: string, department: string) => void;
}

const DOCTORS_DATA = [
  {
    name: 'Dr. Chidubem Okafor',
    role: 'Chief Medical Officer & Consultant General Surgeon',
    department: 'Surgery & Clinical Administration',
    experience: '18+ Years Experience',
    schedule: 'Mondays & Thursdays (09:00 AM - 04:00 PM)',
    education: 'MBBS, FWACS, FMCS (General & Emergency Surgery)',
    bio: 'Oversees hospital clinical governance and leads major emergency obstetric, general, and reconstructive surgical procedures at GMC.',
    image: '/images/gallery/Workshop_Training_Male_Presenter.jpg',
    specialties: ['Emergency C-Sections', 'Herniorrhaphy', 'Trauma Care', 'Minimally Invasive Surgery'],
  },
  {
    name: 'Dr. Nneka Umeh',
    role: 'Consultant Obstetrician & Gynecologist',
    department: 'Maternal, Newborn & Child Health',
    experience: '14+ Years Experience',
    schedule: 'Tuesdays & Fridays (08:30 AM - 03:30 PM)',
    education: 'MBBS, FWACS (OB/GYN), MPH',
    bio: 'Champion of maternal survival in Enugu State. Leads GMC’s high-risk antenatal clinics, CEmONC emergency obstetrics, and TBA linkage network.',
    image: '/images/gallery/Workshop_Training_Female_Presenter.jpg',
    specialties: ['High-Risk Antenatal Care', 'CEmONC Emergencies', 'Family Planning', 'Infertility Evaluation'],
  },
  {
    name: 'Dr. Emeka Nwankwo',
    role: 'Consultant Ophthalmologist & Eye Surgeon',
    department: 'Eye Health & Vision Clinic',
    experience: '16+ Years Experience',
    schedule: 'Wednesdays & Saturdays (09:00 AM - 02:00 PM)',
    education: 'MBBS, FMCOphth (Ophthalmology)',
    bio: 'Lead cataract surgeon in partnership with Sightsavers Nigeria, performing subsidised vision restoration surgeries and comprehensive screenings.',
    image: '/images/gallery/Certificate_Presentation_Formal_Handshake.jpg',
    specialties: ['Small-Incision Cataract Surgery (SICS)', 'Glaucoma Management', 'Refractive Errors', 'Pediatric Eye Care'],
  },
  {
    name: 'Dr. Ifeoma Eze',
    role: 'Senior Paediatric Specialist',
    department: 'Paediatric & Neonatal Medicine',
    experience: '11+ Years Experience',
    schedule: 'Mondays through Fridays (08:00 AM - 02:00 PM)',
    education: 'MBBS, MWACP (Paediatrics)',
    bio: 'Specialises in newborn resuscitation, neonatal jaundice phototherapy, immunization compliance, and childhood infectious disease treatments.',
    image: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg',
    specialties: ['Neonatal Care', 'Growth & Nutrition Monitoring', 'Child Immunization', 'Respiratory Infections'],
  },
  {
    name: 'Pharm. Kenechukwu Obi',
    role: 'Head of Pharmacy & Logistics',
    department: 'Pharmacy & Drug Administration',
    experience: '10+ Years Experience',
    schedule: '24/7 Departmental Oversight',
    education: 'B.Pharm, PharmD, FPCPharm',
    bio: 'Ensures genuine, high-quality, and NAFDAC-approved medications are consistently stocked and accessible at subsidized rates for all patients.',
    image: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg',
    specialties: ['Drug Inventory & Safety', 'Patient Medication Counseling', 'Emergency Stock Management'],
  },
  {
    name: 'Matron Ngozi Okoli',
    role: 'Head of Nursing Services & Midwifery',
    department: 'Nursing & Inpatient Care',
    experience: '20+ Years Experience',
    schedule: '24/7 Nursing Supervision',
    education: 'RN, RM, BNSc, Perioperative Nursing',
    bio: 'Leads our dedicated team of midwives and registered nurses with round-the-clock compassionate patient nursing and postpartum maternal support.',
    image: '/images/gallery/Medical_Staff_Team_Photo_1.jpg',
    specialties: ['Labour & Delivery Midwifery', 'Inpatient Nursing', 'Infection Prevention & Control'],
  },
];

const Doctors: React.FC<DoctorsPageProps> = ({ onBookDoctor }) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = ['All', 'Surgery', 'Maternal', 'Eye Health', 'Paediatric', 'Pharmacy', 'Nursing'];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesDept = selectedDept === 'All' || doc.department.toLowerCase().includes(selectedDept.toLowerCase());
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <main className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Specialist-Led Healthcare
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
          Our Doctors & Medical Team
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Compassionate consultants, experienced surgeons, dedicated midwives, and healthcare specialists providing secondary hospital care with clinical excellence and heartfelt devotion.
        </p>
      </header>

      {/* Filter & Search Bar */}
      <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedDept === dept
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search doctor or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 focus:outline-none focus:border-purple-600"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doc, idx) => (
          <article
            key={idx}
            className="bg-white rounded-[2.5rem] border border-purple-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Header */}
            <div className="h-64 relative overflow-hidden bg-slate-100">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/600x600/9333ea/ffffff?text=' + encodeURIComponent(doc.name);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {doc.experience}
                </span>
                <h3 className="text-xl font-bold font-serif mt-1">{doc.name}</h3>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-purple-600 font-bold text-xs uppercase tracking-wider">{doc.role}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{doc.education}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-light">{doc.bio}</p>

                {/* Schedule Box */}
                <div className="p-3.5 bg-[#FFF9F2] rounded-2xl border border-purple-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Clinic Hours:</span>
                    <span>{doc.schedule}</span>
                  </div>
                </div>

                {/* Specialties Tag Cloud */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Core Clinical Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <button
                onClick={() => {
                  if (onBookDoctor) {
                    onBookDoctor(doc.name, doc.department);
                  } else {
                    window.location.href = `https://wa.me/2347032585626?text=${encodeURIComponent(
                      `Hello Goodwill Medical Centre, I would like to book a consultation with ${doc.name} (${doc.role}).`
                    )}`;
                  }
                }}
                className="w-full py-3.5 bg-slate-900 hover:bg-purple-600 text-white rounded-2xl font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation with {doc.name.split(' ')[1]}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Emergency Assurance Banner */}
      <section className="mt-20 p-8 md:p-12 bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">
            24/7 Specialist Availability
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            Emergency Consultations & Round-The-Clock On-Call Duty
          </h2>
          <p className="text-purple-100 text-sm leading-relaxed">
            Outside scheduled clinic hours, our medical officers and emergency surgical teams are on active duty 24 hours a day, 7 days a week.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href="tel:08000057777"
            className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold text-xs transition-all text-center shadow-lg"
          >
            Emergency: 0800 005 7777
          </a>
          <a
            href="tel:07032585626"
            className="px-6 py-3.5 bg-white text-purple-900 hover:bg-purple-50 rounded-2xl font-bold text-xs transition-all text-center"
          >
            Reception: 0703 258 5626
          </a>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
