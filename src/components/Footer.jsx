import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#150d24] pt-16 pb-8 border-t border-tropixie-border text-gray-400 font-[var(--font-outfit)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <img src="/logo.png" alt="Tropixie" className="h-10 w-auto object-contain self-start" />
            <p className="text-sm leading-relaxed max-w-xs">
              Bringing imagination to life through animation, VFX, and storytelling.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-tropixie-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-tropixie-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-tropixie-primary transition-colors">Portfolio</a></li>
              <li><a href="#students" className="hover:text-tropixie-primary transition-colors">Students</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-tropixie-primary transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-tropixie-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">3D Animation</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">VFX & Effects</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">AI-Powered VFX</a></li>
              <li><a href="#services" className="hover:text-tropixie-primary transition-colors">Sound Design</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold font-[var(--font-space)] mb-6 tracking-wide">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get updates about our latest projects and stories.
            </p>
            <form className="flex border border-tropixie-border rounded-lg overflow-hidden bg-white/5 focus-within:border-tropixie-primary transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent px-4 py-2 outline-none text-sm w-full text-white placeholder-gray-500"
              />
              <button 
                type="button"
                className="bg-tropixie-primary hover:bg-tropixie-primary/80 transition-colors px-4 text-white flex items-center justify-center"
              >
                <svg className="w-4 h-4 transform rotate-45 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
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
