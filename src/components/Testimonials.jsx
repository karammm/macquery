import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { testimonials } from '../data/testimonials'


function TestimonialCard({ t }) {
  return (
    <article className="relative w-[300px] sm:w-[360px] shrink-0 mx-3 p-6 rounded-2xl glass-card flex flex-col">
      <div className="absolute top-5 right-5 size-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
        <Quote size={15} className="text-purple-400" />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={13} className="fill-purple-400 text-purple-400" />
        ))}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1 pr-6">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-5">
        <div className="size-10 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
          <span className="text-purple-300 font-bold text-xs">{t.initials}</span>
        </div>
        <div className="min-w-0">
          <div className="text-text text-sm font-semibold truncate">{t.name}</div>
          <div className="text-text-muted text-xs truncate">{t.role} · {t.company}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {t.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-text-secondary border border-border">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="site-container">
        <SectionHeader
          label="Testimonials"
          title={<>What our <span className="text-gradient">clients say</span></>}
          subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="relative mt-12 lg:mt-16"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="testimonials-track items-stretch">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
