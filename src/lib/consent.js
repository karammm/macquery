/**
 * Consent gate for analytics.
 *
 * Analytics is opt-in: gtag.js is never injected until the visitor explicitly
 * accepts. Nothing is written to storage and no request reaches Google before
 * that point, which is what ePrivacy Art. 5(3) requires and what Google
 * Consent Mode alone does not give you (it still loads the tag and sends
 * cookieless pings).
 */

const GA_MEASUREMENT_ID = 'G-QZNQJW3Z3J'
const STORAGE_KEY = 'macquery-cookie-consent'
const OPEN_SETTINGS_EVENT = 'macquery:open-cookie-settings'

/** Consent record version. Bump to re-ask everyone after a policy change. */
const CONSENT_VERSION = 1

let analyticsLoaded = false

/** @returns {{analytics: boolean, version: number, at: string} | null} */
export function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed?.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function writeConsent(analytics) {
  const record = {
    analytics: Boolean(analytics),
    version: CONSENT_VERSION,
    at: new Date().toISOString(),
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Storage blocked — treat as no consent rather than failing loudly.
  }
  return record
}

/**
 * Injects gtag.js. Safe to call repeatedly; only the first call does work.
 */
export function enableAnalytics() {
  if (analyticsLoaded || typeof document === 'undefined') return
  analyticsLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
}

/**
 * Clears the cookies gtag.js already set. Called when consent is withdrawn so
 * the visitor is not left carrying identifiers they just refused.
 */
export function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const host = window.location.hostname
  const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]

  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0]?.trim()
    if (!name || !/^(_ga|_gid|_gat)/.test(name)) return
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`
    })
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  })
}

/** Applies a stored decision on page load. */
export function applyStoredConsent() {
  const consent = readConsent()
  if (consent?.analytics) enableAnalytics()
  return consent
}

/** Lets any component (e.g. the footer link) reopen the banner. */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))
}

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_SETTINGS_EVENT, handler)
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler)
}
