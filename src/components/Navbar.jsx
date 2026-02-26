import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import macqueryLogo from '../assets/images/macquerylogo.png'

const links = ['Services', 'Projects', 'Process', 'Team', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const onScroll = useCallback(() => setScrolled(window.scrollY > 40), [])
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/70 backdrop-blur-xl border-b border-border' : ''
        }`}
      >
        <div className="site-container flex items-center justify-between h-18">
          <button onClick={() => go('home')} className="flex items-center gap-2.5 cursor-pointer">
            <img src={macqueryLogo} alt="MacQuery" className="size-9 rounded-lg bg-white object-contain" />
            <span className="text-white font-bold text-base tracking-tight">MacQuery</span>
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button key={l} onClick={() => go(l)} className="text-text-secondary hover:text-white text-sm font-medium transition-colors cursor-pointer">
                {l}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => go('contact')} className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors cursor-pointer">
              Get in Touch
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white/70 cursor-pointer">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/60 cursor-pointer"><X size={24} /></button>
            {links.map((l, i) => (
              <motion.button
                key={l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(l)}
                className="text-white text-2xl font-semibold cursor-pointer"
              >
                {l}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => go('contact')}
              className="mt-6 px-10 py-3.5 rounded-xl bg-purple-600 text-white font-semibold cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
