import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Showreel from './components/Showreel'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingNav from './components/FloatingNav'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    lenisRef.current = lenis

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const stopScroll = () => lenis.stop()
    const startScroll = () => lenis.start()

    window.addEventListener('stop-scroll', stopScroll)
    window.addEventListener('start-scroll', startScroll)

    return () => {
      window.removeEventListener('stop-scroll', stopScroll)
      window.removeEventListener('start-scroll', startScroll)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Tropixie Animation Studio | 3D Animation, VFX & Motion Graphics</title>
        <meta
          name="description"
          content="Tropixie Animation Studio — Premium 3D animation, VFX, motion graphics, and AI-driven content from Medinipur, India."
        />
      </Helmet>

      <div className="relative overflow-x-hidden">
        <Navbar />
        <main style={{ marginTop: '80px' }}>
          <Hero />
          <About />
          <Services />
          <Showreel />
          <Team />
          <Contact />
        </main>
        <Footer />
        <FloatingNav />
        <WhatsAppButton />
      </div>
    </>
  )
}
