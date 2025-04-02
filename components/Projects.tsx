'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built using Next.js, Tailwind CSS, and Framer Motion.',
    live: 'https://yourportfolio.com',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'An admin dashboard for managing products, orders, and users.',
    live: 'https://yourdashboard.com',
    github: 'https://github.com/yourusername/dashboard',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['50px', '0px'])

  return (
    <motion.section
      id="projects"
      className="py-24 max-w-6xl mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="card-glass shadow-md backdrop-blur-md border border-white/10 p-6 hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline hover:text-blue-300 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:underline hover:text-purple-300 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
