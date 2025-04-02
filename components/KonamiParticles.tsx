'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function KonamiParticles({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    if (active) {
      const newParticles = Array.from({ length: 30 }, (_, i) => i)
      setParticles(newParticles)

      const timeout = setTimeout(() => setParticles([]), 2000)
      return () => clearTimeout(timeout)
    }
  }, [active])

  return (
    <AnimatePresence>
      {particles.map((id) => (
        <motion.div
          key={id}
          initial={{
            opacity: 1,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.8,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: '-100vh',
            opacity: 0,
            scale: 1.5,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="fixed w-3 h-3 bg-blue-500 rounded-full z-[9999] pointer-events-none"
        />
      ))}
    </AnimatePresence>
  )
}
