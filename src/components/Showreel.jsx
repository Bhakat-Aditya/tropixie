import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Tropixie Showreel 2024' },
  { id: 'ScMzIvxBSi4', title: 'Character Animation Demo' },
  { id: '9bZkp7q19f0', title: '3D Modeling Breakdown' },
  { id: 'kJQP7kiw5Fk', title: 'VFX Reel' },
  { id: 'JGwWNGJdvx8', title: 'Behind the Scenes' },
  { id: 'RgKAFK5djSk', title: 'Studio Tour' },
  { id: 'OPf0YbXqDm0', title: 'Lighting & Texturing' },
  { id: '2Vv-BfVoq4g', title: 'Rigging Showcase' },
  { id: 'fJ9rUzIMcZQ', title: 'Motion Graphics Reel' },
]

export default function Showreel() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showreel-label', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: '.showreel-label', start: 'top 85%' },
      })

      gsap.from('.showreel-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: '.showreel-heading', start: 'top 85%' },
      })

      gsap.from('.showreel-card', {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.showreel-grid', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-6 lg:px-8"
      aria-label="Showreel"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="showreel-label section-label justify-center mb-4">
            Showreel
          </p>
          <h2 className="showreel-heading section-heading mb-4">
            Watch Our Work
          </h2>
          <p className="text-tropixie-text-muted max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
            A glimpse into the stories, characters, and worlds we bring to life through the magic of animation.
          </p>
        </div>

        <div className="showreel-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="showreel-card flex flex-col gap-4 group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-tropixie-border bg-tropixie-bg-alt shadow-lg group-hover:border-tropixie-primary transition-colors duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&loop=1&playlist=${video.id}&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                  style={{ border: 'none' }}
                  loading="lazy"
                />
              </div>
              <div className="px-2">
                <p className="text-lg font-bold text-tropixie-heading group-hover:text-tropixie-primary transition-colors">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 lg:mt-32" />
    </section>
  )
}
