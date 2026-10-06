import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Showreel from './components/Showreel'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingNav from './components/FloatingNav'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import ProtectedRoute from './admin/ProtectedRoute'

gsap.registerPlugin(ScrollTrigger)

function MainSite() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    lenisRef.current = lenis

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
          <Stats />
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
