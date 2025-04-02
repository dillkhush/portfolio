'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  link?: string
}

export default function ProjectCard({ title, description, tech, image, link }: ProjectCardProps) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
    >
      <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">Open project</span>
        </a>
      )}
    </motion.div>
  )
}
