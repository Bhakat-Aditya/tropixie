import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
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
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 flex items-center nav-scrolled ${scrolled ? 'h-20' : 'h-28'
          }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 lg:px-6 flex items-center justify-between h-full">
          {/* Studio Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center cursor-pointer z-[150] h-full"
            onClick={() => scrollTo('#hero')}
          >
            <img src="/logo.png" alt="Tropixie Logo" className="h-25 md:h-30 lg:h-40 w-auto object-contain mt-5 lg:mt-15" />
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
                className={`relative font-[var(--font-outfit)] text-base font-bold tracking-widest uppercase py-1 transition-all duration-300 group ${activeSection === link.href.replace('#', '')
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-tropixie-primary'
                  }`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}

                {/* Active & Hover Underline Glow */}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${activeSection === link.href.replace('#', '')
                    ? 'w-full bg-tropixie-primary shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                    : 'w-0 bg-gray-300 group-hover:w-1/2 group-hover:bg-tropixie-primary/50'
                    }`}
                ></span>
              </button>
            ))}
          </motion.div>


          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-[101] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-800 block rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-800 block rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-800 block rounded-full"
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
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 items-center mt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`relative font-[var(--font-outfit)] text-3xl font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === link.href.replace('#', '')
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-tropixie-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'text-gray-700 hover:text-gray-900'
                    }`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </motion.button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
