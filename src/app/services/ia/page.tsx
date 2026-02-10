import { Metadata } from 'next'
import IAServicePage from './IAServicePage'
import { generateServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Intelligence Artificielle - Chatbots, Automatisation & IA sur mesure',
  description: 'Solutions d\'intelligence artificielle sur mesure : chatbots WhatsApp, RAG, automatisation de processus, computer vision et analyse de données au Maroc.',
  keywords: 'intelligence artificielle maroc, chatbot whatsapp, rag llm, automatisation ia, openai, langchain, machine learning casablanca',
  alternates: { canonical: 'https://www.gmg-labs.com/services/ia' },
  openGraph: {
    title: 'Intelligence Artificielle - GMG Labs',
    description: 'Solutions IA sur mesure au Maroc : chatbots, automatisation et plus.',
    url: 'https://www.gmg-labs.com/services/ia',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  ...generateServiceJsonLd({
    name: 'Intelligence Artificielle',
    description: 'Solutions IA, chatbots et automatisation sur mesure.',
    url: 'https://www.gmg-labs.com/services/ia',
  }),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IAServicePage />
    </>
  )
}
