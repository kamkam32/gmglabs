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
          heroSubtitle="De la landing page au SaaS complexe, nous construisons des applications web rapides, sécurisées et optimisées pour le SEO."
          features={[
            {
              icon: FiLayout,
              title: 'Interfaces modernes et responsives',
              description: 'Design pixel-perfect avec Chakra UI et Framer Motion. Chaque interface est pensée pour offrir une expérience fluide sur tous les appareils, du mobile au desktop.',
            },
            {
              icon: FiZap,
              title: 'Performance et rapidité',
              description: 'Architecture Next.js avec SSR/SSG, optimisation des images, lazy loading et code splitting. Temps de chargement inférieur à 2 secondes garanti.',
            },
            {
              icon: FiSearch,
              title: 'SEO natif et avancé',
              description: 'Metadata dynamique, JSON-LD, sitemap automatique, Open Graph. Votre application est indexée et visible dès le premier jour.',
            },
            {
              icon: FiShield,
              title: 'Sécurité et scalabilité',
              description: 'Authentification robuste, protection CSRF/XSS, HTTPS. Architecture serverless qui scale automatiquement avec votre croissance.',
            },
          ]}
          technologies={['Next.js 14', 'React', 'TypeScript', 'Chakra UI', 'Supabase', 'PostgreSQL', 'Vercel', 'Stripe', 'Node.js', 'GraphQL', 'Redis', 'Docker']}
          processSteps={[
            { number: '01', title: 'Découverte', description: 'Analyse de vos besoins, audit de l\'existant, définition du cahier des charges et des objectifs.' },
            { number: '02', title: 'Design', description: 'Maquettes Figma, prototype interactif, validation du design system et de l\'architecture technique.' },
            { number: '03', title: 'Développement', description: 'Sprints agiles de 2 semaines, démos régulières, intégration continue et tests automatisés.' },
            { number: '04', title: 'Déploiement', description: 'Mise en production sur Vercel, monitoring, formation et support technique post-lancement.' },
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
                Démarrer un projet web
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
