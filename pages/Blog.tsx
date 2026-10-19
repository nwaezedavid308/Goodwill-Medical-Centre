import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDialog } from '../hooks/useDialog';
import { Calendar, User, Clock, ArrowRight, Download, BookOpen, X, Search, FileText, Share2, Tag } from 'lucide-react';

import { POSTS, type BlogPost } from '../data/posts';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { postId } = useParams();
  const navigate = useNavigate();
  const activePost = POSTS.find(post => String(post.id) === postId) || null;
  const setActivePost = (post: BlogPost | null) => navigate(post ? '/blog/' + post.id : '/blog');
  const dialogRef = useDialog(Boolean(activePost), () => navigate('/blog'));
  useEffect(() => {
    if (activePost) {
      document.title = activePost.title + ' | GMC Journal';
      document.querySelector('meta[name="description"]')?.setAttribute('content', activePost.excerpt);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', activePost.excerpt);
    }
  }, [activePost]);

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
    <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Hospital News, Updates & Perspectives
        </span>
        <h1 className="text-4xl md:text-6xl font-sans text-slate-900 leading-tight">
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
            aria-label="Search the journal and staff essays"
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
                <img loading="lazy"
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/fallback.svg';
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
                  className="font-sans font-bold text-xl text-slate-900 hover:text-purple-600 transition-colors cursor-pointer leading-snug line-clamp-2"
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
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight">
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

      {postId && !activePost && <div className="p-8 bg-purple-50 rounded-2xl"><h2 className="text-2xl font-bold">Article not found</h2><p>This article may have moved.</p><button onClick={() => navigate('/blog')} className="gmc-button mt-4">Back to journal</button></div>}
      {/* Article Detail Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePost(null)}
          ref={dialogRef}
          tabIndex={-1}
          aria-label={activePost.title}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 flex-shrink-0">
              <img loading="lazy"
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
                <h2 className="text-2xl sm:text-3xl font-sans font-bold leading-tight">
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
    </div>
  );
};

export default Blog;
