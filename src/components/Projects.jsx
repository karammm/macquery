import { AnimatePresence, motion as Motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'

const projects = [
  {
    title: 'Siila.org',
    desc: 'Wellness discovery platform for yoga, meditation, and holistic communities — Angular, Flask, PostgreSQL, Redis on AWS with auto-scaling and SEO.',
    tags: ['Angular', 'Flask', 'AWS', 'PostgreSQL'],
    logo: 'https://www.siila.org/favicon.ico',
    url: 'https://www.siila.org',
    highlight: '100K+ concurrent users',
    planning: [
      'Mapped user journeys for content discovery and partner onboarding before implementation.',
      'Designed phased rollout for search, recommendations, and monetization features.',
      'Defined scale-readiness benchmarks for API, caching, and database query performance.',
    ],
    optimizations: [
      'Added Redis-backed caching for high-traffic discovery endpoints.',
      'Implemented autoscaling and load balancing with proactive alerting on AWS.',
      'Improved Core Web Vitals and SEO metadata strategy for organic growth.',
    ],
    featured: true,
  },
  {
    title: 'Magda Gallery',
    desc: 'Enterprise platform for art galleries — publishing, invitations, accounting, and bulk email with Celery, RabbitMQ, and RBAC for 76K+ accounts.',
    tags: ['Angular', 'Flask', 'Celery', 'PostgreSQL'],
    logo: 'https://admin.magdagallery.com/favicon.ico',
    url: 'https://www.magdagallery.com',
    highlight: '76K+ accounts',
    planning: [
      'Audited existing admin workflows across editorial, accounting, and outreach teams.',
      'Planned modular migration to avoid downtime during feature parity rollout.',
      'Established role matrix and permission boundaries for staff, managers, and admins.',
    ],
    optimizations: [
      'Moved long-running operations to Celery workers with queue prioritization.',
      'Reduced dashboard payload size and improved perceived load with lazy data fetch.',
      'Introduced RBAC guardrails and audit logs for sensitive actions.',
    ],
    featured: true,
  },
  {
    title: 'Abhidhya',
    desc: 'Competitive e-learning portal with live contests, practice modules, and timed exams on Google Cloud with RazorPay.',
    tags: ['SolidJS', 'Flask', 'Google Cloud', 'RazorPay'],
    logo: 'https://abhidhya-prod-s3.s3.amazonaws.com/abhidhya/institutes/Abhidhya-Aligarh%20',
    url: 'https://www.abhidhya.org',
    highlight: 'Live contests & exams',
    planning: [
      'Structured learning flows for contests, timed exams, and teacher operations.',
      'Planned high-concurrency exam windows and anti-failure fallback paths.',
      'Mapped payment and verification touchpoints for smoother conversion.',
    ],
    optimizations: [
      'Added Redis caching and async workers for contest traffic spikes.',
      'Optimized API and query paths to keep exam interactions responsive.',
      'Improved payment completion reliability with retry-safe transaction handling.',
    ],
    featured: true,
  },
  {
    title: 'AI Instagram Scraper',
    desc: 'n8n-powered automation that scrapes Instagram profiles from natural language prompts, with filtering and export to Excel and PostgreSQL.',
    tags: ['n8n', 'AI', 'Python', 'PostgreSQL'],
    logo: null,
    url: null,
    highlight: 'AI prompt queries',
    planning: [
      'Defined prompt-to-query parsing rules for reliable target discovery.',
      'Planned enrichment stages for relevance scoring and deduplication.',
      'Designed export format requirements for sales and ops workflows.',
    ],
    optimizations: [
      'Added automated filtering heuristics to remove noise before persistence.',
      'Parallelized enrichment steps to reduce end-to-end pipeline latency.',
      'Introduced checkpointing to recover gracefully from third-party API failures.',
    ],
    featured: true,
  },
  {
    title: 'Meghnify',
    desc: 'Cloud management for AWS and Azure — monitoring, DevOps, CI/CD, and cost optimization with 99.9% uptime SLA.',
    tags: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
    logo: null,
    url: 'https://meghnify.com',
    highlight: '500+ companies',
    planning: [
      'Assessed cloud account posture and cost hotspots across environments.',
      'Created adoption plan for monitoring, incident response, and deployment automation.',
      'Defined SLA and reliability objectives with client engineering teams.',
    ],
    optimizations: [
      'Implemented rightsizing and scheduling policies to reduce infra spend.',
      'Automated CI/CD and rollback safety checks for faster release cycles.',
      'Improved observability with actionable alerts and runbook-driven response.',
    ],
    featured: true,
  },
  {
    title: 'MacQuery Dashboard',
    desc: 'Internal analytics dashboard for real-time project tracking, team management, and performance metrics.',
    tags: ['Dashboard', 'Analytics', 'React'],
    logo: null,
    url: null,
    planning: [
      'Collected reporting needs from delivery, ops, and leadership stakeholders.',
      'Prioritized KPI hierarchy to avoid cluttered dashboards.',
      'Designed extensible component architecture for future modules.',
    ],
    optimizations: [
      'Implemented memoized chart rendering for smoother interactions.',
      'Reduced API chatter via batched analytics requests.',
      'Added role-based views for faster decision-making by team type.',
    ],
  },
  {
    title: 'Kumar Jewellers',
    desc: 'Handcrafted jewelry showcase app with catalogs, inquiry forms, WhatsApp integration, and store locator for Kumar Jewellers.',
    tags: ['React Native', 'Android', 'WhatsApp'],
    logo: null,
    url: 'https://play.google.com/store/apps/details?id=com.omornament.om_ornament',
    highlight: 'Retail mobile showcase',
    planning: [
      'Mapped buyer journey from catalog browse to inquiry submission.',
      'Designed category and filter structure for jewelry discovery.',
      'Planned WhatsApp-first conversion flow for direct sales communication.',
    ],
    optimizations: [
      'Optimized image loading to keep catalog browsing fluid on mobile networks.',
      'Simplified inquiry form steps to reduce abandonment.',
      'Improved Play Store build stability and release pipeline reliability.',
    ],
  },
  {
    title: 'Gola & Silver ERP Software',
    desc: 'Ongoing ERP software project for Gola and Silver operations, being developed for director Aman Kumar to streamline inventory, billing, and daily workflow tracking.',
    tags: ['ERP', 'Inventory', 'Billing', 'Operations'],
    logo: null,
    url: null,
    comingSoon: true,
    highlight: 'Ongoing project · Director Aman Kumar',
    planning: [
      'Documented end-to-end business processes across stock, sales, and reporting.',
      'Defined module phases for inventory, invoicing, purchase flow, and role-based access.',
      'Aligned milestone deliverables and review cadence with director Aman Kumar.',
    ],
    optimizations: [
      'Designing low-latency stock update flows for high-volume transaction days.',
      'Preparing automated reconciliation checks for billing and ledger consistency.',
      'Adding dashboard-level operational insights for faster decision-making.',
    ],
  },
]

function ProjectLogo({ project }) {
  if (project.logo) {
    return (
      <img
        src={project.logo}
        alt=""
        className="size-11 rounded-xl bg-white/5 border border-white/10 p-1.5 object-contain"
      />
    )
  }
  return (
    <div className="size-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
      <span className="text-purple-300 font-bold text-sm">{project.title[0]}</span>
    </div>
  )
}

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <Motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-3xl liquid-panel p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 size-9 rounded-xl bg-white/5 border border-white/10 text-text-muted hover:text-text hover:border-purple-500/40 transition-all"
          aria-label="Close"
        >
          <X size={16} className="mx-auto" />
        </button>

        <div className="pr-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-text">{project.title}</h3>
          <p className="text-text-secondary mt-3 leading-relaxed">{project.desc}</p>
        </div>

        <div className="mt-7 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl glass-card p-5">
            <h4 className="text-text font-semibold mb-3">Planning</h4>
            <ul className="space-y-2.5">
              {(project.planning || []).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl glass-card p-5">
            <h4 className="text-text font-semibold mb-3">Optimizations</h4>
            <ul className="space-y-2.5">
              {(project.optimizations || []).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.04] border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Visit live site
              <ArrowUpRight size={14} />
            </a>
          )}
          <button type="button" onClick={onClose} className="btn-outline text-sm">
            Close details
          </button>
        </div>
      </Motion.div>
    </Motion.div>
  )
}

