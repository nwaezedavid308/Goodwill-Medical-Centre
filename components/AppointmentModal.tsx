import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Shield, CheckCircle2, MessageSquare, ChevronRight, Stethoscope } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

const DEPARTMENTS = [
  'General Outpatient Care (GOPD)',
  'Maternal, Antenatal & Delivery (CEmONC)',
  'Eye Health & Cataract Surgery',
  'Paediatric & Child Care',
  'Inpatient & General Surgery',
  'Diagnostic Laboratory & Ultrasound Scan',
  'Accident & Emergency (24/7)',
  'Ear, Nose & Throat (ENT)',
  'Pharmacy Consultation',
];

const DOCTORS = [
  'Any Available Specialist / Medical Officer',
  'Dr. Chidubem Okafor (Chief Medical Officer & Consultant Surgeon)',
  'Dr. Nneka Umeh (Consultant Obstetrician & Gynecologist)',
  'Dr. Emeka Nwankwo (Consultant Ophthalmologist / Eye Surgeon)',
  'Dr. Ifeoma Eze (Senior Paediatric Specialist)',
  'Dr. Kalu Okoro (Internal Medicine Specialist)',
];

const INSURANCE_OPTIONS = [
  'National Health Insurance Authority (NHIA / GIFSHIP)',
  'Enugu State UHC Agency (ESCHIS)',
  'Private / HMO Corporate Cover',
  'Private Self-Pay / Subsidised Cash',
  'Treatment for Two (Indigent Assistance Subsidy)',
];

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = '',
}) => {
  const [department, setDepartment] = useState(preselectedService || DEPARTMENTS[0]);
  const [doctor, setDoctor] = useState(preselectedDoctor || DOCTORS[0]);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - 11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [insurance, setInsurance] = useState(INSURANCE_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  React.useEffect(() => {
    if (preselectedService) setDepartment(preselectedService);
    if (preselectedDoctor) setDoctor(preselectedDoctor);
  }, [preselectedService, preselectedDoctor]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'GMC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*New Appointment Request - Goodwill Medical Centre*
*Booking Ref:* ${bookingRef}
*Patient Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'N/A'}
*Department:* ${department}
*Doctor:* ${doctor}
*Preferred Date:* ${date}
*Time Slot:* ${timeSlot}
*Payment/Scheme:* ${insurance}
*Notes/Symptoms:* ${notes || 'None provided'}

Please confirm availability. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2347032585626?text=${encoded}`, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setDate('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Calendar className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h2 id="appointment-modal-title" className="text-xl font-bold font-serif">
                Schedule a Medical Visit
              </h2>
              <p className="text-purple-200 text-xs">Goodwill Medical Centre · Umuchigbo, Enugu East</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Emergency Banner Note */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
                <Shield className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  For life-threatening emergencies, please proceed directly to our <strong>24/7 Accident & Emergency Unit</strong> or call our emergency line at{' '}
                  <a href="tel:08000057777" className="underline font-bold text-amber-800">0800 005 7777</a> (Toll-free).
                </p>
              </div>

              {/* Service Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Clinical Department *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Doctor / Consultant
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                  >
                    {DOCTORS.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                  >
                    <option value="08:00 AM - 10:00 AM">Morning (08:00 AM - 10:00 AM)</option>
                    <option value="10:00 AM - 12:00 PM">Late Morning (10:00 AM - 12:00 PM)</option>
                    <option value="12:00 PM - 02:00 PM">Afternoon (12:00 PM - 02:00 PM)</option>
                    <option value="02:00 PM - 04:00 PM">Late Afternoon (02:00 PM - 04:00 PM)</option>
                    <option value="04:00 PM - 06:00 PM">Evening (04:00 PM - 06:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mary N. Chukwu"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0802 123 4567"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Payment / Insurance Scheme */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patient@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Health Coverage / Payment *
                  </label>
                  <select
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                  >
                    {INSURANCE_OPTIONS.map((ins) => (
                      <option key={ins} value={ins}>
                        {ins}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Note / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Reason / Symptoms (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Tell our clinical team any details that may help prepare for your visit..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-purple-600 text-white rounded-2xl font-bold text-sm hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/25 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4" />
                  Confirm & Reserve Appointment
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 bg-slate-100 text-slate-700 rounded-2xl font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
                  Appointment Requested
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Thank You, {name}!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your appointment reservation has been submitted. Our records desk is notified.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#FFF9F2] border border-purple-100 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-purple-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Booking Reference</span>
                  <span className="font-mono font-bold text-purple-700 text-base">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Department:</span>
                  <span className="font-medium text-slate-800 text-right">{department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-medium text-slate-800 text-right">{date} ({timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Coverage:</span>
                  <span className="font-medium text-slate-800 text-right">{insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-medium text-slate-800">{phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Instant Confirmation to GMC WhatsApp
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-semibold text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
