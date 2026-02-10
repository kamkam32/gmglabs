import { Metadata } from 'next'
import HomePage from './HomePage'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'GMG Labs - Agence de développement Web, Mobile & IA au Maroc',
  description: 'GMG Labs est une agence tech premium basée à Casablanca. Développement web, applications mobiles et solutions IA sur mesure. Créateurs d\'Ello.',
  keywords: 'agence développement web maroc, développement mobile casablanca, intelligence artificielle maroc, gmg labs, next.js, react native, IA',
  alternates: {
    canonical: 'https://www.gmg-labs.com',
  },
  openGraph: {
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Développement web, mobile et IA sur mesure à Casablanca. Créateurs d\'Ello.',
    url: 'https://www.gmg-labs.com',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMG Labs - Agence Tech Premium au Maroc',
    description: 'Développement web, mobile et IA sur mesure à Casablanca.',
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
