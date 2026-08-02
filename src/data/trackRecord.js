import { projects } from './projects'
import { testimonials } from './testimonials'

/**
 * Every number the site shows about itself, in one place, derived from real
 * data wherever it can be.
 *
 * The site previously advertised "8+ Years Experience" while the timeline on
 * the same page said MacQuery was founded in 2024, and "99% Client
 * Satisfaction" with nothing behind it. Enterprise buyers — especially the
 * compliance-minded ones — check claims like these, and one contradiction
 * discredits everything around it.
 *
 * Rules for anything added here:
 *   1. It must be countable from the codebase, or traceable to a named client.
 *   2. No satisfaction percentages or similar unless there is a real survey.
 *   3. If it cannot be evidenced, it does not go on the site.
 */

export const FOUNDED_YEAR = 2024

export const projectsDelivered = projects.length
export const namedClientReferences = testimonials.length

/** Sectors represented in the portfolio, counted rather than asserted. */
export const sectorsServed = new Set(
  projects.flatMap((p) => p.tags ?? []),
).size

/**
 * Headline outcomes, each attributable to a specific case study so a
 * prospect can follow them back to the work.
 */
export const peakConcurrentUsers = '100K+' // Siila.org
export const largestErpAccountBase = '76K+' // Magda Gallery

export const trackRecord = [
  { value: String(projectsDelivered), label: 'Projects delivered' },
  { value: String(namedClientReferences), label: 'Named client references' },
  { value: peakConcurrentUsers, label: 'Peak concurrent users served' },
  { value: largestErpAccountBase, label: 'Accounts on one ERP' },
]
