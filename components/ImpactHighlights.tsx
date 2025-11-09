'use client'

import { motion } from 'framer-motion'
import { highlights } from '@/content'
import Reveal from '@/components/Reveal'

export default function ImpactHighlights() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white">
            Momentum measured in engineered outcomes
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-glass border border-white/10 p-8 rounded-2xl text-left"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">
                  {item.title}
                </p>
                <p className="text-4xl font-semibold text-white mb-3">{item.metric}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
