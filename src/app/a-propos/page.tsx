import { Metadata } from 'next'
import AProposPage from './AProposPage'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dict } = await getLocaleDictionary()
  const m = dict.metadata.about
  const baseUrl = 'https://www.gmg-labs.com'
  const path = '/a-propos'

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

export default function Page() {
  return <AProposPage />
}
