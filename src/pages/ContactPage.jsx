import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import Seo from '../components/Seo'

const faqs = [
  { q: 'How quickly do you respond?', a: 'We reply to all inquiries within 24 hours on business days, usually much sooner.' },
  { q: 'Do you work with international clients?', a: 'Yes — we serve clients globally while operating from New Delhi, India.' },
  { q: 'What is included after launch?', a: 'Every project includes 1 year of free maintenance and support. Hosting and domain are billed separately.' },
  { q: 'Can we start with a small MVP?', a: 'Absolutely. We often begin with a focused scope and expand in agile phases.' },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact MacQuery — Gurugram & Dehradun Software Company"
        description="Get in touch with MacQuery (SIILARD LABS LLP). Offices in Gurugram & Dehradun, India. Email info@macquery.in or call +91 93802 16302 for a free consultation."
        keywords="contact MacQuery, software company Gurugram contact, software company Dehradun, hire developers India, free consultation, SIILARD LABS LLP"
        path="/contact"
      />
      <PageHero
        label="Contact"
        title={<>Let&apos;s build something <span className="text-gradient">great</span></>}
        subtitle="Tell us about your product, timeline, and goals. We'll respond with a clear plan — no pressure, no jargon."
      />

      <section className="py-12 border-b border-border">
        <div className="site-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: 'info@macquery.in', sub: 'Email us anytime' },
              { icon: Phone, label: '+91 93802 16302', sub: 'Mon–Sat, 9AM–8PM IST' },
              { icon: MapPin, label: 'Tag Tower 28, Sector 18, Gurugram, India', sub: 'SIILARD LABS LLP' },
              { icon: MapPin, label: 'IT Park, Sahastradhara Road, Dehradun, India', sub: 'Sales Center' },
            ].map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass-card text-center"
              >
                <c.icon size={22} className="text-purple-400 mx-auto mb-3" />
                <div className="text-text text-sm font-medium">{c.label}</div>
                <div className="text-text-muted text-xs mt-1">{c.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact hideHeader />

      <section className="py-20 border-t border-border">
        <div className="site-container max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-10">
            <MessageSquare size={20} className="text-purple-400" />
            <h2 className="text-xl font-bold text-text">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl glass-card"
              >
                <h3 className="text-text font-semibold text-sm mb-2">{item.q}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
