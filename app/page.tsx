import LayoutClient from '@/components/LayoutClient'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ImpactHighlights from '@/components/ImpactHighlights'
import CredibilityShowcase from '@/components/CredibilityShowcase'
import SignatureMarquee from '@/components/SignatureMarquee'

export default function Home() {
  return (
    <LayoutClient>
      <Hero />
      <SignatureMarquee />
      <About />
      <ImpactHighlights />
      <CredibilityShowcase />
      <Projects />
      <Contact />
    </LayoutClient>
  )
}
