import React from 'react';
import { Quote, Heart, Star, CheckCircle2, Video, ArrowRight, ShieldCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'I was in prolonged labour for over 18 hours in the village. When we arrived at Goodwill Medical Centre, the surgical team was ready within minutes. I had an emergency Caesarean section free of charge through the CEmONC scheme. Today, my baby boy and I are alive and healthy. I could never have afforded that surgery anywhere else.',
    name: 'Mrs. Chinyere Nnamani',
    category: 'Maternal Care & Free C-Section Beneficiary',
    community: 'Umuchigbo, Enugu East',
    metric: '₦450,000 Saved Through Free CEmONC',
    avatar: '/images/gallery/IMG-20251215-WA0037.jpg',
  },
  {
    quote:
      'For three years, cataracts took away my sight. I could not see my grandchildren or walk around without help. The eye specialists at GMC operated on both of my eyes during the eye camp at almost no cost. Today I can read my Bible again without help. God bless General Danjuma and the GMC doctors.',
    name: 'Pa Christian Eze',
    category: 'Cataract Surgery Patient',
    community: 'Ugbo-Okonkwo',
    metric: 'Sight Restored After 3 Years',
    avatar: '/images/gallery/IMG-20251215-WA0039.jpg',
  },
  {
    quote:
      'Before the Avah River Bridge was built, taking an emergency patient from our side to the hospital was a nightmare, especially when rain flooded the river. Now with the iron bridge opened on 8 April 2025, keke and walking take only 15 minutes. It has saved countless lives in our community.',
    name: 'Elder Festus Okafor',
    category: 'Community Leader & Resident',
    community: 'Ugbo-Ezeji Community',
    metric: 'Travel Time Cut from 8km to 15 Mins',
    avatar: '/images/gallery/Opening_Ceremony_Dignitaries_Entrance.jpg',
  },
  {
    quote:
      'As a Traditional Birth Attendant, GMC didn’t fight us—they trained us. Through their workshops and the toll-free line 0800 005 7777, whenever we notice any complication like bleeding or delayed labour, we refer immediately. None of the mothers in our network have been lost.',
    name: 'Mrs. Ngozi Ani',
    category: 'Trained Traditional Birth Attendant (TBA)',
    community: 'Enugu East LGA',
    metric: '30+ TBAs Linked to Safe Hospital Delivery',
    avatar: '/images/gallery/Maternal_Health_Training_Session_1.jpg',
  },
  {
    quote:
      'The laboratory results were fast, the nurses were patient and courteous, and the pharmacy medicines were genuine and cheap. Goodwill Medical Centre feels like a private hospital in Abuja or London, but with prices that common people can afford.',
    name: 'Mr. Jude Maduka',
    category: 'Outpatient & Laboratory Patient',
    community: 'Emene, Enugu',
    metric: 'Same-Day Diagnostics & Pharmacy',
    avatar: '/images/gallery/Medical_Staff_Late_Night_Smile.jpg',
  },
  {
    quote:
      'When our daughter had acute malaria and severe dehydration late on a Sunday night, the paediatric emergency team admitted her immediately without asking for money first. They stabilized her before anything else. This is true compassionate healthcare.',
    name: 'Mrs. Blessing Ogbu',
    category: 'Paediatric Emergency Parent',
    community: 'Umuchigbo Community',
    metric: '24/7 Rapid Emergency Response',
    avatar: '/images/gallery/IMG-20251215-WA0038.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Voices of Healing & Hope
        </span>
        <h1 className="text-4xl md:text-6xl font-sans text-slate-900 leading-tight">
          Patient Stories & Testimonials
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Behind every statistic in our inception report is a mother saved, an elder whose vision was restored, or a family that found compassionate care in their hour of greatest need.
        </p>
      </header>

      {/* Highlights Metric Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="p-6 bg-white rounded-3xl border border-purple-100 shadow-sm text-center">
          <div className="text-3xl font-bold font-sans text-purple-700">12,509+</div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">
            Total Patients Served
          </p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-purple-100 shadow-sm text-center">
          <div className="text-3xl font-bold font-sans text-emerald-600">91</div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">
            Free C-Sections Performed
          </p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-purple-100 shadow-sm text-center">
          <div className="text-3xl font-bold font-sans text-purple-700">2,523</div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">
            Eye Patients Reviewed
          </p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-purple-100 shadow-sm text-center">
          <div className="text-3xl font-bold font-sans text-amber-600">₦40.9M</div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">
            Direct Financial Savings
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, idx) => (
          <article
            key={idx}
            className="bg-white rounded-[2.5rem] border border-purple-50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 bg-purple-50 text-purple-600 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Quote className="w-5 h-5" />
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-[10px] font-bold">
                  {item.metric}
                </span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100 flex-shrink-0 border-2 border-purple-200">
                <img loading="lazy"
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/fallback.svg';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-sans font-bold text-slate-900 text-base truncate">{item.name}</h4>
                <p className="text-purple-600 text-xs font-semibold">{item.category}</p>
                <p className="text-slate-400 text-[11px]">{item.community}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Share Your Story CTA */}
      <section className="mt-20 bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto space-y-6">
        <Heart className="w-12 h-12 text-rose-400 mx-auto" />
        <h2 className="text-3xl md:text-4xl font-sans font-bold">Were You Treated at GMC?</h2>
        <p className="text-slate-300 text-base max-w-xl mx-auto font-light">
          Your story inspires our medical personnel and reassures vulnerable families in need of care. Share your testimony or experience with our patient satisfaction desk.
        </p>
        <a
          href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20share%20my%20patient%20experience%20story."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-purple-600/30"
        >
          Share Your Experience on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
};

export default Testimonials;
