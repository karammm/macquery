import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const projectTypes = [
  'Web Development',
  'Mobile Apps',
  'SEO & Growth',
  'Cloud Solutions',
  'AI & Automation',
  'UI/UX Design',
  '3D Design',
  'Content Strategy',
  'Other',
]

const inputCls = 'w-full px-5 py-3.5 rounded-xl bg-bg border border-border text-white text-sm placeholder-text-muted focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', custom: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp()
      })
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      setForm({ name: '', email: '', phone: '', projectType: '', custom: '', message: '' })
    } catch (err) {
      console.error('Firebase error:', err)
      alert('Something went wrong. Please try again.')
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
            <p className="text-purple-400 text-sm font-semibold mb-4">Contact</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Let's build something great together
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              Have a project in mind? Drop us a message and we'll get back to you within 24 hours.
            </p>
            <p className="text-text-muted text-sm mb-12">
              <span className="text-white font-medium">MacQuery</span> is a brand of <span className="text-white font-medium"> SIILARD LABS LLP</span>.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'siilardlabs@gmail.com', sub: 'Email us anytime' },
                { icon: Phone, label: '+91 93802 16302', sub: 'Mon–Sat, 9AM–8PM IST' },
                { icon: MapPin, label: 'New Delhi', sub: 'SIILARD LABS LLP, India' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <c.icon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{c.label}</div>
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
                  <h4 className="text-xl font-bold text-white mb-2">Message sent!</h4>
                  <p className="text-text-muted text-sm">We'll get back to you within 24 hours.</p>
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
                    <label className="block text-sm font-medium text-text-secondary mb-2">Anything else we should know?</label>
                    <input type="text" name="custom" value={form.custom} onChange={set} placeholder="e.g. timeline, tech preferences, special requirements..." className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={set} required rows={5} placeholder="Tell us about your project..." className={`${inputCls} resize-none`} />
                  </div>
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
