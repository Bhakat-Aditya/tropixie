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
    <section id="contact" className="relative py-20 bg-tropixie-dark-card border-b border-tropixie-border overflow-hidden text-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

        {/* Main Contact Box */}
        <motion.div
          id="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-tropixie-dark rounded-3xl p-8 md:p-12 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-tropixie-border flex flex-col md:flex-row gap-8 lg:gap-12"
        >
          {/* Left side: Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mb-2 leading-tight">
              Let's Create
            </h2>
            <span className="font-[var(--font-space)] tracking-[0.1em] text-xl md:text-2xl font-semibold uppercase mb-10 text-white/90">
              Something Amazing Together
            </span>

            <div className="space-y-6">
              <p className="text-gray-100 font-[var(--font-outfit)] text-sm md:text-base leading-relaxed">
                We are building Tropixie with limited resources but endless passion. Your support helps us create new opportunities for fresh talent from humble backgrounds to shine.
              </p>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="flex-1 bg-tropixie-dark-card border border-tropixie-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-tropixie-dark border border-tropixie-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-tropixie-primary transition-colors" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full bg-tropixie-dark border border-tropixie-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-tropixie-primary transition-colors" />
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="4" className="w-full bg-tropixie-dark border border-tropixie-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-tropixie-primary transition-colors resize-none"></textarea>

              <button type="submit" className="bg-gradient-to-r from-tropixie-primary to-purple-600 text-white font-semibold font-[var(--font-outfit)] py-3 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all w-max mt-4">
                Send
              </button>
            </form>
          </div>
        </motion.div>



      </div>

      {/* Decorative Glowing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-tropixie-primary to-transparent opacity-70"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-tropixie-primary rounded-full blur-[20px] opacity-30 pointer-events-none"></div>

    </section>
  )
}
