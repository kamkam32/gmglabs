import { Metadata } from 'next'
import AProposPage from './AProposPage'

export const metadata: Metadata = {
  title: 'A propos - Notre histoire et notre equipe',
  description: 'GMG Labs est une agence tech premium fondee a Casablanca. Decouvrez notre histoire, nos valeurs et l\'equipe derriere Ello et nos autres projets.',
  keywords: 'gmg labs casablanca, equipe developpement maroc, agence tech, a propos, histoire',
  alternates: { canonical: 'https://www.gmg-labs.com/a-propos' },
  openGraph: {
    title: 'A propos - GMG Labs',
    description: 'Notre histoire, nos valeurs et notre equipe.',
    url: 'https://www.gmg-labs.com/a-propos',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <AProposPage />
}
