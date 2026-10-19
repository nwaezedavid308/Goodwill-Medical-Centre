import { ArrowUpRight, Play, Plus, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
interface Props {
  onOpenAppointment?: () => void;
  onOpenVideoModal?: () => void;
}
export default function Hero({ onOpenAppointment, onOpenVideoModal }: Props) {
  return (
    <section className="care-hero page-shell">
      <div className="hero-intro">
        <p className="location-label">
          <span /> Your community. Your care.{" "}
          <span className="location-place">Enugu East, Nigeria</span>
        </p>
        <div className="hero-title-row">
          <h1>
            Quality care
            <br />
            for everyone.
          </h1>
          <div className="hero-intro-aside">
            <p>
              Here for the everyday.
              <br />
              Ready for the unexpected.
            </p>
            <span className="care-symbol" aria-hidden="true">
              <Plus strokeWidth={1.3} />
            </span>
          </div>
        </div>
      </div>
      <div className="hero-mosaic">
        <div className="hero-message">
          <span className="card-kicker">Goodwill Medical Centre</span>
          <h2>
            A healthier
            <br />
            tomorrow starts
            <br />
            close to home.
          </h2>
          <p>
            Care for you and your family, right here in Umuchigbo. From a
            routine check-up to a new arrival, we’re here to help.
          </p>
          <button onClick={onOpenAppointment} className="gmc-button light">
            Request an appointment{" "}
            <span className="button-arrow">
              <ArrowUpRight size={19} />
            </span>
          </button>
          <span className="hero-fineprint">
            A caring team. A community that matters.
          </span>
        </div>
        <div className="hero-photo">
          <img
            src="/images/optimised/facility-1280.webp"
            srcSet="/images/optimised/facility-640.webp 640w, /images/optimised/facility-1280.webp 1008w"
            sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 45vw"
            alt="The Goodwill Medical Centre building in Umuchigbo"
            fetchPriority="high"
            width="800"
            height="650"
          />
          <button onClick={onOpenVideoModal} className="tour-button">
            <span>
              <Play size={16} fill="currentColor" />
            </span>{" "}
            Take a look around
          </button>
          <div className="photo-caption">A place to feel cared for.</div>
        </div>
        <div className="hero-side">
          <Link to="/contact" className="visit-card">
            <MapPin size={24} strokeWidth={1.5} />
            <span>
              Closer than
              <br />
              you think.
            </span>
            <p>
              Find us in
              <br />
              Umuchigbo, Enugu East.
            </p>
            <span className="round-arrow">
              <ArrowUpRight size={21} />
            </span>
          </Link>
          <Link to="/services" className="care-card">
            <Heart size={26} strokeWidth={1.5} />
            <span>
              Care for
              <br />
              every stage.
            </span>
            <p>Explore our services</p>
            <ArrowUpRight className="corner-arrow" size={23} />
          </Link>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          Rooted in community.
          <br />
          <strong>Built around you.</strong>
        </p>
        <div>
          <span>Founded with support from</span>
          <strong>TY Danjuma Foundation</strong>
        </div>
        <div>
          <span>Managed under</span>
          <strong>PACIEH</strong>
        </div>
        <Link to="/about">
          Get to know GMC <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
