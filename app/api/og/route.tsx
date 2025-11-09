import { ImageResponse } from 'next/og'
import { siteConfig } from '@/content'

export const runtime = 'edge'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') ?? siteConfig.title
  const subtitle =
    url.searchParams.get('subtitle') ??
    'Full-stack developer crafting immersive product experiences.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'radial-gradient(circle at 20% 20%, #5b21b6, #0f172a 60%)',
          padding: '80px',
          color: '#e2e8f0',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '9999px',
                background: '#4f46e5',
                boxShadow: '0 0 25px rgba(99,102,241,0.8)',
              }}
            />
            {siteConfig.name}
          </div>
          <span style={{ fontSize: 20, opacity: 0.8 }}>{siteConfig.url.replace('https://', '')}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 700,
              margin: 0,
              color: '#f8fafc',
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 32, color: '#cbd5f5', margin: 0, maxWidth: '80%' }}>{subtitle}</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: '#94a3b8',
          }}
        >
          <span>Experience Engineered Portfolio</span>
          <span>Let’s build what’s next →</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
