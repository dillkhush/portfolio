'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects as projectData } from '@/content'
import Reveal from '@/components/Reveal'
import SignatureBackground from '@/components/SignatureBackground'

const CARD_VARIANTS = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = projectData[activeIndex]
  const activeBackground = active?.image
    ? `url(${active.image})`
    : 'radial-gradient(circle at 20% 20%, var(--signature-primary), rgba(5,8,22,0.85))'

  return (
    <section id="projects" className="relative py-28">
      <SignatureBackground variant="caseStudy" className="absolute inset-0" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-6 text-left">
            <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-blue-200 backdrop-blur">
              Signature work
            </p>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Products engineered for momentum
              </h2>
              <p className="max-w-2xl text-base text-slate-300">
                End-to-end engagements that blend strategy, interface design, and resilient
                engineering. Browse the playbooks powering real business growth.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,1.6fr)]">
          <div className="space-y-3">
            {projectData.map((project, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={project.slug}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full rounded-2xl border px-5 py-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(2,4,20,0.9)] ${
                    isActive
                      ? 'border-blue-400/40 bg-white/15 shadow-lg shadow-blue-500/25'
                      : 'border-white/10 bg-white/8 hover:border-blue-400/30 hover:bg-white/12'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-blue-200">
                    <span>{project.featured ? 'Featured' : 'Launch'}</span>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-3 text-lg font-medium text-white">{project.title}</p>
                  <p className="mt-2 text-sm text-slate-300 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                variants={CARD_VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[30px] border border-white/12 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(200deg,rgba(12,15,28,0.6)_0%,rgba(12,15,28,0.9)_100%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-blue-200">
                    <span>Case Study</span>
                    <div className="flex items-center gap-3 text-lg text-white/70">
                      {active.live && (
                        <a
                          href={active.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${active.title} live site`}
                          className="transition hover:text-blue-300"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {active.source && (
                        <a
                          href={active.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${active.title} source`}
                          className="transition hover:text-purple-300"
                        >
                          <FaGithub />
                        </a>
                      )}
                      <Link
                        href={`/case-studies/${active.slug}`}
                        className="text-sm text-blue-100 underline-offset-8 transition hover:underline"
                      >
                        Read story ↗
                      </Link>
                    </div>
                  </div>

                  <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: activeBackground }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <p className="text-xs uppercase tracking-[0.4em] text-blue-100/80">
                        {active.title}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{active.summary}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-200">
                    {active.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
