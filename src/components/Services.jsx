import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ClipboardCheck, ShieldCheck, FileCheck2, ArrowUpRight, X, CheckCircle2, Cpu } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const services = [
  {
    icon: ClipboardCheck,
    title: 'EU AI Act Readiness',
    desc: 'Classify every AI system you operate, find where you fall short, and get a dated remediation plan you can put in front of a board.',
    color: 'from-violet-500 to-purple-600',
    detail: {
      overview:
        'Most organisations cannot yet answer the first question a regulator asks: which AI systems do you operate, and what risk tier is each one in? We inventory them, classify them against the Act, and separate what is genuinely urgent from what is not. Article 50 transparency duties apply from 2 August 2026. High-risk obligations were deferred — Annex III standalone systems to 2 December 2027 and Annex I product-embedded systems to 2 August 2028 — so the sequencing matters as much as the gap list.',
      benefits: [
        'A defensible inventory and risk classification of every AI system in scope',
        'Article 50 transparency gaps identified against the obligations already in force',
        'Remediation sequenced by real deadline, so you are not paying for 2028 work today',
        'Board-ready summary that survives contact with legal and procurement',
      ],
      technologies: ['EU AI Act', 'Annex I & III', 'Article 50', 'ISO/IEC 42001', 'NIST AI RMF', 'Commission guidelines (July 2026)'],
      timeline: '3–5 weeks',
      deliverables: ['AI System Inventory', 'Risk Classification', 'Gap Analysis', 'Sequenced Remediation Roadmap', 'Executive Briefing'],
    },
  },
  {
    icon: ShieldCheck,
    title: 'GDPR-Safe GenAI Architecture',
    desc: 'RAG and LLM systems designed so personal data stays inside the EEA, stays out of training sets, and stays explainable to your DPO.',
    color: 'from-emerald-500 to-teal-500',
    detail: {
      overview:
        'Most GenAI pilots stall at the privacy review, not the demo. The usual blockers are the same three: nobody can say where the data physically sits, nobody can prove prompts and outputs are not being trained on, and nobody can produce a retention limit. We architect around those constraints from the start rather than retrofitting them.',
      benefits: [
        'Inference and storage pinned to EU regions, with the data flows documented',
        'Contractual and technical guarantees that prompts and outputs are not used for training',
        'Retention, deletion and access controls your DPO can audit rather than take on trust',
        'DPIA input prepared alongside the build, not reconstructed afterwards',
      ],
      technologies: ['EU-region inference', 'Retrieval-augmented generation', 'PII detection & redaction', 'Pseudonymisation', 'DPIA support', 'Evaluation harnesses'],
      timeline: '4–10 weeks',
      deliverables: ['Reference Architecture', 'Data Flow Map', 'DPIA Input Pack', 'Retention & Access Model', 'Working Implementation'],
    },
  },
  {
    icon: FileCheck2,
    title: 'AI Governance (ISO/IEC 42001)',
    desc: 'Stand up the AI management system enterprise buyers now ask for in RFPs — model documentation, human oversight, logging, and audit trail.',
    color: 'from-sky-500 to-indigo-500',
    detail: {
      overview:
        'ISO/IEC 42001 has moved quickly from nice-to-have to procurement filter — "are you certified, or implementing?" now appears routinely in EU enterprise AI vendor questionnaires. It is also the most direct way to evidence the governance the AI Act expects. We build the management system as something your teams actually operate, not a binder that ages badly.',
      benefits: [
        'A working AI management system, not documentation written to be filed',
        'Model cards, evaluation records and change logs generated as a by-product of delivery',
        'Human oversight and incident escalation defined with named owners',
        'Evidence organised so an external audit is a review rather than an excavation',
      ],
      technologies: ['ISO/IEC 42001', 'ISO/IEC 27001', 'NIST AI RMF', 'Model documentation', 'Audit logging', 'Evaluation pipelines'],
      timeline: '8–16 weeks',
      deliverables: ['AIMS Documentation Set', 'Model Cards & Eval Records', 'Human Oversight Procedures', 'Audit Log Design', 'Certification Readiness Review'],
    },
  },
  {
    icon: Cpu,
    title: 'Regulated-Sector Delivery',
    desc: 'The engineering itself — production GenAI for health, finance and public sector, built to the evidence standard those sectors demand.',
    color: 'from-purple-500 to-fuchsia-600',
    detail: {
      overview:
        'This is where an assessment-only consultancy hands you a PDF and leaves. We build the system. Cross-border logistics compliance for Velocys and role-based access with audit trails across 76K+ accounts for Magda Gallery are the same discipline applied to different regimes: the control has to work in production, and it has to be provable afterwards.',
      benefits: [
        'One team writes the finding and ships the fix — no handoff, no re-scoping',
        'Controls implemented in the system rather than described in a document',
        'Sector regimes handled directly: MDR and IVDR, DORA, NIS2, EHDS',
        'Handover includes the evidence pack, not just the repository',
      ],
      technologies: ['Python', 'TypeScript', 'React', 'AWS & GCP (EU regions)', 'Kubernetes', 'Terraform', 'OpenAI & open-weight models'],
      timeline: '3–6 months',
      deliverables: ['Production System', 'Control Implementation Evidence', 'Runbooks & Monitoring', 'Audit Trail', 'Knowledge Transfer'],
    },
  },
]

function ServiceModal({ service, onClose }) {
  const { icon: Icon, title, color, detail } = service

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-0 bg-card rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className={`size-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
              <Icon size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-text">{title}</h3>
          </div>
          <button onClick={onClose} className="size-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer">
            <X size={18} className="text-text-muted" />
          </button>
        </div>

        <div className="p-6 space-y-7">
          {/* Overview */}
          <p className="text-text-secondary text-sm leading-relaxed">{detail.overview}</p>

          {/* Key Benefits */}
          <div>
            <h4 className="text-text text-sm font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-purple-400" />
              Key Benefits
            </h4>
            <ul className="space-y-2.5">
              {detail.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                  <span className="mt-1.5 size-1.5 rounded-full bg-purple-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-text text-sm font-semibold mb-3 flex items-center gap-2">
              <Cpu size={16} className="text-purple-400" />
              Standards &amp; tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {detail.technologies.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/15">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-text text-sm font-semibold mb-3">Deliverables</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {detail.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-border text-text-muted text-xs">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              onClose()
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
            }}
            className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Get Started with {title}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services({ preview = false, showHeader = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)
  const list = preview ? services.slice(0, 4) : services

  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="site-container">
        {showHeader && (
          <SectionHeader
            label="Services"
            title={<>Our <span className="text-gradient">Services</span></>}
            subtitle="Four engagements, in the order most clients need them — establish where you stand, design something that survives review, govern it, then build it."
          />
        )}

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {list.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelected(s)}
              className="group relative p-7 rounded-2xl glass-card cursor-pointer"
            >
              <div className={`size-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-text mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              <ArrowUpRight size={16} className="absolute top-6 right-6 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* The old footnote here promised a free maintenance year and excluded
          domain and hosting costs — SMB web-shop terms that undercut a
          consulting engagement. Commercials belong in the proposal. */}
      {!preview && (
      <div className="site-container mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-text-muted text-xs">
        <p className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
          Engagements start with a scoping call, not a quote.
        </p>
        <p className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-text-muted/50 shrink-0 hidden sm:block" />
          NDA, DPA and SCCs signed before any of your material changes hands.
        </p>
      </div>
      )}

      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
