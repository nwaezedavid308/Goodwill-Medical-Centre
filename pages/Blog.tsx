
import React from 'react';

const Blog: React.FC = () => {
    return (
        <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            <header className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">News & Media</span>
                <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 mt-2">Latest Updates</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Stay informed about our latest community outreach programs, health tips, and success stories from Goodwill Medical Centre.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24" aria-label="Latest news articles">
                <article className="group cursor-pointer">
                    <div className="rounded-[2.5rem] overflow-hidden mb-6 h-[300px] md:h-[400px]">
                        <img
                            src="/images/gallery/Community_Health_Walk.jpg"
                            alt="Community Health Walk"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/9333ea/ffffff?text=Health+Walk';
                            }}
                        />
                    </div>
                    <div className="space-y-3">
                        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest">Community Outreach</span>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Massive Turnout for Free Health Walk</h2>
                        <p className="text-slate-500 leading-relaxed line-clamp-3">
                            Over 500 community members joined our recent health walk to raise awareness about hypertension and diabetes. The event featured free screenings...
                        </p>
                        <button className="text-slate-900 font-bold text-sm underline decoration-purple-400 decoration-2 underline-offset-4 hover:text-purple-600">Read Full Story</button>
                    </div>
                </article>

                <article className="group cursor-pointer">
                    <div className="rounded-[2.5rem] overflow-hidden mb-6 h-[300px] md:h-[400px]">
                        <img
                            src="/images/gallery/Maternal_Health_Kit_Distribution.jpg"
                            alt="Maternal Health"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/9333ea/ffffff?text=Maternal+Health';
                            }}
                        />
                    </div>
                    <div className="space-y-3">
                        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest">Maternal Health</span>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Empowering Expectant Mothers</h2>
                        <p className="text-slate-500 leading-relaxed line-clamp-3">
                            GMC recently distributed over 200 maternal health kits to expectant mothers in Enugu East. This initiative aims to reduce maternal mortality rates...
                        </p>
                        <button className="text-slate-900 font-bold text-sm underline decoration-purple-400 decoration-2 underline-offset-4 hover:text-purple-600">Read Full Story</button>
                    </div>
                </article>
            </section>

            {/* Competition Articles Section */}
            <section className="mb-24" aria-labelledby="competition-heading">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                            <div className="space-y-4">
                                <span className="text-purple-400 font-bold tracking-[0.2em] uppercase text-xs">Excellence in Writing</span>
                                <h2 id="competition-heading" className="text-3xl md:text-5xl font-serif">GMC Competition Articles</h2>
                                <p className="text-slate-400 max-w-xl">
                                    Read winning essays from our staff and community partners. Download the PDF versions below.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Essay: Pharmacy Department',
                                    meta: '2.9 MB / PDF',
                                    file: '/docs/GMC ESSAY PHARMACY DEPARTMENT _20251121_005451_0000_compressed.pdf'
                                },
                                {
                                    title: 'Nursing Dept: 2nd Prize',
                                    meta: '0.4 MB / PDF',
                                    file: '/docs/NURSING DEPARTMENT ESSAY  2nd Prize.pdf'
                                },
                                {
                                    title: 'GMC Competition: 3rd Prize',
                                    meta: '0.6 MB / PDF',
                                    file: '/docs/GMC COMPETITION - 3rd Prize.pdf'
                                }
                            ].map((doc, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 font-bold">
                                        PDF
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                                    <p className="text-slate-500 text-sm mb-6">{doc.meta}</p>
                                    <a
                                        href={doc.file}
                                        download
                                        className="inline-flex items-center gap-2 text-white font-bold text-sm bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-500 transition-all hover:shadow-lg focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                        aria-label={`Download ${doc.title} PDF document`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                                        </svg>
                                        Download Article
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
