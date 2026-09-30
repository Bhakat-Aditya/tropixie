import { motion } from 'framer-motion'

const EXPERTISE = [
  {
    title: 'Concept & Script Development',
    shortDesc: 'We craft strong concepts and engaging scripts tailored to your vision, ensuring a clear and impactful storytelling foundation.',
    fullDesc: 'We craft strong concepts and engaging scripts tailored to your vision, ensuring a clear and impactful storytelling foundation.',
    icon: '/icon_concept_1790525258317.jpg'
  },
  {
    title: '3D Modeling',
    shortDesc: 'We create detailed and production-ready 3D models, including characters, props, and environments with high visual accuracy.',
    fullDesc: 'We create detailed and production-ready 3D models, including characters, props, and environments with high visual accuracy.',
    icon: '/icon_3d_1790525271896.jpg'
  },
  {
    title: 'Rigging',
    shortDesc: 'Our team builds efficient rigging systems that allow smooth, natural, and expressive character movements for animation.',
    fullDesc: 'Our team builds efficient rigging systems that allow smooth, natural, and expressive character movements for animation.',
    icon: '/icon_rigging_1790525285225.jpg'
  },
  {
    title: 'Lighting & Compositing',
    shortDesc: 'We enhance every scene with cinematic lighting and advanced compositing techniques, delivering polished and visually rich results.',
    fullDesc: 'We enhance every scene with cinematic lighting and advanced compositing techniques, delivering polished and visually rich results.',
    icon: '/icon_lighting_1790525297380.jpg'
  },
  {
    title: 'Animation',
    shortDesc: 'We produce high-quality 3D animation—from stylized storytelling to realistic motion—designed to captivate and engage your audience.',
    fullDesc: 'We produce high-quality 3D animation—from stylized storytelling to realistic motion—designed to captivate and engage your audience.',
    icon: '/icon_animation_1790525309734.jpg'
  },
  {
    title: 'VFX & Motion Graphics',
    shortDesc: 'We create compelling visual effects and modern motion graphics that add depth, energy, and professionalism to your content.',
    fullDesc: 'We create compelling visual effects and modern motion graphics that add depth, energy, and professionalism to your content.',
    icon: '/icon_vfx_1790525322253.jpg'
  },
  {
    title: 'Sound Design & Dubbing',
    shortDesc: 'We provide complete audio solutions, including voice-over, sound design, and dubbing, ensuring a seamless and immersive experience.',
    fullDesc: 'We provide complete audio solutions, including voice-over, sound design, and dubbing, ensuring a seamless and immersive experience.',
    icon: '/icon_sound_1790525339026.jpg'
  },
  {
    title: 'AI-Powered Services',
    shortDesc: 'By integrating AI-driven tools and workflows, we accelerate production, enhance creativity, and deliver innovative, future-ready content.',
    fullDesc: 'By integrating AI-driven tools and workflows, we accelerate production, enhance creativity, and deliver innovative, future-ready content.',
    icon: '/icon_ai_1790525353719.jpg'
  },
]

const PRINTING_SERVICE = {
  title: 'Premium 3D Printing',
  shortDesc: 'Industrial-grade custom 3D printing.',
  fullDesc: 'Bring your digital models into the physical world. We offer high-precision, industrial-grade 3D printing services for prototypes, miniatures, and custom models with incredible detail and durability.',
  icon: '/icon_3dprint_1790525583718.jpg'
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-tropixie-dark-card border-y border-tropixie-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-space)] text-white uppercase tracking-[0.1em] mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-[var(--font-outfit)] text-base md:text-lg leading-relaxed"
          >
            At Tropixie Animation Studio, we deliver end-to-end creative solutions that transform ideas into high-quality visual experiences. From initial concept to final output, we combine creativity, technology, and precision to meet professional standards and client expectations.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EXPERTISE.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative bg-tropixie-dark rounded-xl p-4 sm:p-6 border border-tropixie-border hover:border-tropixie-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-center items-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-lg border border-tropixie-primary/20 mb-4 sm:mb-5 group-hover:scale-110 group-hover:border-tropixie-primary transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 font-[var(--font-space)] leading-tight w-full text-center">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-[var(--font-outfit)] w-full text-center line-clamp-2">
                {service.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3D Printing Centered Card */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
            <motion.a
              href="https://catalog.nextapsolutions.com/whatsapp-store/TropixieMiniature"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col justify-center items-center cursor-pointer group relative bg-gradient-to-br from-tropixie-dark to-[#2a134a] rounded-xl p-4 sm:p-6 border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:border-purple-400 transition-all duration-300 h-full block"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50 mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300">
                <img src={PRINTING_SERVICE.icon} alt={PRINTING_SERVICE.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 font-[var(--font-space)] leading-tight w-full text-center">{PRINTING_SERVICE.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-[var(--font-outfit)] w-full text-center line-clamp-2">
                {PRINTING_SERVICE.shortDesc}
              </p>
              <div className="mt-4 px-6 py-2 bg-gradient-to-r from-tropixie-primary to-purple-600 rounded-full text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
                Order Now
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative Glowing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-50 pointer-events-none"></div>

    </section>
  )
}
