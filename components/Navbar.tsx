import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Plus, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useDialog } from "../hooks/useDialog";
import { SUPPORT_URL } from "../data/support";
interface Props {
  onOpenAppointment?: () => void;
  onOpenFreeTreatment?: () => void;
}
const primaryLinks = [
  ["/", "Home"],
  ["/services", "Our services"],
  ["/doctors", "Our team"],
  ["/about", "Our story"],
  ["/contact", "Contact"],
];
const moreLinks = [
  ["/faq", "Patient information"],
  ["/gallery", "Inside GMC"],
  ["/inception-report", "Community report"],
  ["/testimonials", "Patient stories"],
  ["/blog", "Journal & essays"],
];
export default function Navbar({ onOpenAppointment }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();
  const mobileRef = useDialog(mobileOpen, () => setMobileOpen(false));
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          to="/"
          className="brand"
          aria-label="Goodwill Medical Centre home"
        >
          <img
            className="brand-logo"
            src="/images/gmc-logo.svg"
            width="48"
            height="48"
            alt=""
          />
          <span>
            Goodwill<span className="brand-subtitle">Medical Centre</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {primaryLinks.map(([url, label]) => (
            <NavLink
              end={url === "/"}
              key={url}
              to={url}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
          <div
            className="more-nav"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setMoreOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMoreOpen(false);
                e.currentTarget.querySelector("button")?.focus();
              }
            }}
          >
            <button
              className={`nav-link ${moreLinks.some(([url]) => pathname.startsWith(url)) ? "active" : ""}`}
              aria-expanded={moreOpen}
              aria-controls="more-navigation"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              Explore <ChevronDown size={13} />
            </button>
            {moreOpen && (
              <div id="more-navigation" className="more-menu">
                {moreLinks.map(([url, label]) => (
                  <Link key={url} to={url} onClick={() => setMoreOpen(false)}>
                    {label}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="nav-actions">
          <a
            className="nav-support"
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Support patients <ArrowUpRight size={14} />
          </a>
          <button
            onClick={onOpenAppointment}
            className="gmc-button nav-appointment"
          >
            Plan your visit <ArrowUpRight size={17} />
          </button>
          <button
            className="mobile-menu-button icon-button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false);
          }}
        >
          <div
            ref={mobileRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            tabIndex={-1}
            className="mobile-navigation"
          >
            <div className="mobile-nav-title">
              <span>Take a look around.</span>
              <button
                className="icon-button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
              >
                <X />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {[...primaryLinks, ...moreLinks].map(([url, label]) => (
                <NavLink key={url} to={url} end={url === "/"}>
                  {label}
                  <ArrowUpRight size={19} />
                </NavLink>
              ))}
            </nav>
            <a
              className="mobile-support"
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support patients <ArrowUpRight size={17} />
            </a>
            <a href="tel:08000057777" className="mobile-emergency">
              Emergency: 0800 005 7777
            </a>
            <button
              className="gmc-button"
              onClick={() => {
                setMobileOpen(false);
                onOpenAppointment?.();
              }}
            >
              Request an appointment <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
