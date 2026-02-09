import { Metadata } from 'next'
import WebServicePage from './WebServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Developpement Web - Sites & Applications Web Performantes',
  description: 'Developpement web professionnel avec Next.js, React et TypeScript. Sites vitrine, applications SaaS, e-commerce et dashboards sur mesure au Maroc.',
  keywords: 'developpement web maroc, next.js casablanca, site vitrine, application saas, e-commerce maroc, react developer',
  alternates: { canonical: 'https://www.gmg-labs.com/services/web' },
  openGraph: {
    title: 'Developpement Web - GMG Labs',
    description: 'Applications web performantes avec Next.js et React au Maroc.',
    url: 'https://www.gmg-labs.com/services/web',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Developpement Web',
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
