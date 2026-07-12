import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import Reveal from './Reveal'
import karamPhoto from '../assets/images/karam.JPG'
import asmitaPhoto from '../assets/images/asmita.png'
import shivamPhoto from '../assets/images/shivam.jpg'

const team = [
  {
    id: 'karamjit',
    name: 'Karamjit Verma',
    role: 'Founder & CEO',
    bio: 'Drives company vision, client relationships, and growth strategy — turning ideas into scalable digital businesses.',
    photo: karamPhoto,
    initials: 'KV',
    linkedin: null,
    twitter: null,
    github: null,
  },
  {
    id: 'asmita',
    name: 'Asmita Verma',
    role: 'Managing Director',
    bio: 'Oversees day-to-day operations, team coordination, and project delivery — ensuring every engagement runs smoothly from start to finish.',
    photo: asmitaPhoto,
    initials: 'AV',
    linkedin: null,
    twitter: null,
    github: null,
  },
  {
    id: 'shivam',
    name: 'Shivam Sharma',
    role: 'Operations Director',
    bio: 'Manages workflows, resource planning, and process optimization to keep projects on time and within budget.',
    photo: shivamPhoto,
    initials: 'SS',
    linkedin: null,
    twitter: null,
    github: null,
  },
  {
    id: 'hritik',
    name: 'Hritik Suman',
    role: 'Technical Director',
    bio: 'Leads architecture decisions, tech stack selection, and engineering quality across all client projects.',
    photo: 'https://avatars.githubusercontent.com/u/49412100?v=4',
    initials: 'HS',
    linkedin: null,
    twitter: null,
    github: 'https://github.com/hritiksuman',
  },
]

const photoLayout = [
  { members: [0, 1], size: 'sm', offset: '' },
  { members: [2, 3], size: 'lg', offset: 'mt-[36px] sm:mt-[56px] md:mt-[68px]' },
]

const sizeClasses = {
  sm: 'w-[100px] h-[110px] sm:w-[130px] sm:h-[140px] md:w-[170px] md:h-[185px]',
  lg: 'w-[110px] h-[120px] sm:w-[145px] sm:h-[155px] md:w-[192px] md:h-[202px]',
}

function SocialLink({ href, icon: Icon, title }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      onClick={(e) => e.stopPropagation()}
      className="p-2 rounded-full text-zinc-400 hover:text-text hover:bg-white/10 transition-all duration-300 hover:scale-110"
    >
      <Icon size={15} />
    </a>
  )
}

function MemberPhoto({ member, isActive, onHover, size }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="p-2 sm:p-2.5 md:p-3 flex-shrink-0">
      <motion.button
        type="button"
        onMouseEnter={() => onHover(member.id)}
        onFocus={() => onHover(member.id)}
        className={`relative block overflow-hidden rounded-2xl cursor-pointer border ${sizeClasses[size]} ${
          isActive
            ? 'border-purple-400/70 opacity-100 shadow-lg shadow-purple-500/25'
            : 'border-white/10 opacity-55 hover:opacity-85'
        }`}
        animate={{ scale: isActive ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        style={{ transformOrigin: 'center center' }}
        aria-label={`Highlight ${member.name}`}
      >
        {member.photo && !imgFailed ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-all duration-500 ease-out"
            style={{
              filter: isActive ? 'grayscale(0) brightness(1.05)' : 'grayscale(1) brightness(0.75)',
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-purple-500/20 text-purple-300 text-2xl font-bold"
            style={{ filter: isActive ? 'none' : 'grayscale(1) brightness(0.75)' }}
          >
            {member.initials}
          </div>
        )}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 ring-2 ring-purple-400/40 ring-inset pointer-events-none rounded-2xl"
          />
        )}
      </motion.button>
    </div>
  )
}

function MemberRow({ member, isActive, onHover }) {
  const socials = [
    { href: member.twitter, icon: Twitter, title: 'X / Twitter' },
    { href: member.linkedin, icon: Linkedin, title: 'LinkedIn' },
    { href: member.github, icon: Github, title: 'GitHub' },
  ].filter((s) => s.href)

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onHover(member.id)}
      onFocus={() => onHover(member.id)}
      className={`cursor-pointer text-left w-full transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-40 hover:opacity-65'
      }`}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <motion.span
          className="h-[2px] rounded-full flex-shrink-0"
          animate={{
            width: isActive ? 32 : 12,
            backgroundColor: isActive ? 'rgb(168 85 247)' : 'rgb(63 63 70)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        />
        <span
          className={`text-base md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isActive ? 'text-text' : 'text-zinc-500'
          }`}
        >
          {member.name}
        </span>
      </div>
      <p
        className={`mt-1 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
          isActive ? 'text-purple-400' : 'text-zinc-600'
        }`}
      >
        {member.role}
      </p>
      <AnimatePresence>
        {isActive && socials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 mt-3 overflow-hidden"
          >
            {socials.map((s) => (
              <SocialLink key={s.title} {...s} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

function ActiveMemberBio({ member }) {
  return (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="pt-6 mt-6 border-t border-white/[0.08]"
    >
      <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
    </motion.div>
  )
}

export default function Team({ showHeader = true }) {
  const [activeId, setActiveId] = useState(team[0].id)
  const activeMember = team.find((m) => m.id === activeId) ?? team[0]

  const onHover = useCallback((id) => setActiveId(id), [])

  return (
    <section id="team" className="py-16 lg:py-24 border-t border-border relative">
      <div className="site-container">
        {showHeader && (
          <Reveal className="text-center mb-12 lg:mb-16">
            <span className="section-label">Team</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight mb-4">
              The minds behind <span className="text-gradient">MacQuery</span>
            </h2>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-7xl rounded-3xl liquid-panel p-6 sm:p-8 lg:p-10 xl:p-12 overflow-visible">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-24 select-none">
              {/* Left — staggered photos */}
              <div
                data-lenis-prevent
                className="flex gap-1 sm:gap-2 md:gap-3 flex-shrink-0 overflow-x-auto overflow-y-visible py-3 sm:py-4 scrollbar-hide w-full lg:w-auto px-3 sm:px-4 lg:px-2 justify-center lg:justify-start"
              >
                {photoLayout.map((col, colIdx) => (
                  <div key={colIdx} className={`flex flex-col gap-1 sm:gap-2 md:gap-3 ${col.offset}`}>
                    {col.members.map((memberIdx) => {
                      const member = team[memberIdx]
                      return (
                        <MemberPhoto
                          key={member.id}
                          member={member}
                          isActive={activeId === member.id}
                          onHover={onHover}
                          size={col.size}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Right — names + bio */}
              <div className="flex flex-col gap-4 pt-0 lg:pt-4 flex-1 w-full max-w-xl mx-auto lg:mx-0 min-h-[280px] lg:min-h-0 justify-center">
                <div className="flex flex-col gap-4 lg:gap-6 w-full">
                  {team.map((member) => (
                    <MemberRow
                      key={member.id}
                      member={member}
                      isActive={activeId === member.id}
                      onHover={onHover}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <ActiveMemberBio member={activeMember} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
