import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'dilkhush.1153@gmail.com',
      subject: `New Contact from ${body.name}`,
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
