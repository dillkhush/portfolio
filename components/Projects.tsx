'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from '@/components/Reveal'
import TiltCard from '@/components/TiltCard'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using Next.js, Tailwind CSS, and Framer Motion.',
    live: 'https://yourportfolio.com',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'An admin dashboard for managing products, orders, and users.',
    live: 'https://yourdashboard.com',
    github: 'https://github.com/yourusername/dashboard',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['50px', '0px'])

  return (
    <section id="projects" className="py-24 relative bg-black">
      {/* Optional: subtle animated background aura */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[150px] top-1/3 left-[10%] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400/10 blur-[120px] bottom-10 right-[5%] animate-pulse" />
      </div>

      <motion.div
        ref={ref}
        style={{ y }}
        className="max-w-6xl mx-auto px-6"
      >
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <TiltCard>
                <div className="card-glass border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 hover:underline transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  )
}