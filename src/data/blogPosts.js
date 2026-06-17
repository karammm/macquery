export const blogPosts = [
  {
    slug: 'ai-automation-n8n',
    category: 'AI & Automation',
    title: 'How we build AI scrapers and workflows with n8n',
    excerpt:
      'A behind-the-scenes look at prompt-driven Instagram pipelines, enrichment, and PostgreSQL exports for outreach teams.',
    date: 'Mar 12, 2026',
    readTime: '6 min read',
    content: [
      'When we build AI-powered scraping workflows, our first principle is reliability over novelty. We start by defining the exact business outcome: which accounts we need, why they are relevant, and how the final data will be used by sales or operations.',
      'In n8n, we structure the flow into independent stages: prompt interpretation, source fetch, enrichment, normalization, and export. This modular design makes debugging easier and allows us to swap providers without rebuilding the whole pipeline.',
      'Prompt interpretation is the most sensitive stage. We translate natural-language input into deterministic query blocks with constraints like location, niche, and language. This prevents broad, noisy fetches that waste API quota.',
      'For enrichment, we score records using relevance signals such as profile quality, posting frequency, and contactability. Only high-signal records pass into the final dataset, which keeps outreach quality high.',
      'Finally, we store outputs in PostgreSQL and generate export-ready sheets for business teams. We include audit metadata for each row so teams can trust where each lead came from and when it was last verified.',
    ],
  },
  {
    slug: 'scaling-siila-aws',
    category: 'Cloud',
    title: 'Scaling Siila.org to 100K+ concurrent users on AWS',
    excerpt:
      'Load balancing, Redis caching, auto-scaling groups, and the architecture decisions that kept the platform fast under peak traffic.',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    content: [
      'To scale Siila.org, we first profiled real bottlenecks instead of guessing. The two biggest pressure points were read-heavy API endpoints and sudden traffic bursts during campaign windows.',
      'We placed Redis in front of frequently requested discovery APIs and introduced cache key versioning to avoid stale content issues during updates. This reduced origin load dramatically under peak demand.',
      'On the compute side, we used autoscaling policies tied to both CPU and request latency. That kept the platform responsive while avoiding unnecessary overprovisioning during low-traffic periods.',
      'We also hardened the data layer by optimizing expensive queries and adding defensive indexes. Combined with load balancing and health-check based routing, this gave us stable behavior during spikes.',
      'The biggest lesson: scale architecture is not only infra. It is equal parts caching strategy, query discipline, observability, and controlled rollout practices.',
    ],
  },
  {
    slug: 'react-native-kumar-jewellers',
    category: 'Mobile',
    title: 'Shipping Kumar Jewellers: React Native from catalog to WhatsApp',
    excerpt:
      'How we built a jewelry showcase app with inquiry flows, store locator, and Play Store launch for a retail brand.',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    content: [
      'For Kumar Jewellers, the product goal was clear: make discovery beautiful and inquiry frictionless. Users should browse collections quickly and contact the team without unnecessary forms.',
      'We designed category-first navigation with optimized image loading to keep scrolling smooth, even on mid-range Android devices. Performance was critical because catalog UX directly impacts conversion.',
      'Instead of forcing account creation, we prioritized intent actions: quick inquiry, WhatsApp handoff, and store location access. This reduced drop-offs and aligned with how users actually buy jewelry.',
      'On the engineering side, we kept modules lightweight and reusable so future collection updates remain simple. Build and release automation also helped us ship updates with confidence.',
      'The project reaffirmed a core truth for commerce apps: speed, trust, and direct communication outperform feature-heavy complexity.',
    ],
  },
  {
    slug: 'solidjs-abhidhya',
    category: 'EdTech',
    title: 'Building Abhidhya: contests, exams, and RazorPay at scale',
    excerpt:
      'SolidJS frontend, Flask API, RabbitMQ async jobs, and Google Cloud load balancing for a competitive learning portal.',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    content: [
      'Abhidhya needed a platform that could support timed exams, live contests, and payment-backed enrollments without compromising speed. We selected a stack that balances UX responsiveness with backend resilience.',
      'The frontend was optimized for high-frequency interactions during exam sessions. On the backend, async processing handled heavy non-blocking tasks like notification fan-out and post-exam computations.',
      'Payment reliability was non-negotiable. We implemented verification-safe transaction flows and retry-aware callbacks to avoid duplicate or inconsistent states.',
      'Infrastructure on Google Cloud was configured for predictable scaling, with load balancing and monitoring tuned for bursty event windows.',
      'The result is a platform that remains stable during high-pressure moments where reliability directly affects student trust.',
    ],
  },
  {
    slug: 'design-systems-2026',
    category: 'Design',
    title: 'Design systems that developers actually use',
    excerpt:
      'Figma tokens, Tailwind alignment, and Storybook patterns we use to keep UI consistent across client projects.',
    date: 'Jan 5, 2026',
    readTime: '4 min read',
    content: [
      'A design system fails when it looks good in docs but slows down product delivery. We build systems around developer ergonomics, not only visual consistency.',
      'Our baseline includes naming conventions that map directly from Figma tokens to code variables. This removes ambiguity and reduces translation errors during implementation.',
      'We treat components as behavior contracts, not only UI blocks. States, spacing, interactions, and edge cases are documented before development starts.',
      'Storybook is used as a shared source of truth between design and engineering. It makes QA faster and prevents regressions when teams move quickly.',
      'The best systems are boring in the best way: predictable, scalable, and easy to extend under real deadlines.',
    ],
  },
  {
    slug: 'seo-growth-playbook',
    category: 'Growth',
    title: 'Our technical SEO playbook for product launches',
    excerpt:
      'Core Web Vitals, structured data, and content strategy — what we run before and after every major release.',
    date: 'Dec 18, 2025',
    readTime: '6 min read',
    content: [
      'SEO outcomes are usually decided before launch day. We run technical audits during build cycles so critical issues never make it to production.',
      'Our checklist includes crawlability, metadata coverage, canonical consistency, schema implementation, and performance thresholds for key pages.',
      'After release, we monitor indexation behavior and query trends in short intervals. Early signals help us fix gaps before they become ranking losses.',
      'Content strategy is tied to product intent. We prioritize pages that map to buyer problems, then support them with topical clusters and internal linking.',
      'Sustainable SEO growth is operational discipline: technical hygiene, publish cadence, and continuous iteration based on real data.',
    ],
  },
]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
