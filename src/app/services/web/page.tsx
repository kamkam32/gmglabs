import { Metadata } from 'next'
import WebServicePage from './WebServicePage'
import { generateServiceJsonLd } from '@/lib/seo'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dict } = await getLocaleDictionary()
  const m = dict.metadata.servicesWeb
  const baseUrl = 'https://www.gmg-labs.com'
  const path = '/services/web'

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: { fr: `${baseUrl}${path}`, en: `${baseUrl}/en${path}` },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      siteName: 'GMG Labs',
      locale: locale === 'fr' ? 'fr_MA' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.ogDescription,
      images: ['/og-image.png'],
    },
  }
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
