'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setStatus('sent')
      e.currentTarget.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-24 max-w-3xl mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="card-glass backdrop-blur-md border border-white/10 p-8 space-y-6"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-xl bg-zinc-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-xl bg-zinc-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-zinc-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-semibold shadow-md"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'sent' && (
          <p className="text-green-400 text-sm text-center">Your message has been sent!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </motion.section>
  )
}
