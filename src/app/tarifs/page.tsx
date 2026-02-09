import { Metadata } from 'next'
import TarifsPage from './TarifsPage'

export const metadata: Metadata = {
  title: 'Tarifs - Nos formules de developpement',
  description: 'Decouvrez nos tarifs transparents pour le developpement web, mobile et IA. Trois formules adaptees a tous les budgets et tous les projets.',
  keywords: 'tarif developpement web maroc, prix application mobile, cout site web, devis IA, gmg labs tarifs',
  alternates: { canonical: 'https://www.gmg-labs.com/tarifs' },
  openGraph: {
    title: 'Tarifs - GMG Labs',
    description: 'Formules de developpement web, mobile et IA au Maroc.',
    url: 'https://www.gmg-labs.com/tarifs',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <TarifsPage />
}
