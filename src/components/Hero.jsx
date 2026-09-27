import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  const backgrounds = [
    '/pic 1.png', // Assuming this is the main image
    '/1.jpg',
    '/6.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background Slideshow */}
      {backgrounds.map((bg, idx) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={bg} alt="Background" className="w-full h-full object-cover" />
        </div>
      ))}
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-tropixie-dark via-tropixie-dark/70 to-transparent"></div>
      
      {/* Dark overlay at bottom so the SVG curve blends nicely if the image doesn't cover */}
      <div className="absolute inset-0 bg-gradient-to-t from-tropixie-dark/80 via-transparent to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-[var(--font-space)] leading-tight text-white mb-4"
          >
            Bringing Stories to Life Through <br/>
            <span className="font-[var(--font-cursive)] text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block mt-2 -ml-2 transform -rotate-2">
              Animation
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-[var(--font-outfit)] leading-relaxed mb-8 max-w-lg"
          >
            Tropixie Animation Studio creates engaging 3D animation, VFX, and motion graphics that connect, inspire, and leave a lasting impact.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="btn-gradient" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls (Left/Right arrows and dots) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block">
        <button 
          onClick={() => setBgIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length)}
          className="w-12 h-12 rounded-full bg-tropixie-dark/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-tropixie-primary transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block">
        <button 
          onClick={() => setBgIndex((prev) => (prev + 1) % backgrounds.length)}
          className="w-12 h-12 rounded-full bg-tropixie-dark/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-tropixie-primary transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
      
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {backgrounds.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setBgIndex(idx)}
            className={`h-2 rounded-full transition-all ${idx === bgIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* SVG Curve - transitions into the light section */}
      <svg className="hero-curve" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C480,120 960,120 1440,60 L1440,120 L0,120 Z"></path>
      </svg>
    </section>
  )
}
