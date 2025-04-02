import Head from 'next/head'

export default function SEOHead() {
  return (
    <Head>
      <title>Dilkhush Choudhary | Full-Stack Developer</title>
      <meta
        name="description"
        content="Portfolio of Dilkhush Choudhary – Full-Stack Developer specializing in React, Next.js, and modern UI design."
      />
      <meta
        name="keywords"
        content="Dilkhush Choudhary, Portfolio, Developer, Next.js, React, Tailwind CSS"
      />
      <meta name="author" content="Dilkhush Choudhary" />

      {/* Open Graph */}
      <meta property="og:title" content="Dilkhush Choudhary | Full-Stack Developer" />
      <meta
        property="og:description"
        content="A passionate developer building modern web experiences with Next.js, Tailwind CSS, and Framer Motion."
      />
      <meta property="og:image" content="https://yourdomain.com/api/og" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dilkhush Choudhary | Full-Stack Developer" />
      <meta name="twitter:description" content="Next.js Portfolio by Dilkhush" />
      <meta name="twitter:image" content="https://yourdomain.com/api/og" />
      <meta name="twitter:creator" content="@dilkhushcodes" />

      {/* Favicons & PWA */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Color for mobile browser */}
      <meta name="theme-color" content="#6366f1" />
    </Head>
  )
}
