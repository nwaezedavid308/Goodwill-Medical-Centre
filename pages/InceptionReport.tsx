import React from 'react';

const headlineStats = [
  ['12,509+', 'Patients served'],
  ['2,306', 'Antenatal visits'],
  ['217', 'Deliveries'],
  ['91', 'Free C-sections'],
  ['₦40.9M', 'Savings for vulnerable families'],
  ['2 years', 'Operational period covered'],
];

const annualServices = [
  ['Outpatients', '4,099', '8,407'],
  ['Admissions', '290', '768'],
  ['Accident & Emergency', '121', '223'],
  ['ANC visits', '663', '1,643'],
  ['Total deliveries', '57', '160'],
  ['Eye visits', '1,000', '1,523'],
  ['General surgeries', '46', '70'],
];

const monthlyServices = [
  ['January', '68', '4', '33', '476', '—', '6', '10'],
  ['February', '81', '7', '52', '569', '—', '—', '23'],
  ['March', '48', '12', '63', '557', '—', '2', '17'],
  ['April', '53', '5', '41', '557', '—', '2', '17'],
  ['May', '99', '9', '53', '731', '—', '3', '10'],
  ['June', '109', '12', '68', '777', '—', '6', '17'],
  ['July', '39', '12', '82', '835', '—', '2', '23'],
  ['August', '96', '11', '67', '784', '—', '3', '22'],
  ['September', '92', '18', '84', '860', '107', '8', '22'],
  ['October', '117', '20', '72', '759', '95', '6', '16'],
  ['November', '136', '15', '80', '754', '165', '9', '19'],
  ['December', '—', '12', '73', '689', '144', '8', '27'],
  ['Total', '1,052', '137', '768', '8,336', '511', '55', '223'],
];

const deliveryStats = [
  ['January', '4', '0', '4', '—'], ['February', '3', '4', '7', '—'],
  ['March', '5', '7', '12', '—'], ['April', '3', '2', '5', '—'],
  ['May', '6', '3', '9', '—'], ['June', '6', '6', '12', '1'],
  ['July', '7', '5', '12', '—'], ['August', '4', '7', '11', '—'],
  ['September', '5', '13', '18', '—'], ['October', '6', '14', '20', '1'],
  ['November', '7', '8', '15', '1'], ['December', '4', '8', '12', '1'],
  ['Total', '60', '77', '137', '4'],
];

const partners = [
  ['TY Danjuma Foundation', 'Lead funder', 'Capital grants and initial salary support'],
  ['Sightsavers Nigeria', 'Eye health', 'School screening, free glasses and surgery support'],
  ['ES-PHCDA and MITOSATH', 'Maternal health', 'TBA mapping, training and ANC best-practice guidance'],
  ['Federal Ministry of Health and NHIA', 'Health insurance', 'GIFSHIP enrolment and CEmONC reimbursement'],
  ['Enugu State UHC Agency', 'Health insurance', 'Universal Health Coverage enrolment'],
  ['WHO/TDR', 'Research and training', 'Evidence-based training, operational research and quality standards'],
  ['Dewdrop Institute', 'Staff development', 'Standardised nursing and auxiliary training'],
  ['Medbuddy Academy', 'Internships', 'Clinical phlebotomy internships and workforce pipeline'],
  ['SIHI-UNIZIK', 'Research', 'Community-health model research'],
  ['Enugu East LGA', 'Government', 'Health-insurance MoU for GMC staff and elderly residents'],
];

