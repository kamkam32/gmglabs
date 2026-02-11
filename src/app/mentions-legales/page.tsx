import { Metadata } from 'next'
import MentionsLegalesPage from './MentionsLegalesPage'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dict } = await getLocaleDictionary()
  const m = dict.metadata.legal
  const baseUrl = 'https://www.gmg-labs.com'
  const path = '/mentions-legales'

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
  }
}

export default function Page() {
  return <MentionsLegalesPage />
}
