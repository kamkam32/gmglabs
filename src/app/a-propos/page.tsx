import { Metadata } from 'next'
import AProposPage from './AProposPage'

export const metadata: Metadata = {
  title: 'À propos - Notre histoire et notre équipe',
  description: 'GMG Labs est une agence tech premium fondée à Casablanca. Découvrez notre histoire, nos valeurs et l\'équipe derrière Ello et nos autres projets.',
  keywords: 'gmg labs casablanca, équipe développement maroc, agence tech, à propos, histoire',
  alternates: { canonical: 'https://www.gmg-labs.com/a-propos' },
  openGraph: {
    title: 'À propos - GMG Labs',
    description: 'Notre histoire, nos valeurs et notre équipe.',
    url: 'https://www.gmg-labs.com/a-propos',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Agence Tech Premium au Maroc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos - GMG Labs',
    description: 'Notre histoire, nos valeurs et notre équipe.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <AProposPage />
}
