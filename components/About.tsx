'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Reveal from '@/components/Reveal'
import SignatureBackground from '@/components/SignatureBackground'
import { experience, skills, siteConfig } from '@/content'

const pillars = [
  'System thinking that bridges design and engineering.',
  'Motion and micro-interactions that reinforce storytelling.',
  'Metric-driven iteration backed by performance and analytics.',
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <SignatureBackground variant="about" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <div className="card-glass grid gap-12 p-10 md:grid-cols-[0.95fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="relative h-44 w-44 rounded-[28px] border border-white/10 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent p-1 backdrop-blur"
                  initial={{ rotate: -6, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/20 bg-black/40">
                    <Image
                      src="/profile.jpeg"
                      alt="Dilkhush Choudhary portrait"
                      fill
                      className="object-cover opacity-95"
                      sizes="176px"
                      priority
                    />
                  </div>
                </motion.div>
                <div className="absolute -bottom-3 right-6 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-blue-200 backdrop-blur">
                  Builder
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white">Hello, I’m {siteConfig.name}</h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  A full-stack developer crafting digital products that feel as thoughtful as they
                  are fast. I bridge user experience, modern frontends, and reliable infrastructure
                  so teams can launch with confidence.
                </p>
              </div>

              <div className="grid w-full gap-3 text-left text-sm text-slate-200">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                    <p>{pillar}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Download resume
                </a>
                <Link
                  href="#projects"
                  className="btn-primary text-sm font-semibold shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  Explore work
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Edge</p>
                <p className="text-lg text-slate-200">
                  I help product teams translate fuzzy briefs into interfaces that feel inevitable.
                  Strategy, storytelling, accessibility, and robust engineering live in the same
                  process.
                </p>
              </div>

              <div className="grid gap-4">
                {Object.entries(skills).map(([group, items], groupIndex) => {
                  const title = group
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())

                  return (
                    <Reveal key={group} delay={0.1 * groupIndex}>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.4em] text-blue-200">{title}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-200">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal>
            <div className="flex flex-col items-start gap-3 text-left">
              <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-blue-200">
                Experience
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Guiding teams across startups and scale-ups.
              </h3>
            </div>
          </Reveal>

          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute left-[-1.5px] top-0 h-full w-px bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent" />
            {experience.map((exp, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[36px] flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/60 bg-blue-500/30 backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
                      <span className="font-semibold text-white">{exp.role}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-blue-200">
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
