'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.target)
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
      e.target.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-24 bg-[#111] text-white text-center dark:bg-gray-100 dark:text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 text-lg mb-8">
          Drop me a message and I’ll get back to you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="bg-[#1a1a1a] border-gray-700 dark:bg-white dark:border-gray-300 dark:text-black"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="bg-[#1a1a1a] border-gray-700 dark:bg-white dark:border-gray-300 dark:text-black"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="bg-[#1a1a1a] border-gray-700 dark:bg-white dark:border-gray-300 dark:text-black"
          />
          <button
            type="submit"
            className="bg-[#1a1a1a] border-gray-700 dark:bg-white dark:border-gray-300 dark:text-black"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'sent' && (
          <p className="mt-4 text-green-400">Thanks! I’ll reply soon 🚀</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400">Something went wrong. Try again.</p>
        )}
      </div>
    </motion.section>
  )
}
