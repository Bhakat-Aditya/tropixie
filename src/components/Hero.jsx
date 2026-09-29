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
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden" id="hero">
      {/* Background Slideshow */}
      {backgrounds.map((bg, idx) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={bg} alt="Background" className="w-full h-full object-cover object-top" />
        </div>
      ))}
      


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
