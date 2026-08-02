import { Link } from 'react-router-dom'
import { Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react'
import macqueryLogo from '../assets/images/mqlogo.png'
import { openCookieSettings } from '../lib/consent'

const columns = {
  Services: [
    { label: 'EU AI Act Readiness', to: '/services' },
    { label: 'GDPR-Safe GenAI', to: '/services' },
    { label: 'AI Governance (ISO 42001)', to: '/services' },
    { label: 'Regulated-Sector Delivery', to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'Projects', to: '/projects' },
    { label: 'Testimonials', to: '/about' },
    { label: 'Team', to: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Imprint', to: '/imprint' },
  ],
}

const social = [
  // { icon: Twitter, href: '#' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/macquerylabs' },
  { icon: Instagram, href: 'https://www.instagram.com/mac_query' },
  // { icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="site-container">
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-14">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={macqueryLogo} alt="MacQuery" className="size-10 object-contain drop-shadow-[0_2px_10px_rgba(168,85,247,0.55)]" />
              <span className="text-text font-bold text-base">MacQuery</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              GenAI consulting for regulated European businesses — EU AI Act, GDPR, DORA and NIS2. A brand of SIILARD LABS LLP.
            </p>
            <div className="flex gap-3">
              {social.map((s, i) => (
                <a key={i} href={s.href} className="size-9 rounded-lg glass-card flex items-center justify-center text-text-muted hover:text-purple-400 transition-colors" aria-label="Social">
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-text text-sm font-semibold mb-5">{title}</h4>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-text-muted text-sm hover:text-purple-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-text-muted text-sm">
            <span>&copy; {new Date().getFullYear()} MacQuery. All rights reserved - SIILARD LABS LLP.</span>
            <a href="https://www.macquery.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
              macquery.in
            </a>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-text-muted hover:text-purple-400 transition-colors cursor-pointer"
            >
              Cookie settings
            </button>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="size-9 rounded-lg glass-card flex items-center justify-center text-text-muted hover:text-purple-400 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
