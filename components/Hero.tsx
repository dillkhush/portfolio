'use client'

import { motion } from 'framer-motion'
import BackgroundPattern from './BackgroundPattern'

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white dark:bg-white dark:text-black"
    >
      {/* Animated SVG */}
      <BackgroundPattern />

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
        Hi, I'm{' '}
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
        >
            Dilkhush Choudhary
        </motion.span>
        </motion.h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
        A full-stack developer crafting clean, modern web experiences with Next.js, Tailwind, and motion magic.
      </p>

      <a
        href="#projects"
        className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
      >
        View My Work
      </a>
    </motion.section>
  )
}
