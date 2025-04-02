'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  '404: Page Not Found',
  'Initializing recovery protocol...',
  'Searching for signs of intelligent routing...',
  'Just kidding — this page does not exist.',
]

export default function NotFound() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < messages.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 1800)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <pre className="text-lg sm:text-xl text-gray-300 font-mono whitespace-pre-wrap mb-6">
          {messages.slice(0, index + 1).join('\n')}_
        </pre>

        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white font-semibold"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  )
}
