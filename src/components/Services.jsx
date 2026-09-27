

const EXPERTISE = [
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
  return (
    <section
      id="services"
      className="py-16 lg:py-24 px-6 lg:px-8 bg-tropixie-bg relative overflow-hidden"
      aria-label="Our expertise"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="section-label justify-center mb-4">
            Our Expertise
          </p>
          <h2 className="section-heading mb-6">
            Comprehensive Creative Solutions
          </h2>
          <p className="text-tropixie-text-muted text-lg font-light leading-relaxed">
            From initial concept to final cinematic output, we transform ideas into high-quality visual experiences through precision and artistry.
          </p>
        </div>

        {/* Minimalist List Section */}
        <div className="border-t border-tropixie-border/60">
          {EXPERTISE.map((service, i) => (
            <div 
              key={i} 
              className="group py-8 lg:py-12 border-b border-tropixie-border/60 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-tropixie-bg-alt transition-colors duration-500 px-4 lg:px-8 -mx-4 lg:-mx-8 rounded-2xl cursor-default"
            >
              <div className="flex items-center gap-6 md:gap-12 md:w-[45%]">
                <span className="font-space text-tropixie-primary font-bold text-sm lg:text-base opacity-70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-space text-2xl lg:text-3xl font-bold text-tropixie-heading group-hover:text-tropixie-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <div className="md:w-[50%] flex items-center justify-between gap-8">
                <p className="text-tropixie-text-muted text-base lg:text-lg font-light leading-relaxed">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
