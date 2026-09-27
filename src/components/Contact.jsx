import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      className="relative py-16 lg:py-24 px-6 lg:px-8 bg-tropixie-bg-alt overflow-hidden"
      aria-label="Contact us"
    >
      {/* Decorative background orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-tropixie-primary/10 to-transparent rounded-full blur-[100px] -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-tropixie-secondary/10 to-transparent rounded-full blur-[100px] -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column — Info */}
          <div>
            <div className="contact-header mb-12">
              <p className="section-label mb-4 text-tropixie-primary font-space tracking-widest text-sm uppercase">Get in touch</p>
              <h2 className="section-heading mb-6 text-5xl lg:text-7xl font-space font-bold leading-tight text-tropixie-heading">
                Let&apos;s Create<br />Together.
              </h2>
              <p className="text-tropixie-text-muted text-lg leading-relaxed max-w-md font-light">
                Have an idea, project, or collaboration in mind? We&apos;d love to hear from you and craft something extraordinary.
              </p>
            </div>

            <div className="contact-list grid gap-6">
              {/* Email */}
              <div className="contact-item">
                <div className="contact-info-item group items-center">
                  <div className="w-14 h-14 rounded-2xl bg-tropixie-primary/10 flex items-center justify-center text-tropixie-primary group-hover:bg-tropixie-primary group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-tropixie-text-dim font-space text-xs uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:hello.tropixie@gmail.com" className="text-xl lg:text-2xl font-space font-medium text-tropixie-heading group-hover:text-tropixie-primary transition-colors">
                      hello.tropixie@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-info-item group items-center">
                  <div className="w-14 h-14 rounded-2xl bg-tropixie-secondary/10 flex items-center justify-center text-tropixie-secondary group-hover:bg-tropixie-secondary group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <p className="text-tropixie-text-dim font-space text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+918436601135" className="text-xl lg:text-2xl font-space font-medium text-tropixie-heading group-hover:text-tropixie-secondary transition-colors">
                      +91 84366 01135
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-info-item group items-center">
                  <div className="w-14 h-14 rounded-2xl bg-tropixie-magenta/10 flex items-center justify-center text-tropixie-magenta group-hover:bg-tropixie-magenta group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <p className="text-tropixie-text-dim font-space text-xs uppercase tracking-widest mb-1">Office</p>
                    <p className="text-base font-space text-tropixie-heading leading-relaxed">
                      Swajan, Michael Madhusudan Nagar,<br />
                      Midnapur Town, Dist. Paschim Midnapore<br />
                      (West Bengal) — Pin 721101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="contact-form">
            <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(124,58,237,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tropixie-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-3xl font-space font-bold text-tropixie-heading mb-8">Send us a message</h3>
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
                    <label className="text-sm font-semibold text-tropixie-text-muted px-1 tracking-wide">First Name</label>
                    <input type="text" name="firstName" required className="w-full bg-white/60 border border-tropixie-border rounded-2xl px-5 py-4 outline-none focus:border-tropixie-primary focus:ring-4 focus:ring-tropixie-primary/10 transition-all shadow-sm" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-tropixie-text-muted px-1 tracking-wide">Last Name</label>
                    <input type="text" name="lastName" required className="w-full bg-white/60 border border-tropixie-border rounded-2xl px-5 py-4 outline-none focus:border-tropixie-primary focus:ring-4 focus:ring-tropixie-primary/10 transition-all shadow-sm" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-tropixie-text-muted px-1 tracking-wide">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-white/60 border border-tropixie-border rounded-2xl px-5 py-4 outline-none focus:border-tropixie-primary focus:ring-4 focus:ring-tropixie-primary/10 transition-all shadow-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-tropixie-text-muted px-1 tracking-wide">Message</label>
                  <textarea rows="4" name="message" required className="w-full bg-white/60 border border-tropixie-border rounded-2xl px-5 py-4 outline-none focus:border-tropixie-primary focus:ring-4 focus:ring-tropixie-primary/10 transition-all shadow-sm resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full cta-button justify-center py-5 text-base tracking-widest mt-6 shadow-xl shadow-tropixie-primary/20">
                  <span>Send via WhatsApp</span>
                  <span className="text-lg">💬</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Support Our Journey Banner */}
        <div className="support-banner relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-tropixie-primary via-tropixie-heading to-tropixie-secondary opacity-95 transition-opacity duration-700 group-hover:opacity-100 -z-10" />
          <div className="absolute inset-0 bg-[url('/2.jpg')] bg-cover bg-center mix-blend-overlay opacity-30 -z-10 transition-transform duration-1000 group-hover:scale-110" />
          
          <div className="relative z-10 p-12 lg:p-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6 relative">
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              <h3 className="font-space font-extrabold text-4xl lg:text-6xl text-white leading-tight">
                Support Our<br />Journey
              </h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-white to-white/20 rounded-full mx-auto lg:mx-0" />
            </div>
            
            <div className="flex-[2] space-y-6 text-white/90 text-lg lg:text-xl leading-relaxed font-light">
              <p>
                Tropixie is more than a studio—it&apos;s a dream to bring stories, emotions, and imagination to life through animation inspired by Indian folklore and culture. We are building this with limited resources but endless passion.
              </p>
              <p>
                With your support, we can create new jobs and opportunities, helping fresh talent from small towns and humble backgrounds to grow and shine.
              </p>
              <p className="font-medium text-white italic text-2xl mt-8">
                Together, let&apos;s create something meaningful. <span className="text-tropixie-accent-warm">✦</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
