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
    if (popupSlide || isModalOpen) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length, popupSlide, isModalOpen, currentSlide])

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
      <section id="about" className="relative py-20 lg:py-32 overflow-hidden text-gray-900 bg-white">
        {/* Section Background Image */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        >
          <img 
            src="/bg1.jpeg" 
            alt="" 
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] object-cover opacity-60 blur-[2px] saturate-50 transform -translate-x-1/2 -translate-y-1/2 rotate-[27deg]" 
          />
        </div>

        {/* Deep background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tropixie-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0"></div>

        {/* Centered Heading with Frosted Glass Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative inline-flex items-center justify-center px-10 py-4 mt-8 bg-transparent backdrop-blur-xl rounded-full"
          >
            <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 font-[var(--font-space)] tracking-tight text-center whitespace-nowrap px-4">
              About Us
            </h2>
          </motion.div>
        </div>

        {/* Main Grid Layout */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-stretch gap-16 lg:gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl relative z-10 bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/50 h-full flex flex-col justify-center"
            >

              <div className="space-y-6 text-gray-700 font-[var(--font-outfit)] text-base md:text-lg mb-2 leading-relaxed font-light">
                <p>
                  In the historic city of Medinipur, Tropixie Animation Studio was born from the dreams and boundless creative passion of a group of young creators. Founded with a simple yet powerful vision, we strive to connect with people beyond the boundaries of language and culture.
                </p>
                <p>
                  We blend rich storytelling traditions with modern technology to create meaningful, high-quality animation. Whether it's 3D animation, VFX, or motion graphics, we serve as a creative space where ideas grow, experiments take shape, and stories come to life.
                </p>
              </div>

              {/* Temporarily hidden as per request
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent mt-6"
              >
                Read Our Story
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                </div>
              </button>
              */}
            </motion.div>
          </div>

          {/* Right Side: 3D Holographic Slideshow */}
          <div className="w-full lg:w-[55%] relative z-20 h-[400px] sm:h-[500px] lg:h-[700px] flex flex-col items-center justify-center" style={{ perspective: '2000px' }}>

            {/* Floating Decorative Glass Elements Removed */}

            {/* Back Card (Next Slide Preview) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="absolute w-[80%] sm:w-[75%] aspect-[4/3] rounded-3xl sm:rounded-[2rem] overflow-hidden border border-gray-900/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 hidden md:block"
              style={{ transform: 'translateX(40px) scale(0.9) rotateY(-15deg)' }}
            >
              <img src={slideImages[(currentSlide + 1) % slideImages.length].src} className="w-full h-full object-cover opacity-50 blur-[2px]" alt="Next slide preview" />
              <div className="absolute inset-0 bg-tropixie-dark/50"></div>
            </motion.div>

            {/* Main Active Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full sm:w-[90%] aspect-[4/3] rounded-3xl sm:rounded-[2rem] overflow-hidden border border-gray-900/20 shadow-[0_50px_100px_rgba(168,85,247,0.15)] z-20 bg-tropixie-dark-card"
            >
              <div className="absolute inset-0">
                <AnimatePresence>
                  <motion.img
                    key={currentSlide}
                    src={slideImages[currentSlide].src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
                    alt={`Slide ${currentSlide + 1}`}
                    onClick={() => setPopupSlide(slideImages[currentSlide])}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

            </motion.div>

            {/* Outside Controls (Bottom Arrows) */}
            <div className="flex gap-6 mt-6 z-30">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))}
                className="w-12 h-12 bg-white/80 hover:bg-white text-gray-900 hover:text-tropixie-primary rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:scale-110 active:scale-95 border border-gray-900/10 backdrop-blur-md"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
                className="w-12 h-12 bg-white/80 hover:bg-white text-gray-900 hover:text-tropixie-primary rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:scale-110 active:scale-95 border border-gray-900/10 backdrop-blur-md"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-[2rem] z-[201] p-8 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-gray-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-gray-50 hover:bg-tropixie-primary text-gray-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <h2 className="text-4xl md:text-5xl font-black font-[var(--font-space)] text-[#1a102b] mb-8 tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropixie-primary to-purple-500">Tropixie</span>
              </h2>

              <div className="space-y-6 text-gray-600 font-[var(--font-outfit)] text-base md:text-lg leading-relaxed">
                <p>
                  In the historic city of Medinipur, Tropixie Animation Studio was born from the dreams and boundless creative passion of a group of young creators. Founded by Sumandeep Pandey, Sulekha Garai Pandey, and Amit Mondal, the studio began with a simple yet powerful vision—to create high-quality animation that connects with people beyond the boundaries of language and culture.
                </p>
                <p>
                  The name <strong className="text-[#1a102b] font-bold">Tropixie</strong> is derived from a fusion of two ideas—<em className="text-tropixie-primary font-semibold not-italic">thaumatrope</em>, a 19th-century optical illusion device often associated with the early origins of animation, and <em className="text-tropixie-primary font-semibold not-italic">pixel</em>, the fundamental unit of digital visuals. Together, it reflects our belief that imagination knows no limits—of time, place, or language.
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
                <p className="font-bold text-[#1a102b] text-xl mt-8 border-l-4 border-tropixie-primary pl-6 py-2">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[300] cursor-zoom-out flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative pointer-events-auto inline-flex flex-col items-center max-w-full max-h-full">
                {/* Popup Bottom Arrows */}
                <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-30 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const idx = slideImages.findIndex(img => img.src === popupSlide.src);
                      setPopupSlide(slideImages[idx === 0 ? slideImages.length - 1 : idx - 1]);
                    }}
                    className="w-12 h-12 bg-white/80 hover:bg-white text-gray-900 hover:text-tropixie-primary rounded-full flex items-center justify-center shadow-2xl transition-colors border border-gray-900/10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const idx = slideImages.findIndex(img => img.src === popupSlide.src);
                      setPopupSlide(slideImages[(idx + 1) % slideImages.length]);
                    }}
                    className="w-12 h-12 bg-white/80 hover:bg-white text-gray-900 hover:text-tropixie-primary rounded-full flex items-center justify-center shadow-2xl transition-colors border border-gray-900/10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={popupSlide.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={popupSlide.src}
                    alt={popupSlide.description || "Popup content"}
                    onClick={(e) => e.stopPropagation()}
                    className="w-auto h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default"
                  />
                </AnimatePresence>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupSlide(null);
                  }}
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 bg-white hover:bg-tropixie-primary text-gray-800 hover:text-gray-900 rounded-full flex items-center justify-center transition-colors shadow-2xl z-30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  )
}
