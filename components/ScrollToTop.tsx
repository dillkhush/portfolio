'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null
}
