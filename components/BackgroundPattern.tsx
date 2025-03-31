'use client'

import { motion } from 'framer-motion'

export default function BackgroundPattern() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <svg
        className="w-[800px] h-[800px] blur-3xl opacity-40 animate-spin-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#grad)"
          d="M46.1,-71.6C58.9,-62.5,68.4,-49.4,73.2,-35.5C77.9,-21.6,77.9,-6.9,76.7,8.5C75.5,23.9,73.2,39.9,64.5,51.2C55.8,62.4,40.7,68.9,25.7,74.6C10.7,80.2,-4.2,85.1,-20.4,83.2C-36.7,81.3,-54.3,72.7,-63.9,59.2C-73.5,45.7,-75,27.3,-76.2,9.1C-77.5,-9.1,-78.4,-27.2,-71.3,-41.6C-64.3,-56,-49.4,-66.6,-34.1,-74.1C-18.7,-81.5,-9.4,-85.8,3.6,-91.2C16.6,-96.6,33.3,-103.2,46.1,-71.6Z"
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
