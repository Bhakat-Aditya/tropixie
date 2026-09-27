export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = ['About', 'Services', 'Showreel', 'Team', 'Contact']

  return (
    <footer className="bg-[#050505] text-white pt-24 lg:pt-32 pb-8 px-6 lg:px-12 relative overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem]" role="contentinfo">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-tropixie-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 lg:mb-32 border-b border-white/10 pb-16 lg:pb-24">
          <div>
            <p className="font-space tracking-[0.2em] text-sm uppercase text-white/50 mb-6 font-semibold">
              Ready to begin?
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-space font-bold tracking-tighter leading-[1.1]">
              Let's create<br />
              <span className="text-tropixie-primary">magic together.</span>
            </h2>
          </div>
          <button 
            onClick={() => scrollTo('#contact')}
            className="group flex items-center justify-center w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white text-tropixie-heading hover:bg-tropixie-primary hover:text-white transition-all duration-500 shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_var(--color-tropixie-primary)]"
          >
            <span className="font-space font-bold text-sm lg:text-base tracking-widest uppercase">Start</span>
          </button>
        </div>

        {/* Links and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand & Description (Spans 5) */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4 mb-8 cursor-pointer group w-fit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="Tropixie" className="h-10 lg:h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300" />
              <span className="font-space font-bold text-2xl lg:text-3xl tracking-widest uppercase">
                Tropixie
              </span>
            </div>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-sm font-light">
              Where imagination meets animation. Crafting stories that transcend boundaries of language and culture from Medinipur, India.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links (Spans 3) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-space font-semibold text-xs mb-8 uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                  className="text-white/80 text-base lg:text-lg hover:text-white hover:translate-x-2 transition-all duration-300 text-left w-fit font-light"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact (Spans 4) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-space font-semibold text-xs mb-8 uppercase tracking-[0.2em] text-white/40">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4 text-base lg:text-lg text-white/80 font-light">
              <a href="mailto:hello.tropixie@gmail.com" className="hover:text-white transition-colors w-fit group flex items-center gap-2">
                hello.tropixie@gmail.com
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-tropixie-primary">↗</span>
              </a>
              <a href="tel:+918436601135" className="hover:text-white transition-colors w-fit group flex items-center gap-2">
                +91 84366 01135
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-tropixie-primary">↗</span>
              </a>
              <p className="text-white/40 mt-4 text-sm lg:text-base">
                Midnapur Town,<br />West Bengal, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs lg:text-sm font-space tracking-[0.2em] text-white/40 uppercase border-t border-white/10 pt-8">
          <p>
            © {currentYear} Tropixie Studio
          </p>
          <p>
            Crafted with <span className="text-tropixie-primary">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
