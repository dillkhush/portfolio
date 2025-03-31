'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <h1 className="text-xl font-bold">Dilkhush.dev</h1>

      <div className="flex items-center gap-4">
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>

        <ThemeToggle /> {/* ✅ Clean toggle with all logic inside */}
      </div>
    </nav>
  )
}
