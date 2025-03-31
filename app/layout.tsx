import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dilkhush Choudhary | Portfolio',
  description: 'Full-stack developer building modern web apps.',
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
