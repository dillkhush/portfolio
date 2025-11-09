'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/Reveal'
import { contactSchema } from '@/lib/validators/contact'
import type { ContactPayload } from '@/lib/validators/contact'

const responseTime = [
  { label: 'Response SLA', value: '< 24h' },
  { label: 'Project kickoffs', value: '2 weeks' },
  { label: 'Primary base', value: 'India • Remote' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({})
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [toast, setToast] = useState<{ tone: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setServerMessage(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      projectType: form.get('projectType') ?? undefined,
      budget: form.get('budget') ?? undefined,
    }

    const parsed = contactSchema.safeParse(payload)
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
        projectType: fieldErrors.projectType?.[0],
        budget: fieldErrors.budget?.[0],
      })
      setStatus('idle')
      return
    }

    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const json = await res.json().catch(() => null)

      if (res.ok) {
        const previewNote = json?.preview
          ? ' (Email captured locally while the mail provider is offline.)'
          : ''
        const successMessage =
          json?.message ?? `Thanks for reaching out — I’ll respond within 24 hours${previewNote}`

        setStatus('sent')
        setServerMessage(successMessage)
        setToast({ tone: 'success', message: successMessage })
        e.currentTarget.reset()
        return
      }

      if (res.status === 422 && json) {
        const fieldErrors = json.errors?.fieldErrors ?? {}
        setErrors({
          name: fieldErrors.name?.[0],
          email: fieldErrors.email?.[0],
          message: fieldErrors.message?.[0],
          projectType: fieldErrors.projectType?.[0],
          budget: fieldErrors.budget?.[0],
        })
        setStatus('idle')
        return
      }

      const errorMessage =
        json?.message ?? 'Something went wrong. Email me directly at hello@dilkhush.dev.'
      setStatus('error')
      setServerMessage(errorMessage)
      setToast({ tone: 'error', message: errorMessage })
    } catch (error) {
      console.error(error)
      const errorMessage = 'Unable to send right now. Email me directly at hello@dilkhush.dev.'
      setStatus('error')
      setServerMessage(errorMessage)
      setToast({ tone: 'error', message: errorMessage })
    }
  }

  useEffect(() => {
    if (!toast) return
    const timeout = setTimeout(() => setToast(null), 6000)
    return () => clearTimeout(timeout)
  }, [toast])

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,8,22,0.95)_0%,rgba(5,8,22,0.55)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/grain.png')]" />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border px-6 py-3 text-sm shadow-lg backdrop-blur ${toast.tone === 'success' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-rose-400/30 bg-rose-500/10 text-rose-200'}`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="card-glass space-y-8 p-10">
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-blue-200">
              Collaborate
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Tell me about the product you&apos;re ready to launch or evolve.
            </h2>
            <p className="text-sm text-slate-300">
              Share a few specifics about your goals, timeline, and the outcome you&apos;re chasing.
              I’ll follow up within one business day with next steps or a working session invite.
            </p>

            <div className="grid gap-5 sm:grid-cols-3">
              {responseTime.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-blue-200">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-300">
              <p className="font-medium text-white">Prefer async?</p>
              <p className="mt-2">
                Email <a href="mailto:hello@dilkhush.dev" className="text-blue-300 underline underline-offset-4">hello@dilkhush.dev</a>{' '}
                or drop a Loom recording. I can respond with tailored ideas or a quick prototype.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.form
          onSubmit={handleSubmit}
          className="card-glass space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-white/80 mb-2">
              What are you building?
            </label>
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="Product design & build">Product design & build</option>
              <option value="Design system">Design system</option>
              <option value="Performance overhaul">Performance overhaul</option>
              <option value="Consultation">Consultation / advisory</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-xs text-red-400">{errors.projectType}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
              Project budget
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option value="Under $5k">Under $5k</option>
              <option value="$5k – $10k">$5k – $10k</option>
              <option value="$10k – $25k">$10k – $25k</option>
              <option value="$25k+">$25k+</option>
            </select>
            {errors.budget && <p className="mt-1 text-xs text-red-400">{errors.budget}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            Tell me about the mission
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Share your goals, timeline, and what success looks like."
            rows={6}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 py-3 text-white font-semibold shadow-lg shadow-blue-500/25 transition hover:shadow-blue-500/45 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : 'Ship the message'}
        </motion.button>

          {serverMessage && (
            <p
              aria-live="polite"
              className={`text-sm text-center ${
                status === 'sent' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {serverMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
