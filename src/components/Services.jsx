import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Globe, Smartphone, Search, Cloud, BrainCircuit, Palette, Box, FileText, ArrowUpRight, X, CheckCircle2, Cpu } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites and web apps built with React, Next.js, and modern tech stacks. Blazing fast and fully responsive.',
    color: 'from-blue-500 to-cyan-500',
    detail: {
      overview: 'We build high-performance web applications using cutting-edge frameworks and tools. From single-page apps to complex enterprise platforms, every project is crafted for speed, accessibility, and scalability.',
      benefits: [
        'SEO-optimized server-side rendering for maximum visibility',
        'Responsive design that works flawlessly on every device',
        'Blazing fast load times with code splitting and lazy loading',
        'Real-time features with WebSocket integration',
      ],
      technologies: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      timeline: '4–8 weeks',
      deliverables: ['Fully Responsive Website', 'CMS Integration', 'Analytics Dashboard', 'SEO Setup', 'Deployment & CI/CD'],
    },
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform apps for iOS and Android that users love. Built with React Native and Flutter.',
    color: 'from-emerald-500 to-teal-500',
    detail: {
      overview: 'We specialize in creating robust, scalable mobile applications that drive business growth. Our team leverages cutting-edge technologies to deliver solutions that are not only functional but also future-proof.',
      benefits: [
        'Reduced development time by 40% using modern frameworks',
        'Scalable architecture supporting millions of users',
        'Cross-platform compatibility ensuring maximum reach',
        'Real-time synchronization across all devices',
      ],
      technologies: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Redis', 'WebRTC'],
      timeline: '3–6 months',
      deliverables: ['Mobile Applications', 'Web Dashboard', 'Admin Panel', 'API Documentation', 'Deployment Guide'],
    },
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    desc: 'Data-driven SEO strategies that improve rankings, increase organic traffic, and accelerate sustainable growth.',
    color: 'from-amber-500 to-orange-500',
    detail: {
      overview: 'Our growth team combines technical SEO, content strategy, and analytics to build a sustainable acquisition engine. We focus on long-term organic growth, not short-lived hacks.',
      benefits: [
        'Comprehensive technical and on-page SEO audits',
        'Keyword strategy aligned with buyer intent',
        'Measurable traffic and conversion improvements',
        'Ongoing performance monitoring and iteration',
      ],
      technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Schema Markup'],
      timeline: '3–6 months (ongoing)',
      deliverables: ['SEO Audit Report', 'Keyword Strategy', 'Content Calendar', 'Monthly Performance Reports', 'Backlink Plan'],
    },
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure and DevOps pipelines that keep your apps fast, secure, and always available.',
    color: 'from-violet-500 to-purple-600',
    detail: {
      overview: 'We architect and manage cloud infrastructure that scales effortlessly with your business. From containerized microservices to serverless functions, we design for reliability and cost efficiency.',
      benefits: [
        '99.99% uptime with multi-region deployments',
        'Auto-scaling infrastructure that handles traffic spikes',
        'Reduced cloud costs through resource optimization',
        'Automated CI/CD pipelines for rapid delivery',
      ],
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      timeline: '2–6 weeks',
      deliverables: ['Cloud Architecture Design', 'Infrastructure Setup', 'CI/CD Pipelines', 'Monitoring & Alerts', 'Security Hardening'],
    },
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    desc: 'Intelligent automation and AI-powered features that streamline operations and unlock new capabilities.',
    color: 'from-purple-500 to-violet-600',
    detail: {
      overview: 'We integrate artificial intelligence and machine learning into your products and workflows. From chatbots to predictive analytics, we help you automate the mundane and amplify what matters.',
      benefits: [
        'Automated repetitive tasks saving 60%+ of manual effort',
        'Intelligent recommendations that boost user engagement',
        'Natural language processing for smarter user interactions',
        'Predictive analytics for data-driven decision making',
      ],
      technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Pinecone', 'Hugging Face'],
      timeline: '4–10 weeks',
      deliverables: ['AI Feature Integration', 'Custom ML Models', 'API Endpoints', 'Training Data Pipeline', 'Performance Benchmarks'],
    },
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces and intuitive user experiences that look stunning and convert visitors into customers.',
    color: 'from-pink-500 to-rose-500',
    detail: {
      overview: 'Our design process is rooted in user research and iterative prototyping. We craft interfaces that are beautiful, accessible, and laser-focused on your business goals.',
      benefits: [
        'User-centered design backed by research and testing',
        'Consistent design systems that scale with your product',
        'Increased conversion rates through UX optimization',
        'Accessible designs meeting WCAG 2.1 standards',
      ],
      technologies: ['Figma', 'Framer', 'Adobe Creative Suite', 'Storybook', 'Tailwind CSS', 'Lottie'],
      timeline: '2–4 weeks',
      deliverables: ['Wireframes', 'High-Fidelity Mockups', 'Interactive Prototype', 'Design System', 'Developer Handoff'],
    },
  },
  {
    icon: Box,
    title: '3D Design',
    desc: 'Immersive 3D visuals, product renders, and interactive experiences that captivate and engage your audience.',
    color: 'from-cyan-500 to-blue-500',
    detail: {
      overview: 'We create stunning 3D assets, product visualizations, and interactive WebGL experiences. Whether it\'s for marketing, e-commerce, or immersive web experiences, we bring your ideas to life in three dimensions.',
      benefits: [
        'Photorealistic product renders that drive conversions',
        'Interactive 3D experiences running in the browser',
        'Lightweight optimized assets for fast page loads',
        'Animations that tell your brand story visually',
      ],
      technologies: ['Three.js', 'Blender', 'React Three Fiber', 'GSAP', 'Spline', 'WebGL'],
      timeline: '2–6 weeks',
      deliverables: ['3D Models & Assets', 'Product Renders', 'Interactive Web Scenes', 'Animation Files', 'Optimized Exports'],
    },
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    desc: 'Professional content creation and strategy that elevates your brand voice and engages your target audience.',
    color: 'from-teal-500 to-emerald-500',
    detail: {
      overview: 'We develop content strategies that align with your brand voice and business objectives. From blog posts to video scripts, we create content that resonates with your audience and drives meaningful engagement.',
      benefits: [
        'Brand-aligned messaging across all channels',
        'SEO-optimized content that ranks and converts',
        'Consistent publishing cadence that builds authority',
        'Data-driven content decisions based on performance',
      ],
      technologies: ['WordPress', 'Notion', 'Google Analytics', 'Canva', 'Buffer', 'Grammarly'],
      timeline: '2–4 weeks (ongoing)',
      deliverables: ['Content Strategy Document', 'Editorial Calendar', 'Blog Posts & Articles', 'Social Media Copy', 'Brand Voice Guide'],
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
            <h3 className="text-xl font-bold text-white">{title}</h3>
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
            <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
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
            <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
              <Cpu size={16} className="text-purple-400" />
              Technologies Used
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
            <h4 className="text-white text-sm font-semibold mb-3">Deliverables</h4>
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

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="services" className="py-28 lg:py-36">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          <p className="text-purple-400 text-sm font-semibold mb-4">Services</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
            Everything you need to grow online
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            AI-first development, modern design, and growth strategies — all under one roof to turn your ideas into products people love.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelected(s)}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-purple-500/25 hover:bg-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className={`size-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              <ArrowUpRight size={16} className="absolute top-6 right-6 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="site-container mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-text-muted text-xs">
        <p className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
          Includes 1 Year of free maintenance and support.
        </p>
        <p className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-text-muted/50 shrink-0 hidden sm:block" />
          Domain and hosting costs are not included in this pricing.
        </p>
      </div>

      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
