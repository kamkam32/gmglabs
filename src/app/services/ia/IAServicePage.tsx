'use client'

import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { FiMessageSquare, FiDatabase, FiEye, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import { colors } from '@/lib/colors'

export default function IAServicePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <ServiceDetailSection
          accentColor={colors.services.ia}
          heroTitle="L'IA au service de votre entreprise"
          heroGradientWord="votre entreprise"
          heroSubtitle="Des solutions intelligentes qui automatisent, analysent et optimisent vos processus métier. Du chatbot à la computer vision."
          features={[
            {
              icon: FiMessageSquare,
              title: 'Chatbots conversationnels',
              description: 'Chatbots WhatsApp et web alimentés par des LLMs. RAG sur vos documents pour des réponses précises et contextuelles, 24h/24.',
            },
            {
              icon: FiDatabase,
              title: 'RAG & Bases documentaires',
              description: 'Indexation et recherche sémantique sur vos documents internes. Vos employés trouvent l\'information en secondes au lieu de minutes.',
            },
            {
              icon: FiEye,
              title: 'Computer Vision',
              description: 'Détection d\'objets, OCR intelligent, contrôle qualité automatisé. Transformez vos caméras en capteurs intelligents.',
            },
            {
              icon: FiTrendingUp,
              title: 'Analyse prédictive',
              description: 'Modèles de prédiction pour anticiper la demande, détecter les anomalies et optimiser vos opérations en temps réel.',
            },
          ]}
          technologies={['OpenAI GPT', 'Claude', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'ChromaDB', 'TensorFlow', 'PyTorch', 'WhatsApp API', 'Hugging Face', 'Docker']}
          processSteps={[
            { number: '01', title: 'Audit IA', description: 'Identification des cas d\'usage à fort impact, évaluation de la faisabilité et estimation du ROI attendu.' },
            { number: '02', title: 'POC', description: 'Proof of concept en 2-4 semaines pour valider la solution sur un périmètre réduit avec vos données réelles.' },
            { number: '03', title: 'Production', description: 'Industrialisation de la solution, intégration aux systèmes existants, monitoring et alerting.' },
            { number: '04', title: 'Optimisation', description: 'Fine-tuning continu, ajout de fonctionnalités et amélioration des performances basée sur les feedbacks.' },
          ]}
        />

        <Box py={16} bg={colors.bg.body} textAlign="center">
          <Container maxW="600px">
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                bgGradient={`linear(135deg, ${colors.services.ia}, ${colors.accent.cyan})`}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                rightIcon={<FiArrowRight />}
              >
                Explorer les solutions IA
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
