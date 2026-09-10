
import BrochureGenerator from '../components/BrochureGenerator';

const About: React.FC = () => {
    return (
        <main className="pt-16 px-6 max-w-7xl mx-auto min-h-screen">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24" aria-labelledby="our-story">
                <div className="space-y-6">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
                    <h1 id="our-story" className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">A Hospital with a Heart</h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        In 2023, General T. Y. Danjuma, GCON (Rtd), and the TY Danjuma Foundation approved funding for the construction and equipping of a model secondary hospital in an underserved community. GMC was designed to sustain its work through internally generated revenue while keeping care within reach of low-income families.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Commissioned in November 2023 and opened to the public in February 2024, Goodwill Medical Centre serves Umuchigbo and surrounding communities in Enugu East with specialist-led maternal, newborn, surgical, eye, emergency and general medical care.
                    </p>
                    <div className="pt-4">
                        <BrochureGenerator />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-100 rounded-[3rem] rotate-3 transform scale-95 opacity-50" />
                    <img
                        src="/images/report/report-53.jpeg"
                        alt="Goodwill Medical Centre building and entrance in Umuchigbo"
                        className="relative w-full rounded-[3rem] shadow-2xl border-8 border-white"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/9333ea/ffffff?text=GMC+Building';
                        }}
                    />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif">Major Milestones</h2>
                    <div className="space-y-6">
                        {[
                            { stat: '12,509+', text: 'Patients served from February 2024 to December 2025.' },
                            { stat: '2,306', text: 'Antenatal visits delivered during GMC’s first two years.' },
                            { stat: '91', text: 'Free life-saving caesarean sections delivered in five months.' },
                            { stat: '₦40.9M', text: 'Direct savings for vulnerable families through free C-sections.' }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="text-3xl font-bold text-purple-400 font-serif">{m.stat}</div>
                                <p className="text-slate-300 text-sm leading-relaxed pt-1">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-purple-600 text-white p-12 rounded-[3rem] space-y-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif">The Avah River Bridge</h2>
                        <p className="text-purple-100 text-lg leading-relaxed">
                            Opened on <strong>8 April 2025</strong>, the pedestrian and tricycle-accessible iron bridge links Ifo, Ugbo-Ezeji, Ugbo-Okonkwo and Ugbo-Paul to GMC. It replaced dangerous river crossings and an alternative journey of more than eight kilometres.
                        </p>
                        <a
                            href="https://youtube/zgICvsWCNWU?i=8yRnQ4MJLCkHODIR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-sm bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600"
                            aria-label="Watch the Avah River Bridge impact video on YouTube"
                        >
                            Watch Impact Video
                        </a>
                        <a
                            href="https://www.pacieh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-sm bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-400 transition-all hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600 ml-4"
                            aria-label="Visit PACIEH website"
                        >
                            About PACIEH
                        </a>
                    </div>
                </div>
            </div>

            <section className="mb-24 space-y-16" aria-labelledby="community-impact">
                <div>
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Community Impact</span>
                    <h2 id="community-impact" className="text-4xl font-serif text-slate-900 mt-2">Specialized Interventions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold font-serif">TBA Intervention Program</h3>
                        <p className="text-slate-600 leading-relaxed">
                            GMC mapped and trained <strong>more than 30 Traditional Birth Attendants</strong> with ES-PHCDA. Monthly meetings and the toll-free referral line, 0800 005 7777, strengthen timely referrals for pregnancy complications and facility delivery.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold font-serif">Eye Health Screening</h3>
                        <p className="text-slate-600 leading-relaxed">
                            GMC completed <strong>2,523 eye reviews and 91 cataract surgeries</strong> in its first two years. With Sightsavers Nigeria, the team screened 600 schoolchildren, provided 200 free pairs of glasses and delivered eye-health education to 1,800 students.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-24" aria-labelledby="growth-heading">
                <div className="mb-12">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Growth & Access</span>
                    <h2 id="growth-heading" className="text-4xl font-serif text-slate-900 mt-2">Built to Serve and Sustain</h2>
                    <p className="text-slate-500 mt-4 max-w-3xl leading-relaxed">Every investment at GMC expands clinical capacity, removes barriers to care and strengthens a model in which earned income helps finance treatment for vulnerable patients.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Community Reach', text: 'In 2025, GMC enrolled 2,409 beneficiaries receiving subsidised or free care across 10 states, 44 LGAs, 129 communities and 415 villages. Enugu State accounted for 99% of beneficiaries.' },
                        { title: 'Infrastructure', text: 'Year-one revenue funded a new antenatal and immunisation clinic. GMC also added 66 solar panels, a water-purification system and a new annex with maternal, ward, laboratory and conference facilities.' },
                        { title: 'Financial Sustainability', text: 'GMC combines patient revenue, government insurance and institutional partnerships. At least 30% of annual operational surplus is committed to care for vulnerable patients.' }
                    ].map((item) => (
                        <article key={item.title} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" aria-labelledby="partnerships-heading">
                <img src="/images/report/report-47.jpeg" alt="GMC partners and community leaders during an official visit" className="w-full rounded-[3rem] shadow-xl" />
                <div className="space-y-6">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Strategic Partnerships</span>
                    <h2 id="partnerships-heading" className="text-4xl font-serif text-slate-900">A Shared Commitment to Health Equity</h2>
                    <p className="text-slate-600 leading-relaxed">GMC works with the TY Danjuma Foundation, Sightsavers Nigeria, ES-PHCDA, MITOSATH, the Federal Ministry of Health, NHIA, the Enugu State UHC Agency, WHO/TDR, Dewdrop Institute, Medbuddy Academy, SIHI-UNIZIK and Enugu East LGA.</p>
                    <p className="text-slate-600 leading-relaxed">These partnerships support capital investment, maternal and eye care, health insurance, workforce training, operational research and community referral systems. GMC’s 2026–2028 roadmap aims for full operational self-sufficiency while expanding maternal, newborn and eye health services.</p>
                </div>
            </section>

            <section className="mb-24" aria-labelledby="team-heading">
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Excellence</span>
                    <h2 id="team-heading" className="text-4xl font-serif text-slate-900 mt-2">Dignity in Every Interaction</h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">GMC’s workforce grew by 40% in its first two years and includes eight specialist consultants working alongside its clinical and administrative teams.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { role: 'Prof. Uche Amazigo — CEO/Administrator', img: '/images/report/report-36.jpeg' },
                        { role: 'Dr. Nonso Igwe, FWACP — Clinical Director', img: '/images/report/report-37.jpeg' },
                        { role: 'GMC Clinical Team', img: '/images/report/report-38.png' }
                    ].map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-[2rem] h-[400px]">
                            <img
                                src={member.img}
                                alt={member.role}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/9333ea/ffffff?text=Staff';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-bold font-serif">{member.role}</h3>
                                <p className="text-purple-300 text-sm font-medium uppercase tracking-widest">GMC Leadership</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default About;
