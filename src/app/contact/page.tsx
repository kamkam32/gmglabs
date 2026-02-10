import { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact - Discutons de votre projet',
  description: 'Contactez GMG Labs pour discuter de votre projet web, mobile ou IA. Devis gratuit et premier appel de découverte sans engagement.',
  keywords: 'contact gmg labs, devis développement web, projet application mobile, agence tech casablanca',
  alternates: { canonical: 'https://www.gmg-labs.com/contact' },
  openGraph: {
    title: 'Contact - GMG Labs',
    description: 'Discutons de votre projet. Devis gratuit.',
    url: 'https://www.gmg-labs.com/contact',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - GMG Labs',
    description: 'Discutons de votre projet. Devis gratuit.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <ContactPage />
}
