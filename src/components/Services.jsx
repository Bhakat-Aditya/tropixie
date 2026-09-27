import { motion } from 'framer-motion'

const EXPERTISE = [
  {
    title: 'Concept & Script Development',
    description: 'We craft engaging concepts and scripts tailored to your vision.',
    icon: '/icon_concept_1790525258317.jpg'
  },
  {
    title: '3D Modeling',
    description: 'High-quality 3D models for characters, props, and environments.',
    icon: '/icon_3d_1790525271896.jpg'
  },
  {
    title: 'Rigging',
    description: 'Efficient rigging for smooth, natural, and expressive animations.',
    icon: '/icon_rigging_1790525285225.jpg'
  },
  {
    title: 'Lighting & Compositing',
    description: 'Cinematic lighting and compositing for visually rich results.',
    icon: '/icon_lighting_1790525297380.jpg'
  },
  {
    title: 'Animation',
    description: 'High-quality 3D animation that captivates and engages audiences.',
    icon: '/icon_animation_1790525309734.jpg'
  },
  {
    title: 'VFX & Motion Graphics',
    description: 'Stunning effects and motion graphics that add depth and impact.',
    icon: '/icon_vfx_1790525322253.jpg'
  },
  {
    title: 'Sound Design & Dubbing',
    description: 'Complete audio solutions for immersive storytelling experiences.',
    icon: '/icon_sound_1790525339026.jpg'
  },
  {
    title: 'AI-Powered VFX Services',
    description: 'AI-driven workflows for faster production and better quality output.',
    icon: '/icon_ai_1790525353719.jpg'
  },
]

export default function Services() {
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

        {/* Exclusive Service Card - 3D Printing */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-tropixie-dark to-[#1a102b] rounded-3xl p-8 md:p-12 border border-tropixie-primary/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tropixie-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          {/* Image */}
          <div className="w-full md:w-[35%] lg:w-[30%] flex-shrink-0">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-tropixie-primary/20 group-hover:scale-105 group-hover:border-tropixie-primary transition-all duration-500">
              <img src="/icon_3dprint_1790525583718.jpg" alt="3D Printing Service" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col items-start z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tropixie-secondary/20 text-tropixie-secondary font-semibold text-xs tracking-widest uppercase mb-4 border border-tropixie-secondary/30">
              Exclusive Service
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-[var(--font-space)] text-white mb-4">
              Premium 3D Printing
            </h3>
            <p className="text-gray-300 font-[var(--font-outfit)] text-lg leading-relaxed mb-8">
              Bring your digital models into the physical world. We offer high-precision, industrial-grade 3D printing services for prototypes, miniatures, and custom models with incredible detail and durability.
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)]"
            >
              Explore 3D Printing Services
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative bg-tropixie-dark rounded-xl p-6 border border-tropixie-border hover:border-tropixie-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-tropixie-primary/20 mb-6 group-hover:scale-110 group-hover:border-tropixie-primary transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-white mb-3 font-[var(--font-space)]">{service.title}</h3>
              <p className="text-sm text-gray-400 font-[var(--font-outfit)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>



      </div>

      {/* SVG Curve - transitions into the light section */}
      <svg className="services-curve" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C480,120 960,120 1440,60 L1440,120 L0,120 Z"></path>
      </svg>
    </section>
  )
}
