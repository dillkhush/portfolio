import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dilkhush Choudhary | Full-Stack Developer',
  description: 'Portfolio of Dilkhush Choudhary – Building blazing-fast, immersive UIs with Next.js, Tailwind, and Framer Motion.',
  keywords: [
    'Dilkhush Choudhary',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Frontend Engineer',
    'UI/UX Developer',
  ],
  authors: [{ name: 'Dilkhush Choudhary', url: 'https://dilkhush.dev' }],
  creator: 'Dilkhush Choudhary',
  themeColor: '#0a0a0a',
  openGraph: {
    title: 'Dilkhush Choudhary | Full-Stack Developer',
    description: 'Creating world-class web experiences with modern technologies.',
    url: 'https://dilkhush.dev',
    siteName: 'Dilkhush.dev',
    images: [
      {
        url: 'https://dilkhush.dev/api/og', // dynamic OG image!
        width: 1200,
        height: 630,
        alt: 'Dilkhush Choudhary Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilkhush Choudhary | Full-Stack Dev',
    description: 'Modern portfolio crafted with Next.js + Tailwind.',
    site: '@yourhandle',
    creator: '@yourhandle',
    images: ['https://dilkhush.dev/api/og'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
