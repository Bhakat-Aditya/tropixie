import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [popupSlide, setPopupSlide] = useState(null)

  const slideImages = [
    { src: '/pic 1.png', description: 'Tropixie Studio Workspace' },
    { src: '/1a.png', description: 'Our Animation Team in Action' },
    { src: '/2a.png', description: 'Creative Brainstorming Session' }
  ]

  useEffect(() => {
    if (popupSlide) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length, popupSlide])

  useEffect(() => {
    if (isModalOpen || popupSlide) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen, popupSlide])


  return (
    <>
      <section id="about" className="relative py-20 lg:py-32 bg-tropixie-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">

            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center w-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 md:w-12 bg-tropixie-primary"></div>
                <span className="text-tropixie-primary font-[var(--font-space)] tracking-widest text-sm font-semibold uppercase">About Us</span>
                <div className="h-[2px] w-8 md:w-12 bg-tropixie-primary"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] text-[#1a102b] mb-8 leading-tight">
                Welcome to <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropixie-primary via-purple-500 to-tropixie-secondary drop-shadow-lg inline-block mt-2">
                  Tropixie Animation Studio<sup className="text-xl md:text-2xl font-medium ml-1 bg-clip-text text-tropixie-primary">&trade;</sup>
                </span>
              </h2>

              <div className="space-y-5 text-gray-600 font-[var(--font-outfit)] text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto px-4 text-center">
                <p>
                  In the historic city of Medinipur, Tropixie Animation Studio was born from the dreams and boundless creative passion of a group of young creators. Founded with a simple yet powerful vision, we strive to connect with people beyond the boundaries of language and culture.
                </p>
                <p>
                  We blend rich storytelling traditions with modern technology to create meaningful, high-quality animation. Whether it's 3D animation, VFX, or motion graphics, we serve as a creative space where ideas grow, experiments take shape, and stories come to life.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold py-4 px-10 rounded-full inline-flex items-center gap-3 hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Know More About Us
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                </div>
              </button>
            </motion.div>



            {/* Tablet Slideshow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl mx-auto mt-20 mb-8 px-4"
            >
              {/* Tablet Frame */}
              <div className="relative mx-auto bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] p-3 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] aspect-[4/3] sm:aspect-[16/10] overflow-hidden group">

                {/* Camera / Sensor */}
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-1.5 h-12 bg-black rounded-r-lg hidden sm:block"></div>
                <div className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gray-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hidden sm:block z-20"></div>

                {/* Screen area */}
                <div className="relative w-full h-full bg-black rounded-xl md:rounded-[2rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-2 border-[#111]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: '10%' }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: '-10%' }}
                      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={slideImages[currentSlide].src}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
                        alt={`Slide ${currentSlide + 1}`}
                        onClick={() => setPopupSlide(slideImages[currentSlide])}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {slideImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow Controls */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-tropixie-primary hover:bg-tropixie-primary hover:text-white transition-all hover:scale-110 active:scale-95 z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-tropixie-primary hover:bg-tropixie-primary hover:text-white transition-all hover:scale-110 active:scale-95 z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-tropixie-dark/80 backdrop-blur-sm z-[200]"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl z-[201] p-8 md:p-12 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-space)] text-[#1a102b] mb-6">
                About <span className="text-tropixie-primary">Tropixie</span>
              </h2>

              <div className="space-y-6 text-gray-600 font-[var(--font-outfit)] text-base md:text-lg leading-relaxed">
                <p>
                  In the historic city of Medinipur, Tropixie Animation Studio was born from the dreams and boundless creative passion of a group of young creators. Founded by Sumandeep Pandey, Sulekha Garai Pandey, and Amit Mondal, the studio began with a simple yet powerful vision—to create high-quality animation that connects with people beyond the boundaries of language and culture.
                </p>
                <p>
                  The name <strong className="text-[#1a102b]">Tropixie</strong> is derived from a fusion of two ideas—<em className="text-tropixie-primary font-semibold">thaumatrope</em>, a 19th-century optical illusion device often associated with the early origins of animation, and <em className="text-tropixie-primary font-semibold">pixel</em>, the fundamental unit of digital visuals. Together, it reflects our belief that imagination knows no limits—of time, place, or language.
                </p>
                <p>
                  At Tropixie, we do not see ourselves as just a studio; we see ourselves as a creative space where ideas grow, experiments take shape, and stories come to life. We strive to bring together the rich tradition of storytelling with modern technology to create something fresh, engaging, and meaningful.
                </p>
                <p>
                  The journey of storytelling began thousands of years ago—from the cave paintings of Altamira to the screens of YouTube today. From the storytellers on the ghats of Kashi (Varanasi) narrating the epics of the Ramayana and Mahabharata, to mothers and grandmothers who lulled children to sleep with tales of fantasy, spirits, and wonder—we consider ourselves the continuation of that timeless tradition.
                </p>
                <p>
                  Tropixie is not a conventional company; it is a storyteller at heart. Through our work, we aim to revive the lost emotions, memories, and the simple joy of experiencing a good story.
                </p>
                <p>
                  With a growing team of passionate and imaginative artists, we specialize in 3D animation, VFX, motion graphics, and AI-driven content. We are committed to delivering world-class creative services at an affordable cost, empowering individuals, creators, startups, and organizations to bring their ideas to life with clarity and impact.
                </p>
                <p className="font-semibold text-[#1a102b]">
                  We are on a continuous journey—to create, to innovate, and to push the boundaries of storytelling. We invite you to be a part of this journey with us.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Image Popup Modal */}
      <AnimatePresence>
        {popupSlide && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupSlide(null)}
              className="fixed inset-0 bg-[#0d0718]/90 backdrop-blur-md z-[300] cursor-zoom-out"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl z-[301] p-4 flex flex-col items-center pointer-events-none"
            >
              <div className="relative pointer-events-auto max-w-full">
                <img
                  src={popupSlide.src}
                  alt={popupSlide.description || "Popup content"}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
                <button
                  onClick={() => setPopupSlide(null)}
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 bg-white hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              {popupSlide.description && (
                <div className="mt-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-[var(--font-outfit)] text-lg pointer-events-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/20">
                  {popupSlide.description}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  )
}
