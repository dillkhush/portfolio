import LayoutClient from '@/components/LayoutClient'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <LayoutClient>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LayoutClient>
  )
}
