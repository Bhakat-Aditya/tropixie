export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 lg:py-24 bg-tropixie-bg"
      aria-label="About Tropixie"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <p className="section-label justify-center mb-4">
            Our Story
          </p>
          <h2 className="section-heading mb-8">
            Where stories come alive.
          </h2>
          <div className="space-y-4 text-tropixie-text-muted leading-relaxed text-base lg:text-lg font-light max-w-3xl">
            <p>
              Born in the historic city of <span className="font-medium text-tropixie-heading">Medinipur</span>, Tropixie Animation Studio was founded with a singular vision—to create high-quality animation that transcends language and culture.
            </p>
            <p>
              From the cave paintings of Altamira to the epics narrated on the ghats of Kashi, storytelling is humanity's oldest tradition. We consider ourselves the modern continuation of that timeless craft.
            </p>
          </div>
        </div>

        {/* Cinematic Showcase Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group">
          <img 
            src="/3.jpg" 
            alt="Tropixie Studio Work" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
          />
          {/* Subtle gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          {/* Glassmorphism Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-auto lg:w-[420px] bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] text-white shadow-2xl transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-1 bg-tropixie-primary rounded-full" />
              <h3 className="font-space font-bold text-xl uppercase tracking-widest">Why "Tropixie"?</h3>
            </div>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed font-light">
              A fusion of <span className="italic font-medium text-white">thaumatrope</span> (a 19th-century optical illusion toy) and <span className="italic font-medium text-white">pixel</span> (the unit of digital visuals). It symbolizes that our imagination knows absolutely no limits.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

