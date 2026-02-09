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
          heroSubtitle="Des solutions intelligentes qui automatisent, analysent et optimisent vos processus metier. Du chatbot a la computer vision."
          features={[
            {
              icon: FiMessageSquare,
              title: 'Chatbots conversationnels',
              description: 'Chatbots WhatsApp et web alimentes par des LLMs. RAG sur vos documents pour des reponses precises et contextuelles, 24h/24.',
            },
            {
              icon: FiDatabase,
              title: 'RAG & Bases documentaires',
              description: 'Indexation et recherche semantique sur vos documents internes. Vos employes trouvent l\'information en secondes au lieu de minutes.',
            },
            {
              icon: FiEye,
              title: 'Computer Vision',
              description: 'Detection d\'objets, OCR intelligent, controle qualite automatise. Transformez vos cameras en capteurs intelligents.',
            },
            {
              icon: FiTrendingUp,
              title: 'Analyse predictive',
              description: 'Modeles de prediction pour anticiper la demande, detecter les anomalies et optimiser vos operations en temps reel.',
            },
          ]}
          technologies={['OpenAI GPT', 'Claude', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'ChromaDB', 'TensorFlow', 'PyTorch', 'WhatsApp API', 'Hugging Face', 'Docker']}
          processSteps={[
            { number: '01', title: 'Audit IA', description: 'Identification des cas d\'usage a fort impact, evaluation de la faisabilite et estimation du ROI attendu.' },
            { number: '02', title: 'POC', description: 'Proof of concept en 2-4 semaines pour valider la solution sur un perimetre reduit avec vos donnees reelles.' },
            { number: '03', title: 'Production', description: 'Industrialisation de la solution, integration aux systemes existants, monitoring et alerting.' },
            { number: '04', title: 'Optimisation', description: 'Fine-tuning continu, ajout de fonctionnalites et amelioration des performances basee sur les feedbacks.' },
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
