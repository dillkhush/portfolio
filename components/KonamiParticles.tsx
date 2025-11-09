'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Particle = {
  id: number
  x: number
  y: number
  rotation: number
}

const PARTICLE_COUNT = 30

export default function KonamiParticles({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!active) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return

    const positions: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
    }))

    setParticles(positions)
    const timeout = setTimeout(() => setParticles([]), 2000)
    return () => clearTimeout(timeout)
  }, [active])

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 1,
            x: particle.x,
            y: particle.y,
            scale: 0.8,
            rotate: particle.rotation,
          }}
          animate={{ y: particle.y - 200, opacity: 0, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="fixed w-3 h-3 bg-blue-500 rounded-full z-[9999] pointer-events-none"
        />
      ))}
    </AnimatePresence>
  )
}
