import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918436601135";
    const text = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 bg-tropixie-light">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Support Our Journey Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-[#0d0718] to-[#2a114f] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-tropixie-primary/30 shadow-[0_10px_30px_rgba(168,85,247,0.2)] relative overflow-hidden gap-6"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tropixie-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-space)] text-white mb-2">
              Support Our Journey ✨
            </h3>
            <p className="text-gray-300 font-[var(--font-outfit)] text-sm md:text-base leading-relaxed max-w-2xl">
              We are building Tropixie with limited resources but endless passion. Your support helps us create new opportunities for fresh talent from humble backgrounds to shine.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-tropixie-accent font-[var(--font-cursive)] -rotate-2 drop-shadow-md">
              Let's grow together.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Contact Box */}
          <motion.div 
            id="contact-box"
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
                Have an idea, project, or collaboration in mind? Feel free to reach out—we’d love to hear from you and create something amazing together.
              </p>
              
              <div className="space-y-4 font-[var(--font-outfit)] text-sm">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <a href="tel:+918436601135" className="hover:text-white hover:underline transition-all">
                    +91 8436601135
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <a href="mailto:hello.tropixie@gmail.com" className="hover:text-white hover:underline transition-all">
                    hello.tropixie@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span className="leading-tight">
                    C8M9+37C, Michael Madhusudan Nagar,<br />Midnapore, West Bengal 721101
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors resize-none"></textarea>
                
                <button type="submit" className="bg-[#25D366] text-white font-semibold font-[var(--font-outfit)] py-3 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:bg-[#128C7E] transition-colors w-max mt-4 shadow-lg shadow-[#25D366]/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Send to WhatsApp
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
            className="w-full lg:w-[35%] h-[400px] lg:h-auto rounded-3xl overflow-hidden relative shadow-lg border border-gray-200 bg-gray-100 group cursor-pointer"
            onClick={() => window.open("https://www.google.com/maps/place/Tropixie+Animation+Sutdio/@22.4333449,87.3158112,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1d5b0071966335:0x5b0e0f6481845aef!8m2!3d22.4333449!4d87.3183861!16s%2Fg%2F11zgcv_rz6", "_blank")}
          >
            <iframe 
              src="https://maps.google.com/maps?q=22.4333449,87.3183861&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm font-bold text-gray-800">
                <span>View on Google Maps</span>
                <svg className="w-4 h-4 text-tropixie-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
