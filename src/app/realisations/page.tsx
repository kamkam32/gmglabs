import { Metadata } from 'next'
import RealisationsPage from './RealisationsPage'

export const metadata: Metadata = {
  title: 'Realisations - Portfolio de nos projets',
  description: 'Decouvrez nos realisations : applications web, mobiles et IA. Etudes de cas detaillees avec metriques et technologies utilisees.',
  keywords: 'portfolio developpement web maroc, projets application mobile, etude de cas ia, gmg labs realisations',
  alternates: { canonical: 'https://www.gmglabs.ma/realisations' },
  openGraph: {
    title: 'Nos Realisations - GMG Labs',
    description: 'Portfolio complet de nos projets web, mobile et IA.',
    url: 'https://www.gmglabs.ma/realisations',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <RealisationsPage />
}
