'use client'

import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { FiMessageSquare, FiDatabase, FiEye, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

const icons = [FiMessageSquare, FiDatabase, FiEye, FiTrendingUp]

export default function IAServicePage() {
  const { locale, dict } = useLocale()
  const d = dict.servicesDetail.ia

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <ServiceDetailSection
          accentColor={colors.services.ia}
          heroTitle={d.heroTitle}
          heroGradientWord={d.heroGradientWord}
          heroSubtitle={d.heroSubtitle}
          features={d.features.map((f: { title: string; description: string }, idx: number) => ({
            icon: icons[idx],
            title: f.title,
            description: f.description,
          }))}
          technologies={['OpenAI GPT', 'Claude', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'ChromaDB', 'TensorFlow', 'PyTorch', 'WhatsApp API', 'Hugging Face', 'Docker']}
          processSteps={d.processSteps.map((s: { title: string; description: string }, idx: number) => ({
            number: String(idx + 1).padStart(2, '0'),
            title: s.title,
            description: s.description,
          }))}
          technologiesTitle={dict.servicesDetail.technologiesTitle}
          processTitle={dict.servicesDetail.processTitle}
        />

        <Box py={16} bg={colors.bg.body} textAlign="center">
          <Container maxW="600px">
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href={localePath('/contact', locale)}
                size="lg"
                bgGradient={`linear(135deg, ${colors.services.ia}, ${colors.accent.cyan})`}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                rightIcon={<FiArrowRight />}
              >
                {d.cta}
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
