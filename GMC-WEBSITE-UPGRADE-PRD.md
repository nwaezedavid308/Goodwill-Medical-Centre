# Goodwill Medical Centre — Website Upgrade PRD

Version: 1.0 · 19 October 2026 · Status: Draft for stakeholder review

## 1. Product summary

Upgrade the existing Goodwill Medical Centre (GMC) website into a clearer, more trustworthy patient access and community impact platform. Help visitors find appropriate care, understand costs and support options, request an appointment, and reach the hospital with minimal effort.

Retain the existing React application, purple and cream identity, authentic facility media, and community story. Prioritise reliable interactions and verified information before expanding the feature set.

## 2. Review basis and limits

This PRD is based on inspection of the local application source, routing, forms, styling, content, and public asset inventory. It is not a live-site visual audit, a clinical verification, or a measured accessibility/performance assessment. Responsive classes and accessibility attributes show implementation intent; they do not establish that every screen passes testing.

The repository contains React 19, TypeScript, Vite, React Router, Lucide icons, and PDF generation libraries. Styling combines inline global CSS, design tokens, utility classes, and the Tailwind browser CDN. The public directory contains 163 files totalling approximately 213 MB; that is an asset inventory, not the amount downloaded on initial page load.

## 3. What we already have

| Area | Existing implementation | Assessment |
| --- | --- | --- |
| Information architecture | Home, Services, Doctors, About, Gallery, Inception Report, Testimonials, FAQ, Blog, Contact | Broad coverage; organise around patient tasks before adding more pages. |
| Brand and visual language | Purple/cream palette, Playfair Display and Plus Jakarta Sans, rounded cards, shadows, soft glows | Recognisable foundation; proposed refinement is calmer surfaces and stronger hierarchy. Visual quality still needs browser review. |
| Navigation | Sticky header, emergency bar, desktop dropdowns, mobile drawer, floating contact widget | Essential actions are present, but repeated contact options may compete for attention. Validate mobile obstruction and menu usability. |
| Appointment flow | Department, clinician, date, time, contact details and payment scheme; generated reference; WhatsApp handoff | Request preparation only. No booking API, persisted reservation, or availability check is shown in this flow. |
| Contact | Phone, email, enquiry form, WhatsApp, map link, local route guidance | Useful local context; success messaging currently overstates delivery. |
| Services and clinicians | Searchable/filterable clinician directory, service cards, consultation actions | Useful discovery foundation; credentials, photographs, schedules and service claims require hospital approval. |
| Affordability | Insurance schemes, free/subsidised treatment information, Treatment for Two | Strong differentiator; eligibility, exclusions and current availability need explicit ownership. |
| Trust and community | Patient stories, impact figures, bridge story, partner references, inception report | Valuable material; keep reporting periods, evidence and consent records attached to published claims. |
| Media and editorial | Photo gallery/lightbox, facility videos, articles, downloadable essays, brochure generator | Rich assets already exist; optimise delivery and give articles shareable URLs. |
| Accessibility foundations | Focus-visible styles, reduced-motion CSS, image alt text, dialog roles, Escape handling in appointment modal | Useful start; focus management, semantics and full keyboard journeys remain to be verified. |

### Specific issues found in source

1. **Misleading appointment acknowledgement.** `AppointmentModal.tsx` changes local state and generates a random reference, then says the reservation was submitted and the records desk notified. WhatsApp delivery is a separate action; even opening WhatsApp does not establish that the user sent the message.
2. **Misleading enquiry acknowledgement.** `Contact.tsx` displays “Message Received!” and says the enquiry was recorded before any external submission occurs.
3. **Inconsistent booking data.** Clinician-page department strings differ from the appointment dropdown values. Clinician lists are duplicated, including a booking option absent from the directory. Use shared identifiers and one approved dataset.
4. **Incomplete skip-link coverage.** The skip link targets `main-content`, but that ID is on the homepage hero rather than the shared main element. Inner pages also introduce additional `main` elements.
5. **Incomplete appointment-dialog focus handling.** Escape handling and dialog labels exist; initial focus, trapped focus and return-to-trigger behaviour are not implemented in the inspected component.
6. **Incorrect external video address.** About contains `https://youtube/zgICvsWCNWU?...`; replace it with the verified intended video URL.
7. **Search and error-page limitations.** The entry HTML has shared metadata; articles open in modals; unmatched routes render Home. No dedicated 404 route is defined.
8. **Production configuration cleanup.** Tailwind runs from a browser CDN; the import map mixes React 18 and 19 references; Vite includes definitions for Gemini environment variables. Remove unused configuration and keep any future private service credentials server-side. No credential exposure was established by this review.

## 4. Goals and audiences

### Goals

- Make emergency contact and directions immediately discoverable.
- Help patients identify a service and understand the next step.
- Make appointment and enquiry states truthful and understandable.
- Present verified hospital, clinician, insurance and impact information.
- Improve mobile usability, loading performance and content maintenance.

### Primary audiences

