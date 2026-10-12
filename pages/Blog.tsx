import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Download, BookOpen, X, Search, FileText, Share2, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  category: 'Infrastructure' | 'Maternal Health' | 'Eye Care' | 'Staff Essays' | 'Community Outreach';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  pdfDownload?: {
    file: string;
    size: string;
    label: string;
  };
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Avah River Bridge: Reconnecting Four Communities to Life-Saving Healthcare',
    category: 'Infrastructure',
    date: '8 April 2025',
    author: 'GMC Media Relations',
    image: '/images/report/report-31.jpeg',
    excerpt: 'GMC funded and completed the construction of an iron pedestrian and tricycle bridge across the Avah River, ending hazardous rainy-season detours for thousands of residents.',
    content: [
      'For decades, residents of Ifo, Ugbo-Ezeji, Ugbo-Okonkwo, and Ugbo-Paul faced an excruciating barrier: during the torrential rainy seasons, the swelling Avah River completely cut off direct access to Umuchigbo.',
      'A normal 15-to-20-minute walk to hospital care turned into an eight-kilometre journey via hazardous detours, or compelled dangerous attempts to wade across swift river currents with sick children and labouring mothers.',
      'Commissioned on 8 April 2025, the new iron pedestrian and tricycle (keke) bridge now allows emergency patients and school children safe, year-round passage directly into Goodwill Medical Centre.',
      'Community leaders and royal fathers lauded the initiative as a shining example of how a hospital’s mandate extends beyond clinical walls to eliminating geographical determinants of health.',
    ],
  },
  {
    id: 2,
    title: '91 Families Receive Free Life-Saving Caesarean Sections in Five Months',
    category: 'Maternal Health',
    date: '15 March 2025',
    author: 'Dr. Nneka Umeh (Consultant OB/GYN)',
    image: '/images/report/report-13.jpeg',
    excerpt: 'Through the federally supported CEmONC programme and partner backing, GMC performed 91 free emergency C-sections, saving vulnerable families over ₦40.9 million.',
    content: [
      'Maternal mortality in Nigeria remains a national emergency. In many low-resource rural settings, obstructed labour and lack of surgical access turn childbirth into a life-threatening crisis.',
      'Goodwill Medical Centre launched its Comprehensive Emergency Obstetric and Newborn Care (CEmONC) initiative with accreditation and support from the NHIA and state health agencies.',
      'In its first five months, 91 pregnant women with critical obstetrical complications—including uterine ruptures, eclampsia, and prolonged obstructed labour—received free emergency surgical interventions.',
      'This single intervention resulted in ₦40.9 million in direct financial relief for indigent households, preserving mother and infant lives without pushing families into catastrophic debt.',
    ],
  },
  {
    id: 3,
    title: 'World Sight Day: Over 2,500 Eye Screenings and Subsidized Cataract Surgeries',
    category: 'Eye Care',
    date: '14 October 2025',
    author: 'Dr. Emeka Nwankwo (Consultant Ophthalmologist)',
    image: '/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg',
    excerpt: 'Partnering with Sightsavers Nigeria, GMC brought specialized eye care to rural elders, performing life-transforming Small-Incision Cataract Surgeries (SICS).',
    content: [
      'Avoidable blindness from untreated senile cataracts remains one of the heaviest burdens on rural elderly citizens in southeastern Nigeria.',
      'Goodwill Medical Centre partnered with Sightsavers Nigeria to establish a dedicated weekly eye clinic and high-volume cataract surgical unit.',
      'Between opening in 2024 and December 2025, the department conducted 2,523 comprehensive eye consultations and completed 91 successful cataract surgeries at fees 30% to 60% below city hospital rates.',
      'With subsidized post-operative medications and free reading glasses distributed, scores of grandfathers and grandmothers have regained their autonomy and sight.',
    ],
  },
  {
    id: 4,
    title: 'Delivering Pharmaceutical Care with Empathy: 1st Prize Staff Essay',
    category: 'Staff Essays',
    date: '21 November 2025',
    author: 'Pharmacy Department Team',
    image: '/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg',
    excerpt: 'An introspective reflection on patient counseling, eliminating counterfeit drugs, and ensuring vulnerable patients never leave without their prescribed treatments.',
    content: [
      'In community health delivery, a hospital’s pharmacy is the final frontier where medicine meets human vulnerability.',
      'This award-winning essay explores GMC’s strict pharmaceutical protocols: routine batch testing, maintaining the cold chain for vaccines, and establishing an indigent medication support pool.',
      'At GMC, no patient in medical shock is denied emergency drugs due to inability to make immediate payment. The essay chronicles touching encounters with mothers arriving at midnight with convulsing infants.',
      'You can download and read the full comprehensive essay in PDF below.',
    ],
    pdfDownload: {
      file: '/docs/GMC ESSAY PHARMACY DEPARTMENT _20251121_005451_0000_compressed.pdf',
      size: '2.9 MB',
      label: 'GMC Pharmacy Essay (1st Prize Winner)',
    },
  },
  {
    id: 5,
    title: 'Compassion at the Bedside: Nursing as the Heartbeat of GMC (2nd Prize)',
    category: 'Staff Essays',
    date: '24 November 2025',
    author: 'Nursing Department Team',
    image: '/images/gallery/Medical_Staff_Team_Photo_1.jpg',
    excerpt: 'The Nursing Department reflects on providing round-the-clock comfort, holding hands in the delivery room, and walking with patients through illness into recovery.',
    content: [
      'Doctors may prescribe, but it is the nurse who keeps vigil through the darkest hours of 3:00 AM in the hospital ward.',
      'Awarded 2nd Prize in the GMC Staff Essay Competition, this moving paper articulates the philosophy of empathetic nursing practiced at GMC.',
      'The nurses recount real cases: coaching teenage first-time mothers through intense labour contractions, comforting anxious families in the waiting lobby, and ensuring impeccable infection control in the post-operative recovery unit.',
      'Download the full manuscript below.',
    ],
    pdfDownload: {
      file: '/docs/NURSING DEPARTMENT ESSAY  2nd Prize.pdf',
      size: '0.4 MB',
      label: 'Nursing Department Essay (2nd Prize)',
    },
  },
  {
    id: 6,
    title: 'Overcoming Socioeconomic Barriers to Healthcare in Rural Enugu (3rd Prize)',
    category: 'Staff Essays',
    date: '28 November 2025',
    author: 'Clinical & Community Outreach Unit',
    image: '/images/gallery/Health_Education_Session.jpg',
    excerpt: 'Analyzing how traditional birth attendants (TBAs), community chiefs, and the "Treatment for Two" initiative dismantle long-standing cultural and monetary barriers to health.',
    content: [
      'Quality healthcare that remains financially inaccessible is essentially useless to an indigent mother in rural Umuchigbo.',
      'Awarded 3rd Prize in the GMC Competition, this paper analyzes the structural economics of the GMC model.',
      'By creating the "Treatment for Two" model—where affluent patients and philanthropy cover the deficit of the impoverished—and training over 30 traditional birth attendants, GMC has transformed maternal health-seeking behavior across Enugu East.',
      'Download the full competition essay below.',
    ],
    pdfDownload: {
      file: '/docs/GMC COMPETITION - 3rd Prize.pdf',
      size: '0.6 MB',
      label: 'GMC Competition Essay (3rd Prize)',
    },
  },
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Infrastructure', 'Maternal Health', 'Eye Care', 'Staff Essays', 'Community Outreach'];

  const filteredPosts = POSTS.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Hospital News, Updates & Perspectives
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
          GMC Journal & Announcements
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Stories of impact, clinical breakthroughs, public health education, and award-winning essays written by Goodwill Medical Centre medical staff and community partners.
        </p>
      </header>

      {/* Filter and Search */}
      <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search news or essays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 focus:outline-none focus:border-purple-600"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-[2.5rem] border border-purple-50 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div
                className="h-56 relative overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActivePost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/9333ea/ffffff?text=' + encodeURIComponent(post.title);
                  }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-900 shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span className="truncate max-w-[140px]">{post.author}</span>
                </div>

                <h2
                  onClick={() => setActivePost(post)}
                  className="font-serif font-bold text-xl text-slate-900 hover:text-purple-600 transition-colors cursor-pointer leading-snug line-clamp-2"
                >
                  {post.title}
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActivePost(post)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read Article
              </button>

              {post.pdfDownload && (
                <a
                  href={post.pdfDownload.file}
                  download
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-purple-600 bg-purple-50 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-purple-600" />
                  PDF ({post.pdfDownload.size})
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Staff Essay Competition Feature Banner */}
      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="relative z-10 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-purple-400 font-bold tracking-[0.2em] uppercase text-xs">
              Staff Essay Competition Archive
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Clinical Insights Written by GMC Professionals
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
              In 2025, GMC medical personnel took part in an internal essay competition documenting their ground-level experience with patients. Download the official prize-winning manuscripts in PDF format below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-xl text-[11px] font-bold uppercase inline-block">
                1st Prize Winner
              </span>
              <h3 className="font-bold text-lg leading-snug">Pharmacy Department Essay</h3>
              <p className="text-slate-400 text-xs">
                Comprehensive look at compassionate pharmaceutical care, cold chain integrity, and patient dignity.
              </p>
              <a
                href="/docs/GMC ESSAY PHARMACY DEPARTMENT _20251121_005451_0000_compressed.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <Download className="w-4 h-4" /> Download PDF (2.9 MB)
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <span className="px-3 py-1 bg-slate-400/20 text-slate-300 rounded-xl text-[11px] font-bold uppercase inline-block">
                2nd Prize Winner
              </span>
              <h3 className="font-bold text-lg leading-snug">Nursing Department Essay</h3>
              <p className="text-slate-400 text-xs">
                Personal memoirs from the bedside, midnight patient vigils, and maternal labour care.
              </p>
              <a
                href="/docs/NURSING DEPARTMENT ESSAY  2nd Prize.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <Download className="w-4 h-4" /> Download PDF (0.4 MB)
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <span className="px-3 py-1 bg-amber-700/30 text-amber-400 rounded-xl text-[11px] font-bold uppercase inline-block">
                3rd Prize Winner
              </span>
              <h3 className="font-bold text-lg leading-snug">GMC Model & Access Essay</h3>
              <p className="text-slate-400 text-xs">
                Explores overcoming socioeconomic and cultural roadblocks to modern healthcare in rural Nigeria.
              </p>
              <a
                href="/docs/GMC COMPETITION - 3rd Prize.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <Download className="w-4 h-4" /> Download PDF (0.6 MB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 flex-shrink-0">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                aria-label="Close article"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 bg-purple-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {activePost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                  {activePost.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span>{activePost.date}</span>
                  <span>·</span>
                  <span>By {activePost.author}</span>
                </div>
              </div>
            </div>

            {/* Body content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              {activePost.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}

              {activePost.pdfDownload && (
                <div className="mt-6 p-6 bg-purple-50 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Download Complete Publication</h4>
                    <p className="text-slate-500 text-xs">
                      {activePost.pdfDownload.label} ({activePost.pdfDownload.size})
                    </p>
                  </div>
                  <a
                    href={activePost.pdfDownload.file}
                    download
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`https://wa.me/2347032585626?text=${encodeURIComponent(
                  `Hello GMC, I just read your article "${activePost.title}" and would like to learn more.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                Share Feedback on WhatsApp
              </a>
              <button
                onClick={() => setActivePost(null)}
                className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Blog;
