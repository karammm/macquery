import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code2, Smartphone, Palette, BrainCircuit, Cloud } from 'lucide-react'
import macqueryLogo from '../assets/images/macquerylogo.png'

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const n = parseInt(to), step = Math.max(1, Math.floor(n / 80))
        let c = 0
        const id = setInterval(() => { c = Math.min(c + step, n); setVal(c); if (c >= n) clearInterval(id) }, 16)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const op = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />

      <motion.div style={{ opacity: op }} className="relative w-full site-container pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <span className="size-1.5 rounded-full bg-green-400" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-8"
            >
              Build smart,{' '}
              <span className="text-gradient">ship fast</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-12 max-w-lg"
            >
              We design and ship AI-driven web &amp; mobile apps with scalable cloud infrastructure and pixel-perfect UI/UX — everything you need to automate, launch, and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border hover:border-border-light text-white text-sm font-semibold transition-all cursor-pointer"
              >
                View Our Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-12 lg:gap-14"
            >
              {[
                { val: '10', s: '+', label: 'Projects' },
                { val: '6', s: '+', label: 'Clients' },
                { val: '99', s: '%', label: 'Satisfaction' },
                { val: '8', s: '+', label: 'Years Experience' },
              ].map((st) => (
                <div key={st.label}>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white"><Counter to={st.val} suffix={st.s} /></div>
                  <div className="text-text-muted text-sm mt-1.5">{st.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full max-w-lg mx-auto" style={{ height: 460 }}>
              {/* Glowing orbs */}
              <motion.div animate={{ x: [0, 15, 0], y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-600/15 blur-[100px]" />
              <motion.div animate={{ x: [0, -12, 0], y: [0, 12, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-violet-500/10 blur-[80px]" />

              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                  className="absolute size-[360px] rounded-full border border-purple-500/[0.07]"
                >
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-purple-400" />
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-2 rounded-full bg-violet-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  className="absolute size-[270px] rounded-full border border-dashed border-purple-500/10"
                >
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-cyan-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute size-[180px] rounded-full border border-violet-500/[0.07]"
                >
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-pink-400" />
                </motion.div>

                {/* Center logo */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 size-20 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-purple-600/30 overflow-hidden"
                >
                  <img src={macqueryLogo} alt="MacQuery" className="size-25 rounded-xl bg-white object-contain" />
                </motion.div>
              </div>

              {/* Floating service cards */}
              {[
                { icon: BrainCircuit, label: 'AI & Automation', desc: 'Smart solutions', color: 'from-purple-500 to-violet-600', cx: '50%', cy: '2%', float: { y: [0, -12, 0], x: [0, 5, 0] }, dur: 5, delay: 0.5 },
                { icon: Code2, label: 'Web Development', desc: 'Modern stacks', color: 'from-blue-500 to-cyan-500', cx: '92%', cy: '35%', float: { x: [0, 10, 0], y: [0, -6, 0] }, dur: 6, delay: 0.6 },
                { icon: Smartphone, label: 'Mobile Apps', desc: 'iOS & Android', color: 'from-emerald-500 to-teal-500', cx: '75%', cy: '82%', float: { y: [0, 10, 0], x: [0, -7, 0] }, dur: 5.5, delay: 0.7 },
                { icon: Palette, label: 'UI/UX Design', desc: 'Pixel perfect', color: 'from-pink-500 to-rose-500', cx: '0%', cy: '45%', float: { x: [0, -10, 0], y: [0, 8, 0] }, dur: 6.5, delay: 0.8 },
                { icon: Cloud, label: 'Cloud Solutions', desc: 'Scalable infra', color: 'from-amber-500 to-orange-500', cx: '20%', cy: '80%', float: { y: [0, -8, 0], x: [0, 6, 0] }, dur: 7, delay: 0.9 },
              ].map(({ icon: Icon, label, desc, color, cx, cy, float: f, dur, delay: d }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: d, duration: 0.5, type: 'spring', stiffness: 120 }}
                  style={{ left: cx, top: cy }}
                  className="absolute z-10 -translate-x-1/2"
                >
                  <motion.div
                    animate={f}
                    transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/90 backdrop-blur-md border border-border hover:border-purple-500/30 shadow-2xl shadow-black/30 transition-all duration-300">
                      <div className={`size-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold leading-tight whitespace-nowrap">{label}</div>
                        <div className="text-text-muted text-[10px] mt-0.5">{desc}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
