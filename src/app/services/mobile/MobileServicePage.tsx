'use client'

import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { FiSmartphone, FiDownloadCloud, FiSend, FiBell, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import { colors } from '@/lib/colors'

export default function MobileServicePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <ServiceDetailSection
          accentColor={colors.services.mobile}
          heroTitle="Applications mobiles qui marquent"
          heroGradientWord="marquent"
          heroSubtitle="Des apps iOS et Android fluides, performantes et avec un design natif. Une seule codebase, deux plateformes."
          features={[
            {
              icon: FiSmartphone,
              title: 'Cross-platform avec React Native',
              description: 'Une seule codebase pour iOS et Android. Réduction de 40% du temps de développement tout en conservant une expérience native sur chaque plateforme.',
            },
            {
              icon: FiDownloadCloud,
              title: 'Déploiement App Store & Play Store',
              description: 'Nous gérons tout le processus de publication : builds, certificats, screenshots, fiches store et optimisation ASO.',
            },
            {
              icon: FiSend,
              title: 'Offline-first et temps réel',
              description: 'Synchronisation hors-ligne, push notifications et mises à jour en temps réel pour une expérience sans interruption.',
            },
            {
              icon: FiBell,
              title: 'Push notifications intelligentes',
              description: 'Notifications ciblées et segmentées pour engager vos utilisateurs au bon moment avec le bon message.',
            },
          ]}
          technologies={['React Native', 'Expo', 'TypeScript', 'Firebase', 'Supabase', 'Redux', 'React Navigation', 'FastAPI', 'App Store Connect', 'Google Play Console']}
          processSteps={[
            { number: '01', title: 'Prototype', description: 'Définition du MVP, wireframes et prototype Figma interactif pour valider l\'UX avant le développement.' },
            { number: '02', title: 'Développement', description: 'Sprints de 2 semaines avec builds de test sur TestFlight et Play Store beta pour des retours continus.' },
            { number: '03', title: 'Tests', description: 'Tests sur appareils réels, performance profiling, tests d\'accessibilité et correction des bugs.' },
            { number: '04', title: 'Lancement', description: 'Publication sur les stores, monitoring Crashlytics, analytics et itérations post-lancement.' },
          ]}
        />

        <Box py={16} bg={colors.bg.body} textAlign="center">
          <Container maxW="600px">
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                bgGradient={`linear(135deg, ${colors.services.mobile}, ${colors.accent.cyan})`}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                rightIcon={<FiArrowRight />}
              >
                Lancer une app mobile
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