const reportImages = [
  ['report-02.jpeg', 'A clinician checks a patient during community outreach'],
  ['report-03.jpeg', 'Maternal and newborn care at GMC'],
  ['report-05.jpeg', 'Antenatal health education session'],
  ['report-06.jpeg', 'Mother and newborn receiving care'],
  ['report-07.jpeg', 'Maternal care ward'],
  ['report-08.jpeg', 'GMC facility exterior'],
  ['report-09.jpeg', 'Clinical care at GMC'],
  ['report-10.png', 'Traditional Birth Attendant training session'],
  ['report-11.jpeg', 'Consultant ophthalmologist attending to a patient'],
  ['report-13.jpeg', 'Patient care at GMC'],
  ['report-14.jpeg', 'Visit of the NHIA Director-General to GMC'],
  ['report-16.png', 'GMC laboratory services'],
  ['report-19.jpeg', 'Community outreach participants'],
  ['report-20.jpeg', 'Architectural model of the GMC Annex'],
  ['report-21.jpeg', 'GMC Annex foundation-stone ceremony'],
  ['report-22.jpeg', 'GMC Annex foundation-stone ceremony'],
  ['report-23.png', 'Completed Goodwill Medical Centre building'],
  ['report-24.jpeg', 'GMC Annex foundation-stone ceremony'],
  ['report-25.jpeg', 'GMC Annex foundation-stone ceremony'],
  ['report-26.jpeg', 'GMC Annex building nearing completion'],
  ['report-27.jpeg', 'The Avah River before construction of the bridge'],
  ['report-28.png', 'Map showing the Avah River access barrier'],
  ['report-29.jpeg', 'Communities separated from GMC by the Avah River'],
  ['report-30.jpeg', 'The completed Avah River Bridge'],
  ['report-31.jpeg', 'Official opening of the Avah River Bridge'],
  ['report-32.jpeg', 'GMC partner representative'],
  ['report-35.jpeg', 'Traditional Birth Attendant training'],
  ['report-36.jpeg', 'Prof. Uche Amazigo, CEO and Administrator'],
  ['report-37.jpeg', 'Dr. Nonso Igwe, Clinical Director'],
  ['report-38.png', 'GMC Pharmacy Team'],
  ['report-45.jpeg', 'TY Danjuma Foundation event'],
  ['report-46.jpeg', 'Goodwill Medical Centre entrance'],
  ['report-47.jpeg', 'Partners and community leaders visiting GMC'],
  ['report-49.png', 'Aerial view of the Goodwill Medical Centre campus'],
  ['report-53.jpeg', 'Goodwill Medical Centre, Umuchigbo'],
  ['report-54.jpeg', 'Gen. Theophilus Yakubu Danjuma, GCON (Rtd)'],
  ['report-55.jpeg', 'GMC programme event'],
  ['report-56.jpeg', 'Guests arriving for a GMC event'],
  ['report-57.jpeg', 'GMC activities and achievements collage'],
];

const Section: React.FC<{ eyebrow: string; title: string; children: React.ReactNode }> = ({ eyebrow, title, children }) => (
  <section className="mb-24">
    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">{eyebrow}</span>
    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-2 mb-8">{title}</h2>
    {children}
  </section>
);

const DataTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-purple-100 bg-white shadow-sm">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-900 text-white"><tr>{headers.map((header) => <th key={header} className="px-5 py-4 font-bold">{header}</th>)}</tr></thead>
      <tbody>{rows.map((row, index) => <tr key={`${row[0]}-${index}`} className="border-t border-slate-100 odd:bg-white even:bg-purple-50/40">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-5 py-4 text-slate-600">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

const InceptionReport: React.FC = () => (
  <main id="main-content" className="pt-16 px-6 max-w-7xl mx-auto min-h-screen">
    <header className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
      <div className="space-y-6">
        <span className="text-purple-600 font-bold tracking-[0.2em] uppercase text-xs">Inception Activities and Achievement Report</span>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">February 2024 to December 2025</h1>
        <p className="text-lg text-slate-600 leading-relaxed">Goodwill Medical Centre is a model secondary hospital in Umuchigbo, Enugu East LGA. This page presents the clinical, community, infrastructure, financial and partnership record from its opening through December 2025.</p>
      </div>
      <img src="/images/report/report-23.png" alt="Goodwill Medical Centre building" className="w-full rounded-[3rem] shadow-2xl" />
    </header>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
      {headlineStats.map(([value, label]) => <div key={label} className="bg-white rounded-2xl border border-purple-100 p-5 text-center shadow-sm"><div className="text-2xl font-bold text-purple-600 font-serif">{value}</div><p className="text-xs text-slate-500 mt-2">{label}</p></div>)}
    </div>

    <Section eyebrow="Executive Summary" title="A Mission of Goodwill">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-slate-600 leading-relaxed">
          <p>In 2023, General T. Y. Danjuma, GCON (Rtd), and the TY Danjuma Foundation approved financing for the construction and equipping of a model secondary hospital in an underserved location. The goal was a hospital able to sustain its operations mainly through internally generated revenue.</p>
          <p>GMC was commissioned in November 2023 and opened to the public in February 2024. It provides affordable, accessible and high-quality care through consultants, specialists and medical personnel. In its first two years it served more than 12,500 patients across maternal and newborn, surgical, eye and sensory-health programmes.</p>
          <p>GMC acknowledges the Enugu State Government, Enugu East LGA, TY Danjuma Foundation, trustees, partners, healthcare professionals, volunteers, patients and community members whose support made these achievements possible.</p>
        </div>
        <img src="/images/report/report-54.jpeg" alt="Gen. Theophilus Yakubu Danjuma, GCON (Rtd)" className="w-full max-h-[430px] object-cover rounded-[2rem] shadow-lg" />
      </div>
    </Section>

    <Section eyebrow="Inception Timeline" title="From Commissioning to Expanded Care">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          ['November 2023', 'GMC was commissioned by Gen. T. Y. Danjuma, GCON (Rtd), with the Enugu State Government.'],
          ['2024', 'GMC registered with the Enugu State Ministry of Health, opened to patients, held its first outreach and received NHIA accreditation.'],
          ['2025', 'GMC gained Enugu State UHC accreditation, completed its ANC clinic and solar expansion, opened the Avah River Bridge, launched the TBA partnership and delivered 91 free C-sections through CEmONC.'],
        ].map(([date, text]) => <article key={date} className="p-8 bg-white rounded-[2rem] border border-purple-100 shadow-sm"><div className="text-purple-600 font-bold mb-3">{date}</div><p className="text-slate-600 leading-relaxed">{text}</p></article>)}
      </div>
    </Section>

    <Section eyebrow="Clinical Services" title="Service Growth in the First Two Years">
      <p className="text-slate-600 leading-relaxed mb-8">GMC recorded strong growth across every major service category. Outpatient visits rose from 4,099 in 2024 to 8,407 in 2025, while admissions grew from 290 to 768. The strongest demand occurred in the third and fourth quarters of 2025.</p>
      <DataTable headers={['Service', '2024', '2025']} rows={annualServices} />
    </Section>

    <Section eyebrow="Maternal Newborn and Child Health" title="Safer Pregnancy and Delivery">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-slate-600 leading-relaxed">
          <p>GMC delivered 2,306 antenatal visits and 217 births in its first two years. Twice-weekly antenatal education, stronger referral links with Traditional Birth Attendants and the launch of Comprehensive Emergency Obstetric and Newborn Care improved access to timely care.</p>
          <p>CEmONC services launched with NHIA support in October 2025. In five months, 91 vulnerable women received free caesarean sections, creating ₦40.9 million in direct savings for their families.</p>
          <p>In 2025, GMC recorded 137 deliveries: 60 spontaneous vaginal deliveries and 77 caesarean sections. Four mothers were under 20 years old. The 56% C-section rate reflects the clinical complexity of referred cases.</p>
        </div>
        <img src="/images/report/report-03.jpeg" alt="Maternal and newborn care at GMC" className="w-full rounded-[3rem] shadow-xl" />
      </div>
      <div className="mt-10 bg-purple-50 border border-purple-100 rounded-[2rem] p-8"><h3 className="font-serif text-2xl text-slate-900 mb-3">Patient Story</h3><p className="text-slate-600 leading-relaxed">Mrs Ngozi arrived with prolonged-labour complications. Through CEmONC she received a fully subsidised caesarean section. Mother and child recovered and continue to thrive—one of 91 families given a second chance.</p></div>
    </Section>

    <Section eyebrow="Eye Health" title="Restoring Sight and Transforming Lives">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img src="/images/report/report-11.jpeg" alt="Consultant ophthalmologist examining a patient" className="w-full rounded-[3rem] shadow-xl" />
        <div className="space-y-5 text-slate-600 leading-relaxed"><p>GMC completed 2,523 eye reviews and 91 cataract surgeries in less than two years. As the primary eye-health provider in Enugu East LGA, it offers diagnostic, surgical and preventive services at 30–60% below city-hospital rates.</p><p>With Sightsavers Nigeria, GMC screened 600 students and their teachers at Umuchigbo Community Secondary School, provided 200 free pairs of glasses and delivered eye-health education to 1,800 students.</p></div>
      </div>
    </Section>

    <Section eyebrow="People Reached" title="Demographics and Geographic Reach">
      <p className="text-slate-600 leading-relaxed mb-8">In 2025, GMC enrolled 2,409 beneficiaries who received subsidised or free care across 10 states, 44 LGAs, 129 communities and 415 villages. Enugu State accounted for 99% of beneficiaries. The largest Enugu East communities served were Umuchigbo (1,028), Abakpa (622), Amaorji (139), Ibagwa (134) and Emene (114).</p>
      <DataTable headers={['Specialised service', 'Beneficiaries', 'Share']} rows={[["Antenatal care", "290", "12.0%"], ["Delivery services", "240", "10.0%"], ["Cataract surgery", "66", "2.7%"]]} />
    </Section>

    <Section eyebrow="Pharmacy" title="Reliable Access to Medicines">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div className="space-y-5 text-slate-600 leading-relaxed"><p>Frequent medicine stock-outs from March to August 2024 disrupted care and delayed emergency treatment. The pharmacy and hospital management strengthened drug monitoring, procurement and supply systems.</p><p>Bin Cards, weekly checks and structured documentation improved inventory control. A dedicated pharmacy account enabled faster procurement and emergency purchases. By December 2025, stock-outs, waste and expiries had fallen while emergency medicine availability improved.</p></div><img src="/images/report/report-38.png" alt="GMC Pharmacy Team" className="w-full rounded-[3rem] shadow-xl" /></div>
    </Section>

    <Section eyebrow="Infrastructure and Access" title="Health Investment Beyond the Hospital Walls">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <img src="/images/report/report-26.jpeg" alt="GMC Annex nearing completion" className="w-full h-72 object-cover rounded-[2rem] shadow-lg" />
        <img src="/images/report/report-30.jpeg" alt="Completed Avah River Bridge" className="w-full h-72 object-cover rounded-[2rem] shadow-lg" />
      </div>
      <div className="space-y-5 text-slate-600 leading-relaxed"><p>Year-one internally generated revenue funded a new antenatal and immunisation clinic. GMC installed 66 additional solar panels, added a water-purification system and advanced construction of an annex containing a Mother and Child Unit, private and male wards, a laboratory, conference room and other facilities.</p><p>The Avah River had isolated residents of Ifo, Ugbo-Ezeji, Ugbo-Okonkwo and Ugbo-Paul. A direct 20-minute walk to GMC could become an eight-kilometre journey during the rainy season. GMC mobilised support to build a pedestrian and tricycle-accessible iron bridge, opened on 8 April 2025 by Enugu East LGA Chairman Hon. Beloved-Dan Anike with TY Danjuma Foundation CEO Mr Gima Forje, GMC trustees and community leaders.</p></div>
    </Section>

    <Section eyebrow="Community Partnerships" title="Referrals Outreach and Trust">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><div className="space-y-5 text-slate-600 leading-relaxed"><p>GMC mapped and trained more than 30 Traditional Birth Attendants with ES-PHCDA. Monthly meetings and the toll-free referral line, 0800 005 7777, strengthened the pathway from community care to safe facility delivery.</p><p>The first official outreach in January 2024 served 839 attendees with vital-sign checks, blood sugar, malaria and HIV tests, consultations, eye screening and medicines. Of those attending, 567 received medicines, 277 presented with eye concerns, 110 received medicated glasses and 20 were booked for free cataract surgery.</p><p>A further outreach in May 2025 served 532 attendees, bringing total outreach attendance to 1,371. These activities supported health education, early detection and confidence in formal health services.</p></div><img src="/images/report/report-19.jpeg" alt="GMC community outreach participants" className="w-full rounded-[3rem] shadow-xl" /></div>
    </Section>

    <Section eyebrow="Human Resources" title="The People Behind GMC">
      <p className="text-slate-600 leading-relaxed mb-8">The workforce grew by 40% in two years. GMC reports a staff-to-patient ratio of 1:3, a doctor-to-patient ratio of 1:15 and eight specialist consultants. Leadership includes Prof. Uche Amazigo, FAS, CEO and Administrator, and Dr Nonso Igwe, FWACP, Clinical Director. A December 2025 staff essay competition recognised the quiet dedication of GMC’s teams, with the Pharmacy Department named the winning team.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><img src="/images/report/report-36.jpeg" alt="Prof. Uche Amazigo" className="w-full h-80 object-cover rounded-[2rem]" /><img src="/images/report/report-37.jpeg" alt="Dr Nonso Igwe" className="w-full h-80 object-cover rounded-[2rem]" /><img src="/images/report/report-38.png" alt="GMC Pharmacy Team" className="w-full h-80 object-cover rounded-[2rem]" /></div>
    </Section>

    <Section eyebrow="Strategic Partnerships" title="A Shared Health-Equity Mission"><DataTable headers={['Partner', 'Role', 'Contribution']} rows={partners} /></Section>

    <Section eyebrow="Financial Sustainability" title="Three Revenue Streams One Mission">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">{[
        ['Patient Revenue', 'Premium ward fees, specialist consultations, diaspora family plans and corporate wellness arrangements.'],
        ['Government Partnership', 'NHIA/GIFSHIP enrolment, CEmONC reimbursement, Enugu State UHC and LGA insurance agreements.'],
        ['Institutional Support', 'TY Danjuma Foundation, WHO/TDR, Sightsavers, MITOSATH and individual partners.'],
      ].map(([title, text]) => <article key={title} className="p-8 bg-white rounded-[2rem] border border-purple-100 shadow-sm"><h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></article>)}</div>
      <div className="space-y-5 text-slate-600 leading-relaxed"><p>GMC uses a cross-subsidy model in which premium fees from higher-income patients help finance subsidised and free care. At least 30% of annual operational surplus is committed to vulnerable populations and reviewed annually by the Board.</p><p>Income grew from ₦1.77 million in February 2024, the first full operating month, to ₦8.79 million in August 2024. More than ₦38 million was generated over eight months, demonstrating the potential of the internally generated revenue model.</p><p>Government is a co-investor in health equity. NHIA accreditation enables GIFSHIP enrolment, while CEmONC reimbursement financed 91 free C-sections. State and LGA agreements expand coverage for residents, staff and elderly people aged 70 and above. GMC targets 200 new insurance enrollees each year and 350 free deliveries annually by 2027.</p></div>
    </Section>

    <Section eyebrow="Challenges and Lessons" title="What the First Two Years Taught Us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100"><h3 className="text-2xl font-serif mb-4">Challenges</h3><ul className="space-y-3 text-slate-600 list-disc pl-5"><li>Poor roads, geographic isolation and the river barrier</li><li>Water shortages and power fluctuations</li><li>Security coordination with local authorities</li><li>Staff retention amid public-sector salary competition</li><li>Severe poverty among many patients and communities</li></ul></div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100"><h3 className="text-2xl font-serif mb-4">Responses and Lessons</h3><ul className="space-y-3 text-slate-600 list-disc pl-5"><li>The bridge, solar expansion and water system are direct health interventions</li><li>NHIA and UHC integration expand financial protection</li><li>Donor funding combined with earned income supports a replicable pro-poor model</li><li>TBA integration, outreach and community leadership build trust</li><li>Continuing professional development and international mentorship strengthen retention and clinical quality</li></ul></div>
      </div>
    </Section>

    <Section eyebrow="Strategic Vision" title="Roadmap 2026 to 2028">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[
        ['2026', 'Introduce electronic medical records and a pricing policy; add three donor streams; increase GIFSHIP and UHC enrolment.'],
        ['2027', 'Expand support for vulnerable mothers and newborns; pursue zero maternal deaths; grow eye-health services; open the SIHI research hub; sign two new MoUs.'],
        ['2028', 'Reach full financial independence and document a replicable model for pro-poor secondary healthcare.'],
      ].map(([year, text]) => <article key={year} className="bg-slate-900 text-white p-8 rounded-[2rem]"><div className="text-purple-400 text-4xl font-serif font-bold mb-4">{year}</div><p className="text-slate-300 leading-relaxed">{text}</p></article>)}</div>
      <p className="text-slate-600 leading-relaxed mt-8">GMC also seeks support to expand advanced diagnostics and cancer screening. The roadmap depends on public insurance, specialist organisations, academic research and community networks working together.</p>
    </Section>

    <Section eyebrow="Appendix" title="Full 2025 Monthly Service Data"><DataTable headers={['Month', 'ANC', 'Deliveries', 'Admissions', 'GOPD', 'Eye', 'Surgeries', 'A&E']} rows={monthlyServices} /></Section>
    <Section eyebrow="Appendix" title="2025 Delivery Statistics"><DataTable headers={['Month', 'SVD', 'C-section', 'Total', 'Under 20']} rows={deliveryStats} /></Section>

    <Section eyebrow="Reference" title="Acronyms Used in the Report">
      <DataTable headers={['Acronym', 'Meaning']} rows={[
        ['A&E', 'Accident and Emergency'], ['ANC', 'Antenatal Care'], ['CEmONC', 'Comprehensive Emergency Obstetric and Newborn Care'], ['C/S', 'Caesarean Section'], ['ES-PHCDA', 'Enugu State Primary Health Care Development Agency'], ['GIFSHIP', 'Group Individual and Family Social Health Insurance Programme'], ['GMC', 'Goodwill Medical Centre'], ['GOPD', 'General Outpatient Department'], ['HRH', 'Human Resources for Health'], ['IGR', 'Internally Generated Revenue'], ['LGA', 'Local Government Area'], ['MNCH', 'Maternal, Newborn and Child Health'], ['MoU', 'Memorandum of Understanding'], ['NHIA', 'National Health Insurance Authority'], ['NTD', 'Neglected Tropical Disease'], ['SVD', 'Spontaneous Vaginal Delivery'], ['TBA', 'Traditional Birth Attendant'], ['TDR', 'Special Programme for Research and Training in Tropical Diseases'], ['TYDF', 'TY Danjuma Foundation'], ['UHC', 'Universal Health Coverage'], ['WHO', 'World Health Organization'],
      ]} />
    </Section>

    <Section eyebrow="Report Image Archive" title="Pictures and Graphics from the Inception Report">
      <p className="text-slate-600 leading-relaxed mb-10">The archive below preserves every substantive photograph and informational graphic embedded in the report. Small decorative arrows and interface icons are excluded.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{reportImages.map(([file, caption]) => <figure key={file} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"><img src={`/images/report/${file}`} alt={caption} loading="lazy" className="w-full aspect-[4/3] object-cover" /><figcaption className="p-5 text-sm text-slate-600">{caption}</figcaption></figure>)}</div>
    </Section>

    <Section eyebrow="Conclusion" title="A Call to Action">
      <div className="bg-purple-600 text-white rounded-[3rem] p-10 md:p-16"><p className="text-lg leading-relaxed text-purple-50">In two years, GMC served more than 12,500 patients, delivered 91 free life-saving caesarean sections, restored sight through 91 cataract surgeries, trained more than 30 Traditional Birth Attendants and built a bridge connecting communities long cut off from care. Continued partnership will expand service reach, upgrade infrastructure and develop the people who make healing possible.</p><p className="mt-6 font-bold">Goodwill Medical Centre · Umuchigbo, Enugu East LGA · 0802 409 4488 · 0703 258 5626 · +234 703 258 5626 · Toll-free 0800 005 7777 · goodwillhospital25@gmail.com</p><a href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold">Chat With GMC on WhatsApp</a></div>
    </Section>

    <Section eyebrow="Report Contributors" title="Acknowledged Contributors">
      <p className="text-slate-600 leading-relaxed">Professor Uche Amazigo, FAS; Dr Nonso Igwe, FWACP; Mr Chuma Amazigo, GMC Trustee; Mr David Nweze; Nurse Chekwube Gloria Onah; Nurse Miracle Nwala; Ms Ozioma Nnadi; Ms Martha Nwankwo; and Dr Gabriel Afolayan of Pen-Impact Writing & Publishing Ltd, Abuja, adviser.</p>
    </Section>
  </main>
);

export default InceptionReport;
