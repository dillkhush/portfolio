'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function KonamiOverlay({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] pointer-events-none bg-[repeating-linear-gradient(0deg,_transparent_0px,_transparent_2px,_rgba(255,255,255,0.03)_3px)]"
        >
          <motion.div
            className="absolute inset-0 w-full h-full bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
