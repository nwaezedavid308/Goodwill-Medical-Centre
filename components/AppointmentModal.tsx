import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowUpRight, Calendar, ArrowLeft, Phone } from "lucide-react";
import { SERVICES_DATA } from "../data/care";
import { useDialog } from "../hooks/useDialog";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}
const insuranceOptions = [
  "Please help me choose",
  "NHIA / GIFSHIP",
  "ESCHIS",
  "Private / HMO cover",
  "Self-pay",
  "Subsidised care enquiry",
];
const times = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
];
export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedService = "",
}: Props) {
  const validService =
    SERVICES_DATA[Number(preselectedService)] && preselectedService !== ""
      ? preselectedService
      : "0";
  const [department, setDepartment] = useState(validService);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(times[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [insurance, setInsurance] = useState(insuranceOptions[0]);
  const [review, setReview] = useState(false);
  const [handoff, setHandoff] = useState(false);
  const reviewRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useDialog(isOpen, onClose);
  React.useEffect(() => {
    if (review) reviewRef.current?.focus();
    else if (isOpen) formRef.current?.focus();
  }, [review, isOpen]);
  if (!isOpen) return null;
  const service = SERVICES_DATA[Number(department)];
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const message = `Hello GMC, I would like to request an appointment.\nName: ${name.trim()}\nPhone: ${phone.trim()}\nService: ${service.title}\nPreferred date: ${date}\nPreferred time: ${timeSlot} (Nigeria time)\nPayment/support: ${insurance}\nPlease confirm availability. I understand this is a request, not a confirmed booking.`;
  return (
    <div
      className="gmc-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        aria-describedby="appointment-description"
        className="gmc-modal"
      >
        <header className="gmc-modal-header">
          <span>
            <Calendar size={20} /> Plan your visit
          </span>
          <button
            onClick={onClose}
            aria-label="Close appointment request"
            className="icon-button"
          >
            <X />
          </button>
        </header>
        <div className="gmc-modal-body">
          <h2 id="appointment-title" ref={formRef} tabIndex={-1}>
            A little planning.
            <br />A simpler visit.
          </h2>
          <p id="appointment-description">
            Choose your preferences. Our desk will confirm the clinician, date
            and time after you send your request.
          </p>
          {!review ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setReview(true);
              }}
              className="appointment-form"
            >
              <div className="field">
                <label htmlFor="appointment-service">
                  What care do you need?
                </label>
                <select
                  id="appointment-service"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  {SERVICES_DATA.map((item, id) => (
                    <option key={id} value={String(id)}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field-pair">
                <div className="field">
                  <label htmlFor="appointment-date">Preferred date</label>
                  <input
                    id="appointment-date"
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="appointment-time">
                    Preferred time · Nigeria
                  </label>
                  <select
                    id="appointment-time"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    {times.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field-pair">
                <div className="field">
                  <label htmlFor="appointment-name">Your name</label>
                  <input
                    id="appointment-name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    pattern=".*\S.*"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="appointment-phone">Phone number</label>
                  <input
                    id="appointment-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    pattern="[+]?[0-9][0-9 ]{5,18}[0-9]"
                    title="Enter a phone number using digits, spaces and an optional + at the start"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="appointment-cover">Payment or support</label>
                <select
                  id="appointment-cover"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                >
                  {insuranceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <p className="form-disclosure">
                This form prepares a WhatsApp message. Nothing is sent until you
                send it in WhatsApp. Please keep medical records and detailed
                health information out of your request.{" "}
                <Link to="/privacy" onClick={onClose}>
                  How your information is used
                </Link>
                .
              </p>
              <button className="gmc-button" type="submit">
                Review your request <ArrowUpRight size={18} />
              </button>
            </form>
          ) : (
            <section className="request-review">
              <h3 ref={reviewRef} tabIndex={-1}>
                Your request is ready.
              </h3>
              <p>
                Nothing has been sent yet. Check these details, then open
                WhatsApp and press send.
              </p>
              <dl>
                {[
                  ["Name", name],
                  ["Phone", phone],
                  ["Service", service.title],
                  ["Preferred visit", `${date} · ${timeSlot}`],
                  ["Payment/support", insurance],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                className="gmc-button"
                href={`https://wa.me/2347032585626?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHandoff(true)}
              >
                Continue to WhatsApp <ArrowUpRight size={18} />
              </a>
              {handoff && (
                <p role="status" className="form-disclosure">
                  If WhatsApp opened, review your message there and press send.
                  We cannot check whether it was sent. If it didn’t open, call{" "}
                  <a href="tel:07032585626">0703 258 5626</a>.
                </p>
              )}
              <button onClick={() => setReview(false)} className="text-button">
                <ArrowLeft size={16} /> Edit details
              </button>
            </section>
          )}
          <p className="emergency-note">
            <Phone size={16} /> Need urgent help?{" "}
            <a href="tel:08000057777">Call 0800 005 7777</a>
          </p>
        </div>
      </div>
    </div>
  );
}
