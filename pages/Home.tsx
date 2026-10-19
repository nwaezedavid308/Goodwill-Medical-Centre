import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Plus, HeartHandshake, Phone } from "lucide-react";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import VideoModal from "../components/VideoModal";
interface Props {
  onOpenAppointment?: () => void;
}
export default function Home({ onOpenAppointment }: Props) {
  const [tourOpen, setTourOpen] = useState(false);
  return (
    <>
      <Hero
        onOpenAppointment={onOpenAppointment}
        onOpenVideoModal={() => setTourOpen(true)}
      />
      <ServicesGrid />
      <section className="community-section page-shell" data-reveal>
        <div className="community-image">
          <img
            src="/images/optimised/maternal-1280.webp"
            sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 45vw"
            alt="Maternal and newborn care at GMC"
            loading="lazy"
            width="720"
            height="760"
          />
          <span className="image-sticker">
            <HeartHandshake size={23} /> People first.
            <br />
            Always.
          </span>
        </div>
        <div className="community-copy">
          <span className="eyebrow">More than a hospital</span>
          <h2>
            Good health
            <br />
            belongs to
            <br />
            all of us.
          </h2>
          <p>
            We believe getting care should feel possible. That’s why GMC brings
            specialist services and support for families together in one
            community hospital.
          </p>
          <p>
            With the support of the TY Danjuma Foundation and PACIEH, we’re
            helping people in Enugu East get closer to the care they need.
          </p>
          <Link to="/about" className="gmc-button secondary">
            Our story <ArrowUpRight size={19} />
          </Link>
          <div className="community-detail">
            <Plus size={25} />
            <p>
              Local roots.
              <br />
              <strong>A lasting commitment.</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="support-section page-shell" data-reveal>
        <div className="support-card">
          <div className="support-copy">
            <span className="eyebrow">Let’s talk about access</span>
            <h2>
              Care shouldn’t
              <br />
              feel out of reach.
            </h2>
            <p>
              Have insurance? Need help with treatment costs? Talk to our desk
              about NHIA, ESCHIS and the support options that may be available
              to you.
            </p>
            <Link to="/faq" className="gmc-button light">
              Understand your options <ArrowUpRight size={19} />
            </Link>
            <small>
              Coverage and support depend on your scheme and eligibility. Please
              confirm with our team.
            </small>
          </div>
          <div className="coverage-stack">
            <div>
              <span>NHIA / GIFSHIP</span>
              <Plus size={22} />
            </div>
            <div>
              <span>ESCHIS</span>
              <Plus size={22} />
            </div>
            <div>
              <span>Subsidised care</span>
              <HeartHandshake size={22} />
            </div>
            <p>A conversation is a good place to start.</p>
          </div>
        </div>
      </section>
      <section className="inside-section page-shell" data-reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">A familiar place before your visit</span>
            <h2>Step inside GMC.</h2>
          </div>
          <Link to="/gallery" className="text-link">
            Explore the gallery <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="inside-grid">
          <button
            className="inside-photo tour-photo"
            onClick={() => setTourOpen(true)}
            aria-label="Watch the GMC facility tour"
          >
            <img
              src="/images/optimised/inside-1280.webp"
              srcSet="/images/optimised/inside-640.webp 640w, /images/optimised/inside-1280.webp 1280w"
              sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 45vw"
              alt="Facilities at Goodwill Medical Centre"
              loading="lazy"
              width="1000"
              height="600"
            />
            <span className="inside-play">
              <Play size={22} fill="currentColor" />
            </span>
            <span className="inside-caption">
              A little look around.
              <ArrowUpRight size={22} />
            </span>
          </button>
          <div className="inside-photo">
            <img
              src="/images/optimised/care-1280.webp"
              srcSet="/images/optimised/care-640.webp 640w, /images/optimised/care-1280.webp 1080w"
              sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 45vw"
              alt="The clinic hallway and waiting area at GMC"
              loading="lazy"
              width="500"
              height="600"
            />
          </div>
        </div>
      </section>
      <section className="bridge-section page-shell" data-reveal>
        <div className="bridge-card">
          <div>
            <span className="eyebrow">Care reaches further</span>
            <h2>
              Sometimes, better
              <br />
              care starts with
              <br />a bridge.
            </h2>
            <p>
              The Avah River Bridge helps connect neighbouring communities to
              GMC. It’s part of a bigger story: making the journey to care
              easier.
            </p>
            <Link to="/inception-report" className="text-link">
              Read our community report <ArrowUpRight size={19} />
            </Link>
          </div>
          <img
            src="/images/optimised/bridge-1280.webp"
            srcSet="/images/optimised/bridge-640.webp 640w, /images/optimised/bridge-1280.webp 721w"
            sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 45vw"
            alt="The Avah River Bridge connecting neighbouring communities"
            loading="lazy"
            width="720"
            height="540"
          />
        </div>
      </section>
      <section className="visit-section page-shell" data-reveal>
        <span className="eyebrow">Your next step</span>
        <h2>
          Let’s take good
          <br />
          care of you.
        </h2>
        <div className="action-row">
          <button className="gmc-button" onClick={onOpenAppointment}>
            Request an appointment <ArrowUpRight size={19} />
          </button>
          <Link to="/contact" className="gmc-button secondary">
            Find your way here <ArrowUpRight size={19} />
          </Link>
        </div>
        <a href="tel:08000057777" className="visit-emergency">
          <Phone size={17} /> For emergencies, call 0800 005 7777
        </a>
      </section>
      <VideoModal
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
        initialVideo="aerial"
      />
    </>
  );
}
