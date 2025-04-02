'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  yOffset?: number
  duration?: number
}

export default function Reveal({
  children,
  delay = 0.2,
  yOffset = 40,
  duration = 0.6,
}: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
