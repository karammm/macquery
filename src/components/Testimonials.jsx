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
]

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section id="testimonials" className="py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="site-container">
        <SectionHeader
          label="Testimonials"
          title={<>What our <span className="text-gradient">clients say</span></>}
          subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 relative p-7 lg:p-9 rounded-2xl glass-card min-h-[320px] flex flex-col"
          >
            <div className="absolute top-6 right-6 size-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Quote size={18} className="text-purple-400" />
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={15} className="fill-purple-400 text-purple-400" />
              ))}
            </div>

            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 flex-1 pr-2">
              &ldquo;{featured.text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-300 font-bold text-sm">{featured.initials}</span>
              </div>
              <div>
                <div className="text-text text-base font-semibold">{featured.name}</div>
                <div className="text-text-muted text-sm mt-0.5">{featured.role} · {featured.company}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {featured.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 text-text-secondary border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          <div className="space-y-5 lg:space-y-6">
            {rest.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-6 rounded-2xl glass-card min-h-[152px] flex flex-col justify-between"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="size-9 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-purple-300 font-bold text-[11px]">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-text text-sm font-semibold">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
