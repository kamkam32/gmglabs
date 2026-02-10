import { Metadata } from 'next'
import RealisationsPage from './RealisationsPage'

export const metadata: Metadata = {
  title: 'Réalisations - Portfolio de nos projets',
  description: 'Découvrez nos réalisations : applications web, mobiles et IA. Études de cas détaillées avec métriques et technologies utilisées.',
  keywords: 'portfolio développement web maroc, projets application mobile, étude de cas ia, gmg labs réalisations',
  alternates: { canonical: 'https://www.gmg-labs.com/realisations' },
  openGraph: {
    title: 'Nos Réalisations - GMG Labs',
    description: 'Portfolio complet de nos projets web, mobile et IA.',
    url: 'https://www.gmg-labs.com/realisations',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <RealisationsPage />
}
