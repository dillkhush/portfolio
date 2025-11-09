import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validators/contact'
import { z } from 'zod'
import { Resend } from 'resend'
import { siteConfig } from '@/content'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? `Dilkhush Portfolio <no-reply@dilkhush.dev>`

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const data = contactSchema.parse(payload)

    if (!resend) {
      console.info('[contact] RESEND_API_KEY not configured. Message logged only.', data)
      return NextResponse.json({ ok: true, preview: true })
    }

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `New portfolio inquiry from ${data.name}`,
      replyTo: `${data.name} <${data.email}>`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.projectType ? `Project type: ${data.projectType}` : null,
        data.budget ? `Budget: ${data.budget}` : null,
        '',
        data.message,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 422 })
    }

    console.error('[contact] Unexpected error', error)
    return NextResponse.json(
      { ok: false, message: 'Unable to send your message right now. Please email me directly.' },
      { status: 500 },
    )
  }
}
