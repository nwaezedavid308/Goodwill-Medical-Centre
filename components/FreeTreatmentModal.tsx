import { useDialog } from '../hooks/useDialog';
import React, { useEffect } from 'react';
import { X, ShieldCheck, Heart, CheckCircle2, Phone, MessageSquare, ExternalLink, Calendar, HelpCircle, Award } from 'lucide-react';

interface FreeTreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment?: () => void;
}

const SCHEMES = [
  {
    title: '100% Free Emergency Caesarean Sections (CEmONC)',
    badge: 'Federal & NHIA Partnership',
    description:
      'Eligible pregnant women facing critical labour complications receive free life-saving Caesarean sections and postpartum care. In its first five months, 91 free C-sections were delivered, saving families over ₦40.9 million.',
    coverage: ['Surgeon & anesthetist fees', 'Sterile surgical consumables & theater fees', 'Post-operative inpatient stay & medications'],
  },
  {
    title: 'National Health Insurance Authority (NHIA / GIFSHIP)',
    badge: 'Formal & Informal Sector',
    description:
      'GMC is an accredited secondary healthcare provider under the NHIA. We actively enroll community groups, artisans, market women, and informal-sector workers through the Group, Individual and Family Social Health Insurance Programme (GIFSHIP).',
    coverage: ['Doctor consultations', 'Laboratory tests & ultrasound imaging', 'Generic prescription medications at subsidized copay'],
  },
  {
    title: 'Enugu State Universal Health Coverage Agency (ESCHIS)',
    badge: 'State Universal Coverage',
    description:
      'In partnership with the Enugu State Government, GMC enrolls civil servants, teachers, local residents, and elderly citizens into the state social health insurance scheme for affordable primary and secondary care.',
    coverage: ['General Outpatient Consultations', 'Chronic disease management (Hypertension, Diabetes)', 'Emergency medical stabilization'],
  },
  {
    title: 'Goodwill Cross-Subsidy & Indigent Waiver',
    badge: 'Treatment for Two Initiative',
    description:
      'Founded with support from the TY Danjuma Foundation, GMC dedicates at least 30% of its annual operating surplus directly into an indigent healthcare pool. Revenue from paying patients and donor funds covers the treatment of the impoverished.',
    coverage: ['Emergency medicines for indigent patients in shock', 'Subsidized cataract eye surgeries (30–60% below city hospital rates)', 'Free maternal delivery kits during ANC clinics'],
  },
];

const FreeTreatmentModal: React.FC<FreeTreatmentModalProps> = ({ isOpen, onClose, onOpenAppointment }) => {
  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-treatment-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-purple-300 block">
                Healthcare Access & Protection
              </span>
              <h2 id="free-treatment-modal-title" className="text-xl sm:text-2xl font-bold font-sans leading-tight">
                Free Treatment & Insurance Information
              </h2>
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
          {/* Mission Callout */}
          <div className="p-4 bg-[#FFF9F2] border border-purple-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-purple-950">
            <Heart className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 fill-current" />
            <p className="leading-relaxed">
              At <strong>Goodwill Medical Centre (GMC)</strong>, financial barriers never stand between a patient and life-saving care. Through our cross-subsidy model, TY Danjuma Foundation grants, and government insurance partnerships, we ensure vulnerable families receive free or heavily subsidized treatment.
            </p>
          </div>

          {/* Insurance & Free Care Schemes */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Available Coverage & Subsidized Schemes
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {SCHEMES.map((scheme, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 shadow-sm transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-sans font-bold text-base text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                      {scheme.title}
                    </h4>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-[11px] font-bold self-start sm:self-auto">
                      {scheme.badge}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {scheme.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Included Benefits:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {scheme.coverage.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Access / Eligibility */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
            <h4 className="font-sans font-bold text-base text-purple-300 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              How to Access Free Care or Register Your Insurance at GMC
            </h4>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed font-light">
              <li>
                <strong>Emergency Cases:</strong> Proceed immediately to our 24/7 Accident & Emergency or Labour Ward. Medical triage is initiated instantly without preliminary payment demands.
              </li>
              <li>
                <strong>NHIA / ESCHIS Cardholders:</strong> Present your valid NHIA / ESCHIS enrolment card or GIFSHIP number at our hospital records desk upon arrival.
              </li>
              <li>
                <strong>Indigent Waiver / Cross-Subsidy:</strong> If you or a family member cannot afford treatment fees, ask for the Medical Social Work desk or call our toll-free line at <strong>0800 005 7777</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Phone className="w-4 h-4 text-purple-600" />
            <span>Insurance Desk: <strong>0703 258 5626</strong></span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/2347032585626?text=Hello%20Goodwill%20Medical%20Centre%2C%20I%20would%20like%20to%20inquire%20about%20Free%20Treatment%20and%20Health%20Insurance%20enrolment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>

            <button
              onClick={() => {
                onClose();
                if (onOpenAppointment) onOpenAppointment();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTreatmentModal;
