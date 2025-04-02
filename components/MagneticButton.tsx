'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const deltaX = e.clientX - (rect.left + rect.width / 2)
    const deltaY = e.clientY - (rect.top + rect.height / 2)
    x.set(deltaX * 0.4)
    y.set(deltaY * 0.4)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="relative mt-8 px-6 py-3 text-white font-semibold bg-blue-600 rounded-full shadow-lg transition duration-300 overflow-hidden group"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-blue-400 opacity-0 blur-lg group-hover:opacity-100 transition duration-300" />
    </motion.button>
  )
}
