import { Metadata } from 'next'
import MentionsLegalesPage from './MentionsLegalesPage'

export const metadata: Metadata = {
  title: 'Mentions legales',
  description: 'Mentions legales du site GMG Labs. Informations sur l\'editeur, l\'hebergeur et la propriete intellectuelle.',
  alternates: { canonical: 'https://www.gmg-labs.com/mentions-legales' },
  openGraph: {
    title: 'Mentions légales - GMG Labs',
    description: 'Mentions légales du site GMG Labs.',
    url: 'https://www.gmg-labs.com/mentions-legales',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs' }],
  },
}

export default function Page() {
  return <MentionsLegalesPage />
}
