'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CustomCursor from '@/components/CustomCursor'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import useKonamiCode from '@/components/useKonamiCode'
import KonamiParticles from '@/components/KonamiParticles'
import KonamiOverlay from '@/components/KonamiOverlay'
import PageLoader from '@/components/PageLoader'
import RetroToggle from '@/components/RetroToggle'
import useConsoleEasterEgg from '@/components/useConsoleEasterEgg'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import SignatureBackground from '@/components/SignatureBackground'
import { Analytics } from '@vercel/analytics/react'

let konamiCooldown = false

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [konamiActive, setKonamiActive] = useState(false)

  useConsoleEasterEgg()

  // 👾 Konami Code Trigger
  useKonamiCode(() => {
    if (konamiCooldown) return
    konamiCooldown = true
    setTimeout(() => (konamiCooldown = false), 4000)

    const root = document.documentElement
    const retroMode = root.classList.contains('retro')
    root.classList.toggle('retro')

    if (!retroMode) {
      const audio = new Audio('/sounds/konami.mp3')
      audio.volume = 0.8
      audio.play()
      setKonamiActive(true)
      setTimeout(() => setKonamiActive(false), 2000)
      console.log('%cKonami Mode: ON', 'color: lime; background: black; padding: 4px')
    } else {
      console.log('%cKonami Mode: OFF', 'color: red; background: black; padding: 4px')
    }
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <SignatureBackground variant="default" className="w-full h-full" />
      </div>
      {/* ⏳ Fancy Page Loader */}
      <PageLoader />

      {/* 🕹️ Konami Effects */}
      <KonamiOverlay active={konamiActive} />
      <KonamiParticles active={konamiActive} />

      {/* 🧭 Layout Navigation */}
      <Navbar />
      <AnimatePresence mode="wait">
        <main className="pt-24 max-w-7xl mx-auto px-6 min-h-screen">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
      </AnimatePresence>
      <Footer />

      {/* ✨ Enhancements */}
      <ScrollToTop />
      <CustomCursor />
      <RetroToggle />
      <Analytics />
    </ThemeProvider>
  )
}
