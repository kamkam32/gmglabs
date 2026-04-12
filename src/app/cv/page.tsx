import { Metadata } from 'next'
import CvPage from './CvPage'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getLocaleDictionary()
  const title = locale === 'fr' ? 'Kamil Alami — CV' : 'Kamil Alami — Resume'
  const description = locale === 'fr'
    ? 'Product Manager - AI Builder. 6+ ans d\'expérience en produits IA.'
    : 'Product Manager - AI Builder. 6+ years building AI-powered platforms.'

  return {
    title,
    description,
    robots: { index: false, follow: false },
  }
}

export default function Page() {
  return <CvPage />
}
