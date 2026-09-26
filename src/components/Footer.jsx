export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-gradient py-12 lg:py-16 px-6 lg:px-8" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="Tropixie" className="h-8 w-auto" />
              <span className="text-tropixie-heading font-semibold text-lg tracking-wide font-[var(--font-space)]">
                Tropixie
              </span>
            </div>
            <p className="text-tropixie-text-muted text-sm leading-relaxed max-w-xs">
              Where imagination meets animation. Crafting stories that transcend boundaries of language and culture from Medinipur, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-tropixie-heading font-[var(--font-space)] font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {['About', 'Services', 'Showreel', 'Team', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                  className="text-tropixie-text-muted text-sm hover:text-tropixie-primary transition-colors text-left w-fit"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-tropixie-heading font-[var(--font-space)] font-semibold text-sm mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm text-tropixie-text-muted">
              <p>
                <a
                  href="mailto:hello.tropixie@gmail.com"
                  className="hover:text-tropixie-primary transition-colors"
                >
                  hello.tropixie@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+918436601135"
                  className="hover:text-tropixie-primary transition-colors"
                >
                  +91 84366 01135
                </a>
              </p>
              <p className="leading-relaxed">
                Midnapur Town, West Bengal, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-tropixie-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-tropixie-text-dim text-xs tracking-wider">
            © {currentYear} Tropixie Animation Studio. All rights reserved.
          </p>
          <p className="text-tropixie-text-dim text-xs tracking-wider">
            Crafted with <span className="text-tropixie-magenta">♥</span> in Medinipur, India
          </p>
        </div>
      </div>
    </footer>
  )
}
