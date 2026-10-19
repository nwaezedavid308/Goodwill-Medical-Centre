import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Eye,
  Stethoscope,
  Activity,
  Baby,
  Plus,
} from "lucide-react";
const services = [
  {
    title: "Everyday health",
    description:
      "A check-up, a concern, or a little peace of mind. Start with our outpatient team.",
    icon: Stethoscope,
    tone: "milk",
    tag: "Outpatient care",
  },
  {
    title: "Mothers & little ones",
    description:
      "Support through pregnancy, birth and those precious early years.",
    icon: Baby,
    tone: "purple",
    tag: "Maternal & child care",
  },
  {
    title: "A clearer outlook",
    description:
      "Eye checks, vision care and cataract surgery. See what’s possible.",
    icon: Eye,
    tone: "sky",
    tag: "Eye health",
  },
  {
    title: "Answers that help",
    description:
      "Laboratory tests and scans to help your care team plan the next step.",
    icon: Activity,
    tone: "lavender",
    tag: "Diagnostics",
  },
];
export default function ServicesGrid() {
  return (
    <section id="services" className="services-section page-shell" data-reveal>
      <div className="section-heading">
        <div>
          <span className="eyebrow">Care that fits your life</span>
          <h2>
            Life happens.
            <br />
            We’re here for it.
          </h2>
        </div>
        <div className="heading-aside">
          <p>
            Different needs. One place to turn.
            <br />
            Let’s find the right care for you.
          </p>
          <Link className="text-link" to="/services">
            All our services <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
      <div className="service-bento">
        {services.map(({ title, description, icon: Icon, tone, tag }) => (
          <Link to="/services" key={title} className={`service-card ${tone}`}>
            <div className="service-card-top">
              <Icon size={29} strokeWidth={1.5} />
              <span className="service-tag">{tag}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="round-arrow">
              <ArrowUpRight size={22} />
            </span>
          </Link>
        ))}
      </div>
      <div className="service-note">
        <Plus size={19} />
        <p>
          Also here for emergency care, inpatient care, surgery, pharmacy and
          more.
        </p>
        <Link to="/services" aria-label="Explore all medical services">
          <ArrowUpRight size={21} />
        </Link>
      </div>
    </section>
  );
}
