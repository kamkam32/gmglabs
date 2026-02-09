'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PricingCard from '@/components/pricing/PricingCard'
import GradientText from '@/components/shared/GradientText'
import { colors } from '@/lib/colors'

const plans = [
  {
    name: 'Starter',
    price: '15 000 MAD',
    priceNote: 'a partir de',
    description: 'Ideal pour les petites entreprises qui ont besoin d\'un site vitrine professionnel et optimise SEO.',
    features: [
      'Site vitrine responsive (5-7 pages)',
      'Design premium sur mesure',
      'SEO optimise (meta, sitemap, JSON-LD)',
      'Formulaire de contact',
      'Integration Google Analytics',
      'Hebergement 1 an inclus',
      'Support 30 jours post-lancement',
    ],
  },
  {
    name: 'Business',
    price: '40 000 MAD',
    priceNote: 'a partir de',
    description: 'Pour les projets ambitieux : applications web, e-commerce ou plateformes SaaS avec fonctionnalites avancees.',
    features: [
      'Application web complete',
      'Backend et base de donnees',
      'Authentification utilisateurs',
      'Dashboard d\'administration',
      'API REST/GraphQL',
      'Tests automatises',
      'CI/CD et deploiement',
      'Support 90 jours post-lancement',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    description: 'Solutions sur mesure pour les grands projets : applications mobiles, IA, architectures complexes et equipes dediees.',
    features: [
      'Tout le plan Business',
      'Application mobile (iOS + Android)',
      'Solutions IA / Chatbots',
      'Architecture scalable',
      'Equipe dediee',
      'SLA et garanties de disponibilite',
      'Formation equipe client',
      'Support prioritaire illimite',
    ],
    ctaText: 'Demander un devis',
  },
]

const faqItems = [
  {
    question: 'Combien de temps dure un projet typique ?',
    answer: 'Un site vitrine prend 2 a 4 semaines. Une application web complete, 2 a 4 mois. Une app mobile, 3 a 6 mois. Chaque projet est different, nous vous donnerons une estimation precise lors du premier appel.',
  },
  {
    question: 'Quelles sont les modalites de paiement ?',
    answer: 'Nous fonctionnons en 3 versements : 40% a la signature, 30% a mi-parcours et 30% a la livraison. Pour les projets Enterprise, les modalites sont flexibles et negociables.',
  },
  {
    question: 'Est-ce que le prix inclut l\'hebergement ?',
    answer: 'Le plan Starter inclut 1 an d\'hebergement sur Vercel. Pour les plans Business et Enterprise, nous recommandons et configurons l\'hebergement optimal (Vercel, AWS, ou autre) selon vos besoins.',
  },
  {
    question: 'Que se passe-t-il apres la livraison ?',
    answer: 'Chaque plan inclut une periode de support gratuit (30 a 90 jours). Au-dela, nous proposons des contrats de maintenance mensuels a partir de 2 000 MAD/mois.',
  },
  {
    question: 'Pouvez-vous travailler avec notre equipe technique existante ?',
    answer: 'Absolument. Nous pouvons intervenir en renfort de votre equipe, en mode regie ou en mode projet. Nous nous adaptons a vos outils et processus.',
  },
  {
    question: 'Les prix sont-ils negociables ?',
    answer: 'Les prix affiches sont des tarifs de base. Le prix final depend de la complexite exacte de votre projet. Nous vous invitons a nous contacter pour un devis personnalise gratuit.',
  },
]

export default function TarifsPage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        {/* Hero */}
        <Box py={{ base: 20, md: 28 }} bg={colors.bg.body} position="relative" overflow="hidden">
          <Box
            position="absolute"
            top="-20%"
            left="50%"
            transform="translateX(-50%)"
            w="100%"
            h="100%"
            bgGradient={colors.accent.gradientRadial}
            pointerEvents="none"
          />
          <Container maxW="800px" position="relative" zIndex={1}>
            <VStack spacing={6} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color="white"
                lineHeight="1.2"
              >
                Des tarifs <GradientText>transparents</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                Pas de surprise. Trois formules claires pour couvrir tous les types de projets,
                du site vitrine a la solution enterprise.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Pricing Cards */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1200px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* FAQ */}
        <Box py={20} bg={colors.bg.body}>
          <Container maxW="800px">
            <Heading as="h2" fontSize="2xl" color="white" textAlign="center" mb={12}>
              Questions frequentes
            </Heading>
            <Accordion allowToggle>
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  border="1px solid"
                  borderColor={colors.border.subtle}
                  borderRadius="xl"
                  mb={4}
                  bg={colors.bg.card}
                  overflow="hidden"
                >
                  <AccordionButton py={5} px={6} _hover={{ bg: colors.bg.elevated }}>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="600" color="white" fontSize="sm">
                        {item.question}
                      </Text>
                    </Box>
                    <AccordionIcon color={colors.text.tertiary} />
                  </AccordionButton>
                  <AccordionPanel pb={5} px={6}>
                    <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
                      {item.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
