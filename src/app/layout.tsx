import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gmglabs.ma'),
  title: {
    default: 'GMG Labs - Agence de developpement Web, Mobile & IA au Maroc',
    template: '%s | GMG Labs',
  },
  description: 'GMG Labs est une agence tech premium basee a Casablanca. Developpement web, applications mobiles et solutions IA sur mesure. Createurs d\'Ello.',
  keywords: 'agence developpement web maroc, developpement mobile casablanca, intelligence artificielle maroc, gmg labs, application web, next.js, react native',
  authors: [{ name: 'GMG Labs' }],
  creator: 'GMG Labs',
  publisher: 'GMG Labs',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.gmglabs.ma',
  },
  openGraph: {
    title: 'GMG Labs - Agence de developpement Web, Mobile & IA au Maroc',
    description: 'Agence tech premium basee a Casablanca. Developpement web, applications mobiles et solutions IA sur mesure.',
    url: 'https://www.gmglabs.ma',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'GMG Labs - Agence Tech Premium au Maroc',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Developpement web, mobile et IA sur mesure a Casablanca.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0F" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
