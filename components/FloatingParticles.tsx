'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const generateParticles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 4,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }))

export default function FloatingParticles({ count = 30 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState(() => generateParticles(count))
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateEnabled = () => setEnabled(!reduceMotion.matches)
    updateEnabled()
    const listener = () => updateEnabled()

    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', listener)
    }

    setMounted(true)

    if (reduceMotion.matches) {
      return () => {
        if (typeof reduceMotion.removeEventListener === 'function') {
          reduceMotion.removeEventListener('change', listener)
        }
      }
    }

    const interval = setInterval(() => {
      setParticles(generateParticles(count))
    }, 30000)

    return () => {
      clearInterval(interval)
      if (typeof reduceMotion.removeEventListener === 'function') {
        reduceMotion.removeEventListener('change', listener)
      }
    }
  }, [count])

  if (!mounted || !enabled) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: p.y + 10 }}
          animate={{ opacity: 0.3, y: p.y - 10 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.15,
            filter: 'blur(3px)',
          }}
        />
      ))}
    </div>
  )
}
