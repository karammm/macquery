import { motion } from 'framer-motion'

const clients = [
  { name: 'Siila.org', initial: 'S' },
  { name: 'Kumar Jewellers', initial: 'O' },
  { name: 'Velocys', initial: 'V' },
  { name: 'Abhidhya', initial: 'A' },
  { name: 'Meghnify', initial: 'M' },
  { name: 'Magda Gallery', initial: 'M' },
]

function ClientBadge({ name, initial }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-card shrink-0 mx-3">
      <div className="size-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-accent">
        {initial}
      </div>
      <span className="text-text-secondary text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function LogoMarquee() {
  const doubled = [...clients, ...clients]

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="site-container mb-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-sm"
        >
          Trusted by innovative companies worldwide
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <ClientBadge key={`${c.name}-${i}`} name={c.name} initial={c.initial} />
          ))}
        </div>
      </div>
    </section>
  )
}
