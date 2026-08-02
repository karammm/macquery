import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Shield, Users, Wallet, HeartHandshake } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { trackRecord, FOUNDED_YEAR } from '../data/trackRecord'
import StatCounter from './ui/StatCounter'

const features = [
  { icon: Target, title: 'Industry-Specific Solutions', desc: "We don't do generic. Every solution is tailored to your industry's unique requirements." },
  { icon: Shield, title: 'Scalable & Secure Tech', desc: 'Enterprise-grade infrastructure that grows with your business while keeping data protected.' },
  { icon: Users, title: 'Experienced Team', desc: 'Senior developers, designers, and strategists with years of collective experience.' },
  { icon: Wallet, title: 'Affordable & Transparent', desc: 'Clear pricing with no hidden costs. Premium quality at competitive rates.' },
  { icon: HeartHandshake, title: 'Long-Term Support', desc: "Dedicated support and maintenance — we're with you for the long haul." },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="site-container">
        <SectionHeader
          label="Why MacQuery"
          title={<>Why choose <span className="text-gradient">MacQuery</span>?</>}
          subtitle="We combine deep industry expertise with cutting-edge technology to deliver solutions that truly transform businesses."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="p-6 rounded-2xl glass-card"
            >
              <f.icon size={22} className="text-accent mb-4" />
              <h3 className="text-text font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="p-8 lg:p-10 rounded-3xl glass-card border-accent/10 text-center"
        >
          <h3 className="text-text font-bold text-lg mb-2">Our Track Record</h3>
          <p className="text-text-muted text-sm mb-8">
            Building since {FOUNDED_YEAR}. Every number below is countable from the case
            studies on this site.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecord.map((st) => (
              <div key={st.label}>
                <div className="text-3xl lg:text-4xl font-extrabold text-gradient">
                  <StatCounter value={st.value} />
                </div>
                <div className="text-text-muted text-sm mt-2">{st.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
