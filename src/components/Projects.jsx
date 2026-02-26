import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ExternalLink, Users, Server, Gauge, Mail, ShieldCheck, Layers, GraduationCap, CreditCard, Box, Brush, Globe, Smartphone, Apple, CloudCog, DollarSign, BrainCircuit, Instagram, Database, Filter } from 'lucide-react'

const projects = [
  {
    title: 'Siila.org',
    desc: 'A full-scale wellness discovery platform serving thousands of users across yoga, meditation, and holistic communities. Engineered with an Angular SPA, Flask REST API, PostgreSQL + Redis stack — deployed on AWS with auto-scaling, load balancing, and end-to-end SEO optimization.',
    tags: ['Angular', 'Flask', 'PostgreSQL', 'Redis', 'AWS', 'SEO'],
    gradient: 'from-emerald-500 to-teal-500',
    logo: 'https://www.siila.org/favicon.ico',
    url: 'https://www.siila.org',
    badges: [
      { icon: Users, text: '100K+ concurrent users tested' },
      { icon: Server, text: 'AWS Auto-Scaling' },
      { icon: Gauge, text: 'Load Balanced' },
      { icon: CreditCard, text: 'Stripe Payments' },
      { icon: Globe, text: 'Multi-Language Support' },
    ],
    featured: true,
  },
  {
    title: 'Magda Gallery',
    desc: 'An enterprise platform for art galleries and institutions that streamlines operations and client engagement — from news publishing and invitation management to accounting, invoicing, and bulk email campaigns. Rebuilt on Angular 20 with a Flask backend, Celery + RabbitMQ for background processing, reactive UI patterns, role-based access control, and architecture designed to handle 76K+ concurrent accounts.',
    tags: ['React', 'Flask', 'Celery', 'RabbitMQ', 'RBAC', 'PostgreSQL'],
    gradient: 'from-indigo-500 to-violet-600',
    logo: 'https://admin.magdagallery.com/favicon.ico',
    url: 'https://admin.magdagallery.com/',
    secondaryUrl: { label: 'Admin Panel', url: 'https://app.artlogic.net/danysz/' },
    badges: [
      { icon: Users, text: '76K+ accounts supported' },
      { icon: Mail, text: 'Bulk email via Celery + RabbitMQ' },
      { icon: ShieldCheck, text: 'Role-Based Access Control' },
      { icon: Layers, text: 'Optimized production bundles' },
    ],
    featured: true,
  },
  {
    title: 'AI Instagram Scraper',
    desc: 'An intelligent n8n-powered automation that scrapes Instagram profiles based on natural language prompts — for example, "Iyengar Yoga teachers in Lisbon." The pipeline filters, enriches, and structures the data, then exports it to both Excel and PostgreSQL for analysis and outreach.',
    tags: ['n8n', 'AI', 'Instagram API', 'PostgreSQL', 'Python', 'Data Pipeline'],
    gradient: 'from-fuchsia-500 to-purple-600',
    logo: null,
    url: null,
    badges: [
      { icon: BrainCircuit, text: 'AI-Powered Prompt Queries' },
      { icon: Instagram, text: 'Instagram Data Extraction' },
      { icon: Filter, text: 'Smart Filtering & Enrichment' },
      { icon: Database, text: 'Excel + PostgreSQL Export' },
    ],
    featured: true,
  },
  {
    title: 'Meghnify',
    desc: 'A cloud management platform helping startups and enterprises optimize, secure, and scale their AWS and Azure infrastructure. Features 24/7 monitoring, automated incident response, DevOps automation with CI/CD pipelines, and cost optimization strategies delivering up to 40% savings — trusted by 500+ companies with a 99.9% uptime SLA.',
    tags: ['AWS', 'Azure', 'DevOps', 'CI/CD', 'Kubernetes', 'Terraform', 'SOC 2'],
    gradient: 'from-sky-500 to-indigo-600',
    logo: null,
    url: 'https://meghnify.com',
    badges: [
      { icon: CloudCog, text: 'Managed AWS & Azure' },
      { icon: DollarSign, text: 'Up to 40% Cost Reduction' },
      { icon: ShieldCheck, text: 'SOC 2 & HIPAA Compliant' },
      { icon: Gauge, text: '99.9% Uptime SLA' },
    ],
    featured: true,
  },
  {
    title: 'Abhidhya',
    desc: 'A competitive e-learning portal featuring live contests, structured practice modules, and timed exams — built for scale with SolidJS on the frontend, Flask REST API, MySQL with Redis caching, and RabbitMQ for async task processing. Hosted on Google Cloud with load balancing and RazorPay-powered payments.',
    tags: ['SolidJS', 'Flask', 'MySQL', 'Redis', 'RabbitMQ', 'Google Cloud', 'Tailwind CSS', 'RazorPay'],
    gradient: 'from-orange-500 to-amber-500',
    logo: 'https://abhidhya-prod-s3.s3.amazonaws.com/abhidhya/institutes/Abhidhya-Aligarh%20',
    url: 'https://www.abhidhya.org',
    badges: [
      { icon: GraduationCap, text: 'Contests, Practice & Exams' },
      { icon: Server, text: 'Google Cloud Load Balancer' },
      { icon: CreditCard, text: 'RazorPay Payments' },
      { icon: Layers, text: 'RabbitMQ Async Processing' },
    ],
    featured: true,
  },
  {
    title: '3D Design Portfolio',
    desc: 'Showcasing our in-house 3D design capabilities — from character modeling and environment art to product visualization and stylized renders. Created by our designer Asmita, featured on ArtStation.',
    tags: ['Blender', '3D Modeling', 'Texturing', 'Rendering', 'Character Art'],
    gradient: 'from-cyan-500 to-blue-600',
    logo: null,
    url: 'https://www.artstation.com/asmitaasmi99',
    badges: [
      { icon: Box, text: '3D Modeling & Sculpting' },
      { icon: Brush, text: 'Texturing & Materials' },
      { icon: Layers, text: 'Environment & Product Viz' },
    ],
    featured: true,
  },
  {
    title: 'MacQuery Dashboard',
    desc: 'Internal analytics dashboard for real-time project tracking, team management, and performance metrics.',
    tags: ['Dashboard', 'Analytics', 'React'],
    gradient: 'from-blue-500 to-cyan-500',
    logo: null,
    url: null,
  },
  {
    title: 'Om Ornaments',
    desc: 'A handcrafted jewelry showcase app featuring high-quality catalogs of gold, silver, bridal, and fashion collections — with direct inquiry forms, WhatsApp integration, and store locator. Live on Google Play Store.',
    tags: ['React Native', 'Mobile App', 'Android', 'WhatsApp API'],
    gradient: 'from-pink-500 to-rose-500',
    logo: null,
    url: 'https://play.google.com/store/apps/details?id=com.omornament.om_ornament',
  },
  {
    title: 'Coming Soon',
    desc: 'A new cross-platform mobile app currently in development — launching on both Apple App Store and Google Play Store. Stay tuned.',
    tags: ['React Native', 'iOS', 'Android', 'Cross-Platform'],
    gradient: 'from-slate-500 to-zinc-600',
    logo: null,
    url: null,
    comingSoon: true,
  },
]

function FeaturedCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group relative sm:col-span-2 lg:col-span-3 rounded-3xl bg-card border border-border hover:border-purple-500/25 overflow-hidden transition-all duration-300"
    >
      <div className="grid lg:grid-cols-2">
        {/* Visual side */}
        <div className={`relative h-56 lg:h-auto bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-between overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10 flex items-center gap-4">
            {project.logo ? (
              <img src={project.logo} alt={project.title} className="size-12 rounded-xl bg-white/10 backdrop-blur-sm p-1.5 object-contain" />
            ) : (
              <div className="size-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">{project.title[0]}</span>
              </div>
            )}
            <div>
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-white/90 transition-colors flex items-center gap-1 mt-0.5">
                  {project.url.replace('https://', '')}
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>

          {project.badges && (
            <div className="relative z-10 flex flex-wrap gap-3 mt-6">
              {project.badges.map((b) => (
                <div key={b.text} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                  <b.icon size={13} className="text-white/80" />
                  <span className="text-white/90 text-xs font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/15">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                Visit Live Site
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.secondaryUrl && (
              <a href={project.secondaryUrl.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-muted hover:text-purple-400 text-sm font-medium transition-colors">
                {project.secondaryUrl.label}
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group relative rounded-2xl bg-card border border-border hover:border-purple-500/20 overflow-hidden transition-all duration-300 cursor-pointer"
    >
      <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-white/5 blur-xl" />

        {project.logo ? (
          <img src={project.logo} alt={project.title} className="relative z-10 size-14 rounded-2xl bg-white/10 backdrop-blur-sm p-2 object-contain group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="relative z-10 size-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="text-white font-black text-2xl">{project.title[0]}</span>
          </div>
        )}

        {project.comingSoon && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/15 backdrop-blur-sm">
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">Coming Soon</span>
          </div>
        )}

        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 size-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20">
            <ArrowUpRight size={15} className="text-white/80" />
          </a>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium text-text-muted bg-border/60">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter((p) => p.featured)
  const regular = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 lg:py-36 border-t border-border">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-20"
        >
          <div className="max-w-xl">
            <p className="text-purple-400 text-sm font-semibold mb-4">Projects</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Work we're proud of
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Real work, real results — here's how we've helped businesses launch, scale, and stand out.
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} inView={inView} />
          ))}
          {regular.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + featured.length} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
