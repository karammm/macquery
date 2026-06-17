import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CpuArchitecture from './CpuArchitecture'

export default function PoweredBy({ showCta = true }) {
  return (
    <section className="py-20 lg:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.1)_0%,_transparent_60%)]" />
      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="section-label">Architecture</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight mb-5">
            Powered by <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
            Our core stack is engineered for AI-ready workflows, real-time scale, and seamless integration — from intelligent automation to cloud-native delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CpuArchitecture label="MacQuery" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-medium">
            <span className="size-2 rounded-full bg-purple-400 animate-pulse" />
            All systems operational
          </div>
          {showCta && (
            <Link to="/services" className="btn-outline text-sm">
              Explore our stack
              <ArrowRight size={14} />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
