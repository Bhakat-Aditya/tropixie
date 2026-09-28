import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 flex items-center ${
          scrolled ? 'nav-scrolled h-16' : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 lg:px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center cursor-pointer relative w-28 md:w-36 lg:w-58 h-full"
            onClick={() => scrollTo('#hero')}
          >
            <img 
              src="/logo.png" 
              alt="Tropixie" 
              className="absolute -top-6 md:-top-10 lg:-top-17 left-0 w-full h-auto object-contain drop-shadow-2xl z-[150]" 
              />
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className={`relative font-[var(--font-outfit)] text-sm tracking-widest uppercase py-1 transition-all duration-300 group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
                
                {/* Active & Hover Underline Glow */}
                <span 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'w-full bg-tropixie-primary shadow-[0_0_12px_rgba(168,85,247,0.9)]'
                      : 'w-0 bg-white/40 group-hover:w-1/2'
                  }`}
                ></span>
              </button>
            ))}
          </motion.div>

          {/* Let's Talk Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <button className="btn-gradient !py-2 !px-6 text-sm" onClick={() => scrollTo('#contact-box')}>
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </button>
          </motion.div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-[101] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-tropixie-dark/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 items-center mt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`relative font-[var(--font-outfit)] text-3xl font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-tropixie-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="btn-gradient mt-8" 
                onClick={() => scrollTo('#contact-box')}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
