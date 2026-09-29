import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAM = [
  {
    name: 'Sumandeep Pandey',
    role: 'Co-Founder',
    image: '/1.jpg',
    dpImage: '/1f.jpg',
    bio: "The creative force behind Tropixie, Sumandeep is a visionary with a deep love for literature and cinema. He leads the studio's creative direction—from script to concept—bringing unique ideas to life. Prior to Tropixie, he worked as a Motion Graphics (MFX) artist on projects across Hollywood and Bollywood.",
  },
  {
    name: 'Sulekha Garai Pandey',
    role: 'Co-Founder',
    image: '/2.jpg',
    dpImage: '/2f.jpg',
    bio: 'A highly skilled 3D Texturing Artist with 5+ years of experience, before joining Tropixie, Sulekha worked on multiple national and international projects including Pinocchio and Friends, Bhoot Bandhus, and Roro Aur Hero etc.',
  },
  {
    name: 'Amit Mondal',
    role: 'Co-Founder',
    image: '/3.jpg',
    dpImage: '/3f.jpg',
    bio: 'Our most senior artist, Amit has over 8 years of experience in 3D modeling and rendering. Before joining Tropixie, he worked on several national and international projects including Amazon, Boy and Ghost, Hello Celio, Taarak Mehta Ka Chhota Chashma, Daisy Dew Drop and the Rainbow Garden, Pinocchio and Friends etc. We fondly call him our "Knowledge Powerhouse"—someone who can solve even the most complex technical challenges with simple and effective solutions.',
  },
  {
    name: 'Shovon Pal',
    role: '3D Modeler',
    image: '/4.jpg',
    dpImage: '/4f.jpg',
    bio: 'An energetic and hardworking artist, Shovon creates high-quality models with precision. He previously worked in the gaming industry and is now fully dedicated to Tropixie.',
  },
  {
    name: 'Payel Chakraborty',
    role: '3D Animator',
    image: '/5.jpg',
    dpImage: '/5f.jpg',
    bio: 'A highly skilled and focused animator, Payel excels at solving complex challenges with a calm approach. Her animation brings characters to life with emotion and clarity.',
  },
  {
    name: 'Sarmistha Das',
    role: '3D Animator',
    image: '/6.jpg',
    dpImage: '/6f.jpg',
    bio: 'A positive and hardworking animator, Sarmistha combines strong technical skills with perseverance. She handles challenges with determination and never gives up.',
  },
  {
    name: 'Shilpa Bhunia',
    role: '3D Rig Artist',
    image: '/8.jpg',
    dpImage: '/7f.jpg',
    bio: 'An experienced and proficient rig artist, before joining Tropixie, Shilpa worked on projects like Rudra Shiva Kurukshetra etc. creating robust rigs for high-quality character animation.',
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)

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

  return (
    <>
      <section id="team" className="relative py-20 lg:py-28 bg-tropixie-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[2px] w-8 md:w-12 bg-tropixie-primary"></div>
              <span className="text-tropixie-primary font-[var(--font-space)] tracking-[0.15em] text-sm font-semibold uppercase">Our Team</span>
              <div className="h-[2px] w-8 md:w-12 bg-tropixie-primary"></div>
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

          {/* Grid - No Scroll, All Visible */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-12 pb-8 pt-4">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                onClick={() => setSelectedMember(member)}
                className="flex flex-col items-center cursor-pointer group w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)]"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-tropixie-primary transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] relative bg-gray-100 flex-shrink-0">
                  <img 
                    src={member.dpImage || member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <h4 className="font-bold text-[#1a102b] font-[var(--font-space)] text-lg md:text-xl text-center group-hover:text-tropixie-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-tropixie-secondary text-sm font-semibold uppercase tracking-wider text-center mt-2">
                  {member.role}
                </p>
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
