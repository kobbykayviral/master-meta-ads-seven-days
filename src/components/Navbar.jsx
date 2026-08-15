import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '../config/event.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-950/90 backdrop-blur-md shadow-glow-blue border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight">
              Master Meta Ads
              <span className="text-accent"> in 7</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent hover:bg-accent-500 text-ink font-display font-semibold text-sm px-5 py-2.5 transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              Register Now
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-primary-950/98 backdrop-blur-md border-t border-white/10 px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-base font-medium text-white/85 border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, '#register')}
            className="mt-4 text-center rounded-full bg-accent text-ink font-display font-semibold text-sm px-5 py-3"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  )
}
