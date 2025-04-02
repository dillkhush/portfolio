'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card-glass px-6 py-10 mt-24 max-w-6xl mx-auto backdrop-blur-md border border-white/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center text-sm text-gray-300">
        {/* Left */}
        <div>
          © {new Date().getFullYear()} Dilkhush Choudhary. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaLinkedin size={18} />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaTwitter size={18} />
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
