import { Metadata } from 'next'
import HomePage from './HomePage'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dict } = await getLocaleDictionary()
  const m = dict.metadata.home
  const baseUrl = 'https://www.gmg-labs.com'

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: locale === 'fr' ? baseUrl : `${baseUrl}/en`,
      languages: { fr: baseUrl, en: `${baseUrl}/en` },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: locale === 'fr' ? baseUrl : `${baseUrl}/en`,
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
