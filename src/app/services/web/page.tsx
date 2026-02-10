import { Metadata } from 'next'
import WebServicePage from './WebServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Développement Web - Sites & Applications Web Performantes',
  description: 'Développement web professionnel avec Next.js, React et TypeScript. Sites vitrine, applications SaaS, e-commerce et dashboards sur mesure au Maroc.',
  keywords: 'développement web maroc, next.js casablanca, site vitrine, application saas, e-commerce maroc, react developer',
  alternates: { canonical: 'https://www.gmg-labs.com/services/web' },
  openGraph: {
    title: 'Développement Web - GMG Labs',
    description: 'Applications web performantes avec Next.js et React au Maroc.',
    url: 'https://www.gmg-labs.com/services/web',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Développement Web' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement Web - GMG Labs',
    description: 'Applications web performantes avec Next.js et React au Maroc.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Développement Web',
    description: 'Applications web performantes avec Next.js, React et TypeScript.',
    url: 'https://www.gmg-labs.com/services/web',
  }),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WebServicePage />
    </>
  )
}
