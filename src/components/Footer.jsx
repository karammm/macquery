import { Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react'
import macqueryLogo from '../assets/images/macquerylogo.png'

const links = {
  Company: ['About', 'Team', 'Careers', 'Contact'],
  Services: ['Web Development', 'Mobile Apps', 'Marketing', 'SEO'],
  Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
}

const social = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
]

export default function Footer() {
  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-border">
      <div className="site-container">
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={macqueryLogo} alt="MacQuery" className="size-9 rounded-lg bg-white object-contain" />
              <span className="text-white font-bold text-base">MacQuery</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              AI-driven development, modern design, and cloud-first solutions — built in New Delhi, delivered worldwide.
            </p>
            <div className="flex gap-3">
              {social.map((s, i) => (
                <a key={i} href={s.href} className="size-9 rounded-lg bg-card border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-purple-500/30 transition-all">
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{title}</h4>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item}>
                    <button onClick={() => go(item)} className="text-text-muted text-sm hover:text-white transition-colors cursor-pointer">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-text-muted text-sm">
            <span>&copy; {new Date().getFullYear()} MacQuery. All rights reserved.</span>
            <a href="https://www.macquery.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
              macquery.in
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="size-9 rounded-lg bg-card border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
