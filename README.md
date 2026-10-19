# Goodwill Medical Centre website

React, TypeScript and Vite website for Goodwill Medical Centre in Umuchigbo, Enugu East, Nigeria.

## Run locally

Use Node.js 22 or later.

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://127.0.0.1:3000.

## Validate and build

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

The tests verify service booking mappings, team coverage, referenced care/editorial assets, and the generated per-page metadata. Run the build before the tests.

Tailwind is compiled locally through PostCSS. Browser import maps and the Tailwind runtime CDN are no longer used. Route modules, including the PDF-heavy About page, load on demand.

## Requests and enquiries

Appointment and contact forms prepare a WhatsApp message locally. They do not create a hospital record, notify the desk, check live availability, or reserve a time slot. The visitor reviews the message and sends it in WhatsApp; staff confirm separately. The interface reflects those distinctions. No message is automatically sent.

Each appointment modal starts a new request when opened. Service buttons prefill the matching options using the shared data in `data/care.ts`. Individual clinician names and the preferred-clinician selector have been removed. There is no randomly generated booking confirmation. The initial appointment request no longer asks for symptoms, clinical notes or an email address.

## Design and accessibility

Milk, purple, sky blue and lavender surfaces, outlined cards, strong sans-serif display type, real facility photography and restrained motion. The former top announcement bar has been removed. See `docs/design-direction.md`.

The shared main landmark supports the skip link on every route. Dialogs isolate background content, trap keyboard focus, close with Escape and restore the triggering control where it remains on the page. The gallery supports left/right arrow keys. Reduced-motion preferences disable entrance, reveal and hover transitions.

## Content and assets

- `data/care.ts`: service information and booking mappings.
- `data/teams.ts`: the department showcase, photographs and captions.
- `data/posts.ts`: journal articles and download references.
- `data/metadata.ts`: route titles and descriptions.
- `public/images/optimised`: responsive WebP copies used on the homepage. Original photography remains available.
- `scripts/optimise-images.py`: regenerate those copies with Pillow installed.

Existing photographs, schedules, clinical claims, programme terms and impact data require GMC's factual approval before publication. Team cards use existing staff or department-space photos with matching captions; dedicated portraits for every support team were not supplied. The privacy page describes the implemented website flow and does not invent a hospital retention policy.

## Deployment

`npm.cmd run build` produces `dist`, with unique HTML metadata for all public routes and each journal article. Articles are shareable at `/blog/1`, `/blog/2`, etc. These HTML files carry route metadata; the application content renders in React.

Set `SITE_URL` to the actual HTTPS production origin in the hosting provider's build environment to generate canonical URLs, absolute sharing images and `sitemap.xml`. It is deliberately not set to an invented domain. The build always generates `robots.txt`.

Deploy the entire `dist` directory, including images, videos, documents and generated route directories. `public/_redirects` supports Netlify fallback routing; `vercel.json` checks generated/static files before the SPA fallback. Other hosts must serve existing files and route remaining page requests to `index.html`. The application displays a dedicated missing-page screen for unknown routes; a true HTTP 404 status depends on the hosting platform.

No private service credentials belong in client environment definitions. The obsolete Gemini key definitions have been removed from Vite configuration.

## Project credits

GMC is supported by the TY Danjuma Foundation and PACIEH. Website work: Niuxverse Web Agency.