function GlassProjectCard({ project, index, inView, compact = false, onOpenDetails }) {
  const tagLimit = compact ? 3 : 4

  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group relative flex flex-col h-full rounded-2xl glass-card overflow-hidden cursor-pointer"
      onClick={() => onOpenDetails(project)}
    >
      {/* Subtle unified header — purple glass only */}
      <div className="relative px-6 pt-6 pb-5 border-b border-white/[0.06] bg-gradient-to-br from-purple-500/[0.08] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.12),transparent_60%)] pointer-events-none" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <ProjectLogo project={project} />
            <div className="min-w-0">
              <h3 className="text-text font-semibold text-base truncate group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              {project.highlight && (
                <p className="text-purple-400/80 text-[11px] font-medium mt-0.5 truncate">
                  {project.highlight}
                </p>
              )}
            </div>
          </div>

          {project.comingSoon ? (
            <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20">
              Soon
            </span>
          ) : project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 size-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-text hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
              aria-label={`Visit ${project.title}`}
            >
              <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className={`text-text-secondary leading-relaxed flex-1 ${compact ? 'text-sm line-clamp-3' : 'text-sm line-clamp-4'}`}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/[0.05]">
          {project.tags.slice(0, tagLimit).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.04] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > tagLimit && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted">
              +{project.tags.length - tagLimit}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            View details
            <ArrowUpRight size={14} />
          </button>
        {project.url && !compact && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-purple-300 text-sm font-medium transition-colors"
          >
            Visit live site
            <ArrowUpRight size={14} />
          </a>
        )}
        </div>
      </div>
    </Motion.article>
  )
}

export default function Projects({ preview = false, showHeader = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const list = preview
    ? projects.filter((p) => p.featured).slice(0, 3)
    : projects

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="site-container">
        {showHeader && (
          <SectionHeader
            label="Projects"
            title={<>Work we're <span className="text-gradient">proud of</span></>}
            subtitle="Real products shipped for ambitious teams — web, mobile, cloud, and AI."
            align={preview ? 'center' : 'left'}
            className="mb-12 lg:mb-16"
          />
        )}

        <div
          ref={ref}
          className="grid gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <GlassProjectCard
              key={p.title}
              project={p}
              index={i}
              inView={inView}
              compact={preview}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
