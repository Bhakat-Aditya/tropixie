import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#150d24] pt-16 pb-8 border-t border-tropixie-border text-gray-400 font-[var(--font-outfit)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">

          {/* Col 1 */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start gap-1">
            <img src="/logo.png" alt="Tropixie" className="h-54 w-auto object-contain mt-[-2rem] md:mt-[-3rem]" />
            <div className="font-[var(--font-space)] uppercase flex flex-col items-center lg:items-start text-center lg:text-left whitespace-nowrap leading-tight gap-1 mt-[-1rem]">
              <span className="font-bold text-2xl tracking-[0.1em] text-white">
                Tropixie
              </span>
              <span className="font-bold text-2xl tracking-[0.1em] text-white">
                Animation Studio
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-tropixie-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-tropixie-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-tropixie-primary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-tropixie-primary transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-tropixie-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">3D Animation</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">VFX & Effects</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">3D Printing</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">AI-Powered VFX</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Sound Design</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Contact Us</h4>
            <div className="space-y-4 text-sm flex flex-col items-center lg:items-start">
              <a href="tel:+918436601135" className="hover:text-white transition-colors flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-tropixie-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 8436601135
              </a>
              <a href="mailto:hello.tropixie@gmail.com" className="hover:text-white transition-colors flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-tropixie-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                hello.tropixie@gmail.com
              </a>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0 md:mt-1 text-tropixie-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed">
                  C8M9+37C, Michael Madhusudan Nagar,<br />Midnapore, West Bengal 721101
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-tropixie-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2026 Tropixie Animation Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
