import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dilkhush Choudhary | Full-Stack Developer',
  description: 'Portfolio of Dilkhush Choudhary – Full-Stack Developer specializing in React, Next.js, and modern UI design.',
  keywords: ['Dilkhush Choudhary', 'Portfolio', 'Next.js', 'Developer', 'React', 'Tailwind CSS'],
  openGraph: {
    title: 'Dilkhush Choudhary | Full-Stack Developer',
    description: 'A passionate developer building modern web experiences with Next.js, Tailwind CSS, and Framer Motion.',
    url: 'https://your-vercel-domain.vercel.app', // change this to your real domain when ready
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Dilkhush Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilkhush Choudhary',
    description: 'Next.js Portfolio by Dilkhush',
    images: ['/og.png'],
    creator: '@yourhandle', // optional
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Navbar />
          <main className="max-w-7xl mx-auto px-6">{children}</main>
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  )
}
