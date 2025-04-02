import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CustomCursor from '@/components/CustomCursor'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dilkhush Choudhary | Full-Stack Developer',
  description: 'Portfolio of Dilkhush Choudhary – Full-Stack Developer specializing in React, Next.js, and modern UI design.',
  keywords: ['Dilkhush Choudhary', 'Portfolio', 'Next.js', 'Developer', 'React', 'Tailwind CSS'],
  openGraph: {
    title: 'Dilkhush Choudhary | Full-Stack Developer',
    description: 'A passionate developer building modern web experiences with Next.js, Tailwind CSS, and Framer Motion.',
    url: 'https://your-vercel-domain.vercel.app', // update with real domain
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
    creator: '@yourhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-24 max-w-7xl mx-auto px-6">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
