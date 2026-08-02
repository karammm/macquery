export const blogPosts = [
  {
    slug: 'eu-ai-act-article-50-transparency',
    category: 'EU AI Act',
    title: 'Article 50 applies from today. Here is what it actually requires.',
    excerpt:
      'Chatbot disclosure, machine-readable labelling of AI-generated media, and deepfake notice — the transparency obligations that took effect on 2 August 2026, and what compliance looks like in code.',
    date: 'Aug 2, 2026',
    readTime: '7 min read',
    content: [
      'The EU AI Act\'s transparency obligations under Article 50 apply from today, 2 August 2026. Unlike the high-risk requirements — which were deferred — this date did not move. The European Commission published its final guidelines on 20 July 2026 and confirmed the accompanying Code of Practice on Transparency of AI-Generated Content, so the interpretive ground is now settled rather than speculative.',
      'There are four distinct duties, and organisations routinely assume they are subject to one when they are subject to three. The first: any AI system that interacts directly with a natural person must inform that person they are dealing with AI. This is a provider obligation, it applies at the start of the interaction, and the disclosure has to be clear rather than buried in an interface. A support widget that only reveals its nature in a collapsed tooltip does not satisfy it.',
      'The second duty is the one with real engineering weight. Providers of systems generating synthetic audio, image, video or text must mark those outputs as artificially generated in a machine-readable format, and where feasible in a way the end user can perceive. Machine-readable is the operative phrase — a visible watermark alone does not discharge it. In practice this means provenance metadata attached at generation time and preserved through your pipeline, which is where most implementations quietly fail: the marking survives the model call and is then stripped by a downstream image resize or a CMS import.',
      'Third, deployers of systems producing deepfakes — image, audio or video content that appreciably resembles real people, objects or events — must disclose that the content is artificially generated. This is a deployer duty, not a provider one, so it attaches to the organisation publishing the content rather than to the vendor of the model.',
      'Fourth, deployers publishing AI-generated or AI-manipulated text to inform the public on matters of public interest must disclose that too. Marketing copy is generally outside this; a newsroom or a public body publishing analysis is not.',
      'There are carve-outs. Where content forms part of an evidently artistic, creative, satirical or fictional work, the obligation narrows to disclosing the existence of generated content in a manner that does not spoil the work. This is a real exemption, but it is narrower than the way it usually gets cited internally.',
      'Non-compliance carries administrative fines up to €15 million or 3% of total worldwide annual turnover, whichever is higher. That is below the €35 million / 7% ceiling reserved for prohibited practices, but it applies to a far broader set of deployments — and unlike high-risk conformity work, there is no runway left to plan against.',
      'The practical starting point is an inventory, not a policy. Enumerate every place a model touches something a person will see: support chat, generated product imagery, summarisation in your app, drafted outbound email. For each, decide whether you are provider or deployer, which of the four duties attaches, and whether your provenance metadata actually survives the full pipeline to publication. Most of the remediation we see is plumbing rather than legal work — and it is the plumbing that takes the time.',
    ],
  },
  {
    slug: 'high-risk-deadline-deferral-what-changed',
    category: 'EU AI Act',
    title: 'The high-risk deadline moved to 2027. Four things did not.',
    excerpt:
      'The Digital Omnibus deferred Annex III obligations to December 2027 and Annex I to August 2028. Reading that as a general reprieve is the expensive mistake.',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    content: [
      'The deferral of the EU AI Act\'s high-risk obligations has been widely reported as breathing room, and for some organisations it genuinely is. But the reprieve is narrower than the headlines suggest, and we have already seen teams stand down programmes that address obligations which were never postponed.',
      'What did move: new or substantially modified high-risk systems listed in Annex III — the standalone use cases including creditworthiness assessment, insurance risk pricing, employment screening, education access and certain public-service eligibility decisions — now have until 2 December 2027. Systems that are products or safety components of products already governed by EU product-safety law under Annex I, such as medical devices, machinery and lifts, have until 2 August 2028. That is a sixteen-month and twelve-month postponement respectively.',
      'What did not move, first: Article 50 transparency. Chatbot disclosure and the labelling of AI-generated content apply from 2 August 2026, and the Commission issued final guidelines in July 2026. If you operate customer-facing AI, your live obligation is this one, not the 2027 date.',
      'Second: the Article 5 prohibition covering the generation of non-consensual intimate imagery carries a 2 December 2026 date of its own. Prohibitions are the tier with the €35 million / 7% ceiling.',
      'Third: obligations on providers of general-purpose AI models have applied since August 2025. Organisations fine-tuning or substantially modifying a general-purpose model can find themselves treated as a provider, which is a status question worth resolving before it is decided for you.',
      'Fourth, and least discussed: nothing about GDPR changed. If your AI system processes personal data, Articles 5, 6, 22, 35 and the transfer rules apply today and applied before the AI Act existed. In our experience most GenAI programmes stall on a data protection impact assessment or a residency question long before an AI Act classification becomes the blocker.',
      'The sensible response to a deferral is re-sequencing, not cancellation. Conformity assessment, technical documentation, logging and post-market monitoring for a high-risk system is not work that compresses well into a final quarter — and the two-tier structure means an organisation with both Annex I and Annex III systems is now managing two separate deadlines against one backlog.',
      'Our own advice to clients has been consistent since the omnibus: keep the classification work, which is cheap and tells you which clock you are on; keep everything addressing obligations already in force; and move the expensive conformity work to match its real date rather than the one you originally planned against. Paying in 2026 for a 2028 obligation is not prudence, it is just an early invoice.',
    ],
  },
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
