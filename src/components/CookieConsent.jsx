import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Cookie, ChevronDown } from 'lucide-react'
import {
  applyStoredConsent,
  clearAnalyticsCookies,
  enableAnalytics,
  onOpenCookieSettings,
  readConsent,
  writeConsent,
} from '../lib/consent'

const cookieDetails = [
  { name: '_ga', purpose: 'Distinguishes visitors for aggregate traffic statistics.', retention: '2 years' },
  { name: '_ga_<container-id>', purpose: 'Persists session state for Google Analytics 4.', retention: '2 years' },
  { name: '_gid', purpose: 'Distinguishes visitors within a 24-hour window.', retention: '24 hours' },
]

export default function CookieConsent() {
  // No stored decision means we have not asked yet — and nothing has loaded.
  const [visible, setVisible] = useState(() => readConsent() === null)
  const [showDetails, setShowDetails] = useState(false)

  // Re-arm analytics on load for a visitor who already opted in.
  useEffect(() => { applyStoredConsent() }, [])

  useEffect(() => onOpenCookieSettings(() => {
    setShowDetails(false)
    setVisible(true)
  }), [])

  const decide = (analytics) => {
    writeConsent(analytics)
    if (analytics) enableAnalytics()
    else clearAnalyticsCookies()
    setVisible(false)
  }

  if (!visible) return null

  return (
    /*
     * Deliberately not wrapped in AnimatePresence. Under React 19 + StrictMode,
     * framer-motion 12 runs the exit animation but never unmounts the node,
     * leaving an invisible fixed overlay at z-60 that swallows clicks. A plain
     * conditional unmount is deterministic; we keep the entrance animation only.
     */
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-60 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <div className="size-11 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Cookie size={20} className="text-purple-400" />
          </div>
          <div className="min-w-0">
            <h2 id="cookie-consent-title" className="text-text font-semibold text-base mb-2">
              We ask before we measure anything
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              This site needs no cookies to work, and none have been set. We would like to enable
              Google Analytics to understand which pages are useful. That sets the cookies listed
              below and sends your IP address and browsing activity to Google LLC in the United
              States. You can decline, and you can change your mind at any time from the footer.
            </p>

            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              className="mt-3 inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-xs font-medium transition-colors cursor-pointer"
            >
              What exactly gets stored?
              <ChevronDown
                size={14}
                className={`transition-transform ${showDetails ? 'rotate-180' : ''}`}
              />
            </button>

            {showDetails && (
              <Motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="mt-4 space-y-3 border-t border-border pt-4">
                  {cookieDetails.map((c) => (
                    <li key={c.name} className="text-xs leading-relaxed">
                      <code className="text-text font-medium">{c.name}</code>
                      <span className="text-text-muted"> — {c.purpose} </span>
                      <span className="text-text-muted/70">Retention: {c.retention}.</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-text-muted/70 text-xs leading-relaxed">
                  Legal basis: your consent (GDPR Art. 6(1)(a), ePrivacy Art. 5(3)). Declining
                  changes nothing about how the site behaves.
                </p>
              </Motion.div>
            )}

            {/* Equal prominence: refusing must be no harder than accepting. */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => decide(false)}
                className="flex-1 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-border text-text text-sm font-semibold transition-colors cursor-pointer"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide(true)}
                className="flex-1 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}
