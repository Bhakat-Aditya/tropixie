import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: '.team-header', start: 'top 85%' }
      })
      
      gsap.from('.monitor-frame', {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.monitor-frame', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % TEAM.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % TEAM.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length)
  }

  const handleDragEnd = (e, { offset }) => {
    const swipe = offset.x
    if (swipe < -50) {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % TEAM.length)
    } else if (swipe > 50) {
      setDirection(-1)
      setCurrentIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length)
    }
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    })
  }

  const activeMember = TEAM[currentIndex]

  return (
    <section 
      id="team" 
      ref={sectionRef} 
      className="relative py-16 lg:py-24 bg-tropixie-bg overflow-hidden" 
      aria-label="Our team"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        
        <div className="team-header text-center max-w-3xl mx-auto mb-16">
          <p className="section-label justify-center mb-4">Our Team</p>
          <h2 className="section-heading mb-6">The Creative Minds</h2>
          <p className="text-tropixie-text-muted text-lg font-light leading-relaxed">
            Meet the talented individuals who bring stories to life. Swipe through to learn more about them.
          </p>
        </div>

        {/* The "Small Monitor" Frame */}
        <div 
          className="monitor-frame max-w-5xl mx-auto p-3 lg:p-5 bg-gradient-to-b from-gray-200 to-gray-400 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* The Inner Screen */}
          <div className="monitor-screen relative w-full h-[650px] lg:h-[550px] bg-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-inner flex flex-col lg:flex-row">
            
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 flex flex-col lg:flex-row w-full h-full cursor-grab active:cursor-grabbing"
              >
                {/* Left side: Image */}
                <div className="w-full lg:w-1/2 h-[45%] lg:h-full relative overflow-hidden bg-tropixie-bg-alt">
                  <img 
                    src={activeMember.image} 
                    alt={activeMember.name} 
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  
                  {/* Floating badge inside screen */}
                  <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-space font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                      {activeMember.role}
                    </span>
                  </div>
                </div>

                {/* Right side: Info */}
                <div className="w-full lg:w-1/2 h-[55%] lg:h-full p-8 lg:p-14 flex flex-col justify-center bg-white">
                  <div className="mb-2">
                    <span className="text-tropixie-primary font-space font-semibold tracking-widest text-xs uppercase mb-2 block">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(TEAM.length).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-space font-bold text-tropixie-heading mb-4 leading-tight">
                      {activeMember.name}
                    </h3>
                  </div>
                  <div className="w-12 h-1 bg-tropixie-primary rounded-full mb-6 shrink-0" />
                  <p className="text-tropixie-text-muted text-sm lg:text-base leading-relaxed font-light overflow-y-auto pr-2 pb-8 lg:pb-0" style={{ scrollbarWidth: 'none' }}>
                    {activeMember.bio}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 lg:px-6 pointer-events-none z-30">
              <button 
                onClick={handlePrev}
                className="pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md border border-white text-tropixie-heading flex items-center justify-center hover:bg-white hover:text-tropixie-primary hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md border border-white text-tropixie-heading flex items-center justify-center hover:bg-white hover:text-tropixie-primary hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>

            {/* Pagination Dots Layered over the Screen */}
            <div className="absolute bottom-6 right-8 lg:right-14 z-20 flex gap-2 pointer-events-none">
              {TEAM.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-tropixie-primary' : 'w-2 bg-tropixie-border'}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
