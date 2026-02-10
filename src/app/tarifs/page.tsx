import { Metadata } from 'next'
import TarifsPage from './TarifsPage'

export const metadata: Metadata = {
  title: 'Tarifs - Nos formules de développement',
  description: 'Découvrez nos tarifs transparents pour le développement web, mobile et IA. Trois formules adaptées à tous les budgets et tous les projets.',
  keywords: 'tarif développement web maroc, prix application mobile, coût site web, devis IA, gmg labs tarifs',
  alternates: { canonical: 'https://www.gmg-labs.com/tarifs' },
  openGraph: {
    title: 'Tarifs - GMG Labs',
    description: 'Formules de développement web, mobile et IA au Maroc.',
    url: 'https://www.gmg-labs.com/tarifs',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <TarifsPage />
}
