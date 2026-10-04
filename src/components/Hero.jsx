import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideImages = [
  '/pic 1.png',
  '/1a.png',
  '/2a.png'
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-tropixie-dark" id="hero">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slideImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Hero Slide ${currentSlide + 1}`}
          />
        </AnimatePresence>
        
        {/* Optional overlay to make text more readable if you add any text later */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}
