import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { Providers } from './providers'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gmg-labs.com'),
  verification: {
    google: 'cVf0dr_gMpE72S4V-XCz4s71_S4ZzA0Nnq2zl3GsewE',
  },
  title: {
    default: 'GMG Labs - Agence de développement Web, Mobile & IA au Maroc',
    template: '%s | GMG Labs',
  },
  description: 'GMG Labs est une agence tech premium basée à Casablanca. Développement web, applications mobiles et solutions IA sur mesure. Créateurs d\'Ello.',
  keywords: 'agence web maroc, création site web sur mesure, développement web casablanca, agence développement web maroc, développement mobile casablanca, application mobile maroc, intelligence artificielle maroc, gmg labs, site web professionnel, agence digitale casablanca, next.js, react native, supabase',
  authors: [{ name: 'GMG Labs' }],
  creator: 'GMG Labs',
  publisher: 'GMG Labs',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://gmg-labs.com',
  },
  openGraph: {
    title: 'GMG Labs - Agence de développement Web, Mobile & IA au Maroc',
    description: 'Agence tech premium basée à Casablanca. Développement web, applications mobiles et solutions IA sur mesure.',
    url: 'https://gmg-labs.com',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Développement web, mobile et IA sur mesure à Casablanca.',
    images: ['/og-image.png'],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const locale = (headersList.get('x-locale') || 'fr') as Locale
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0F" />
        <meta name="facebook-domain-verification" content="0bmsbc0lthok16g2h2ctrloqow5ohj" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3PYLNRQZ2G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PYLNRQZ2G');
          `}
        </Script>
        <Providers locale={locale} dict={dict}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
