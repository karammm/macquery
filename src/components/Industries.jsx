import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HeartPulse,
  Landmark,
  Building2,
  Factory,
  Umbrella,
  Scale,
  Zap,
  ShoppingCart,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

/**
 * Sectors are listed with the regimes that actually apply in the EU.
 *
 * HIPAA is deliberately absent: it is US law and has no force in Europe.
 * Naming it as a European healthcare credential signals unfamiliarity with
 * the market to the exact buyer we are trying to reach.
 */
const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    desc: 'Clinical AI is high-risk by default, and diagnostic support usually lands inside the medical device regime.',
    regimes: ['MDR / IVDR', 'EHDS', 'GDPR Art. 9', 'NIS2'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    desc: 'Creditworthiness scoring is an Annex III high-risk use, and ICT resilience is now separately mandated.',
    regimes: ['DORA', 'EU AI Act Annex III', 'GDPR Art. 22', 'NIS2'],
    color: 'from-sky-500 to-indigo-500',
  },
  {
    icon: Umbrella,
    title: 'Insurance',
    desc: 'Risk assessment and pricing for life and health cover sit squarely in the high-risk tier.',
    regimes: ['EU AI Act Annex III', 'GDPR', 'IDD'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Building2,
    title: 'Public Sector',
    desc: 'Systems touching essential services, benefits or eligibility face the strictest scrutiny and the most public failure mode.',
    regimes: ['EU AI Act Annex III', 'NIS2', 'GDPR', 'EAA accessibility'],
    color: 'from-slate-500 to-zinc-500',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    desc: 'AI embedded in a product or safety component inherits that product’s conformity route.',
    regimes: ['EU AI Act Annex I', 'Machinery Regulation', 'NIS2'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    desc: 'Operators of essential services carry cybersecurity and incident-reporting duties that AI systems inherit.',
    regimes: ['NIS2', 'EU AI Act', 'CER Directive'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Scale,
    title: 'Legal & Professional',
    desc: 'Client confidentiality and privilege set a higher bar than GDPR alone for anything sent to a model.',
    regimes: ['GDPR', 'EU AI Act Art. 50', 'Professional privilege'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    desc: 'Customer-facing chat and AI-generated content are in scope for transparency duties already in force.',
    regimes: ['EU AI Act Art. 50', 'GDPR', 'ePrivacy', 'DSA'],
    color: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Industries() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="site-container">
        <SectionHeader
          label="Sectors"
          title={<>Where the <span className="text-gradient">rules bite hardest</span></>}
          subtitle="The obligations differ sharply by sector — and the deadline you are actually working to depends on which annex your system falls under. These are the regimes we work in."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={scrollToServices}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group text-left p-6 rounded-2xl glass-card cursor-pointer flex flex-col"
            >
              <div className={`size-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-text font-semibold mb-2 flex items-center gap-2">
                {item.title}
                <ArrowUpRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all shrink-0" />
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.regimes.map((r) => (
                  <span
                    key={r}
                    className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 text-[11px] font-medium border border-purple-500/15"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        <p className="mt-8 text-text-muted text-xs text-center max-w-2xl mx-auto leading-relaxed">
          Working to US healthcare rules instead? HIPAA is a separate engagement — it has no
          application in the EU, and we would rather say so than pad the list.
        </p>
      </div>
    </section>
  )
}
