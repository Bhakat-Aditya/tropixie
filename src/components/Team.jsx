import { useState, useEffect } from 'react'
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
    name: 'Shilpa Bhunia',
    role: '3D Rig Artist',
    image: '/8.jpg',
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
      <section id="team" className="relative py-20 lg:py-28 bg-tropixie-dark border-t border-tropixie-border overflow-hidden text-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-4 mb-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-[var(--font-space)] text-gray-900 tracking-tight text-center">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropixie-primary via-purple-400 to-tropixie-secondary">Team</span>
              </h2>
            </motion.div>
          </div>

          {/* SVG Filters for Brush Effects */}
          <svg width="0" height="0" className="absolute hidden">
            <defs>
              <filter id="brush-blue" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04 0.15" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="brush-yellow" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.08 0.2" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>

          {/* Grid - No Scroll, All Visible */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-16 pb-8 pt-4">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5, type: 'spring', stiffness: 100 }}
                onClick={() => setSelectedMember(member)}
                className="flex flex-col items-center cursor-pointer group w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] relative"
              >
                {/* Profile Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-2 z-10 border-[6px] border-white group-hover:border-[#085da6] transition-colors duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.1)] relative bg-gray-100 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none transition-all duration-300"></div>
                </div>

                {/* Text Tags Container */}
                <div className="relative -mt-6 sm:-mt-8 z-20 flex flex-col items-center group-hover:-translate-y-1 transition-transform duration-300 ease-out max-w-[110%]">

                  {/* Name Tag (Primary Purple) */}
                  <div className="relative w-max flex justify-center py-2 sm:py-3 px-4 sm:px-6 z-20 hover:scale-105 transition-transform duration-200">
                    <svg className="absolute inset-0 w-full h-full text-tropixie-primary drop-shadow-md z-[-1]" preserveAspectRatio="none" viewBox="0 0 200 50">
                      <rect x="5" y="8" width="190" height="34" rx="10" fill="currentColor" filter="url(#brush-blue)" />
                    </svg>
                    <h4 className="font-bold text-white font-[var(--font-space)] text-xs sm:text-sm md:text-sm lg:text-base text-center tracking-wide leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {member.name}
                    </h4>
                  </div>

                  {/* Role Tag (Secondary Pink) */}
                  <div className="relative -mt-3 sm:-mt-4 w-max flex justify-center py-1.5 sm:py-2 px-5 sm:px-6 z-10 group-hover:rotate-3 transition-transform duration-300">
                    <svg className="absolute inset-0 w-full h-full text-tropixie-secondary drop-shadow-sm z-[-1]" preserveAspectRatio="none" viewBox="0 0 200 40">
                      <rect x="10" y="8" width="180" height="24" rx="8" fill="currentColor" filter="url(#brush-yellow)" />
                    </svg>
                    <p className="text-white text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest text-center whitespace-nowrap overflow-hidden text-ellipsis">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Decorative Glowing Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-30 pointer-events-none"></div>

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
              className="fixed inset-0 bg-tropixie-dark/80 backdrop-blur-sm z-[200]"
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
