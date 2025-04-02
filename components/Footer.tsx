'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-zinc-950 text-white py-10"
    >
      {/* Gradient glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] top-1/4 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] bottom-[-100px] right-1/3 animate-pulse" />
      </div>


      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dilkhush Choudhary. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
