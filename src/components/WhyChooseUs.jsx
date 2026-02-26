import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Users, Clock, Award, HeartHandshake, CheckCircle2 } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Projects delivered on time with rapid iteration cycles.', color: 'from-amber-500 to-orange-500' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security baked into every layer.', color: 'from-emerald-500 to-teal-500' },
  { icon: Users, title: 'Expert Team', desc: 'Senior developers, designers, and strategists.', color: 'from-blue-500 to-cyan-500' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance whenever you need it.', color: 'from-violet-500 to-purple-500' },
  { icon: Award, title: 'Proven Results', desc: 'A track record of successful launches and happy clients.', color: 'from-pink-500 to-rose-500' },
  { icon: HeartHandshake, title: 'Client First', desc: 'Your goals drive every decision we make.', color: 'from-purple-500 to-violet-600' },
]

const stats = [
  { num: '10+', label: 'Projects' },
  { num: '6+', label: 'Clients' },
  { num: '99%', label: 'Satisfaction' },
  { num: '8+', label: 'Years Experience' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 lg:py-36 border-t border-border">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-purple-400 text-sm font-semibold mb-4">Why MacQuery</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
              We don't just build — we <span className="text-gradient">partner</span> with you
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-10">
              When you work with us, you get a dedicated team that treats your business like their own. We combine technical expertise with strategic thinking to deliver solutions that actually move the needle.
            </p>

            <div className="grid grid-cols-4 gap-6 mb-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-extrabold text-white">{s.num}</div>
                  <div className="text-text-muted text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {['Transparent communication at every step', 'Agile development with weekly demos', '1 year of free post-launch support'].map((t) => (
                <div key={t} className="flex items-center gap-3.5">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span className="text-text-secondary text-sm">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div ref={ref} className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-purple-500/20 hover:bg-card-hover transition-all duration-300"
              >
                <div className={`size-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
