import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Shield, Wrench, FileText, HeartHandshake } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { trackRecord, FOUNDED_YEAR } from '../data/trackRecord'
import StatCounter from './ui/StatCounter'

const features = [
  {
    icon: Wrench,
    title: 'We implement what we find',
    desc: 'The team that writes the assessment ships the remediation. No handoff to a separate vendor, no second scoping exercise.',
  },
  {
    icon: Shield,
    title: 'EU data residency by design',
    desc: 'Inference and storage pinned to EU regions from the architecture stage, with the data flows documented for your DPO.',
  },
  {
    icon: FileText,
    title: 'Paperwork ready before kickoff',
    desc: 'SCCs, a transfer impact assessment and a DPA available up front — not negotiated after you have already shared material.',
  },
  {
    icon: Target,
    title: 'Findings traceable to the article',
    desc: 'Every gap cites the provision it comes from, so your counsel can check our work instead of taking it on trust.',
  },
  {
    icon: HeartHandshake,
    title: 'Re-assessed as rules change',
    desc: 'Deadlines have already moved once. We re-test against amendments and keep your documentation current.',
  },
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
          subtitle="Most firms sell you either the audit or the build. Buying both from one team is the difference between a report and a system that passes review."
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
