import { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact - Discutons de votre projet',
  description: 'Contactez GMG Labs pour discuter de votre projet web, mobile ou IA. Devis gratuit et premier appel de decouverte sans engagement.',
  keywords: 'contact gmg labs, devis developpement web, projet application mobile, agence tech casablanca',
  alternates: { canonical: 'https://www.gmg-labs.com/contact' },
  openGraph: {
    title: 'Contact - GMG Labs',
    description: 'Discutons de votre projet. Devis gratuit.',
    url: 'https://www.gmg-labs.com/contact',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  return <ContactPage />
}
