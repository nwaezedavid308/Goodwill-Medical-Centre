import {
  ArrowUpRight,
  Play,
  Pause,
  Plus,
  MapPin,
  Heart,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import TypewriterHeadline from "./TypewriterHeadline";
import { Link } from "react-router-dom";
interface Props {
  onOpenAppointment?: () => void;
  onOpenVideoModal?: () => void;
}
export default function Hero({ onOpenAppointment, onOpenVideoModal }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const visible = useInView(heroRef);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [manuallyStarted, setManuallyStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const parallax = useSpring(shift, { stiffness: 90, damping: 25 });
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    const syncPlayback = () => {
      if (
        document.hidden ||
        !visible ||
        userPaused ||
        (reduced && !manuallyStarted)
      )
        video.pause();
      else
        void video.play().catch((error: DOMException) => {
          if (cancelled) return;
          if (error.name === "NotAllowedError" && !video.muted) {
            video.muted = true;
            setMuted(true);
            setSoundBlocked(true);
            void video.play().catch(() => {
              if (!cancelled) setPlaying(false);
            });
          } else setPlaying(false);
        });
    };
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [visible, userPaused, reduced, manuallyStarted]);
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      setUserPaused(true);
      video.pause();
    } else {
      setManuallyStarted(true);
      setUserPaused(false);
      void video.play().catch(() => setPlaying(false));
    }
  };
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    setSoundBlocked(false);
    if (!nextMuted) {
      setManuallyStarted(true);
      setUserPaused(false);
      void video.play().catch(() => setPlaying(false));
    }
  };
  return (
    <section ref={heroRef} className="care-hero page-shell">
      <div className="hero-intro">
        <p className="location-label">
          <span /> Your community. Your care.{" "}
          <span className="location-place">Enugu East, Nigeria</span>
        </p>
        <div className="hero-title-row">
          <TypewriterHeadline />
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
        <motion.div
          className="hero-message"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        <motion.div
          className="hero-photo"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <motion.div
            className="hero-video-media"
            style={{ y: reduced ? 0 : parallax }}
          >
            <video
              ref={videoRef}
              src="/videos/GMC_VIEW.mp4"
              poster="/images/optimised/facility-1280.webp"
              autoPlay={!reduced}
              muted={muted}
              loop
              playsInline
              preload={reduced ? "none" : "auto"}
              aria-label="Aerial tour of Goodwill Medical Centre"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
          </motion.div>
          <button onClick={onOpenVideoModal} className="tour-button">
            <span>
              <Play size={16} fill="currentColor" />
            </span>{" "}
            Take a look around
          </button>
          <div className="photo-caption">A place to feel cared for.</div>
          <button
            className="hero-sound-toggle"
            onClick={toggleSound}
            aria-label={muted ? "Turn video sound on" : "Mute facility video"}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>
              {soundBlocked
                ? "Tap for sound"
                : muted
                  ? "Sound off"
                  : "Sound on"}
            </span>
          </button>
          <button
            className="hero-video-toggle"
            aria-label={
              playing ? "Pause facility video" : "Play facility video"
            }
            onClick={toggleVideo}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
            <span className="sr-only">
              {playing ? "Pause video" : "Play video"}
            </span>
          </button>
        </motion.div>
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
