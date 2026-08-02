/** Portfolio case studies. Kept out of the component so counts can be
 *  derived elsewhere (see src/data/trackRecord.js) without importing UI. */
export const projects = [

  {
    title: 'Siila.org',
    desc: 'Wellness discovery platform for yoga, meditation, and holistic communities — Angular, Flask, PostgreSQL, and Redis on AWS with auto-scaling and SEO built to grow.',
    tags: ['Angular', 'Flask', 'AWS', 'PostgreSQL'],
    logo: 'https://www.siila.org/favicon.ico',
    url: 'https://www.siila.org',
    highlight: '100K+ concurrent users',
    challenge:
      'Discovery platforms buckle under viral traffic — slow search and stale recommendations kill retention right when growth spikes.',
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
    impact: [
      'Scaled to 100K+ concurrent users with no downtime.',
      'Faster discovery via cache-first endpoints.',
      'Higher organic traffic from Core Web Vitals + SEO.',
    ],
    featured: true,
  },
  {
    title: 'Magda Gallery',
    desc: 'Enterprise ERP for art galleries — unifying publishing, invitations, accounting, bulk outreach, and role-based operations across 76K+ accounts with Celery and RabbitMQ.',
    tags: ['ERP', 'Angular', 'Flask', 'Celery'],
    logo: 'https://admin.magdagallery.com/favicon.ico',
    url: 'https://www.magdagallery.com',
    highlight: '76K+ accounts · Gallery ERP',
    challenge:
      'Galleries ran editorial, accounting, and outreach on disconnected tools — with no safe way to delegate sensitive actions at scale.',
    planning: [
      'Audited existing admin workflows across editorial, accounting, and outreach teams.',
      'Planned modular ERP migration to avoid downtime during feature-parity rollout.',
      'Established a role matrix and permission boundaries for staff, managers, and admins.',
    ],
    optimizations: [
      'Moved long-running operations to Celery workers with queue prioritization.',
      'Reduced dashboard payload size and improved perceived load with lazy data fetch.',
      'Introduced RBAC guardrails and audit logs for sensitive actions.',
    ],
    impact: [
      'Unified 76K+ accounts under one ERP.',
      'Eliminated manual editorial + accounting handoffs.',
      'Sensitive actions secured with RBAC + audit trails.',
    ],
    featured: true,
  },
  {
    title: 'Abhidhya',
    desc: 'Competitive e-learning portal with live contests, practice modules, and timed exams on Google Cloud with RazorPay — built to stay fast and fair under load.',
    tags: ['SolidJS', 'Flask', 'Google Cloud', 'RazorPay'],
    logo: 'https://abhidhya-prod-s3.s3.amazonaws.com/abhidhya/institutes/Abhidhya-Aligarh%20',
    url: 'https://www.abhidhya.org',
    highlight: 'Live contests & exams',
    challenge:
      'Live, timed exams must stay fast and fair even when thousands of students hit submit in the very same minute.',
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
    impact: [
      'Stable live contests during peak exam windows.',
      'Responsive exams under high concurrency.',
      'Higher payment completion with retry-safe flows.',
    ],
    featured: true,
  },
  {
    title: 'Velocys',
    desc: 'A corporate-grade control layer that helps logistics teams resolve cross-border shipment disruptions — combining compliance checks, recovery planning, and real-time operational visibility in one command center.',
    tags: ['AI', 'Logistics', 'Compliance', 'React'],
    logo: 'https://velocys.ai/favicon.ico',
    url: 'https://velocys.ai/',
    highlight: 'Cross-border disruption recovery',
    challenge:
      'Cross-border shipments fail silently across customs, carriers, and compliance gaps — teams discover problems too late and scramble without a recovery playbook.',
    planning: [
      'Mapped the full cross-border shipment lifecycle and the failure points across customs, carriers, and compliance.',
      'Modeled a structured recovery playbook so teams act on disruptions instead of reacting late.',
      'Designed a corporate-grade permission and visibility layer for multi-team, multi-region operations.',
    ],
    optimizations: [
      'Built real-time disruption detection with prioritized, actionable alerts.',
      'Automated compliance checks to flag regulatory risk before shipments get blocked.',
      'Centralized operational visibility into a single control layer for faster, confident recovery.',
    ],
    impact: [
      'Disruptions surfaced early instead of after the damage is done.',
      'Compliance risk caught before customs holds.',
      'One source of truth across logistics teams.',
    ],
    featured: true,
  },
  {
    title: 'AI Instagram Scraper',
    desc: 'n8n-powered automation that scrapes Instagram profiles from natural-language prompts, then filters, enriches, and exports clean lists to Excel and PostgreSQL.',
    tags: ['n8n', 'AI', 'Python', 'PostgreSQL'],
    logo: null,
    url: null,
    highlight: 'AI prompt queries',
    challenge:
      'Manual prospect research is slow, noisy, and inconsistent — and breaks the moment a third-party API hiccups.',
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
    impact: [
      'Natural-language targeting — no manual queries.',
      'Cleaner lists via automated dedup + filtering.',
      'Resilient runs with checkpoint recovery.',
    ],
    featured: true,
  },
  {
    title: 'Meghnify',
    desc: 'Cloud management for AWS and Azure — monitoring, DevOps, CI/CD, and cost optimization with a 99.9% uptime SLA across 500+ companies.',
    tags: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
    logo: null,
    url: 'https://meghnify.com',
    highlight: '500+ companies',
    challenge:
      'Multi-cloud sprawl drives runaway costs and blind spots, with no consistent reliability or release-safety net.',
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
    impact: [
      '99.9% uptime SLA across 500+ companies.',
      'Lower infra spend through rightsizing.',
      'Faster, safer releases with automated CI/CD.',
    ],
    featured: true,
  },
  {
    title: 'MacQuery Dashboard',
    desc: 'Internal analytics dashboard for real-time project tracking, team management, and performance metrics — built for fast leadership decisions.',
    tags: ['Dashboard', 'Analytics', 'React'],
    logo: null,
    url: null,
    challenge:
      'Leadership lacked a single, real-time view of delivery health — every decision waited on manual reports.',
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
    impact: [
      'Real-time visibility for leadership + ops.',
      'Smoother UX with memoized charts.',
      'Role-based views speed up decisions.',
    ],
  },
  {
    title: 'Kumar Jewellers',
    desc: 'Handcrafted jewelry showcase app with catalogs, inquiry forms, WhatsApp integration, and store locator — turning browsers into direct conversations.',
    tags: ['React Native', 'Android', 'WhatsApp'],
    logo: null,
    url: 'https://play.google.com/store/apps/details?id=com.omornament.om_ornament',
    highlight: 'Retail mobile showcase',
    challenge:
      'Walk-in jewelry buyers had no fast way to browse and reach the store, leaking inquiries to competitors.',
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
    impact: [
      'Catalog-to-WhatsApp inquiry in a single tap.',
      'Fluid browsing on slow mobile networks.',
      'Reliable Play Store release pipeline.',
    ],
  },
  {
    title: 'Hiremind',
    desc: 'AI hiring co-pilot that generates interview questions from a job description, scores candidate responses, and produces a strict, bias-aware evaluation with a ready-to-send HR email.',
    tags: ['AI', 'Recruiting', 'LLM', 'Automation'],
    logo: null,
    url: null,
    comingSoon: true,
    highlight: 'In progress · AI candidate evaluation',
    challenge:
      'Early-stage screening is slow and subjective — inconsistent questions and gut-feel scoring let strong candidates slip and let bias creep in.',
    planning: [
      'Defined how a job description maps to role-specific, skill-weighted interview questions.',
      'Designed a strict, rubric-based scoring model to keep evaluations consistent and bias-aware.',
      'Planned the HR handoff — a clear, ready-to-send candidate verdict email.',
    ],
    optimizations: [
      'LLM-generated questions tailored to each JD — no manual question banks.',
      'Structured response scoring with explainable, criteria-based reasoning.',
      'Auto-drafted HR emails summarizing fit, strengths, and risks.',
    ],
    impact: [
      'Consistent, JD-driven interview questions every time.',
      'Strict, explainable scoring over gut feel.',
      'HR-ready verdict email generated automatically.',
    ],
  },
  {
    title: 'Gola & Silver ERP Software',
    desc: 'Ongoing ERP software for Gola and Silver operations, built for director Aman Kumar to streamline inventory, billing, and daily workflow tracking.',
    tags: ['ERP', 'Inventory', 'Billing', 'Operations'],
    logo: null,
    url: null,
    comingSoon: true,
    highlight: 'Ongoing project · Director Aman Kumar',
    challenge:
      'High-volume daily operations were tracked manually, making billing errors and stock mismatches hard to catch in time.',
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
    impact: [
      'Streamlining inventory, billing + reporting.',
      'Low-latency stock updates for peak days.',
      'Automated reconciliation for ledger accuracy.',
    ],
  },
]
