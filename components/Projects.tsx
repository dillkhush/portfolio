'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using Next.js, Tailwind CSS, and Framer Motion.',
    live: 'https://yourportfolio.vercel.app',
    github: 'https://github.com/dillkhush/portfolio',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'An admin dashboard for managing products, orders, and users.',
    live: 'https://ecommerce-dashboard.vercel.app',
    github: 'https://github.com/yourusername/ecommerce-dashboard',
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-[#0d0d0d] text-white dark:bg-gray-100 dark:text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 dark:bg-white dark:text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
