import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef(null)
  const [bgIndex, setBgIndex] = useState(0)

  const backgrounds = [
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', 
    '/5.jpg', '/6.jpg', '/7.jpeg', '/8.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animate title letters with GSAP
    const ctx = gsap.context(() => {
      gsap.from('.hero-letter', {
        y: 80,
        opacity: 0,
        rotateX: -60,
        stagger: 0.04,
        duration: 0.9,
        ease: 'back.out(1.5)',
        delay: 0.4,
      })
    }, titleRef)

    return () => ctx.revert()
  }, [])

  // Generate fewer, softer particles for light theme
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 8,
    duration: Math.random() * 4 + 8,
    opacity: Math.random() * 0.2 + 0.1,
  }))

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const titleText = 'TROPIXIE'

  return (
    <section className="hero-section" id="hero" aria-label="Hero section">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={backgrounds[bgIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.90, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </AnimatePresence>
        {/* Subtle gradient overlay to blend the background better with the theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-tropixie-bg/80 via-tropixie-bg/50 to-tropixie-bg"></div>
      </div>

      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Soft background orbs */}
      <div
        className="bg-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          top: '5%',
          right: '-8%',
        }}
      />
      <div
        className="bg-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)',
          bottom: '10%',
          left: '-8%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Animation Studio
        </motion.p>

        {/* Animated title */}
        <h1 className="hero-title overflow-hidden" ref={titleRef}>
          {titleText.split('').map((letter, i) => (
            <span
              key={i}
              className="hero-letter inline-block"
              style={{ perspective: '600px' }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-tagline text-center"
        >
          Where imagination meets animation. Crafting stories that transcend
          boundaries of language and culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <button
            className="cta-button"
            onClick={scrollToAbout}
            id="hero-cta-explore"
          >
            <span>Explore Our World</span>
            <span>→</span>
          </button>
          <button
            className="cta-button !bg-transparent !text-tropixie-primary border border-tropixie-border hover:border-tropixie-primary"
            onClick={() => {
              const el = document.getElementById('showreel')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            id="hero-cta-showreel"
          >
            <span>▶</span>
            <span>Watch Showreel</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  )
}
