import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Coffee, Laptop, GraduationCap } from 'lucide-react'
import PageHero from '../components/PageHero'

const perks = [
  { icon: Laptop, title: 'Remote-friendly', desc: 'Hybrid work from New Delhi with flexible hours.' },
  { icon: Coffee, title: 'Learning budget', desc: 'Courses, conferences, and tools that level you up.' },
  { icon: GraduationCap, title: 'Real ownership', desc: 'Ship production code on day one — no ticket treadmill.' },
]

const openings = [
  {
    title: 'Senior React / Full-Stack Developer',
    type: 'Full-time',
    location: 'New Delhi / Remote',
    desc: 'Build performant SPAs and APIs with React, Node, and modern cloud tooling. 4+ years experience required.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'New Delhi / Hybrid',
    desc: 'Own end-to-end product design — research, systems, prototypes, and developer handoff in Figma.',
  },
  {
    title: 'AI Automation Engineer',
    type: 'Contract / Full-time',
    location: 'Remote',
    desc: 'Design n8n workflows, LLM integrations, and data pipelines for client automation projects.',
  },
  {
    title: 'DevOps / Cloud Engineer',
    type: 'Full-time',
    location: 'Remote',
    desc: 'AWS, GCP, Kubernetes, Terraform, and CI/CD for high-availability client platforms.',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title={<>Build the future with <span className="text-gradient">MacQuery</span></>}
        subtitle="Join a senior, product-minded team shipping real software for ambitious clients — not slide decks."
      />

      <section className="py-20 border-b border-border">
        <div className="site-container">
          <h2 className="text-2xl font-bold text-text text-center mb-12">Why work with us</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass-card text-center"
              >
                <p.icon size={28} className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-text font-semibold mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-text mb-8">Open positions</h2>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 lg:p-8 rounded-2xl glass-card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
              >
                <div>
                  <h3 className="text-text font-semibold text-lg mb-2">{job.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-3 max-w-2xl">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-text-secondary">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary shrink-0 self-start lg:self-center">
                  Apply now
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-text-muted text-sm text-center mt-12">
            Don&apos;t see your role? Email{' '}
            <a href="mailto:info@macquery.in" className="text-purple-400 hover:text-purple-300">info@macquery.in</a>
            {' '}with your portfolio.
          </p>
        </div>
      </section>
    </>
  )
}