| Audience | Main need | Desired outcome |
| --- | --- | --- |
| Patients and caregivers | Find care, availability and practical visiting information | Appropriate contact or appointment request |
| Urgent visitors | Reach emergency assistance quickly | Direct call without a form |
| Families seeking support | Understand insurance and subsidised treatment | Clear eligibility enquiry and next steps |
| Partners and donors | Understand GMC's work and evidence of impact | Partnership enquiry or report access |
| Hospital staff | Keep public information accurate | Controlled, maintainable updates |

## 5. Scope and priorities

### P0 — Correctness and launch blockers

| ID | Requirement | Acceptance criteria |
| --- | --- | --- |
| R01 | Honest appointment request flow | Before handoff, display “Request prepared — send via WhatsApp.” Explain that preferred times require staff confirmation. Do not claim receipt or confirmation based on local state or an outbound click. |
| R02 | Honest enquiry flow | Clearly distinguish preparing a message, opening WhatsApp and confirmed receipt. Provide phone/email alternatives when the handoff is unavailable. |
| R03 | Content verification | GMC approves phone numbers, map destination, staff identity/credentials/photos, clinic schedules, services, insurance participation, support eligibility and partner references. Unverified items are withheld or explicitly marked pending internally. |
| R04 | Privacy and minimal collection | Provide an approved privacy notice linked beside forms and in the footer. Explain the WhatsApp handoff before it opens. Keep optional fields optional; remove the symptom field from the initial request unless GMC establishes a reviewed need and appropriate handling. |
| R05 | Accessible primary journeys | One shared main landmark with a working skip target on every route. All menus/forms/dialogs work by keyboard; dialogs manage initial focus, containment, Escape and focus return. Errors identify the field and correction. |
| R06 | Consistent booking selection | Services, clinicians and bookable departments use shared IDs. Each service/clinician CTA prefills a valid option. Reopening a request follows a documented reset/preserve rule and never silently carries an unrelated selection. |

### P1 — Core experience upgrade

| ID | Requirement | Acceptance criteria |
| --- | --- | --- |
| R07 | Patient-first navigation | Primary navigation offers Services, Our Team, Patient Information, About GMC and Contact, with a visible appointment action. Group editorial/report/gallery content below these. Emergency contact remains visible without blocking content. |
| R08 | Focused homepage | Present care proposition and location, request/call actions, key services, insurance/support information, verified trust evidence, directions, then impact/editorial previews. Keep the full institutional story on supporting pages. |
| R09 | Useful service information | Each service detail view explains what is offered, who to contact, approved clinic hours, preparation, payment/insurance guidance and a request action. Do not imply unverified live availability. |
| R10 | Approved clinician profiles | Show role, specialty, approved image and availability guidance. Clarify that published clinic schedules remain subject to confirmation. |
| R11 | Practical patient information | Provide visiting/clinic hours, what to bring, payment guidance, insurance/support enquiries, accessibility information where verified, contact options and route directions. Avoid promising eligibility before assessment. |
| R12 | Coherent visual system | Consolidate colour, typography, spacing, radius and button tokens. Reduce competing shadows/glows and repeated badges. Reserve strong emphasis for primary actions and urgent information. |
| R13 | Mobile resilience | At 360, 390, 768 and 1440 CSS-pixel widths, primary journeys have no unintended horizontal scrolling, clipped controls or floating-widget overlap. Verify at 200% zoom and with reduced motion enabled. |
| R14 | Search visibility and routing | Give public pages unique titles/descriptions and canonical URLs once the production domain is confirmed. Add shareable article URLs, sitemap, robots configuration, useful 404 page and verified structured data. Direct route refresh works on the chosen host. |
| R15 | Efficient asset delivery | Use responsive optimised images, lazy-load below-fold assets and defer video loading until requested. Reserve media space. Compile production styles during the build. Audit the actual initial network transfer rather than treating the entire asset folder as a page download. |
| R16 | Maintainable content | Centralise contact information, services, clinicians and schedules; assign an owner and review date to each dataset. Document update and approval steps. |

### P2 — Optional expansion after the core release

- Persisted appointment requests with server-generated references, staff access controls, status tracking and failure handling.
- Staff notifications and a documented response process once operational ownership is agreed.
- A CMS if staff need frequent independent publishing; assess this need before selecting a platform.
- Expanded partnership/donation journey once GMC defines an approved operating process.
- Calculator refinement or expansion only after a named clinical reviewer approves content, limitations and maintenance.

### Out of scope for the first upgrade

Electronic medical records, patient accounts, clinical diagnosis, telemedicine, prescription management, online payments and guaranteed live appointment scheduling. Existing wellness tools do not become diagnostic products through this upgrade.

## 6. Key user journeys

**Find care:** Home → Services → service details → request appointment → review preferences → send via WhatsApp → staff confirms separately.

**Urgent contact:** Any page → clearly labelled emergency phone action → device call interface. No form required.

**Understand support:** Patient Information → insurance/subsidy guidance → eligibility and required-document information → enquiry to GMC.

**Visit the hospital:** Contact → verified address, landmarks and route guide → map directions or reception call.

**Explore impact:** About/Impact → dated evidence and report → partnership enquiry.

## 7. Technical and quality requirements

