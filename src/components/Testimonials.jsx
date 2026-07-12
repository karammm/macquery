import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const testimonials = [
  {
    name: 'Aymar de Gunzburg',
    role: 'Founder',
    company: 'Siila.org',
    initials: 'AG',
    text: 'What impressed us the most was how available and responsive the team was throughout the entire process. Every question was answered quickly, and the end result exceeded our expectations.',
    tags: ['Web Development', 'Cloud Solutions'],
  },
  {
    name: 'Aman Kumar',
    role: 'Director',
    company: 'Kumar Jewellers',
    initials: 'AK',
    text: 'From day one, the communication was seamless. They walked us through every decision, kept timelines tight, and were genuinely invested in our success. Our customers love the final product.',
    tags: ['Mobile Apps', 'UI/UX Design'],
  },
  {
    name: 'Sumeda Panwar',
    role: 'Marketing Head',
    company: 'Regalo',
    initials: 'SP',
    text: 'Their strategic approach set them apart. Before writing a single line of code, they spent time understanding our market, audience, and goals. The entire experience was effortless.',
    tags: ['SEO & Growth', 'Content Strategy'],
  },
  {
    name: 'Magda Laroche',
    role: 'Operations Director',
    company: 'Magda Gallery',
    initials: 'ML',
    text: 'They turned a tangle of disconnected tools into one ERP our whole team actually trusts. Publishing, accounting, and outreach finally talk to each other — and the role-based access gave us real peace of mind at scale.',
    tags: ['ERP', 'Process Automation'],
  },
  {
    name: 'Dr. Rakesh Sharma',
    role: 'Founder',
    company: 'Abhidhya',
    initials: 'RS',
    text: 'Our biggest fear was the platform crashing during live exams. It never did. Thousands of students competed at once and everything stayed fast and fair. The engineering depth here is real.',
    tags: ['Scalability', 'EdTech'],
  },
  {
    name: 'Daniel Okoro',
    role: 'Head of Logistics',
    company: 'Velocys',
    initials: 'DO',
    text: 'We used to find out about shipment problems far too late. Now disruptions and compliance risks surface early, with a clear recovery path. It has genuinely changed how our cross-border operations run.',
    tags: ['Logistics', 'AI Solutions'],
  },
  {
    name: 'Priya Nair',
    role: 'CTO',
    company: 'Meghnify',
    initials: 'PN',
    text: 'They cut our cloud spend without us ever feeling a dip in reliability. Releases are faster and safer, and we finally have observability we can act on. A true engineering partner, not just a vendor.',
    tags: ['Cloud & DevOps', 'Cost Optimization'],
  },
]

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
