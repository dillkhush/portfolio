'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function RetroToggle() {
  const [retro, setRetro] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const isRetro = document.documentElement.classList.contains('retro')
    setRetro(isRetro)
    audioRef.current = new Audio('/sounds/konami.mp3')
    audioRef.current.volume = 0.6
  }, [])

  const toggleRetro = () => {
    const root = document.documentElement
    const isRetro = root.classList.contains('retro')
    root.classList.toggle('retro')
    setRetro(!isRetro)

    if (!isRetro) {
      // Play when enabling retro mode
      audioRef.current?.play()
    } else {
      // Stop audio when disabling
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }

  return (
    <motion.button
      onClick={toggleRetro}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-pressed={retro}
      className="fixed bottom-6 left-6 z-50 bg-black/70 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-black"
    >
      <Sparkles className="w-4 h-4" />
      {retro ? 'Disable Retro' : 'Enable Retro'}
    </motion.button>
  )
}
