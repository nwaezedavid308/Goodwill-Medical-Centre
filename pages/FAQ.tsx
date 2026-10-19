import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, MessageSquare, Shield, Heart } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    category: 'General & Emergencies',
    question: 'Where is Goodwill Medical Centre located?',
    answer:
      'GMC is situated at No. 3, Chief Jude Agu Street, Umuchigbo, Enugu East Local Government Area, Enugu State, Nigeria. We are easily accessible from both the Enugu city center and surrounding communities via the newly constructed Avah River Bridge.',
  },
  {
    category: 'General & Emergencies',
    question: 'Is the hospital open 24 hours a day?',
    answer:
      'Yes! Our Accident & Emergency (A&E) unit, Inpatient Wards, Maternity Labour Ward, and Pharmacy operate 24 hours a day, 7 days a week, 365 days a year. General and specialist outpatient clinics run Mondays through Saturdays from 8:00 AM.',
  },
  {
    category: 'General & Emergencies',
    question: 'What is the toll-free emergency referral hotline?',
    answer:
      'You can reach our emergency dispatch desk completely free of charge at 0800 005 7777 (Toll-Free). You can also call or chat with our desk on 0703 258 5626 or 0802 409 4488.',
  },
  {
    category: 'Insurance & Costs',
    question: 'Do you accept National Health Insurance (NHIA) or state insurance?',
    answer:
      'Yes. Goodwill Medical Centre is an accredited secondary healthcare provider under the National Health Insurance Authority (NHIA) and GIFSHIP for informal sector workers and families. We also partner actively with the Enugu State Universal Health Coverage Agency (ESCHIS) and recognized private HMO providers.',
  },
  {
    category: 'Insurance & Costs',
    question: 'How does the cross-subsidy and "Treatment for Two" model work?',
    answer:
      'GMC was founded with generous support from the TY Danjuma Foundation. To guarantee long-term sustainability, revenue received from self-paying private patients and corporate schemes directly subsidises treatments for vulnerable, indigent patients. At least 30% of our operating surplus is set aside for indigent patient care.',
  },
  {
    category: 'Maternal & Child Health',
    question: 'Are Caesarean sections (C-sections) really free for eligible mothers?',
    answer:
      'Yes. Through the federally supported Comprehensive Emergency Obstetric and Newborn Care (CEmONC) programme and partner support, 91 eligible vulnerable pregnant women received free life-saving Caesarean sections in just five months, saving families over ₦40.9 million. Antenatal care and delivery services are also highly subsidised.',
  },
  {
    category: 'Maternal & Child Health',
    question: 'When are antenatal clinics (ANC) held?',
    answer:
      'Antenatal clinics are held every Tuesday and Thursday mornings, led by our Consultant Obstetrician and registered midwives. Sessions include comprehensive health education, ultrasound monitoring, routine laboratory blood tests, and birth preparedness counseling.',
  },
  {
    category: 'Specialist Clinics',
    question: 'How do I access the Eye Clinic and Cataract Surgery services?',
    answer:
      'Our Eye Clinic runs weekly on Wednesdays and Saturdays under Consultant Ophthalmologists, in partnership with Sightsavers Nigeria. We offer vision screenings, prescription glasses, glaucoma management, and cataract surgeries at 30% to 60% below conventional private hospital rates.',
  },
  {
    category: 'Bridge & Transport',
    question: 'How does the Avah River Bridge assist patient transport?',
    answer:
      'The pedestrian and tricycle-accessible iron bridge across the Avah River was officially commissioned on 8 April 2025. It directly connects Ifo, Ugbo-Ezeji, Ugbo-Okonkwo, and Ugbo-Paul to GMC, cutting what used to be a treacherous 8-kilometre detour into a brisk 15–20 minute walk or short keke ride.',
  },
  {
    category: 'Support & Donations',
    question: 'How can individuals or organizations support GMC’s mission?',
    answer:
      'You can support free maternal kits, subsidized cataract surgeries, medical supplies, or donate directly to the indigent healthcare subsidy fund via our official account: Goodwill Medicals Enugu, Account: 5521840293 (Moniepoint). Every single naira directly funds medical treatment for someone in need.',
  },
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'General & Emergencies', 'Insurance & Costs', 'Maternal & Child Health', 'Specialist Clinics', 'Bridge & Transport', 'Support & Donations'];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Clear Answers & Guidance
        </span>
        <h1 className="text-4xl md:text-6xl font-sans text-slate-900 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Everything you need to know about accessing care, insurance schemes, maternal benefits, outpatient clinics, and reaching Goodwill Medical Centre.
        </p>
      </header>

      {/* Search Input */}
      <div className="relative mb-10 max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search frequently asked questions"
          placeholder="Search questions (e.g. C-section, insurance, location, fees)..."
          className="w-full pl-12 pr-6 py-4 bg-white border border-purple-100 rounded-full text-sm text-slate-800 shadow-md focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all"
        />
        <Search className="w-5 h-5 text-purple-600 absolute left-4.5 top-4" />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-purple-50 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 hover:bg-purple-50/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-purple-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-purple-50/50 bg-[#FFF9F2]/30 animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100/60 px-2.5 py-0.5 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl p-8 border border-slate-100">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No matching questions found</h3>
            <p className="text-slate-500 text-xs mt-1">
              Try adjusting your search terms or contact our support desk directly.
            </p>
          </div>
        )}
      </div>

      {/* Still Have Questions Box */}
      <section className="mt-16 bg-[#FFF9F2] border border-purple-200 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl font-sans font-bold text-slate-900">Still have a question?</h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
          Our administrative and patient care officers are on standby to answer your inquiries regarding treatments, registration, or visiting hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20have%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:07032585626"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xs flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Reception (0703 258 5626)
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
