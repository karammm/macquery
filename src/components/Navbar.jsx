import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import macqueryLogo from '../assets/images/macquerylogo.png'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors cursor-pointer ${
    isActive ? 'text-purple-400' : 'text-text-secondary hover:text-text'
  }`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const onScroll = useCallback(() => setScrolled(window.scrollY > 40), [])
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border' : ''
        }`}
      >
        <div className="site-container flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={macqueryLogo} alt="MacQuery" className="size-9 rounded-lg bg-white object-contain" />
            <span className="text-text font-bold text-base tracking-tight">MacQuery</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navLinkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-accent">
              Get Started
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button type="button" onClick={() => setOpen(!open)} className="text-text-secondary hover:text-text cursor-pointer p-1" aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <ThemeToggle />
              <button type="button" onClick={() => setOpen(false)} className="text-text-secondary hover:text-text cursor-pointer p-1" aria-label="Close">
                <X size={24} />
              </button>
            </div>
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `text-2xl font-semibold ${isActive ? 'text-purple-400' : 'text-text'}`}>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <Link to="/contact" className="mt-4 btn-accent px-10 py-3.5">
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
