import { Link } from "react-router-dom";
import { Plus, ArrowUpRight, Phone, MapPin } from "lucide-react";
const links = [
  ["/services", "Our services"],
  ["/doctors", "Our team"],
  ["/about", "Our story"],
  ["/faq", "Patient information"],
  ["/gallery", "Inside GMC"],
  ["/blog", "Journal & essays"],
  ["/testimonials", "Patient stories"],
  ["/inception-report", "Community report"],
  ["/contact", "Contact & directions"],
  ["/privacy", "Website privacy"],
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <Link to="/" className="footer-brand">
            Goodwill.
            <Plus size={56} strokeWidth={1.2} />
          </Link>
          <p>
            A community hospital.
            <br />A little closer to you.
          </p>
        </div>
        <div className="footer-grid">
          <div>
            <span className="footer-label">Come say hello</span>
            <p>
              No. 3, Chief Jude Agu Street,
              <br />
              Umuchigbo, Enugu East LGA,
              <br />
              Enugu State, Nigeria.
            </p>
            <Link className="footer-inline" to="/contact">
              <MapPin size={15} /> Get directions <ArrowUpRight size={15} />
            </Link>
            <p className="footer-partners">
              Founded with support from
              <br />
              <strong>TY Danjuma Foundation & PACIEH</strong>
            </p>
          </div>
          <div>
            <span className="footer-label">Find your way</span>
            <div className="footer-links">
              {links.map(([url, label]) => (
                <Link key={url} to={url}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="footer-label">Let’s talk</span>
            <a className="footer-phone" href="tel:07032585626">
              0703 258 5626
            </a>
            <a className="footer-secondary-phone" href="tel:08024094488">
              0802 409 4488
            </a>
            <a
              className="footer-email"
              href="mailto:goodwillhospital25@gmail.com"
            >
              goodwillhospital25@gmail.com
            </a>
            <a
              className="footer-inline"
              href="https://wa.me/2347032585626"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
            <a className="footer-urgent" href="tel:08000057777">
              <Phone size={18} />
              <span>
                Emergency line<strong>0800 005 7777</strong>
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Goodwill Medical Centre.</p>
          <a
            href="https://wa.me/2348110607341"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with care by Niuxverse <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
