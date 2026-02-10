import { Metadata } from 'next'
import PerformanceServicePage from './PerformanceServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Performance IT - Tests de charge, APM & Monitoring',
  description: 'Tests de charge Neoload, monitoring Dynatrace/AppDynamics, audit de performance IT et recommandations Go/No Go pour garantir la fiabilité de vos systèmes au Maroc.',
  keywords: 'tests de charge maroc, neoload, dynatrace, appdynamics, apm, monitoring applicatif, audit performance it, stress test, casablanca',
  alternates: { canonical: 'https://www.gmg-labs.com/services/performance' },
  openGraph: {
    title: 'Performance IT - GMG Labs',
    description: 'Tests de charge, APM et audit de performance IT au Maroc.',
    url: 'https://www.gmg-labs.com/services/performance',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Performance IT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance IT - GMG Labs',
    description: 'Tests de charge, APM et audit de performance IT au Maroc.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Performance IT',
    description: 'Tests de charge, monitoring APM et audit de performance IT.',
    url: 'https://www.gmg-labs.com/services/performance',
  }),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PerformanceServicePage />
    </>
  )
}
