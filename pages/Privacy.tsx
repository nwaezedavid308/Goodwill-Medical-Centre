import { Link } from "react-router-dom";
export default function Privacy() {
  return (
    <article className="page-shell privacy-copy">
      <span className="eyebrow">Your information</span>
      <h1>
        Before you
        <br />
        get in touch.
      </h1>
      <p>Here’s how requests and enquiries work on this website.</p>
      <h2>Appointment requests and enquiries</h2>
      <p>
        The forms prepare a message in your browser. They do not create a
        hospital record or reserve an appointment. When you choose to continue,
        WhatsApp opens with your message. Review it and press send in WhatsApp
        to contact GMC. The hospital must confirm your appointment separately.
      </p>
      <h2>What you choose to share</h2>
      <p>
        Your message may include your name, phone number, preferred service,
        preferred visit time and any optional details you enter. Share only what
        the desk needs to arrange your visit. Please do not include medical
        records, identification numbers or detailed medical history.
      </p>
      <h2>WhatsApp and other external services</h2>
      <p>
        Messages you send through WhatsApp are handled by WhatsApp and the
        hospital’s receiving account. External map links, videos and other
        websites follow their own privacy practices. This site loads its fonts
        from Google Fonts.
      </p>
      <h2>Questions about hospital records</h2>
      <p>
        For questions about how GMC handles a message after receiving it, or to
        request a correction or deletion,{" "}
        <Link to="/contact">contact the hospital desk</Link>. This notice
        describes the website’s current request flow; it does not set a hospital
        retention policy.
      </p>
      <p className="text-sm">Last updated: 19 October 2026.</p>
    </article>
  );
}
