import { Metadata } from 'next'
import MentionsLegalesPage from './MentionsLegalesPage'

export const metadata: Metadata = {
  title: 'Mentions legales',
  description: 'Mentions legales du site GMG Labs. Informations sur l\'editeur, l\'hebergeur et la propriete intellectuelle.',
  alternates: { canonical: 'https://www.gmg-labs.com/mentions-legales' },
}

export default function Page() {
  return <MentionsLegalesPage />
}
