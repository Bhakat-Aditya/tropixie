import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden" id="hero">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-tropixie-dark">
        <iframe
          src="https://www.youtube.com/embed/x3Zlv_biizw?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=x3Zlv_biizw&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-[1.3] pointer-events-none"
        ></iframe>
        
        {/* Optional overlay to make text more readable if you add any text later */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* SVG Curve - transitions into the light section */}
      <svg className="hero-curve relative z-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C480,120 960,120 1440,60 L1440,120 L0,120 Z"></path>
      </svg>
    </section>
  )
}
