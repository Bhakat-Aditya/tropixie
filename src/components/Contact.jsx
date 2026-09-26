import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: '.contact-header', start: 'top 85%' },
      })

      gsap.from('.contact-item', {
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-list', start: 'top 85%' },
      })

      gsap.from('.contact-form', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
      })

      gsap.from('.support-banner', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.support-banner', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6 lg:px-8 bg-tropixie-bg-alt overflow-hidden"
      aria-label="Contact us"
    >
      {/* Decorative background orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-tropixie-primary/5 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-tropixie-secondary/5 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column — Info */}
          <div>
            <div className="contact-header mb-12">
              <p className="section-label mb-4 text-tropixie-primary font-space tracking-widest text-sm uppercase">Get in touch</p>
              <h2 className="section-heading mb-6 text-4xl lg:text-6xl font-space font-bold leading-tight text-tropixie-heading">
                Let&apos;s Create<br />Together.
              </h2>
              <p className="text-tropixie-text-muted text-lg leading-relaxed max-w-md">
                Have an idea, project, or collaboration in mind? We&apos;d love to hear from you and craft something extraordinary.
              </p>
            </div>

            <div className="contact-list space-y-10">
              {/* Email */}
              <div className="contact-item group">
                <p className="text-tropixie-text-dim font-space text-sm uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello.tropixie@gmail.com" className="text-2xl lg:text-3xl font-space font-medium text-tropixie-heading group-hover:text-tropixie-primary transition-colors relative inline-block">
                  hello.tropixie@gmail.com
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tropixie-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </div>

              {/* Phone */}
              <div className="contact-item group">
                <p className="text-tropixie-text-dim font-space text-sm uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:+918436601135" className="text-2xl lg:text-3xl font-space font-medium text-tropixie-heading group-hover:text-tropixie-primary transition-colors relative inline-block">
                  +91 84366 01135
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tropixie-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </div>

              {/* Address */}
              <div className="contact-item">
                <p className="text-tropixie-text-dim font-space text-sm uppercase tracking-widest mb-2">Office</p>
                <p className="text-lg lg:text-xl font-space text-tropixie-heading leading-relaxed">
                  Swajan, Michael Madhusudan Nagar,<br />
                  Midnapur Town, Dist. Paschim Midnapore<br />
                  (West Bengal) — Pin 721101
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="contact-form">
            <div className="glass-card p-8 lg:p-12 rounded-3xl border border-tropixie-border bg-white/50 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-space font-semibold text-tropixie-heading mb-8">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const firstName = formData.get('firstName') || '';
                const lastName = formData.get('lastName') || '';
                const email = formData.get('email') || '';
                const message = formData.get('message') || '';
                
                const text = `Hello Tropixie!%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Message:* ${message}`;
                const url = `https://wa.me/918436601135?text=${text}`;
                window.open(url, '_blank');
              }}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tropixie-text-muted px-1">First Name</label>
                    <input type="text" name="firstName" required className="w-full bg-tropixie-bg-alt border border-tropixie-border rounded-xl px-4 py-3 outline-none focus:border-tropixie-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tropixie-text-muted px-1">Last Name</label>
                    <input type="text" name="lastName" required className="w-full bg-tropixie-bg-alt border border-tropixie-border rounded-xl px-4 py-3 outline-none focus:border-tropixie-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-tropixie-text-muted px-1">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-tropixie-bg-alt border border-tropixie-border rounded-xl px-4 py-3 outline-none focus:border-tropixie-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-tropixie-text-muted px-1">Message</label>
                  <textarea rows="4" name="message" required className="w-full bg-tropixie-bg-alt border border-tropixie-border rounded-xl px-4 py-3 outline-none focus:border-tropixie-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full cta-button justify-center py-4 text-base tracking-widest mt-4">
                  <span>Send via WhatsApp</span>
                  <span>💬</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Support Our Journey Banner */}
        <div className="support-banner relative rounded-[2rem] overflow-hidden group">
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-tropixie-primary to-tropixie-secondary opacity-90 transition-opacity duration-700 group-hover:opacity-100 -z-10" />
          <div className="absolute inset-0 bg-[url('/2.jpg')] bg-cover bg-center mix-blend-overlay opacity-30 -z-10 transition-transform duration-1000 group-hover:scale-105" />
          
          <div className="relative z-10 p-10 lg:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h3 className="font-space font-bold text-3xl lg:text-5xl text-white leading-tight">
                Support Our<br />Journey
              </h3>
              <div className="w-16 h-1 bg-white/30 rounded-full mx-auto lg:mx-0" />
            </div>
            
            <div className="flex-[2] space-y-6 text-white/90 text-lg leading-relaxed font-light">
              <p>
                Tropixie is more than a studio—it&apos;s a dream to bring stories, emotions, and imagination to life through animation inspired by Indian folklore and culture. We are building this with limited resources but endless passion.
              </p>
              <p>
                With your support, we can create new jobs and opportunities, helping fresh talent from small towns and humble backgrounds to grow and shine.
              </p>
              <p className="font-medium text-white italic text-xl mt-4">
                Together, let&apos;s create something meaningful. ✦
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
