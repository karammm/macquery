import { motion } from 'framer-motion'
import { Compass, PenTool, Code2, Rocket, Headphones } from 'lucide-react'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import HowWeWork from '../components/HowWeWork'
import PoweredBy from '../components/PoweredBy'

const process = [
  { icon: Compass, title: 'Discovery & strategy', desc: 'We map goals, users, tech constraints, and success metrics before writing code.' },
  { icon: PenTool, title: 'Design & prototype', desc: 'Wireframes, UI systems, and interactive prototypes aligned to your brand.' },
  { icon: Code2, title: 'Build & integrate', desc: 'Agile sprints with weekly demos, CI/CD, and rigorous QA on every release.' },
  { icon: Rocket, title: 'Launch & optimize', desc: 'Deployment, monitoring, SEO, and performance tuning for production readiness.' },
  { icon: Headphones, title: 'Support & evolve', desc: '1 year of included maintenance plus ongoing feature work as you grow.' },
]

const engagement = [
  { title: 'Fixed-scope projects', desc: 'Clear milestones, timeline, and deliverables — ideal for MVPs and redesigns.' },
  { title: 'Dedicated team', desc: 'Embedded engineers and designers working as an extension of your product org.' },
  { title: 'Retainer support', desc: 'Ongoing development, DevOps, and AI automation on a monthly basis.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={<>Everything you need to <span className="text-gradient">grow online</span></>}
        subtitle="AI-first development, modern design, cloud infrastructure, and growth — delivered by one senior team from discovery through launch."
      />

      <Services showHeader={false} />

      <section className="py-20 border-t border-border">
        <div className="site-container">
          <h2 className="text-2xl font-bold text-text text-center mb-4">How we work with you</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            A transparent, proven process — no black boxes, no surprise invoices.
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
