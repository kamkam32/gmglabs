import { Metadata } from 'next'
import MobileServicePage from './MobileServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Applications Mobiles - iOS & Android avec React Native',
  description: 'Developpement d\'applications mobiles iOS et Android avec React Native. Apps cross-platform performantes, design natif et deploiement sur les stores.',
  keywords: 'application mobile maroc, react native casablanca, developpement ios android, app mobile, cross-platform',
  alternates: { canonical: 'https://www.gmg-labs.com/services/mobile' },
  openGraph: {
    title: 'Applications Mobiles - GMG Labs',
    description: 'Apps iOS et Android avec React Native au Maroc.',
    url: 'https://www.gmg-labs.com/services/mobile',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Developpement Mobile',
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
