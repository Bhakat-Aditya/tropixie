import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Tropixie Showreel 2024' },
  { id: 'ScMzIvxBSi4', title: 'Character Animation Demo' },
  { id: '9bZkp7q19f0', title: '3D Modeling Breakdown' },
  { id: 'kJQP7kiw5Fk', title: 'VFX Reel' },
  { id: 'JGwWNGJdvx8', title: 'Behind the Scenes' },
  { id: 'RgKAFK5djSk', title: 'Studio Tour' },
  { id: 'OPf0YbXqDm0', title: 'Lighting & Texturing' },
  { id: '2Vv-BfVoq4g', title: 'Rigging Showcase' },
  { id: 'fJ9rUzIMcZQ', title: 'Motion Graphics Reel' },
  { id: 'YQHsXMglC9A', title: 'Animation Pipeline' },
]

export default function Showreel() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showreel-label', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: '.showreel-label', start: 'top 85%' },
      })

      gsap.from('.showreel-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: '.showreel-heading', start: 'top 85%' },
      })

      gsap.from('.showreel-player-wrapper', {
        y: 50,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.showreel-player-wrapper', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const goPrev = () => {
    const newIndex = currentIndex === 0 ? VIDEOS.length - 1 : currentIndex - 1
    setDirection(-1)
    setCurrentIndex(newIndex)
  }

  const goNext = () => {
    const newIndex = currentIndex === VIDEOS.length - 1 ? 0 : currentIndex + 1
    setDirection(1)
    setCurrentIndex(newIndex)
  }

  const video = VIDEOS[currentIndex]

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-6 lg:px-8"
      aria-label="Showreel"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="showreel-label section-label justify-center mb-4">
            Showreel
          </p>
          <h2 className="showreel-heading section-heading mb-4">
            Watch Our Work
          </h2>
          <p className="text-tropixie-text-muted max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
            A glimpse into the stories, characters, and worlds we bring to life through the magic of animation.
          </p>
        </div>

        {/* Main Video Container */}
        <div className="showreel-player-wrapper flex flex-col gap-6">
          <div className="showreel-container w-full relative rounded-2xl overflow-hidden aspect-video border border-tropixie-border bg-tropixie-bg-alt shadow-lg">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&color=white`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                  style={{ border: 'none' }}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails Row */}
          <div className="showreel-thumbnails-row flex items-center justify-between gap-4 mt-4">
            {/* Left Arrow */}
            <motion.button
              onClick={goPrev}
              className="showreel-arrow shrink-0"
              aria-label="Previous video"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            {/* 4 Frames of Thumbnails */}
            <div className="flex-1 flex gap-3 sm:gap-4 overflow-hidden">
              {Array.from({ length: 4 }).map((_, i) => {
                const indexToShow = (currentIndex + i) % VIDEOS.length;
                const thumbVideo = VIDEOS[indexToShow];
                const isActive = i === 0;

                return (
                  <button
                    key={`${thumbVideo.id}-${i}`}
                    onClick={() => {
                      setDirection(i > 0 ? 1 : -1);
                      setCurrentIndex(indexToShow);
                    }}
                    className={`relative flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      isActive ? 'border-tropixie-primary scale-100 opacity-100 shadow-lg' : 'border-transparent scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                    }`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${thumbVideo.id}/hqdefault.jpg`}
                      alt={thumbVideo.title}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-tropixie-primary/20 pointer-events-none"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={goNext}
              className="showreel-arrow shrink-0"
              aria-label="Next video"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>

          {/* Video Title + Counter */}
          <div className="showreel-info flex items-center justify-between mt-2 px-2">
            <p className="showreel-video-title text-lg font-bold text-tropixie-heading">{video.title}</p>
            <div className="showreel-counter font-space tracking-widest text-sm">
              <span className="text-tropixie-primary font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-tropixie-text-dim mx-1">/</span>
              <span className="text-tropixie-text-dim">
                {String(VIDEOS.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20 lg:mt-32" />
    </section>
  )
}
