import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailAddress = "hello.tropixie@gmail.com";
    const subject = encodeURIComponent(`New Inquiry: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-20 bg-tropixie-light">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

        {/* Main Contact Box */}
        <motion.div
          id="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#5a219e] to-[#b326a0] rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row gap-8 lg:gap-12"
        >
          {/* Left side: Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mb-2 leading-tight">
              Let's Create
            </h2>
            <span className="font-[var(--font-space)] tracking-[0.1em] text-xl md:text-2xl font-semibold uppercase mb-10 text-white/90">
              Something Amazing Together
            </span>

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
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors" />
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-tropixie-primary transition-colors resize-none"></textarea>

              <button type="submit" className="bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold font-[var(--font-outfit)] py-3 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all w-max mt-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Send Email
              </button>
            </form>
          </div>
        </motion.div>

        {/* Support Our Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#0d0718] to-[#2a114f] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-tropixie-primary/30 shadow-[0_10px_30px_rgba(168,85,247,0.2)] relative overflow-hidden gap-6"
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

      </div>
    </section>
  )
}
