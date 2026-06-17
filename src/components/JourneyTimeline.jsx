import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'

const milestones = [
  {
    id: 'founded',
    year: '2024',
    label: '2024',
    title: 'The Beginning',
    desc: 'MacQuery was founded in New Delhi — focused on web and mobile builds for local businesses with an emphasis on craft and reliability.',
  },
  {
    id: 'first-deliveries',
    year: '2024',
    label: 'Late 2024',
    title: 'First Deliveries',
    desc: 'Shipped our earliest client products end-to-end — from discovery and design through launch, support, and iteration.',
  },
  {
    id: 'cloud-ai',
    year: '2025',
    label: '2025',
    title: 'Cloud & AI',
    desc: 'Expanded into AWS, GCP, DevOps, and intelligent workflows — LLM integrations, automation pipelines, and scalable architecture.',
  },
  {
    id: 'present',
    year: 'Present',
    label: 'Now',
    title: 'Growing Portfolio',
    desc: 'Delivering products across wellness, ed-tech, retail, and cloud — from high-traffic platforms to production mobile apps.',
    highlight: true,
  },
]

export default function JourneyTimeline() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <section className="py-20 lg:py-28 border-b border-border overflow-hidden">
      <div className="site-container mb-12 lg:mb-16">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight text-center mb-4">
            The journey of <span className="text-gradient">MacQuery</span>
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto">
            Founded in 2024 — from our first launches to a full-stack digital partner building for teams today.
          </p>
        </Reveal>
      </div>

      <div ref={trackRef} className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 mx-8">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-purple-600 to-violet-500"
            style={{ scaleX: lineScale }}
          />
        </div>

        <div data-lenis-prevent className="flex gap-5 lg:gap-8 overflow-x-auto pb-4 px-6 lg:px-[max(1.5rem,calc((100vw-1100px)/2+2.5rem))] scrollbar-hide snap-x snap-mandatory">
          {milestones.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08} className="snap-center shrink-0">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`w-[280px] sm:w-[320px] p-7 lg:p-8 rounded-2xl border transition-colors duration-300 ${
                  m.highlight
                    ? 'glass-card border-purple-500/30 bg-purple-500/5'
                    : 'glass-card border-border'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${m.highlight ? 'text-purple-400' : 'text-text-muted'}`}>
                  {m.label}
                </span>
                <h3 className="text-xl font-bold text-text mt-3 mb-3">{m.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{m.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
