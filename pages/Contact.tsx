import React, { useState } from 'react';
import { CONTACT_EMAILS, WEBSITE_URL } from '../data/contact';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Shield, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Medical Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const reviewRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { if (isSubmitted) reviewRef.current?.focus(); }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const text = `*Website Inquiry - Goodwill Medical Centre*
*From:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'N/A'}
*Subject:* ${subject}
*Message:* ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2347032585626?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">
          Get in Touch With Us
        </span>
        <h1 className="text-4xl md:text-6xl font-sans text-slate-900 leading-tight">
          Contact & Location Details
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Whether you need immediate medical attention, want to schedule an appointment, or are inquiring about our health insurance coverage, our desk is ready to assist you.
        </p>
      </header>

      {/* Main Grid: Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Emergency Card */}
          <div className="p-6 bg-rose-50 border border-rose-200 rounded-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-rose-950 text-base">24/7 Emergency Line</h3>
                <p className="text-rose-700 text-xs">Toll-free emergency dispatch</p>
              </div>
            </div>
            <p className="text-sm text-rose-900 font-medium">
              Call our toll-free line anytime:{' '}
              <a href="tel:08000057777" className="underline font-bold text-lg block mt-1 text-rose-700">
                0800 005 7777 (Free of charge)
              </a>
            </p>
          </div>

          {/* Hospital Address */}
          <div className="p-6 bg-white border border-purple-50 rounded-3xl shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Physical Address</h3>
                <p className="text-slate-500 text-xs">Umuchigbo, Enugu East LGA</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              No. 3, Chief Jude Agu Street, <br />
              Umuchigbo, Enugu East LGA, <br />
              Enugu State, Nigeria
            </p>
          </div>

          {/* Phone & WhatsApp */}
          <div className="p-6 bg-white border border-purple-50 rounded-3xl shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Phone & WhatsApp</h3>
                <p className="text-slate-500 text-xs">Reception & Consultations</p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              <p>
                Hospital Reception:{' '}
                <a href="tel:07032585626" className="font-bold text-slate-900 hover:text-purple-600">
                  0703 258 5626
                </a>
              </p>
              <p>
                Secondary Desk:{' '}
                <a href="tel:08024094488" className="font-bold text-slate-900 hover:text-purple-600">
                  0802 409 4488
                </a>
              </p>
              <p>
                WhatsApp Live:{' '}
                <a
                  href="https://wa.me/2347032585626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:underline"
                >
                  +234 703 258 5626
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 bg-white border border-purple-50 rounded-3xl shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Email Inquiries</h3>
                <p className="text-slate-500 text-xs">Administrative & Medical</p>
              </div>
            </div>
            <div className="text-sm text-slate-600 space-y-2">
              {CONTACT_EMAILS.map(email => <a key={email} href={`mailto:${email}`} className="block font-bold text-purple-700 hover:underline [overflow-wrap:anywhere]">{email}</a>)}
              <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="block pt-2 text-purple-700 hover:underline">Website: goodwillmedicalcentre.org</a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="p-6 bg-white border border-purple-50 rounded-3xl shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Operating Schedule</h3>
                <p className="text-slate-500 text-xs">Standard & Emergency</p>
              </div>
            </div>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex justify-between">
                <span>Accident & Emergency:</span>
                <strong className="text-purple-700">Open 24/7</strong>
              </li>
              <li className="flex justify-between">
                <span>Inpatient & Maternity Ward:</span>
                <strong className="text-purple-700">Open 24/7</strong>
              </li>
              <li className="flex justify-between">
                <span>Pharmacy:</span>
                <strong className="text-purple-700">Open 24/7</strong>
              </li>
              <li className="flex justify-between">
                <span>General Outpatient (GOPD):</span>
                <span>Mon–Sat: 8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Antenatal Clinic:</span>
                <span>Tues & Thurs: 8:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Eye Clinic & Surgeries:</span>
                <span>Wed & Sat: 9:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 sm:p-12 border border-purple-100 shadow-xl flex flex-col justify-between">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6"><p className="form-disclosure">This form prepares a WhatsApp message. You choose when to send it. Please leave out medical records and detailed health information. <a href="/privacy">How your information is used</a>.</p>
              <div>
                <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">
                  Send a Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mt-1">
                  How Can We Help You Today?
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Prepare a message, then send it to our desk through WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-field-1" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input id="contact-field-1"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Chinelo Okeke"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-field-2" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input id="contact-field-2"
                    type="tel"
                    autoComplete="tel"
                    pattern="[+]?[0-9][0-9 ]{5,18}[0-9]"
                    title="Use digits, spaces and an optional + at the start"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="e.g. 0803 123 4567"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-field-3" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input id="contact-field-3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. chinelo@example.com"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-field-4" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Subject *
                  </label>
                  <select id="contact-field-4"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:outline-none transition-all"
                  >
                    <option value="General Medical Inquiry">General Medical Inquiry</option>
                    <option value="Maternal & Antenatal Care">Maternal & Antenatal Care</option>
                    <option value="Eye Clinic & Cataract Surgery">Eye Clinic & Cataract Surgery</option>
                    <option value="NHIA & Health Insurance">NHIA & Health Insurance Enrolment</option>
                    <option value="Treatment for Two Donation / Partnership">
                      Treatment for Two Donation / Partnership
                    </option>
                    <option value="Laboratory & Ultrasound Diagnostics">
                      Laboratory & Ultrasound Diagnostics
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-field-5" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Message or Question *
                </label>
                <textarea id="contact-field-5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Please write your questions or comments here..."
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Review your message
              </button>
            </form>
          ) : (
            <div ref={reviewRef} tabIndex={-1} className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-sans font-bold text-slate-900">Your message is ready.</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, {name}. Your enquiry about "{subject}" has been prepared. Open WhatsApp, review it and press send to reach our desk. Nothing has been sent yet.
                </p>
              </div>

              <div className="space-y-3 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Continue to WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-semibold text-xs transition-colors"
                >
                  Edit your message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Directions & Avah River Bridge Route Guide */}
      <section className="bg-[#FFF9F2] border border-purple-200 rounded-[3rem] p-8 md:p-14 overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-purple-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <Navigation className="w-4 h-4" /> Patient Route Guide
            </span>
            <h2 className="text-3xl font-sans font-bold text-slate-900 mt-1">
              How to Reach Goodwill Medical Centre
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              GMC is strategically located in Umuchigbo, with convenient multi-modal access from both urban Enugu and neighboring towns.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Goodwill+Medical+Centre+Umuchigbo+Enugu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-xs flex items-center gap-2 transition-all shadow-md flex-shrink-0"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-purple-100 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-base">From Enugu Urban (Abakpa Nike)</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Drive or take public transit through Abakpa Nike towards Umuchigbo. Turn into Chief Jude Agu Street at the marked hospital landmark sign.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-purple-100 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-base">Via Avah River Bridge Route</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Residents of Ifo, Ugbo-Ezeji, Ugbo-Okonkwo, and Ugbo-Paul can use the pedestrian and tricycle (keke) iron bridge across Avah River, arriving at GMC in under 15–20 minutes.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-purple-100 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-base">Emergency Ambulances & Taxis</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Vehicles have direct road access right up to our covered emergency bay at the front of the hospital for stretcher and wheelchair transfer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
