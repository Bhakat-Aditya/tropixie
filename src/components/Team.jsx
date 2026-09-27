import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAM = [
  {
    name: 'Sumandeep Pandey',
    role: 'Co-Founder',
    image: '/1.jpg',
    bio: "The creative force behind Tropixie, Sumandeep is a visionary with a deep love for literature and cinema. He leads the studio's creative direction—from script to concept—bringing unique ideas to life. Prior to Tropixie, he worked as a Motion Graphics (MFX) artist on projects across Hollywood and Bollywood.",
  },
  {
    name: 'Sulekha Garai Pandey',
    role: 'Co-Founder',
    image: '/2.jpg',
    bio: 'A highly skilled 3D Texturing Artist with 5+ years of experience, before joining Tropixie, Sulekha worked on multiple national and international projects including Pinocchio and Friends, Bhoot Bandhus, and Roro Aur Hero etc.',
  },
  {
    name: 'Amit Mondal',
    role: 'Co-Founder',
    image: '/3.jpg',
    bio: 'Our most senior artist, Amit has over 8 years of experience in 3D modeling and rendering. Before joining Tropixie, he worked on several national and international projects including Amazon, Boy and Ghost, Hello Celio, Taarak Mehta Ka Chhota Chashma, Daisy Dew Drop and the Rainbow Garden, Pinocchio and Friends etc. We fondly call him our "Knowledge Powerhouse"—someone who can solve even the most complex technical challenges with simple and effective solutions.',
  },
  {
    name: 'Shovon Pal',
    role: '3D Modeler',
    image: '/4.jpg',
    bio: 'An energetic and hardworking artist, Shovon creates high-quality models with precision. He previously worked in the gaming industry and is now fully dedicated to Tropixie.',
  },
  {
    name: 'Payel Chakraborty',
    role: '3D Animator',
    image: '/5.jpg',
    bio: 'A highly skilled and focused animator, Payel excels at solving complex challenges with a calm approach. Her animation brings characters to life with emotion and clarity.',
  },
  {
    name: 'Sarmistha Das',
    role: '3D Animator',
    image: '/6.jpg',
    bio: 'A positive and hardworking animator, Sarmistha combines strong technical skills with perseverance. She handles challenges with determination and never gives up.',
  },
  {
    name: 'Dolon Maity',
    role: '3D Animator',
    image: '/7.jpeg',
    bio: 'Dolon is a highly skilled and dedicated 3D Animator who worked on several national and international animation projects. With professional experience in leading animation studios, Dolon brings both technical excellence and artistic creativity to every project.',
  },
  {
    name: 'Shilpa Bhunia',
    role: '3D Rig Artist',
    image: '/8.jpg',
    bio: 'An experienced and proficient rig artist, before joining Tropixie, Shilpa worked on projects like Rudra Shiva Kurukshetra etc. creating robust rigs for high-quality character animation.',
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)
  const carouselRef = useRef(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedMember])

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="team" className="relative py-20 lg:py-28 bg-tropixie-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="text-tropixie-primary font-[var(--font-space)] tracking-[0.15em] text-sm font-semibold uppercase">Our Team</span>
                <div className="h-[2px] w-12 bg-tropixie-primary"></div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold font-[var(--font-space)] text-[#1a102b]"
              >
                Meet Our Creative Family
              </motion.h2>
            </div>

            {/* Carousel Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-tropixie-primary hover:bg-tropixie-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-tropixie-primary hover:bg-tropixie-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

          {/* Carousel Grid - Shows exactly 4 on large screens */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {TEAM.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1, duration: 0.4 }}
                onClick={() => setSelectedMember(member)}
                // Math for 4 items: (100% - (3 gaps * 1.5rem)) / 4
                // 1.5rem = 24px gap. 3 gaps = 72px total gap space.
                className="group relative cursor-pointer flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all duration-300 w-[260px] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
              >
                <div className="aspect-[3/4] relative w-full h-full bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a102b]/90 via-[#1a102b]/20 to-transparent"></div>
                  
                  {/* Simple Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-center">
                    <h4 className="font-bold text-white font-[var(--font-space)] text-xl mb-1 truncate drop-shadow-md">
                      {member.name}
                    </h4>
                    <div className="flex items-center justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-tropixie-primary font-semibold text-sm">View Profile</span>
                      <svg className="w-4 h-4 text-tropixie-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-[#0d0718]/80 backdrop-blur-sm z-[200]"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] z-[201] shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/50 backdrop-blur-md md:bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center transition-colors z-10 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {/* Image Side */}
              <div className="w-full md:w-[45%] flex-shrink-0 aspect-square md:aspect-auto md:h-full min-h-[300px] relative bg-gray-100 flex items-center justify-center p-6 md:p-10">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full max-h-[60vh] object-contain rounded-2xl shadow-md"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-tropixie-light">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tropixie-primary/10 text-tropixie-primary font-semibold text-xs tracking-widest uppercase mb-4 w-max">
                  {selectedMember.role}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold font-[var(--font-space)] text-[#1a102b] mb-6">
                  {selectedMember.name}
                </h3>
                
                <p className="text-gray-600 font-[var(--font-outfit)] text-base md:text-lg leading-relaxed mb-8">
                  {selectedMember.bio}
                </p>

                {/* Social Icons inside Modal */}
                <div className="flex items-center gap-4 mt-auto">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-tropixie-primary transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-tropixie-primary transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-tropixie-primary transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
