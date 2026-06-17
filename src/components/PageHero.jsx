import { motion } from 'framer-motion'

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <header className="page-hero">
      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {label && <span className="section-label">{label}</span>}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text tracking-tight leading-tight mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-text-secondary text-lg leading-relaxed">{subtitle}</p>
          )}
          {children}
        </motion.div>
      </div>
    </header>
  )
}
