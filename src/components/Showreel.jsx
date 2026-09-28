import { motion } from 'framer-motion'

const PROJECTS = [
  // You can replace these youtubeIds with the ones from the links you post in chat!
  { id: 1, youtubeId: 'dQw4w9WgXcQ', title: 'Project 1' },
  { id: 2, youtubeId: 'tgbNymZ7vqY', title: 'Project 2' },
  { id: 3, youtubeId: 'jNQXAC9IVRw', title: 'Project 3' },
  { id: 4, youtubeId: '3JZ_D3ELwOQ', title: 'Project 4' },
  { id: 5, youtubeId: 'V-_O7nl0Ii0', title: 'Project 5' },
  { id: 6, youtubeId: 'YQHsXMglC9A', title: 'Project 6' },
]

export default function Showreel() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-32 bg-tropixie-dark border-t border-tropixie-border">
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
              className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                title={project.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glowing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-30 pointer-events-none"></div>
    </section>
  )
}
