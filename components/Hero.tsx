'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden pt-16">
      <div className="absolute inset-0 z-[-1] bg-black/20" />
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        <div className="absolute w-96 h-96 bg-purple-500/30 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full bottom-20 left-1/4 animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full bottom-10 right-1/4 animate-pulse" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-text-glow"
      >
        Dilkhush Choudhary
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        Full-stack developer crafting immersive web experiences with React, Next.js, and modern UI magic.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white font-medium shadow-md hover:shadow-blue-500/30"
      >
        View My Work
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-10 animate-bounce text-sm text-gray-400"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  )
}
