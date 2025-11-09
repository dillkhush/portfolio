'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useMemo, type PointerEvent } from 'react'
import MagneticButton from '@/components/MagneticButton'
import SignatureBackground from '@/components/SignatureBackground'
import { siteConfig, projects, highlights } from '@/content'

const heroTitle = ['Experience architecture', 'for relentless product teams.']

export default function Hero() {
  const featuredProject = projects[0]
  const featuredBackground = featuredProject?.image
    ? `url(${featuredProject.image})`
    : 'radial-gradient(circle at 30% 30%, var(--signature-primary), rgba(2,4,20,0.92))'

  const heroHighlights = useMemo(() => highlights.slice(0, 3), [])
  const ambientVideo = process.env.NEXT_PUBLIC_HERO_VIDEO ?? ''
  const ambientPoster = process.env.NEXT_PUBLIC_HERO_POSTER ?? ''

  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const rotateX = useTransform(cardY, [-30, 30], [10, -10])
  const rotateY = useTransform(cardX, [-40, 40], [-12, 12])
  const cardGlow = useTransform(cardY, [-30, 30], [0.65, 0.9])

  const handleCardPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const relativeX = event.clientX - (bounds.left + bounds.width / 2)
    const relativeY = event.clientY - (bounds.top + bounds.height / 2)
    cardX.set((relativeX / (bounds.width / 2)) * 40)
    cardY.set((relativeY / (bounds.height / 2)) * 30)
  }

  const resetCardTransform = () => {
    cardX.set(0)
    cardY.set(0)
  }

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-28">
      <SignatureBackground variant="hero" />
      {ambientVideo && (
        <div className="absolute inset-0 -z-10 opacity-60">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={ambientPoster || undefined}
          >
            <source src={ambientVideo} type="video/webm" />
          </video>
        </div>
      )}

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="chip-pill text-blue-200/90"
            >
              Product alchemy — {siteConfig.name}
            </motion.span>

            <div className="space-y-6 text-left">
              <div className="space-y-2">
                {heroTitle.map((line, index) => (
                  <motion.h1
                    key={line}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
                    className="text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.05] text-white"
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="max-w-xl text-base text-slate-200 sm:text-lg"
              >
                I partner with founders and product teams to design, build, and launch experiences
                that feel inevitable—cinematic interfaces, measurable performance, and systems that
                grow with ambition.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton>
                <Link href="/case-studies" className="btn-primary">
                  Explore case studies
                </Link>
              </MagneticButton>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <a
                  href={siteConfig.contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2 transition hover:bg-white/10"
                >
                  Book a strategy call
                </a>
                <a
                  href="/resume.pdf"
                  className="rounded-full border border-white/20 px-5 py-2 transition hover:bg-white/10"
                >
                  Download resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="rounded-2xl border border-white/12 bg-white/10 px-5 py-5 backdrop-blur-md shadow-lg shadow-blue-500/15"
                >
                  <p className="text-[11px] uppercase tracking-[0.42em] text-blue-200">{item.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.metric}</p>
                  <p className="mt-2 text-xs text-slate-200">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ rotateX, rotateY }}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={resetCardTransform}
            className="group relative rounded-[28px] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-blue-500/20 transition-transform duration-300 ease-out"
          >
            <motion.div
              style={{ opacity: cardGlow }}
              className="pointer-events-none absolute -inset-px rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),rgba(10,12,30,0.75))]"
            />

            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.4em] text-blue-200">
                <span>Spotlight</span>
                <Link
                  href={`/case-studies/${featuredProject.slug}`}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-blue-100 transition hover:bg-white/10"
                >
                  Read story
                </Link>
              </div>

              <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: featuredBackground }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-blue-100/80">Case study</p>
                  <h3 className="mt-2 text-2xl font-semibold">{featuredProject.title}</h3>
                  <p className="mt-2 text-sm text-slate-200 line-clamp-2">{featuredProject.summary}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-200">
                {featuredProject.highlights.slice(0, 2).map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 p-4"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.slice(0, 5).map((tech) => (
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
          Scroll to explore the lab
        </motion.div>
      </div>
    </section>
  )
}
