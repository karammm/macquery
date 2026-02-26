import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

const team = [
  { name: 'Karamjit Verma', role: 'Founder & CEO', bio: 'Drives company vision, client relationships, and growth strategy — turning ideas into scalable digital businesses.', initials: 'KV', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFqD5fwBPaPpA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675400233265?e=1773878400&v=beta&t=2hlhwM3DXZ8JwLbqEV18tnfgsKV9JMlFxM3A8NalI9U' },
  { name: 'Asmita Verma', role: 'Managing Director', bio: 'Oversees day-to-day operations, team coordination, and project delivery — ensuring every engagement runs smoothly from start to finish.', initials: 'AV', photo: 'src/assets/images/asmita-verma.png' },
  { name: 'Shivam Sharma', role: 'Operations Director', bio: 'Manages workflows, resource planning, and process optimization to keep projects on time and within budget.', initials: 'SS', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFDvtJZqSh5DA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692700699632?e=1773878400&v=beta&t=LSCwN9rYpQucnVlABzdZKYlaM_uTY5OeKqe7BxiEF0A' },
  { name: 'Hritik Suman', role: 'Technical Director', bio: 'Leads architecture decisions, tech stack selection, and engineering quality across all client projects.', initials: 'HS', photo: 'https://avatars.githubusercontent.com/u/49412100?v=4' },
]

function TeamPhoto({ src, initials }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="size-18 rounded-2xl bg-purple-500/15 flex items-center justify-center group-hover:scale-105 transition-transform">
        <span className="text-purple-300 text-2xl font-extrabold">{initials}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" className="py-28 lg:py-36 border-t border-border">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14 lg:mb-20"
        >
          <p className="text-purple-400 text-sm font-semibold mb-4">Team</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
            The people behind MacQuery
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            A small, senior team that cares deeply about craft and delivering real results.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-2xl bg-card border border-border hover:border-purple-500/20 overflow-hidden transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-br from-purple-600/15 to-violet-600/5 flex items-center justify-center relative overflow-hidden">
                <TeamPhoto src={m.photo} initials={m.initials} />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-white mb-1">{m.name}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">{m.role}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{m.bio}</p>
                {/* <div className="flex gap-2.5">
                  {[Linkedin, Twitter, Github].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="size-8 rounded-lg bg-border/60 flex items-center justify-center text-text-muted hover:bg-purple-500 hover:text-white transition-all cursor-pointer"
                    >
                      <Icon size={14} />
                    </button>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
