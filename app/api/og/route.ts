import { ImageResponse } from '@vercel/og'
import React from 'react'
export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#0a0a0a',
          color: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontFamily: 'sans-serif',
        },
      },
      React.createElement(
        'div',
        {
          style: {
            background: 'linear-gradient(to right, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            paddingBottom: '12px',
          },
        },
        'Dilkhush Choudhary'
      ),
      React.createElement(
        'p',
        {
          style: { fontSize: 28, color: '#ccc', marginTop: 0 },
        },
        'Full-Stack Developer | Next.js, React, Tailwind'
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
