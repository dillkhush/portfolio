'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/content'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3
        flex items-center justify-between w-[92%] max-w-3xl
        rounded-full transition-all duration-300
        ${
          scrolled
            ? 'backdrop-blur-xl border border-white/15 bg-white/10 shadow-[0_24px_80px_rgba(15,18,40,0.35)] dark:bg-white/5'
            : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-lg font-semibold tracking-[0.3em] uppercase text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full px-2"
      >
        {siteConfig.name}
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-sm text-white">
        <Link
          href="#about"
          className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full px-2"
        >
          About
        </Link>
        <Link
          href="/case-studies"
          className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full px-2"
        >
          Case studies
        </Link>
        <Link
          href="#projects"
          className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full px-2"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full px-2"
        >
          Contact
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="text-xl hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black rounded-full p-1.5"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  )
}
