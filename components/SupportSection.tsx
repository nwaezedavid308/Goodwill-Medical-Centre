import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, HeartHandshake, Heart, Plus } from "lucide-react";
import { SUPPORT_URL } from "../data/support";

export default function SupportSection() {
  const reduced = useReducedMotion();
  return (
    <section
      id="support"
      className="donation-section page-shell"
      aria-labelledby="support-title"
      data-reveal
    >
      <div className="donation-card">
        <motion.div
          className="donation-symbol"
          aria-hidden="true"
          whileHover={reduced ? {} : { rotate: -8, scale: 1.06 }}
        >
          <HeartHandshake size={43} strokeWidth={1.4} />
        </motion.div>
        <div className="donation-copy">
          <span className="eyebrow">A little goodwill goes a long way</span>
          <h2 id="support-title">
            Help care reach
            <br />
            one more family.
          </h2>
          <p>
            Your support can help patients who need a hand with the cost of
            care. Join us in making the GMC vision possible.
          </p>
          <div className="support-tags">
            <span>
              <Heart size={13} /> Support patients
            </span>
            <span>
              <Plus size={14} /> Support our vision
            </span>
          </div>
        </div>
        <div className="donation-action">
          <motion.a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gmc-button"
            whileHover={reduced ? {} : { y: -3 }}
            whileTap={reduced ? {} : { scale: 0.96 }}
          >
            I want to support patients <ArrowUpRight size={18} />
          </motion.a>
          <p>
            Start a conversation on WhatsApp.
            <br />
            Our team will explain how you can help.
          </p>
        </div>
      </div>
    </section>
  );
}
