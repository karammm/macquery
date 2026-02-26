import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { name: 'Aymar de Gunzburg', role: 'Founder, Siila.org', text: 'What impressed us the most was how available and responsive the team was throughout the entire process. Every question was answered quickly, and they took the time to understand our vision before proposing a clear strategy. The end result exceeded our expectations.' },
  { name: 'Magda Danysz', role: 'Founder, Danysz Gallery', text: 'MacQuery didn\'t just execute — they challenged our approach and brought better ideas to the table. The strategy discussions were incredibly valuable, and their team was always just a message away. It felt like working with an in-house team, not an agency.' },
  { name: 'Raunak Burrows', role: 'Director, Om Ornaments', text: 'From day one, the communication was seamless. They walked us through every decision, kept timelines tight, and were genuinely invested in our success. Our customers love the final product, and the support after launch has been just as reliable.' },
  { name: 'Sumeda Panwar', role: 'Marketing Head, Regalo', text: 'Their strategic approach set them apart. Before writing a single line of code, they spent time understanding our market, audience, and goals. The responsiveness and attention to detail throughout the project made the entire experience effortless.' },
]

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const go = useCallback((d) => { setDir(d); setCur((c) => (c + d + testimonials.length) % testimonials.length) }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [paused, go])

  return (
    <section
      id="testimonials"
      className="py-28 lg:py-36 border-t border-border"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="site-container">
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 items-center">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-purple-400 text-sm font-semibold mb-4">Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Trusted by ambitious businesses
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-10">
              Don't just take our word for it — here's what our clients say about working with us.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => go(-1)}
                className="size-11 rounded-xl bg-card border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-border-light transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => go(1)}
                className="size-11 rounded-xl bg-card border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-border-light transition-all cursor-pointer"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right card */}
          <div className="lg:col-span-3 relative min-h-[280px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={cur}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir < 0 ? 40 : -40 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-10">
                  "{testimonials[cur].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonials[cur].name[0]}</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{testimonials[cur].name}</div>
                    <div className="text-text-muted text-sm mt-0.5">{testimonials[cur].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > cur ? 1 : -1); setCur(i) }}
                  className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${i === cur ? 'w-7 bg-purple-500' : 'w-2 bg-border-light'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
