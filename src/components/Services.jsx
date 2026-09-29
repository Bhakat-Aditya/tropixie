import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EXPERTISE = [
  {
    title: 'Concept & Script Development',
    shortDesc: 'Crafting engaging concepts & scripts.',
    fullDesc: 'We craft engaging concepts and scripts tailored to your vision. Our team works closely with you to understand your core message and translates it into compelling narratives that resonate with your target audience.',
    icon: '/icon_concept_1790525258317.jpg'
  },
  {
    title: '3D Modeling',
    shortDesc: 'High-quality models & environments.',
    fullDesc: 'We provide high-quality 3D models for characters, props, and environments. From stylized low-poly assets to photorealistic high-fidelity models, our topology is clean, optimized, and ready for production.',
    icon: '/icon_3d_1790525271896.jpg'
  },
  {
    title: 'Rigging',
    shortDesc: 'Efficient and expressive rigging.',
    fullDesc: 'Efficient rigging for smooth, natural, and expressive animations. We build robust skeletal structures, custom controls, and blendshapes to give animators ultimate freedom and flexibility.',
    icon: '/icon_rigging_1790525285225.jpg'
  },
  {
    title: 'Lighting & Compositing',
    shortDesc: 'Cinematic lighting & rich visuals.',
    fullDesc: 'Cinematic lighting and compositing for visually rich results. We set the mood, enhance depth, and seamlessly blend rendered layers to achieve a polished, industry-standard final look.',
    icon: '/icon_lighting_1790525297380.jpg'
  },
  {
    title: 'Animation',
    shortDesc: 'Captivating 3D character animation.',
    fullDesc: 'High-quality 3D animation that captivates and engages audiences. Whether it is subtle character acting or high-octane action sequences, we breathe life into static models with precise timing and weight.',
    icon: '/icon_animation_1790525309734.jpg'
  },
  {
    title: 'VFX & Motion Graphics',
    shortDesc: 'Stunning effects & motion design.',
    fullDesc: 'Stunning effects and motion graphics that add depth and impact. From explosive simulations (fire, smoke, water) to sleek motion design, we elevate your project’s visual appeal.',
    icon: '/icon_vfx_1790525322253.jpg'
  },
  {
    title: 'Sound Design & Dubbing',
    shortDesc: 'Complete audio solutions.',
    fullDesc: 'Complete audio solutions for immersive storytelling experiences. We provide Foley, sound effects, mixing, and professional dubbing to ensure your visuals are perfectly complemented by high-fidelity sound.',
    icon: '/icon_sound_1790525339026.jpg'
  },
  {
    title: 'AI-Powered VFX',
    shortDesc: 'AI-driven production workflows.',
    fullDesc: 'AI-driven workflows for faster production and better quality output. We leverage cutting-edge AI tools for rotoscoping, upscaling, style transfer, and rapid concepting to optimize the pipeline.',
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
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedService])

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-tropixie-dark-card border-y border-tropixie-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tropixie-secondary font-[var(--font-space)] tracking-[0.2em] text-sm font-semibold uppercase mb-4"
          >
            Our Services
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-space)] text-white">
              Complete Creative Solutions for <span className="text-tropixie-secondary">Every Story</span>
            </h2>
          </motion.div>
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
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group relative bg-tropixie-dark rounded-xl p-4 sm:p-6 border border-tropixie-border hover:border-tropixie-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-center items-center"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onClick={() => setSelectedService(PRINTING_SERVICE)}
              className="flex flex-col justify-center items-center cursor-pointer group relative bg-gradient-to-br from-tropixie-dark to-[#2a134a] rounded-xl p-4 sm:p-6 border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:border-purple-400 transition-all duration-300 h-full"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50 mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300">
                <img src={PRINTING_SERVICE.icon} alt={PRINTING_SERVICE.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 font-[var(--font-space)] leading-tight w-full text-center">{PRINTING_SERVICE.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-[var(--font-outfit)] w-full text-center line-clamp-2">
                {PRINTING_SERVICE.shortDesc}
              </p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Decorative Glowing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-30 pointer-events-none"></div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-tropixie-dark-card border border-tropixie-border rounded-3xl z-[201] p-8 shadow-2xl flex flex-col items-center text-center"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-tropixie-primary/30 mb-6">
                <img src={selectedService.icon} alt={selectedService.title} className="w-full h-full object-cover" />
              </div>

              <h2 className="text-2xl font-bold font-[var(--font-space)] text-white mb-4">
                {selectedService.title}
              </h2>

              <p className="text-gray-300 font-[var(--font-outfit)] text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <button
                onClick={() => setSelectedService(null)}
                className="mt-8 bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold py-2.5 px-8 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
