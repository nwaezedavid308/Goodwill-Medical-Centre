
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="space-y-6">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">A Hospital with a Heart</h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Too many families in Nigeria go without basic medical attention due to cost, distance, or fear of being turned away. That’s why we built <strong>GMC—not just as a hospital, but as a sanctuary of care.</strong>
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Situated in the heart of Umuchigbo, Enugu East, we exist to bring hope, healing, and quality medical care to those who need it most—especially low-income families and underserved communities.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-100 rounded-[3rem] rotate-3 transform scale-95 opacity-50" />
                    <img
                        src="/images/gallery/GMC_Building_Front_Check.jpg"
                        alt="GMC Building"
                        className="relative w-full rounded-[3rem] shadow-2xl border-8 border-white"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/9333ea/ffffff?text=GMC+Building';
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif">Major Milestones</h2>
                    <div className="space-y-6">
                        {[
                            { stat: '7,534', text: 'Total patients attended to at GMC since inception.' },
                            { stat: '154+', text: 'Persons enrolled in the National Health Insurance Scheme.' },
                            { stat: '60', text: 'Indigent community members reaching the universal health coverage goal.' },
                            { stat: '100%', text: 'Increase in antenatal bookings following bridge construction.' }
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
                            Commissioned on <strong>8th April 2025</strong>, the bridge stands as a symbol of hope, progress, and unity. It eliminated dangerous river crossings and reduced travel time for families in need of urgent care.
                        </p>
                        <a href="https://youtube/zgICvsWCNWU?i=8yRnQ4MJLCkHODIR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-sm bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                            Watch Impact Video
                        </a>
                    </div>
                </div>
            </div>

            <div className="mb-24 space-y-16">
                <div>
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Community Impact</span>
                    <h2 className="text-4xl font-serif text-slate-900 mt-2">Specialized Interventions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold font-serif">TBA Intervention Program</h3>
                        <p className="text-slate-600 leading-relaxed">
                            GMC recognized the heavy reliance on untrained Traditional Birth Attendants (TBAs). In collaboration with the Enugu State Primary Healthcare Agency, we mapped and trained <strong>21 TBAs</strong> from five settlements to enhance early intervention for complications.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold font-serif">Eye Health Screening</h3>
                        <p className="text-slate-600 leading-relaxed">
                            In collaboration with <strong>Sightsavers Nigeria</strong>, we screened <strong>600 students</strong> across Enugu East, providing free spectacle corrections to 150 students, ensuring their vision doesn't hinder their education.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Excellence</span>
                    <h2 className="text-4xl font-serif text-slate-900 mt-2">Dignity in Every Interaction</h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">Our medical staff and leadership team are committed to providing the highest quality care to every patient who walks through our doors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { role: 'Medical Director', img: '/images/gallery/GMC_Leadership_Team_Group_Photo_1.jpg' },
                        { role: 'Head of Nursing', img: '/images/gallery/Medical_Staff_Team_Photo_1.jpg' },
                        { role: 'Pharmacy Department', img: '/images/gallery/GMC_Pharmacy_Stock_Room.jpg' }
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
            </div>
        </div>
    );
};

export default About;
