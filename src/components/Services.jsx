import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    title: 'Concept & Scripting',
    description: 'We craft strong concepts and engaging scripts tailored to your vision, ensuring a clear and impactful storytelling foundation.',
  },
  {
    title: '3D Modeling',
    description: 'We create detailed and production-ready 3D models, including characters, props, and environments with high visual accuracy.',
  },
  {
    title: 'Rigging',
    description: 'Our team builds efficient rigging systems that allow smooth, natural, and expressive character movements for animation.',
  },
  {
    title: 'Lighting & Compositing',
    description: 'We enhance every scene with cinematic lighting and advanced compositing techniques, delivering polished and visually rich results.',
  },
  {
    title: '3D Animation',
    description: 'We produce high-quality 3D animation—from stylized storytelling to realistic motion—designed to captivate and engage your audience.',
  },
  {
    title: 'VFX & Motion Graphics',
    description: 'We create compelling visual effects and modern motion graphics that add depth, energy, and professionalism to your content.',
  },
  {
    title: 'Sound Design',
    description: 'We provide complete audio solutions, including voice-over, sound design, and dubbing, ensuring a seamless and immersive experience.',
  },
  {
    title: 'AI-Powered VFX',
    description: 'We leverage AI to enhance VFX production, enabling faster workflows, smarter processing, and high-quality cinematic output.',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header-content', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: '.services-header-content', start: 'top 85%' },
      })

      gsap.from('.service-row', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.services-list', start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6 lg:px-8 overflow-hidden bg-white"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-32">
            <div className="services-header-content">
              <p className="section-label mb-4 text-tropixie-primary font-space tracking-widest text-sm uppercase">Our Expertise</p>
              <h2 className="section-heading mb-6 text-4xl lg:text-5xl font-space font-bold leading-tight text-tropixie-heading">
                End-to-End<br />Creative<br />Solutions
              </h2>
              <p className="text-tropixie-text-muted text-lg leading-relaxed mb-8 max-w-sm">
                From initial concept to final cinematic output, we transform ideas into high-quality visual experiences through precision and artistry.
              </p>
              
              <div className="hidden lg:block w-16 h-1 bg-tropixie-primary/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive List */}
        <div className="lg:w-2/3 services-list">
          <div className="border-t border-tropixie-border">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="service-row group border-b border-tropixie-border relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background hover highlight */}
                <div className="absolute inset-0 bg-tropixie-bg-alt opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="py-8 lg:py-10 px-4 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Number & Title */}
                    <div className="flex items-center gap-6 lg:gap-10">
                      <span className="font-space text-lg lg:text-xl text-tropixie-text-dim group-hover:text-tropixie-primary transition-colors duration-300 font-medium">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-space text-2xl lg:text-3xl font-semibold text-tropixie-heading group-hover:text-tropixie-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className="hidden md:flex w-10 h-10 rounded-full border border-tropixie-border items-center justify-center group-hover:bg-tropixie-primary group-hover:border-tropixie-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  {/* Expanding Description */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-6 text-tropixie-text-muted text-lg leading-relaxed md:pl-20 lg:pl-24 max-w-2xl">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
