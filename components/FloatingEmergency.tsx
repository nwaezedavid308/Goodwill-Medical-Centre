import { useRef, useState } from "react";
import { Phone, X, ArrowUpRight } from "lucide-react";
export default function FloatingEmergency({
  onOpenAppointment,
}: {
  onOpenAppointment?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <aside
      className="quick-contact"
      aria-label="Quick contact"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      {open && (
        <div id="quick-contact-panel" className="quick-contact-panel">
          <span>How can we help?</span>
          <a href="tel:08000057777">
            Emergency: 0800 005 7777 <Phone size={16} />
          </a>
          <a href="tel:07032585626">
            Reception: 0703 258 5626 <Phone size={16} />
          </a>
          <a
            href="https://wa.me/2347032585626"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <ArrowUpRight size={16} />
          </a>
          <button
            onClick={() => {
              setOpen(false);
              onOpenAppointment?.();
            }}
          >
            Request an appointment <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      <button
        ref={trigger}
        className="quick-contact-trigger"
        aria-expanded={open}
        aria-controls="quick-contact-panel"
        aria-label={
          open ? "Close quick contact" : "Open emergency and contact options"
        }
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={21} /> : <Phone size={19} />}
        <span>{open ? "Close" : "Need care?"}</span>
      </button>
    </aside>
  );
}
