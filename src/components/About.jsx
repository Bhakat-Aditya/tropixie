import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])


  const gridImages = [
    '/Sumandeep.jpg', '/Sulekha.jpg', 
    '/Dolon.jpeg', '/Payel2.jpg', '/2.jpg',
    '/3.jpg', '/4.jpg', '/5.jpg'
  ]

  return (
    <>
      <section id="about" className="relative py-20 lg:py-32 bg-tropixie-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-tropixie-primary font-[var(--font-space)] tracking-widest text-sm font-semibold uppercase">About Us</span>
                <div className="h-[2px] w-12 bg-tropixie-primary"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-space)] text-[#1a102b] mb-6 leading-tight">
                Welcome to <br/> <span className="text-tropixie-primary">Tropixie</span> Animation Studio
              </h2>
              
              <div className="space-y-4 text-gray-600 font-[var(--font-outfit)] text-lg mb-8 leading-relaxed">
                <p>
                  In the historic city of Medinipur, Tropixie Animation Studio was born from the dreams and boundless creative passion of a group of young creators.
                </p>
                <p>
                  We blend storytelling tradition with modern technology to create meaningful, engaging, and high-quality animation for a global audience.
                </p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Know More About Us
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                </div>
              </button>


            </motion.div>

            {/* Right Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 md:gap-4 h-[400px] sm:h-[500px]"
            >
              {/* Top row - 2 images */}
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              
              {/* Middle row - 3 images */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[4]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>

              {/* Bottom row - 3 images */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[5]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[6]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <img src={gridImages[7]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Team member" />
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
    </>
  )
}
