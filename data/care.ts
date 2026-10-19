export const SERVICES_DATA = [
  {
    title: "General Outpatient Care (GOPD)",
    category: "Outpatient",
    schedule: "Mondays to Saturdays · 8:00 AM – 5:00 PM",
    desc: "Consultant-led diagnostic consultations for acute and chronic conditions, preventive medicine, hypertension and diabetes management. GMC recorded over 12,506 outpatient visits in its initial two years.",
    img: "/images/report/report-02.jpeg",
    features: [
      "Blood pressure & blood glucose monitoring",
      "Adult health screening",
      "Subsidized prescription medicines",
    ],
  },
  {
    title: "Maternal, Newborn & Child Health (CEmONC)",
    category: "Maternal",
    schedule: "Antenatal: Tuesdays & Thursdays · Delivery: 24/7",
    desc: "Comprehensive Emergency Obstetric and Newborn Care. Includes ultrasound fetal assessment, high-risk antenatal supervision, sterile labour suites, and life-saving Caesarean sections (91 free C-sections funded).",
    img: "/images/report/report-03.jpeg",
    features: [
      "Free CEmONC emergency C-sections",
      "Free maternal delivery kits",
      "Neonatal resuscitation & care",
    ],
  },
  {
    title: "Eye Health & Cataract Surgery",
    category: "Eye Care",
    schedule: "Wednesdays & Saturdays · 9:00 AM – 2:00 PM",
    desc: "Consultant Ophthalmologist-led diagnosis, refractive testing, glaucoma screening, and high-volume Small-Incision Cataract Surgeries (SICS) in partnership with Sightsavers Nigeria at 30–60% below city hospital fees.",
    img: "/images/report/report-11.jpeg",
    features: [
      "2,523+ eye reviews conducted",
      "91 sight-restoring cataract surgeries",
      "Subsidized corrective eyeglasses",
    ],
  },
  {
    title: "Diagnostic Laboratory & Imaging",
    category: "Diagnostics",
    schedule: "Open 24/7 for Routine & Emergency Tests",
    desc: "Clinical hematology, chemical pathology, microbiology, malaria and typhoid rapid diagnostics, and ultrasound scans ensuring prompt, evidence-based medical decisions.",
    img: "/images/report/report-16.png",
    features: [
      "Same-day test turnarounds",
      "High-resolution obstetric scans",
      "Strict quality control standards",
    ],
  },
  {
    title: "Accident & Emergency (A&E)",
    category: "Emergency",
    schedule: "Open 24 Hours · 7 Days a Week (365 Days)",
    desc: "Rapid medical stabilization and trauma assessment for urgent surgical, medical, and pediatric emergencies supported by our dedicated ambulance bay and toll-free hotline.",
    img: "/images/report/report-07.jpeg",
    features: [
      "Toll-free emergency line: 0800 005 7777",
      "Immediate triage protocol",
      "Direct emergency surgical theater",
    ],
  },
  {
    title: "Paediatric & Neonatal Care",
    category: "Paediatric",
    schedule: "Daily Outpatient & 24/7 Inpatient Pediatric Ward",
    desc: "Specialist paediatrician-led care for newborns, infants, and growing children, including childhood immunizations, nutritional rehabilitation, and respiratory treatments.",
    img: "/images/report/report-13.jpeg",
    features: [
      "Child wellness & immunization programs",
      "Neonatal phototherapy",
      "Family-centered paediatric ward",
    ],
  },
  {
    title: "Inpatient & Surgical Theater",
    category: "Surgery",
    schedule: "Elective Surgeries: Mon/Thu · Emergency: 24/7",
    desc: "Modern operating theater and serene recovery wards for general, obstetric, and trauma surgeries supported by experienced anesthetists and surgical nursing officers.",
    img: "/images/report/report-09.jpeg",
    features: [
      "Consultant surgeon supervision",
      "Sterile theater environment",
      "Compassionate post-operative care",
    ],
  },
  {
    title: "Ear, Nose & Throat (ENT) Services",
    category: "Outpatient",
    schedule: "Specialist Clinic Days",
    desc: "Diagnosis and medical treatment of hearing disorders, tonsillitis, chronic sinusitis, foreign body removal, and upper airway complaints in adults and children.",
    img: "/images/gallery/Medical_Staff_Late_Night_Smile.jpg",
    features: [
      "Otoscopic examinations",
      "Ear syringing & foreign body extraction",
      "Specialist ENT referrals",
    ],
  },
  {
    title: "24/7 Pharmacy Dispensary",
    category: "Pharmacy",
    schedule: "Open 24 Hours Every Day",
    desc: "Fully stocked hospital dispensary with direct procurement from certified manufacturers, cold-chain storage for vaccines, and strict batch monitoring.",
    img: "/images/gallery/GMC_Pharmacy_Stock_Shelves.jpg",
    features: [
      "100% genuine NAFDAC approved drugs",
      "Patient medication counseling",
      "Subsidized indigent medicine fund",
    ],
  },
  {
    title: "Community & School Health Outreach",
    category: "Outreach",
    schedule: "Monthly Community & School Missions",
    desc: "Mobile screening clinics, health education in primary and secondary schools, deworming campaigns, and direct referrals via our trained Traditional Birth Attendants network.",
    img: "/images/report/report-19.jpeg",
    features: [
      "Over 30 trained TBAs engaged",
      "School vision & hygiene screenings",
      "Free medicine distribution camps",
    ],
  },
];

export const serviceId = (title: string) =>
  SERVICES_DATA.findIndex((service) => service.title === title).toString();
