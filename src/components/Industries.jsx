import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Building2,
  Home,
  Factory,
  Rocket,
  Landmark,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const industries = [
  { icon: HeartPulse, title: 'Healthcare', desc: 'Digital solutions for hospitals, clinics, and health-tech startups.', color: 'from-rose-500 to-pink-500' },
  { icon: GraduationCap, title: 'Education', desc: 'EdTech platforms for schools, universities, and online learning.', color: 'from-blue-500 to-cyan-500' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Scalable online stores and marketplace solutions.', color: 'from-amber-500 to-orange-500' },
  { icon: Building2, title: 'Government', desc: 'Secure digital services for government agencies.', color: 'from-slate-500 to-zinc-500' },
  { icon: Home, title: 'Real Estate', desc: 'PropTech for agents, developers, and property managers.', color: 'from-emerald-500 to-teal-500' },
  { icon: Factory, title: 'Manufacturing', desc: 'Industry 4.0 solutions for smart factories.', color: 'from-violet-500 to-purple-500' },
  { icon: Rocket, title: 'Startups & SMEs', desc: 'Agile solutions for fast-growing businesses.', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Landmark, title: 'Finance & FinTech', desc: 'Secure financial technology and banking solutions.', color: 'from-sky-500 to-indigo-500' },
]

export default function Industries() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="site-container">
        <SectionHeader
          label="Industries"
          title={<>Solutions for <span className="text-gradient">Your Industry</span></>}
          subtitle="Every industry has unique challenges. Explore how we tailor web, mobile, AI, and cloud solutions to your sector."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={scrollToServices}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group text-left p-6 rounded-2xl glass-card cursor-pointer"
            >
              <div className={`size-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-text font-semibold mb-2 flex items-center gap-2">
                {item.title}
                <ArrowUpRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
