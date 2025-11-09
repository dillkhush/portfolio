'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { siteConfig } from '@/content'

const commitments = [
  'Design systems that scale with your roadmap.',
  'Performance budgets with tangible KPI lifts.',
  'Async, transparent collaboration from kickoff to launch.',
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 mt-28 overflow-hidden border-t border-white/10 bg-[#050816] py-16 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(96,165,250,0.35),transparent_65%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,8,22,0.9)_0%,rgba(5,8,22,0.6)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-15 bg-[url('/grain.png')]" />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-blue-200 backdrop-blur">
              Let’s build it right
            </p>
            <h3 className="text-3xl font-semibold leading-snug text-white">
              From idea to shipped experience, I help teams craft interfaces that move the metrics
              that matter.
            </h3>
            <p className="max-w-xl text-sm text-slate-300">
              Schedule a strategic working session or drop me a note—every project starts with a
              conversation about goals, not just deliverables.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-200">
            {commitments.map((commitment) => (
              <div
                key={commitment}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <p>{commitment}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              Start a project
            </a>
            <a
              href={siteConfig.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Book a strategy call
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Latest engagement</p>
            <p className="mt-3 text-lg font-medium text-white">
              Re-architected a SaaS analytics platform to cut query time by 190% and lift trial
              conversions by 23%.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Ask me how a performance-first mindset unlocks happier users and better business
              outcomes.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex gap-5 text-xl text-white/80">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-400"
              >
                <FaGithub />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {siteConfig.name}. Crafted in motion, deployed with
              precision.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
