'use client'

import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

const TRAIL_LENGTH = 6

export default function CustomCursor() {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([])
  const [isPointer, setIsPointer] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea')
      setIsPointer(!!isInteractive)

      setPositions((prev) => {
        const next = [...prev.slice(-TRAIL_LENGTH + 1), { x: e.clientX, y: e.clientY }]
        return next
      })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Cursor trail */}
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed z-[9998] w-3 h-3 bg-blue-500/20 rounded-full pointer-events-none hidden md:block"
          style={{
            left: 0,
            top: 0,
            x: pos.x,
            y: pos.y,
            translateX: '-50%',
            translateY: '-50%',
            opacity: (index + 1) / TRAIL_LENGTH,
            scale: 1 - index * 0.1,
            filter: 'blur(2px)',
          }}
        />
      ))}

      {/* Main cursor orb */}
      <motion.div
        className={`fixed z-[9999] w-4 h-4 rounded-full pointer-events-none hidden md:block transition-colors duration-200 ${
          isPointer
            ? 'bg-blue-500 scale-150 mix-blend-difference'
            : 'bg-white/80'
        }`}
        style={{
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
