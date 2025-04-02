'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import MagneticButton from '@/components/MagneticButton'

const name = 'Dilkhush Choudhary'
const subtitle = `Full-stack developer crafting immersive web experiences with React, Next.js, and modern UI magic.`

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
      {/* 🌌 Glowing Background Blobs */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] top-[-10%] left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] bottom-10 left-1/4 animate-pulse" />
        <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-[120px] bottom-0 right-1/4 animate-pulse" />
        <div className="absolute inset-0 z-[-1] bg-[url('/grain.png')] opacity-[0.05] pointer-events-none mix-blend-soft-light" />
      </div>

      {/* ✨ Animated Name with Glow */}
      <motion.h1
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: { staggerChildren: 0.06 },
          },
        }}
        className="text-4xl sm:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
      >
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* 💬 Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        {subtitle}
      </motion.p>

      {/* 🧲 Magnetic CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="mt-8"
      >
        <MagneticButton>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white font-medium shadow-md hover:shadow-blue-500/30"
          >
            View My Work
          </a>
        </MagneticButton>
      </motion.div>

      {/* 🔽 Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 text-gray-400 text-sm animate-bounce"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  )
}