'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    const posX = e.clientX - bounds.left - bounds.width / 2
    const posY = e.clientY - bounds.top - bounds.height / 2
    x.set(posX)
    y.set(posY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="[transform-style:preserve-3d] will-change-transform"
    >
      {children}
    </motion.div>
  )
}
