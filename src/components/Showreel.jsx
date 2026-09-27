import { motion } from 'framer-motion'

const PROJECTS = [
  { id: 1, img: '/1.jpg', title: 'Animation 1' },
  { id: 2, img: '/2.jpg', title: 'Animation 2' },
  { id: 3, img: '/3.jpg', title: 'Animation 3' },
  { id: 4, img: '/4.jpg', title: 'Animation 4' },
  { id: 5, img: '/5.jpg', title: 'Animation 5' },
  { id: 6, img: '/6.jpg', title: 'Animation 6' },
]

export default function Showreel() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-32 bg-tropixie-dark-card border-y border-tropixie-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tropixie-secondary font-[var(--font-space)] tracking-[0.2em] text-sm font-semibold uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 md:w-24 bg-tropixie-border"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-space)] text-white">
              Our Recent Work
            </h2>
            <div className="h-[1px] w-12 md:w-24 bg-tropixie-border"></div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-tropixie-dark border border-tropixie-border cursor-pointer shadow-lg"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-tropixie-dark/20 group-hover:bg-transparent transition-colors duration-300">
                <div className="w-14 h-14 rounded-full border-2 border-tropixie-primary flex items-center justify-center bg-tropixie-dark/60 backdrop-blur-sm group-hover:bg-tropixie-primary transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  )
}
