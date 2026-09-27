import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-tropixie-light">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Contact Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-grow lg:w-[65%] bg-gradient-to-r from-[#5a219e] to-[#b326a0] rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row gap-8 lg:gap-12"
          >
            {/* Left side: Info */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-[var(--font-space)] tracking-[0.15em] text-xs font-semibold uppercase mb-2 text-white/80">
                Let's Create
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-space)] mb-4 leading-tight">
                Something Amazing Together
              </h2>
              <p className="text-white/80 text-sm md:text-base font-[var(--font-outfit)] leading-relaxed mb-10 max-w-sm">
                Have an idea, project, or collaboration in mind? We'd love to hear from you!
              </p>
              
              <div className="space-y-4 font-[var(--font-outfit)] text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <span>+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span>hello@tropixie.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span>Medinipur, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                  <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                <textarea placeholder="Your Message" rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors resize-none"></textarea>
                
                <button type="button" className="bg-[#f97316] text-white font-semibold font-[var(--font-outfit)] py-3 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:bg-[#ea580c] transition-colors w-max mt-4">
                  Send Message
                  <svg className="w-4 h-4 ml-1 transform rotate-45 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map Image (Right column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[35%] h-[400px] lg:h-auto rounded-3xl overflow-hidden relative shadow-lg border border-gray-200 bg-gray-100"
          >
            {/* Placeholder for map image (using a background gradient or static image if we had one) */}
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Medinipur,West+Bengal&zoom=14&size=600x600&maptype=roadmap&markers=color:purple%7CMedinipur,West+Bengal&key=YOUR_API_KEY')] bg-cover bg-center">
              {/* Fallback pattern if image doesn't load */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
            </div>
            {/* Fake Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold text-gray-800 whitespace-nowrap">
              <div className="w-6 h-6 rounded-full bg-tropixie-primary flex items-center justify-center text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              </div>
              Tropixie Animation Studio
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
