import { Metadata } from 'next'
import MobileServicePage from './MobileServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Applications Mobiles - iOS & Android avec React Native',
  description: 'Développement d\'applications mobiles iOS et Android avec React Native. Apps cross-platform performantes, design natif et déploiement sur les stores.',
  keywords: 'application mobile maroc, react native casablanca, développement ios android, app mobile, cross-platform',
  alternates: { canonical: 'https://www.gmg-labs.com/services/mobile' },
  openGraph: {
    title: 'Applications Mobiles - GMG Labs',
    description: 'Apps iOS et Android avec React Native au Maroc.',
    url: 'https://www.gmg-labs.com/services/mobile',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Applications Mobiles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applications Mobiles - GMG Labs',
    description: 'Apps iOS et Android avec React Native au Maroc.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Développement Mobile',
    description: 'Applications iOS et Android avec React Native.',
    url: 'https://www.gmg-labs.com/services/mobile',
  }),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MobileServicePage />
    </>
  )
}
