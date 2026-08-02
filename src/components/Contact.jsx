import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2, AlertCircle, FileCheck } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { LAST_UPDATED } from '../data/legal'

const projectTypes = [
  'EU AI Act readiness assessment',
  'GDPR-safe GenAI architecture',
  'AI governance / ISO 42001',
  'Regulated-sector GenAI delivery',
  'Not sure yet — need guidance',
  'Other',
]

const inputCls = 'w-full px-5 py-3.5 rounded-xl bg-bg border border-border text-text text-sm placeholder-text-muted focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all'

const emptyForm = { name: '', email: '', phone: '', projectType: '', message: '' }

export default function Contact({ hideHeader = false }) {
  const [form, setForm] = useState(emptyForm)
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        // Consent evidence: Art. 7(1) requires us to be able to demonstrate
        // that consent was given, for what, and against which notice.
        marketingOptIn,
        privacyNoticeVersion: LAST_UPDATED,
        createdAt: serverTimestamp(),
      })
      setSent(true)
      setTimeout(() => setSent(false), 6000)
      setForm(emptyForm)
      setMarketingOptIn(false)
    } catch (err) {
      console.error('Firebase error:', err)
      setError('We could not send that. Please try again, or email us directly at info@macquery.in.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-border">
      <div className="site-container">
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-24">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {!hideHeader && (
              <>
                <span className="section-label">Contact</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight mb-5">
                  Book a <span className="text-gradient">scoping call</span>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-4">
                  Tell us which AI systems you operate and where you think the exposure is. We
                  reply within one business day, and we will say plainly if an engagement is not
                  warranted yet.
                </p>
              </>
            )}
            <p className={`text-text-muted text-sm ${hideHeader ? 'mb-8' : 'mb-12'}`}>
              <span className="text-text font-medium">MacQuery</span> is a brand of <span className="text-text font-medium"> SIILARD LABS LLP</span>.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'info@macquery.in', sub: 'Email us anytime' },
                { icon: Phone, label: '+91 93802 16302', sub: 'Mon–Sat · 09:00–20:00 IST, overlapping 05:30–16:30 CET' },
                { icon: FileCheck, label: 'SCCs, TIA and DPA on request', sub: 'Sent before you share anything confidential' },
                { icon: MapPin, label: 'Tag Tower 28, Sector 18, Gurugram, India', sub: 'SIILARD LABS LLP' },
                { icon: MapPin, label: 'IT Park, Sahastradhara Road, Dehradun, India', sub: 'Sales Center' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <c.icon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-text text-sm font-medium">{c.label}</div>
                    <div className="text-text-muted text-sm mt-1">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-7 sm:p-9 lg:p-10 rounded-2xl bg-card border border-border">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-20 text-center">
                  <div className="size-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-text mb-2">Message sent</h4>
                  <p className="text-text-muted text-sm">We&apos;ll reply within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Name *</label>
                      <input type="text" name="name" value={form.name} onChange={set} required placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={set} required placeholder="you@company.com" className={inputCls} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={set} placeholder="+91 1234567890" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Project Type</label>
                      <select name="projectType" value={form.projectType} onChange={set} className={inputCls}>
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={set} required rows={5} placeholder="Tell us about your project..." className={`${inputCls} resize-none`} />
                  </div>
                  {/* Optional and unticked. The enquiry itself does not need
                      consent — its basis is Art. 6(1)(b), pre-contractual
                      steps — so gating the form on a tick would be both
                      unnecessary and invalid, since consent bundled into a
                      required action is not freely given. Marketing is a
                      separate purpose, so it gets its own opt-in. */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingOptIn"
                      checked={marketingOptIn}
                      onChange={(e) => setMarketingOptIn(e.target.checked)}
                      className="mt-0.5 size-4 shrink-0 rounded border-border bg-bg accent-purple-600 cursor-pointer"
                    />
                    <span className="text-text-muted text-xs leading-relaxed">
                      Optional: send me occasional updates on EU AI Act and GDPR developments
                      relevant to my sector. You can unsubscribe at any time.
                    </span>
                  </label>

                  <p className="text-text-muted text-xs leading-relaxed">
                    We use these details only to answer your enquiry. They are stored by
                    SIILARD LABS LLP and our processors, never sold, and never used to build
                    advertising profiles. See the{' '}
                    <Link to="/privacy" className="text-purple-400 hover:text-purple-300">
                      Privacy Policy
                    </Link>{' '}
                    for retention periods, international transfers and how to request erasure.
                  </p>

                  {error && (
                    <p role="alert" className="flex items-start gap-2.5 text-red-400 text-xs leading-relaxed">
                      <AlertCircle size={14} className="shrink-0 mt-0.5" />
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/15 transition-all cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Message <Send size={16} /></>}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
