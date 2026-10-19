export interface BlogPost {
  id: number;
  title: string;
  category:
    | "Infrastructure"
    | "Maternal Health"
    | "Eye Care"
    | "Staff Essays"
    | "Community Outreach";
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

export const POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Avah River Bridge: Reconnecting Four Communities to Life-Saving Healthcare",
    category: "Infrastructure",
    date: "8 April 2025",
    author: "GMC Media Relations",
    image: "/images/report/report-31.jpeg",
    excerpt:
      "GMC funded and completed the construction of an iron pedestrian and tricycle bridge across the Avah River, ending hazardous rainy-season detours for thousands of residents.",
    content: [
      "For decades, residents of Ifo, Ugbo-Ezeji, Ugbo-Okonkwo, and Ugbo-Paul faced an excruciating barrier: during the torrential rainy seasons, the swelling Avah River completely cut off direct access to Umuchigbo.",
      "A normal 15-to-20-minute walk to hospital care turned into an eight-kilometre journey via hazardous detours, or compelled dangerous attempts to wade across swift river currents with sick children and labouring mothers.",
      "Commissioned on 8 April 2025, the new iron pedestrian and tricycle (keke) bridge now allows emergency patients and school children safe, year-round passage directly into Goodwill Medical Centre.",
      "Community leaders and royal fathers lauded the initiative as a shining example of how a hospital’s mandate extends beyond clinical walls to eliminating geographical determinants of health.",
    ],
  },
  {
    id: 2,
    title:
      "91 Families Receive Free Life-Saving Caesarean Sections in Five Months",
    category: "Maternal Health",
    date: "15 March 2025",
    author: "Dr. Nneka Umeh (Consultant OB/GYN)",
    image: "/images/report/report-13.jpeg",
    excerpt:
      "Through the federally supported CEmONC programme and partner backing, GMC performed 91 free emergency C-sections, saving vulnerable families over ₦40.9 million.",
    content: [
      "Maternal mortality in Nigeria remains a national emergency. In many low-resource rural settings, obstructed labour and lack of surgical access turn childbirth into a life-threatening crisis.",
      "Goodwill Medical Centre launched its Comprehensive Emergency Obstetric and Newborn Care (CEmONC) initiative with accreditation and support from the NHIA and state health agencies.",
      "In its first five months, 91 pregnant women with critical obstetrical complications—including uterine ruptures, eclampsia, and prolonged obstructed labour—received free emergency surgical interventions.",
      "This single intervention resulted in ₦40.9 million in direct financial relief for indigent households, preserving mother and infant lives without pushing families into catastrophic debt.",
    ],
  },
  {
    id: 3,
    title:
      "World Sight Day: Over 2,500 Eye Screenings and Subsidized Cataract Surgeries",
    category: "Eye Care",
    date: "14 October 2025",
    author: "Dr. Emeka Nwankwo (Consultant Ophthalmologist)",
    image: "/images/gallery/World_Sight_Day_Pharmacy_Staff.jpg",
    excerpt:
      "Partnering with Sightsavers Nigeria, GMC brought specialized eye care to rural elders, performing life-transforming Small-Incision Cataract Surgeries (SICS).",
    content: [
      "Avoidable blindness from untreated senile cataracts remains one of the heaviest burdens on rural elderly citizens in southeastern Nigeria.",
      "Goodwill Medical Centre partnered with Sightsavers Nigeria to establish a dedicated weekly eye clinic and high-volume cataract surgical unit.",
      "Between opening in 2024 and December 2025, the department conducted 2,523 comprehensive eye consultations and completed 91 successful cataract surgeries at fees 30% to 60% below city hospital rates.",
      "With subsidized post-operative medications and free reading glasses distributed, scores of grandfathers and grandmothers have regained their autonomy and sight.",
    ],
  },
  {
    id: 4,
    title: "Delivering Pharmaceutical Care with Empathy: 1st Prize Staff Essay",
    category: "Staff Essays",
    date: "21 November 2025",
    author: "Pharmacy Department Team",
    image: "/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg",
    excerpt:
      "An introspective reflection on patient counseling, eliminating counterfeit drugs, and ensuring vulnerable patients never leave without their prescribed treatments.",
    content: [
      "In community health delivery, a hospital’s pharmacy is the final frontier where medicine meets human vulnerability.",
      "This award-winning essay explores GMC’s strict pharmaceutical protocols: routine batch testing, maintaining the cold chain for vaccines, and establishing an indigent medication support pool.",
      "At GMC, no patient in medical shock is denied emergency drugs due to inability to make immediate payment. The essay chronicles touching encounters with mothers arriving at midnight with convulsing infants.",
      "You can download and read the full comprehensive essay in PDF below.",
    ],
    pdfDownload: {
      file: "/docs/GMC ESSAY PHARMACY DEPARTMENT _20251121_005451_0000_compressed.pdf",
      size: "2.9 MB",
      label: "GMC Pharmacy Essay (1st Prize Winner)",
    },
  },
  {
    id: 5,
    title:
      "Compassion at the Bedside: Nursing as the Heartbeat of GMC (2nd Prize)",
    category: "Staff Essays",
    date: "24 November 2025",
    author: "Nursing Department Team",
    image: "/images/gallery/Medical_Staff_Team_Photo_1.jpg",
    excerpt:
      "The Nursing Department reflects on providing round-the-clock comfort, holding hands in the delivery room, and walking with patients through illness into recovery.",
    content: [
      "Doctors may prescribe, but it is the nurse who keeps vigil through the darkest hours of 3:00 AM in the hospital ward.",
      "Awarded 2nd Prize in the GMC Staff Essay Competition, this moving paper articulates the philosophy of empathetic nursing practiced at GMC.",
      "The nurses recount real cases: coaching teenage first-time mothers through intense labour contractions, comforting anxious families in the waiting lobby, and ensuring impeccable infection control in the post-operative recovery unit.",
      "Download the full manuscript below.",
    ],
    pdfDownload: {
      file: "/docs/NURSING DEPARTMENT ESSAY  2nd Prize.pdf",
      size: "0.4 MB",
      label: "Nursing Department Essay (2nd Prize)",
    },
  },
  {
    id: 6,
    title:
      "Overcoming Socioeconomic Barriers to Healthcare in Rural Enugu (3rd Prize)",
    category: "Staff Essays",
    date: "28 November 2025",
    author: "Clinical & Community Outreach Unit",
    image: "/images/gallery/Health_Education_Session.jpg",
    excerpt:
      'Analyzing how traditional birth attendants (TBAs), community chiefs, and the "Treatment for Two" initiative dismantle long-standing cultural and monetary barriers to health.',
    content: [
      "Quality healthcare that remains financially inaccessible is essentially useless to an indigent mother in rural Umuchigbo.",
      "Awarded 3rd Prize in the GMC Competition, this paper analyzes the structural economics of the GMC model.",
      'By creating the "Treatment for Two" model—where affluent patients and philanthropy cover the deficit of the impoverished—and training over 30 traditional birth attendants, GMC has transformed maternal health-seeking behavior across Enugu East.',
      "Download the full competition essay below.",
    ],
    pdfDownload: {
      file: "/docs/GMC COMPETITION - 3rd Prize.pdf",
      size: "0.6 MB",
      label: "GMC Competition Essay (3rd Prize)",
    },
  },
];
