import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const TEAM = [
  {
    name: 'Sumandeep Pandey',
    role: 'Co-Founder & Creative Director',
    image: '/1.jpg',
    bio: "The visionary force behind Tropixie, bringing unique ideas to life from script to concept.",
    tag: 'Visionary',
  },
  {
    name: 'Sulekha Garai Pandey',
    role: 'Co-Founder & 3D Texturing Lead',
    image: '/2.jpg',
    bio: 'A highly skilled texturing artist with 5+ years of experience across national and international projects.',
    tag: '5+ Years',
  },
  {
    name: 'Amit Mondal',
    role: 'Co-Founder & Senior 3D Artist',
    image: '/3.jpg',
    bio: 'Our most senior artist with over 8 years of experience in high-end 3D modeling and rendering.',
    tag: 'Knowledge Powerhouse',
  },
  {
    name: 'Shovon Pal',
    role: '3D Modeler',
    image: '/4.jpg',
    bio: 'An energetic artist who creates high-quality models with precision. Fully dedicated to the craft.',
    tag: 'Gaming Pro',
  },
  {
    name: 'Payel Chakraborty',
    role: '3D Animator',
    image: '/5.jpg',
    bio: 'A highly focused animator who excels at solving complex challenges with emotion and clarity.',
    tag: 'Precision',
  },
  {
    name: 'Sarmistha Das',
    role: '3D Animator',
    image: '/6.jpg',
    bio: 'Combines strong technical skills with perseverance. She handles challenges with pure determination.',
    tag: 'Resilient',
  },
  {
    name: 'Dolon Maity',
    role: '3D Animator',
    image: '/7.jpeg',
    bio: 'Brings both technical excellence and artistic creativity to every national and international project.',
    tag: 'International',
  },
  {
    name: 'Shilpa Bhunia',
    role: '3D Rig Artist',
    image: '/8.jpg',
    bio: 'An experienced rig artist creating robust, highly-expressive rigs for seamless character animation.',
    tag: 'Expert Rigger',
  },
]

export default function Team() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-header-content', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: { trigger: '.team-header-content', start: 'top 85%' },
      })

      gsap.fromTo('.team-card', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.team-grid', start: 'top 85%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6 lg:px-8 bg-tropixie-bg"
      aria-label="Our team"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="team-header-content section-label justify-center mb-4 text-tropixie-primary font-space tracking-widest text-sm uppercase">
            Our Team
          </p>
          <h2 className="team-header-content section-heading mb-6 text-4xl lg:text-5xl font-space font-bold text-tropixie-heading">
            The Creative Minds
          </h2>
          <p className="team-header-content text-tropixie-text-muted text-lg leading-relaxed">
            At Tropixie Animation Studio, our strength lies in a passionate and talented team driven by creativity, experience, and a shared vision.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="team-card group relative rounded-[2rem] overflow-hidden bg-tropixie-bg-alt shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer h-[400px] lg:h-[450px]"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/95 via-[#1e1b4b]/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                
                {/* Tag */}
                <div className="mb-auto mt-2 self-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/20 text-white backdrop-blur-md border border-white/30">
                    {member.tag}
                  </span>
                </div>

                {/* Text Details */}
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-space font-bold text-2xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-tropixie-primary-light font-medium text-sm tracking-wide mb-3">
                    {member.role}
                  </p>
                  
                  {/* Bio (Revealed on hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm leading-relaxed mt-2 pb-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
