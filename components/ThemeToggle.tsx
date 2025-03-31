'use client'

import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (stored) {
      setTheme(stored as 'light' | 'dark')
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      setTheme(prefersDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 text-xl hover:text-blue-500 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
