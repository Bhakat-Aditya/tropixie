import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedVideo])

  return (
    <section id="portfolio" className="relative py-20 lg:py-32 bg-tropixie-dark border-t border-tropixie-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
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
              onClick={() => setSelectedVideo(project)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-tropixie-primary hover:shadow-[0_15px_40px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              {/* Thumbnail Image */}
              <img
                src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                alt={project.title}
                onError={(e) => {
                  // Fallback to hqdefault if maxresdefault doesn't exist
                  e.target.onerror = null;
                  e.target.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-tropixie-primary/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-tropixie-primary transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glowing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-30 pointer-events-none"></div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl aspect-video bg-black border border-tropixie-border rounded-2xl overflow-hidden z-[201] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-tropixie-primary text-white rounded-full flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
