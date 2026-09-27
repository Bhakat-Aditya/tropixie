import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    text: "Tropixie Animation Studio is the best place to learn and grow. The mentors are incredibly supportive.",
    name: "Riya Mondal",
    role: "3D Animation Student",
    avatar: "/Payel2.jpg"
  },
  {
    text: "I learned so much about animation and VFX. The practical approach here is amazing!",
    name: "Arindam Das",
    role: "VFX Student",
    avatar: "/Dolon.jpeg"
  },
  {
    text: "The projects and guidance at Tropixie gave me the confidence to start my own journey.",
    name: "Puja Karmakar",
    role: "Animation Student",
    avatar: "/Sulekha.jpg"
  },
  {
    text: "A creative environment with real-world learning experience. Highly recommended!",
    name: "Souvik Pal",
    role: "Motion Graphics Student",
    avatar: "/Sumandeep.jpg"
  }
]

export default function Students() {
  return (
    <section id="students" className="relative py-20 lg:py-28 bg-tropixie-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-tropixie-primary font-[var(--font-space)] tracking-[0.15em] text-sm font-semibold uppercase">Students</span>
            <div className="h-[2px] w-12 bg-tropixie-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-[var(--font-space)] text-[#1a102b]"
          >
            Voices of Our Students
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-tropixie-primary flex items-center justify-center mb-6 shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              
              {/* Text */}
              <p className="text-gray-600 font-[var(--font-outfit)] leading-relaxed flex-grow text-[0.95rem] mb-8">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex-grow">
                  <h4 className="font-bold text-[#1a102b] font-[var(--font-space)] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-tropixie-primary font-medium">{testimonial.role}</p>
                </div>
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover shrink-0 border border-gray-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-6 h-2 rounded-full bg-tropixie-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  )
}
