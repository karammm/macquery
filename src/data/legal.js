/**
 * Single source of truth for the legal pages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BEFORE MERGING: every value wrapped in TBD() below is a placeholder. They
 * render literally as "[TO BE CONFIRMED: ...]" on the live pages, on purpose —
 * a visibly unfinished policy is recoverable, an invented one is not. Replace
 * each with a verified fact, ideally after a lawyer has read the result.
 *
 * The unresolved items are, in rough order of risk:
 *
 *  1. artifact27Representative — SIILARD LABS LLP is established in India with
 *     no EU adequacy decision. If EU personal data is processed (and the
 *     contact form does exactly that), GDPR Art. 27 generally requires a
 *     designated representative established in the EU, named here.
 *  2. firestoreRegion — where contact submissions physically live. If the
 *     Firestore instance is in a US region, that is a third-country transfer
 *     that has to be disclosed and covered by SCCs.
 *  3. contactFormRetention — how long submissions are kept. GDPR Art. 5(1)(e)
 *     requires a defined limit, not "indefinitely".
 *  4. llpin + designatedPartners — required for a German-facing Impressum
 *     under §5 DDG.
 *  5. privacyContactEmail — a dedicated address is expected; info@ is a
 *     shared sales inbox.
 *  6. governingLaw / jurisdiction — for the Terms.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const TBD = (label) => `[TO BE CONFIRMED: ${label}]`

export const LAST_UPDATED = '2 August 2026'

export const company = {
  brand: 'MacQuery',
  legalName: 'SIILARD LABS LLP',
  site: 'https://www.macquery.in',
  email: 'info@macquery.in',
  phone: '+91 93802 16302',
  llpin: TBD('LLP Identification Number (LLPIN)'),
  designatedPartners: TBD('names of the designated partners'),
  registeredOffice: {
    lines: ['Tag Tower 28, Sector 18', 'Gurugram, Haryana 122015', 'India'],
  },
  secondOffice: {
    label: 'Sales centre',
    lines: ['IT Park, Sahastradhara Road', 'Dehradun, Uttarakhand', 'India'],
  },
}

export const privacy = {
  contactEmail: TBD('dedicated privacy contact address'),
  artifact27Representative: TBD('EU representative under GDPR Art. 27 — name and EU address'),
  contactFormRetention: TBD('retention period for contact form submissions'),
  firestoreRegion: TBD('Google Cloud region hosting the Firestore database'),
}

export const terms = {
  governingLaw: TBD('governing law'),
  jurisdiction: TBD('courts with exclusive jurisdiction'),
}

/**
 * Everyone who receives visitor data, and why. Keep this in step with reality —
 * an out-of-date sub-processor list is worse than none, because clients rely
 * on it during their own vendor assessments.
 */
export const subProcessors = [
  {
    name: 'GitHub, Inc. (GitHub Pages)',
    role: 'Hosting and delivery of this website',
    location: 'United States',
    data: 'IP address and request metadata in standard server logs',
  },
  {
    name: 'Google Ireland Ltd. / Google LLC (Firebase Firestore)',
    role: 'Stores contact form submissions',
    location: `${TBD('Firestore region')} — see note below`,
    data: 'Name, email address, phone number, project type, message',
  },
  {
    name: 'Google Ireland Ltd. / Google LLC (Google Analytics 4)',
    role: 'Aggregate website usage statistics — only if you accept analytics',
    location: 'United States',
    data: 'IP address, device and browser data, pages viewed',
  },
  {
    name: 'Meta Platforms Ireland Ltd. (WhatsApp)',
    role: 'Only if you choose to start a WhatsApp chat from the floating button',
    location: 'Ireland / United States',
    data: 'Your phone number and whatever you send us',
  },
]
