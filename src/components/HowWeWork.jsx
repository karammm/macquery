import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  { icon: Compass, num: '01', title: 'Discovery', desc: 'We learn your goals, audience, and competitive landscape to define the strategy.' },
  { icon: PenTool, num: '02', title: 'Design', desc: 'Wireframes, prototypes, and visual design tailored to your brand and users.' },
  { icon: Code2, num: '03', title: 'Develop', desc: 'Clean, scalable code with rigorous testing at every stage of development.' },
  { icon: Rocket, num: '04', title: 'Launch', desc: 'Deployment, optimization, and ongoing support to ensure continued success.' },
]

export default function HowWeWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-28 lg:py-36 border-t border-border">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-14 lg:mb-20"
        >
          <p className="text-purple-400 text-sm font-semibold mb-4">Process</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
            How we bring ideas to life
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            A clear, proven process that keeps projects on track and delivers results.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative p-7 rounded-2xl bg-card border border-border"
            >
              <span className="text-[64px] font-black text-border leading-none absolute top-5 right-6">{s.num}</span>
              <div className="relative">
                <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <s.icon size={22} className="text-purple-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 w-7 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