- Retain React/TypeScript/Vite unless implementation discovery reveals a concrete reason to change. Evaluate prerendering for public content where useful.
- Build Tailwind locally; remove obsolete import-map/configuration entries after confirming runtime requirements.
- Load large route-specific features, videos and PDF tooling on demand where practical.
- Establish automated type checking and production-build checks. Add targeted tests for request state, CTA prefilling and route handling.
- If a backend is introduced, validate requests server-side, protect staff access, apply abuse controls and document retention/deletion. Backend scope requires a separate implementation design.
- Proposed accessibility target: WCAG 2.2 AA, assessed through automated checks plus manual keyboard and screen-reader testing. This is a delivery target, not a claim about the current site.
- Proposed performance targets: LCP ≤2.5 seconds, INP ≤200 milliseconds and CLS ≤0.1 at the 75th percentile when sufficient field data exists. Before launch, use a repeatable mobile lab profile and document results; lab results alone do not establish field compliance.
- No console errors or broken essential assets during acceptance testing. Test current Chrome, Safari, Firefox and Edge, including iOS Safari and Android Chrome.

## 8. Measurement

Establish a baseline before setting conversion improvement percentages. Track service discovery, appointment form starts, validation failures, WhatsApp handoff clicks, emergency/reception clicks, direction clicks and report downloads.

An outbound WhatsApp click is a handoff event, not proof of delivery or a confirmed appointment. Measure confirmed bookings only when GMC can reconcile requests with staff records or an implemented backend. Exclude names, phone numbers, symptoms and message contents from analytics events.

## 9. Delivery plan

| Stage | Deliverables | Exit condition |
| --- | --- | --- |
| 1. Validate | Approved inventory, content owners, verified claims, agreed request model | GMC signs off operational facts and first-release scope |
| 2. Design | Sitemap, mobile/desktop homepage and key journey designs, component rules | Stakeholders approve hierarchy and request wording |
| 3. Implement | P0 fixes, P1 templates, shared data, optimised assets and metadata | Requirements demonstrated in a review environment |
| 4. Verify | Journey testing, accessibility review, device checks, performance report and content approval | Launch checklist complete with no unresolved P0 issue |
| 5. Release and learn | Deployment verification, analytics baseline, update guide | Owner accepts handover and review process |

Dates and effort estimates should follow design approval and the decision on whether first-release requests remain WhatsApp-based.

## 10. Decisions and dependencies

1. GMC must confirm whether the first release uses an honest WhatsApp request flow or includes a staffed, persisted request system. This draft assumes WhatsApp for the first release.
2. GMC must identify the authoritative staff/service dataset and approve image-to-person matches. Source-code entries alone do not verify identity.
3. Confirm the production domain, hosting configuration and responsibility for ongoing updates.
4. Assign owners for privacy text, programme eligibility, clinical content, testimonial consent and impact claims.
5. Confirm whether publishing frequency warrants a CMS and whether GMC has capacity to operate one.

## 11. Release acceptance checklist

- All P0 criteria passed, with hospital-approved content and request wording.
- Patient can find a service, prepare a request, contact reception and open directions on mobile.
- No screen claims a message was received or a slot booked without evidence.
- Every navigation link, media asset and published download checked; verified replacement for the incorrect video URL.
- Keyboard/dialog/skip-link journeys passed across primary routes.
- Mobile layout and agreed performance measurements documented.
- Metadata, direct-route loading and 404 behaviour verified on the deployment target.
- Content ownership, analytics definitions, deployment rollback and maintenance guide handed over.

## 12. Source references

Reviewed local sources include `App.tsx`, `index.html`, `package.json`, `vite.config.ts`, `README.md`, `pages/Home.tsx`, `pages/Doctors.tsx`, `pages/Contact.tsx`, `pages/About.tsx`, `components/Navbar.tsx`, `components/Hero.tsx`, `components/AppointmentModal.tsx` and supporting page/component searches. This document proposes an upgrade; it does not change website behaviour.

## 13. Implementation update — 19 October 2026

The eight code-specific findings in section 3 have been addressed in the working application: honest request/enquiry states; shared care data and valid CTA prefilling; one main landmark and working skip target; reusable focus-managed dialogs; corrected YouTube URL format; route-specific metadata, article URLs and a missing-page screen; compiled Tailwind, consistent package-based React imports and removal of obsolete client credential definitions.

The complete top information bar is removed. The homepage, navigation, footer, service previews, contact widget and appointment experience now use the user's reference direction: milk backgrounds, purple and sky-blue/lavender cards, strong typography, real hospital photographs and restrained transitions. Scroll reveals respect reduced-motion preferences.

The first-release request model remains WhatsApp-based. No scheduling backend, message receipt tracking or live availability has been added. Deployment requires the actual production origin for canonical URLs and the sitemap. Existing clinical/institutional facts still require GMC approval; this implementation does not mark the wider PRD or launch sign-off complete.

Following the user's design review, the hero now reads “Quality care for everyone.” The former doctors page showcases 14 clinical and support teams, including all seven requested departments and additional teams based on services already described in the project. Individual clinician names and clinician selection have been removed. Existing staff and department-space photographs are clearly captioned; dedicated support-team portraits can replace facility images when supplied.
