'use client'

import SignatureBackground from '@/components/SignatureBackground'
import { partnerLogos, testimonials } from '@/content'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CredibilityShowcase() {
  return (
    <section className="relative overflow-hidden py-24">
      <SignatureBackground variant="default" className="absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col gap-4 text-left">
          <p className="chip-pill text-blue-200/90">Proof in practice</p>
          <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold text-white">
            Trusted by founders, product teams, and clinicians shipping the future.
          </h2>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            Here’s how collaborators describe the momentum, craft, and calm I bring into their builds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 text-left backdrop-blur"
            >
              <p className="text-sm leading-relaxed text-slate-200">{testimonial.quote}</p>
              <footer className="mt-auto">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                  {testimonial.role}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          <div className="signature-marquee">
            <div className="signature-marquee__track">
              {partnerLogos.concat(partnerLogos).map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex items-center gap-3">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={80}
                    height={32}
                    className="h-8 w-auto opacity-70"
                  />
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
