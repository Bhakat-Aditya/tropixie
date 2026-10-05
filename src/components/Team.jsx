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
      <section id="team" className="relative py-20 lg:py-28 overflow-hidden text-gray-900 bg-white">
        {/* Section Background Image */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        >
          <img 
            src="/bg1.jpeg" 
            alt="" 
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] object-cover opacity-20 blur-[2px] saturate-50 transform -translate-x-1/2 -translate-y-1/2 rotate-[7deg]" 
          />
          {/* Subtle Yellow Brand Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FCE225]/10 via-yellow-400/5 to-amber-500/10 pointer-events-none mix-blend-multiply"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* SVG Filter for Realistic Brush Stroke Texture */}
          <svg className="hidden" aria-hidden="true">
            <filter id="brush-texture" x="-10%" y="-10%" width="120%" height="120%">
              {/* Fractal noise for rough edges, baseFrequency creates horizontal bristle streaks */}
              <feTurbulence type="fractalNoise" baseFrequency="0.01 0.3" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative inline-flex items-center justify-center mt-6"
            >
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] tracking-tight text-center px-4 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-500 to-indigo-800 animate-text-gradient drop-shadow-xl">
                Meet Our Team
              </h2>
            </motion.div>
          </div>

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

                {/* Paint Brush Style Tags */}
                <div className="relative -mt-6 sm:-mt-8 z-20 flex flex-col items-center w-[110%] sm:w-[120%]">
                  
                  {/* Name Tag (Blue/Purple Stroke) */}
                  <div className="relative z-10 px-4 py-1.5 md:py-2 transform hover:-translate-y-0.5 transition-transform duration-300 flex items-center justify-center group/name">
                    {/* Brush Background */}
                    <div 
                      className="absolute inset-0 bg-[#635BFF] transition-colors duration-300 group-hover/name:bg-[#5249ea]"
                      style={{ filter: 'url(#brush-texture)', borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                    ></div>
                    {/* Text */}
                    <h4 className="relative z-10 font-bold text-white font-[var(--font-space)] text-sm sm:text-base md:text-lg text-center tracking-wide leading-tight whitespace-nowrap px-1 drop-shadow-sm">
                      {member.name}
                    </h4>
                  </div>
                  
                  {/* Role Tag (Magenta/Pink Stroke) */}
                  <div className="relative -mt-0.5 sm:-mt-1 z-0 px-4 py-1 md:py-1.5 transform hover:-translate-y-0.5 transition-transform duration-300 flex items-center justify-center group/role">
                    {/* Brush Background */}
                    <div 
                      className="absolute inset-0 bg-[#C83681] transition-colors duration-300 group-hover/role:bg-[#b02b6e]"
                      style={{ filter: 'url(#brush-texture)', borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}
                    ></div>
                    {/* Text */}
                    <p className="relative z-10 text-white text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-center whitespace-nowrap px-1 drop-shadow-sm">
                      {member.role}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Decorative Glowing Divider Removed */}

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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
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
