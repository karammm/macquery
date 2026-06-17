import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, align = 'center', className = '' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left max-w-2xl'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-14 lg:mb-18 ${alignCls} ${className}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text tracking-tight leading-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
