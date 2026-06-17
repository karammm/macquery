import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Zap, TrendingUp, ArrowRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const n = parseInt(to, 10)
        const step = Math.max(1, Math.floor(n / 60))
        let c = 0
        const id = setInterval(() => {
          c = Math.min(c + step, n)
          setVal(c)
          if (c >= n) clearInterval(id)
        }, 20)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function About({ preview = false, showHeader = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={`py-24 lg:py-32 border-t border-border relative overflow-hidden ${preview ? '' : ''}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.06)_0%,_transparent_60%)]" />

      <div className="site-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {showHeader && <span className="section-label">Our Core Engine</span>}
            {showHeader ? (
              <h2 className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight mb-6 leading-tight">
                Scaling businesses with{' '}
                <span className="text-gradient">digital mastery</span>
              </h2>
            ) : (
              <h2 className="text-2xl font-extrabold text-text tracking-tight mb-6 leading-tight">
                Scaling businesses with <span className="text-gradient">digital mastery</span>
              </h2>
            )}
            <p className="text-text-secondary text-base leading-relaxed mb-10">
              MacQuery bridges bold ideas and high-impact digital products. From AI automation to full-scale app ecosystems, we build foundations that help you launch, scale, and grow — based in New Delhi, serving clients worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Zap, title: 'Innovation First', desc: 'Modern tech stacks built for speed.' },
                { icon: TrendingUp, title: 'Success Driven', desc: 'Trusted by ambitious industry leaders.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl glass-card">
                  <item.icon size={20} className="text-purple-400 mb-3" />
                  <h3 className="text-text font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              View Our Work
              <ArrowRight size={16} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="p-8 lg:p-10 rounded-3xl glass-card border-purple-500/20">
              <p className="text-text-muted text-sm mb-2">Partners globally</p>
              <div className="text-6xl lg:text-7xl font-extrabold text-gradient mb-8">
                <Counter to="10" suffix="+" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Engineered to transform complex challenges into elegant digital solutions — web, mobile, cloud, and AI under one roof.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                {[
                  { val: '10', s: '+', label: 'Projects' },
                  { val: '6', s: '+', label: 'Clients' },
                  { val: '99', s: '%', label: 'Satisfaction' },
                  { val: '8', s: '+', label: 'Years' },
                ].map((st) => (
                  <div key={st.label}>
                    <div className="text-2xl font-extrabold text-text">
                      <Counter to={st.val} suffix={st.s} />
                    </div>
                    <div className="text-text-muted text-xs mt-1">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
