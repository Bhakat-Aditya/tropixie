import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text elements
      gsap.from('.about-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
      })

      // Parallax for images
      gsap.to('.parallax-img-1', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-images',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.parallax-img-2', {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-images',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Stats animation
      gsap.from('.about-stat', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '8+', label: 'Years Exp.' },
    { value: '8', label: 'Talents' },
    { value: '100%', label: 'Passion' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-48 px-6 lg:px-8 bg-tropixie-bg overflow-hidden"
      aria-label="About Tropixie"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Content Grid */}
        <div className="about-content grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="about-reveal section-label mb-6 text-tropixie-primary font-space tracking-widest text-sm uppercase">
                Our Story
              </p>
              <h2 className="about-reveal text-4xl lg:text-6xl font-space font-bold leading-tight text-tropixie-heading mb-8">
                Where stories<br />come alive.
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="about-reveal text-tropixie-text leading-relaxed text-lg lg:text-xl font-light">
                Born in the historic city of <span className="font-medium text-tropixie-primary">Medinipur</span>, Tropixie Animation Studio was founded by Sumandeep, Sulekha, and Amit with a singular vision—to create high-quality animation that transcends language and culture.
              </p>
              <p className="about-reveal text-tropixie-text-muted leading-relaxed text-base lg:text-lg">
                From the cave paintings of Altamira to the epics narrated on the ghats of Kashi, storytelling is humanity's oldest tradition. We consider ourselves the modern continuation of that timeless craft.
              </p>
            </div>

            <div className="about-reveal pt-6 border-t border-tropixie-border">
              <h3 className="font-space font-semibold text-lg text-tropixie-heading mb-2">Why "Tropixie"?</h3>
              <p className="text-tropixie-text-muted text-sm leading-relaxed">
                A fusion of <span className="italic">thaumatrope</span> (a 19th-century optical illusion toy) and <span className="italic">pixel</span> (the unit of digital visuals). It symbolizes that imagination knows no limits.
              </p>
            </div>
          </div>

          {/* Right Column: Image Collage (Spans 7 cols) */}
          <div className="lg:col-span-7 about-images relative h-[600px] lg:h-[800px] w-full flex items-center justify-center">
            {/* Background blur decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-tropixie-primary/10 to-tropixie-secondary/10 rounded-full blur-[100px] -z-10" />

            {/* Main large image */}
            <div className="parallax-img-1 absolute left-0 lg:left-10 top-10 lg:top-20 w-[65%] h-[60%] lg:h-[65%] rounded-3xl overflow-hidden shadow-2xl z-20">
              <img src="/3.jpg" alt="Studio work" className="w-full h-full object-cover" />
            </div>

            {/* Secondary overlapping image */}
            <div className="parallax-img-2 absolute right-0 bottom-10 lg:bottom-20 w-[55%] h-[50%] lg:h-[55%] rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-white">
              <img src="/pic%201.png" alt="Tropixie Team" className="w-full h-full object-cover" />
            </div>

            {/* Small accent image */}
            <div className="absolute left-1/2 top-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <img src="/1.jpg" alt="Details" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats mt-24 lg:mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="about-stat flex flex-col items-center justify-center p-8 lg:p-12 rounded-[2rem] bg-tropixie-bg-alt border border-tropixie-border text-center group hover:bg-tropixie-primary/5 transition-colors duration-500">
              <div className="text-5xl lg:text-7xl font-space font-bold bg-clip-text text-transparent bg-gradient-to-r from-tropixie-primary to-tropixie-secondary group-hover:scale-110 transition-transform duration-500 mb-4">
                {stat.value}
              </div>
              <div className="text-tropixie-text-heading font-medium tracking-widest uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement (Cinematic text) */}
        <div className="mt-32 lg:mt-48 text-center px-4">
          <p className="about-reveal text-tropixie-heading font-space font-light text-2xl lg:text-5xl leading-tight max-w-5xl mx-auto">
            "We are not a conventional company; we are storytellers at heart. We aim to revive <span className="font-semibold text-tropixie-primary">lost emotions</span>, memories, and the simple joy of experiencing a <span className="font-semibold text-tropixie-secondary">good story</span>."
          </p>
        </div>

      </div>
    </section>
  )
}
