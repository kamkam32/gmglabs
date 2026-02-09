import { Metadata } from 'next'
import ServicesPage from './ServicesPage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services - Developpement Web, Mobile & IA',
  description: 'Decouvrez nos services : developpement web avec Next.js, applications mobiles React Native et solutions d\'intelligence artificielle sur mesure.',
  keywords: 'developpement web maroc, application mobile casablanca, intelligence artificielle, next.js, react native, chatbot ia',
  alternates: { canonical: 'https://www.gmglabs.ma/services' },
  openGraph: {
    title: 'Nos Services - GMG Labs',
    description: 'Developpement web, mobile et IA sur mesure au Maroc.',
    url: 'https://www.gmglabs.ma/services',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    generateServiceJsonLd({ name: 'Developpement Web', description: 'Applications web performantes avec Next.js et React', url: 'https://www.gmglabs.ma/services/web' }),
    generateServiceJsonLd({ name: 'Developpement Mobile', description: 'Applications iOS et Android avec React Native', url: 'https://www.gmglabs.ma/services/mobile' }),
    generateServiceJsonLd({ name: 'Intelligence Artificielle', description: 'Solutions IA, chatbots et automatisation', url: 'https://www.gmglabs.ma/services/ia' }),
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
