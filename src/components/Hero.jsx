import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Futuristic AI backdrop: orbital rings + glow nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 size-[540px] rounded-full border border-purple-500/10 animate-[spin_32s_linear_infinite]" />
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 size-[420px] rounded-full border border-dashed border-purple-400/15 animate-[spin_24s_linear_infinite_reverse]" />
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 size-[300px] rounded-full border border-violet-400/10 animate-[spin_18s_linear_infinite]" />

        <div className="absolute left-[22%] top-[22%] size-3 rounded-full bg-purple-400/70 shadow-[0_0_28px_rgba(192,132,252,0.8)] animate-pulse" />
        <div className="absolute right-[24%] top-[28%] size-2.5 rounded-full bg-violet-400/70 shadow-[0_0_24px_rgba(167,139,250,0.75)] animate-pulse" />
        <div className="absolute left-[30%] bottom-[24%] size-2 rounded-full bg-purple-300/70 shadow-[0_0_20px_rgba(216,180,254,0.75)] animate-pulse" />
        <div className="absolute right-[28%] bottom-[18%] size-3 rounded-full bg-purple-500/65 shadow-[0_0_26px_rgba(168,85,247,0.75)] animate-pulse" />

        <div className="absolute left-[12%] top-[30%] w-56 h-56 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[16%] w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />

        {/* Pseudo 3D floating panes */}
        <motion.div
          animate={{ y: [0, -18, 0], rotateX: [12, 18, 12], rotateY: [-20, -10, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[14%] top-[24%] w-28 h-20 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/15 to-transparent backdrop-blur-sm"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ y: [0, 16, 0], rotateX: [10, 4, 10], rotateY: [18, 28, 18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute right-[16%] top-[22%] w-24 h-16 rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-transparent backdrop-blur-sm"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ y: [0, -14, 0], rotateX: [8, 14, 8], rotateY: [12, 6, 12] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute left-[24%] bottom-[20%] w-20 h-20 rounded-xl border border-purple-300/20 bg-gradient-to-br from-purple-400/15 to-transparent backdrop-blur-sm"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotateX: [6, 12, 6], rotateY: [-12, -22, -12] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute right-[20%] bottom-[24%] w-32 h-18 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/15 to-transparent backdrop-blur-sm"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.12)_0%,_transparent_55%)]" />

      <div className="relative site-container text-center max-w-4xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-8">
            <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
            AI-first digital studio
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text leading-[1.08] tracking-tight mb-8">
            Build smart,{' '}
            <span className="text-gradient">ship fast</span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            We design and ship AI-driven web and mobile apps with scalable cloud infrastructure and pixel-perfect UI/UX — tailored for your industry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link to="/services" className="btn-primary">
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Free Consultation
            </Link>
          </div>

          <p className="text-text-muted text-sm">Trusted by ambitious teams worldwide</p>
        </Reveal>
      </div>
    </section>
  )
}
