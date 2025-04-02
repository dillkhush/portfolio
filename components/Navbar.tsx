'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 shadow-md rounded-full flex items-center justify-between w-[90%] max-w-3xl"
    >
      {/* Logo */}
      <Link href="/" className="text-lg font-bold text-white dark:text-white tracking-wide">
        Dilkhush.dev
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-sm text-white dark:text-white">
        <Link href="#projects" className="hover:text-blue-400 transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-blue-400 transition">
          Contact
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="text-xl hover:text-blue-400 transition"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  )
}
