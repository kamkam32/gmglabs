import { Metadata } from 'next'
import HomePage from './HomePage'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'GMG Labs - Agence de developpement Web, Mobile & IA au Maroc',
  description: 'GMG Labs est une agence tech premium basee a Casablanca. Developpement web, applications mobiles et solutions IA sur mesure. Createurs d\'Ello.',
  keywords: 'agence developpement web maroc, developpement mobile casablanca, intelligence artificielle maroc, gmg labs, next.js, react native, IA',
  alternates: {
    canonical: 'https://www.gmglabs.ma',
  },
  openGraph: {
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Developpement web, mobile et IA sur mesure a Casablanca. Createurs d\'Ello.',
    url: 'https://www.gmglabs.ma',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Developpement web, mobile et IA sur mesure a Casablanca.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    generateOrganizationJsonLd(),
    generateWebSiteJsonLd(),
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  )
}
