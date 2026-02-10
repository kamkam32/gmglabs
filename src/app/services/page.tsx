import { Metadata } from 'next'
import ServicesPage from './ServicesPage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services - Développement Web, Mobile & IA',
  description: 'Découvrez nos services : développement web avec Next.js, applications mobiles React Native et solutions d\'intelligence artificielle sur mesure.',
  keywords: 'développement web maroc, application mobile casablanca, intelligence artificielle, next.js, react native, chatbot ia',
  alternates: { canonical: 'https://www.gmg-labs.com/services' },
  openGraph: {
    title: 'Nos Services - GMG Labs',
    description: 'Développement web, mobile et IA sur mesure au Maroc.',
    url: 'https://www.gmg-labs.com/services',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    generateServiceJsonLd({ name: 'Développement Web', description: 'Applications web performantes avec Next.js et React', url: 'https://www.gmg-labs.com/services/web' }),
    generateServiceJsonLd({ name: 'Développement Mobile', description: 'Applications iOS et Android avec React Native', url: 'https://www.gmg-labs.com/services/mobile' }),
    generateServiceJsonLd({ name: 'Intelligence Artificielle', description: 'Solutions IA, chatbots et automatisation', url: 'https://www.gmg-labs.com/services/ia' }),
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesPage />
    </>
  )
}
