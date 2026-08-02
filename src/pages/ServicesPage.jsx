import { motion } from 'framer-motion'
import { Compass, PenTool, Code2, Rocket, Headphones } from 'lucide-react'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import HowWeWork from '../components/HowWeWork'
import PoweredBy from '../components/PoweredBy'
import Seo from '../components/Seo'

const process = [
  { icon: Compass, title: 'Scope & classify', desc: 'We inventory your AI systems and establish which regimes and risk tiers actually apply.' },
  { icon: PenTool, title: 'Assess & design', desc: 'Gap analysis against the obligations in force, then an architecture that closes them.' },
  { icon: Code2, title: 'Build & evidence', desc: 'We implement the controls in the system and generate the documentation as we go.' },
  { icon: Rocket, title: 'Validate & hand over', desc: 'Evaluation, audit-trail review, and an evidence pack your auditors can work from.' },
  { icon: Headphones, title: 'Monitor & re-assess', desc: 'Regulation moves. We re-test against changes and keep the documentation current.' },
]

const engagement = [
  { title: 'Fixed-scope assessment', desc: 'A dated readiness review with a prioritised remediation roadmap. Defined deliverables, defined fee.' },
  { title: 'Assess and remediate', desc: 'The assessment plus the engineering to close what it finds — one team, no handoff between finding and fix.' },
  { title: 'Embedded advisory', desc: 'Ongoing governance support as your systems and the regulation both change, on a monthly basis.' },
]

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — EU AI Act Readiness, GDPR-Safe GenAI & ISO 42001 | MacQuery"
        description="EU AI Act readiness assessments, GDPR-safe GenAI architecture, ISO/IEC 42001 AI governance, and regulated-sector delivery for European companies in health, finance and public sector."
        keywords="EU AI Act readiness assessment, AI risk classification, Article 50 compliance, GDPR-safe GenAI architecture, EU data residency AI, ISO 42001 implementation, AI governance consulting, DORA, NIS2, MDR IVDR AI software"
        path="/services"
      />
      <PageHero
        label="Services"
        title={<>Compliance you can <span className="text-gradient">actually deploy</span></>}
        subtitle="Assessment and engineering from one team. We tell you where you stand against the EU AI Act, GDPR, DORA and NIS2 — then build the controls that close the gap, with the evidence to prove it."
      />

      <Services showHeader={false} />

      <section className="py-20 border-t border-border">
        <div className="site-container">
          <h2 className="text-2xl font-bold text-text text-center mb-4">How we work with you</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            Findings are traceable to the article they come from, and every engagement ends
            with documentation an auditor can use.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl glass-card"
              >
                <step.icon size={22} className="text-purple-400 mb-4" />
                <h3 className="text-text font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Industries />

      <section className="py-20 border-t border-border">
        <div className="site-container">
          <h2 className="text-2xl font-bold text-text text-center mb-12">Engagement models</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {engagement.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass-card text-center"
              >
                <h3 className="text-text font-semibold mb-3">{e.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <PoweredBy showCta={false} />
    </>
  )
}
