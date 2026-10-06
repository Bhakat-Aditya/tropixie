import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [slideImages, setSlideImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    fetch('/api/content')
      .then((r) => r.json())
      .then((data) => {
        if (data?.hero?.images?.length > 0) {
          setSlideImages(data.hero.images)
        }
      })
      .catch(() => {}) // silently use defaults
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideImages.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length)
      }
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-transparent" id="hero">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slideImages[currentSlide]?.url}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Hero Slide ${currentSlide + 1}`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}
