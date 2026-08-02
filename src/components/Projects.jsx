import { motion as Motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import { getLenis } from './SmoothScroll'
import { ArrowUpRight, CheckCircle2, Sparkles, Target, X } from 'lucide-react'
import { projects } from '../data/projects'


function ProjectLogo({ project }) {
  if (project.logo) {
    return (
      <img
        src={project.logo}
        alt=""
        className="size-11 rounded-xl bg-white/5 border border-white/10 p-1.5 object-contain"
      />
    )
  }
  return (
    <div className="size-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
      <span className="text-purple-300 font-bold text-sm">{project.title[0]}</span>
    </div>
  )
}

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    const lenis = getLenis()
    lenis?.stop()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <Motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="relative w-full max-w-3xl max-h-[86vh] overflow-y-auto overscroll-contain rounded-3xl liquid-panel p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 size-9 rounded-xl bg-white/5 border border-white/10 text-text-muted hover:text-text hover:border-purple-500/40 transition-all"
          aria-label="Close"
        >
          <X size={16} className="mx-auto" />
        </button>

        <div className="pr-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-text">{project.title}</h3>
          <p className="text-text-secondary mt-3 leading-relaxed">{project.desc}</p>
        </div>

        {project.challenge && (
          <div className="mt-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.12] to-transparent p-5">
            <div className="flex items-center gap-2 mb-2">
              <Target size={15} className="text-purple-400" />
              <h4 className="text-purple-300 font-semibold text-sm uppercase tracking-wider">The challenge</h4>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">{project.challenge}</p>
          </div>
        )}

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl glass-card p-5">
            <h4 className="text-text font-semibold mb-3">Strategy &amp; planning</h4>
            <ul className="space-y-2.5">
              {(project.planning || []).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl glass-card p-5">
            <h4 className="text-text font-semibold mb-3">Optimizations &amp; workflow</h4>
            <ul className="space-y-2.5">
              {(project.optimizations || []).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.impact && project.impact.length > 0 && (
          <div className="mt-5 rounded-2xl glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={15} className="text-purple-400" />
              <h4 className="text-text font-semibold">Impact &amp; value delivered</h4>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-purple-500/[0.06] border border-purple-500/15 p-3.5 text-sm text-text-secondary leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.04] border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Visit live site
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </Motion.div>
    </Motion.div>
  )
}

function GlassProjectCard({ project, index, inView, compact = false, onOpenDetails }) {
  const tagLimit = compact ? 3 : 4

  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group relative flex flex-col h-full rounded-2xl glass-card overflow-hidden cursor-pointer"
      onClick={() => onOpenDetails(project)}
    >
      {/* Subtle unified header — purple glass only */}
      <div className="relative px-6 pt-6 pb-5 border-b border-white/[0.06] bg-gradient-to-br from-purple-500/[0.08] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.12),transparent_60%)] pointer-events-none" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <ProjectLogo project={project} />
            <div className="min-w-0">
              <h3 className="text-text font-semibold text-base truncate group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              {project.highlight && (
                <p className="text-purple-400/80 text-[11px] font-medium mt-0.5 truncate">
                  {project.highlight}
                </p>
              )}
            </div>
          </div>

          {project.comingSoon ? (
            <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20">
              Soon
            </span>
          ) : project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 size-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-text hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
              aria-label={`Visit ${project.title}`}
            >
              <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className={`text-text-secondary leading-relaxed flex-1 ${compact ? 'text-sm line-clamp-3' : 'text-sm line-clamp-4'}`}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/[0.05]">
          {project.tags.slice(0, tagLimit).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.04] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > tagLimit && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-text-muted">
              +{project.tags.length - tagLimit}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            View details
            <ArrowUpRight size={14} />
          </button>
        {project.url && !compact && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-purple-300 text-sm font-medium transition-colors"
          >
            Visit live site
            <ArrowUpRight size={14} />
          </a>
        )}
        </div>
      </div>
    </Motion.article>
  )
}

export default function Projects({ preview = false, showHeader = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const list = preview
    ? projects.filter((p) => p.featured).slice(0, 3)
    : projects

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="site-container">
        {showHeader && (
          <SectionHeader
            label="Projects"
            title={<>Work we're <span className="text-gradient">proud of</span></>}
            subtitle="Real products shipped for ambitious teams — web, mobile, cloud, and AI."
            align={preview ? 'center' : 'left'}
            className="mb-12 lg:mb-16"
          />
        )}

        <div
          ref={ref}
          className="grid gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <GlassProjectCard
              key={p.title}
              project={p}
              index={i}
              inView={inView}
              compact={preview}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {/* Plain conditional render: AnimatePresence runs the exit animation but
          never unmounts the child, so the modal's cleanup effect never fires and
          body overflow stays hidden — the page freezes. */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
