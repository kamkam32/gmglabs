'use client'

import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { FiLayout, FiZap, FiSearch, FiShield, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import { colors } from '@/lib/colors'

export default function WebServicePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <ServiceDetailSection
          accentColor={colors.services.web}
          heroTitle="Applications web qui performent"
          heroGradientWord="performent"
          heroSubtitle="De la landing page au SaaS complexe, nous construisons des applications web rapides, securisees et optimisees pour le SEO."
          features={[
            {
              icon: FiLayout,
              title: 'Interfaces modernes et responsives',
              description: 'Design pixel-perfect avec Chakra UI et Framer Motion. Chaque interface est pensee pour offrir une experience fluide sur tous les appareils, du mobile au desktop.',
            },
            {
              icon: FiZap,
              title: 'Performance et rapidite',
              description: 'Architecture Next.js avec SSR/SSG, optimisation des images, lazy loading et code splitting. Temps de chargement inferieur a 2 secondes garanti.',
            },
            {
              icon: FiSearch,
              title: 'SEO natif et avance',
              description: 'Metadata dynamique, JSON-LD, sitemap automatique, Open Graph. Votre application est indexee et visible des le premier jour.',
            },
            {
              icon: FiShield,
              title: 'Securite et scalabilite',
              description: 'Authentification robuste, protection CSRF/XSS, HTTPS. Architecture serverless qui scale automatiquement avec votre croissance.',
            },
          ]}
          technologies={['Next.js 14', 'React', 'TypeScript', 'Chakra UI', 'Supabase', 'PostgreSQL', 'Vercel', 'Stripe', 'Node.js', 'GraphQL', 'Redis', 'Docker']}
          processSteps={[
            { number: '01', title: 'Decouverte', description: 'Analyse de vos besoins, audit de l\'existant, definition du cahier des charges et des objectifs.' },
            { number: '02', title: 'Design', description: 'Maquettes Figma, prototype interactif, validation du design system et de l\'architecture technique.' },
            { number: '03', title: 'Developpement', description: 'Sprints agiles de 2 semaines, demos regulieres, integration continue et tests automatises.' },
            { number: '04', title: 'Deploiement', description: 'Mise en production sur Vercel, monitoring, formation et support technique post-lancement.' },
          ]}
        />

        {/* CTA */}
        <Box py={16} bg={colors.bg.body} textAlign="center">
          <Container maxW="600px">
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                bgGradient={colors.accent.gradient}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                rightIcon={<FiArrowRight />}
              >
                Demarrer un projet web
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
