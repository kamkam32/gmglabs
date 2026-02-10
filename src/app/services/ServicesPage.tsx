'use client'

import { Box, Container, SimpleGrid, Heading, Text, VStack, Button, HStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiCpu, FiActivity, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GradientText from '@/components/shared/GradientText'
import GlowCard from '@/components/shared/GlowCard'
import CTASection from '@/components/home/CTASection'
import { colors } from '@/lib/colors'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)

const services = [
  {
    icon: FiMonitor,
    title: 'Developpement Web',
    description: 'Applications web performantes avec Next.js, React et des architectures modernes. SEO natif, rapidite et experience utilisateur premium.',
    features: ['Sites vitrine', 'Applications SaaS', 'E-commerce', 'Dashboards', 'APIs REST/GraphQL'],
    color: colors.services.web,
    href: '/services/web',
  },
  {
    icon: FiSmartphone,
    title: 'Applications Mobiles',
    description: 'Apps iOS et Android natives et cross-platform avec React Native. Design soigne, performances optimales et deploiement App Store/Play Store.',
    features: ['Apps cross-platform', 'Apps natives', 'MVP mobile', 'Apps de livraison', 'Apps de reservation'],
    color: colors.services.mobile,
    href: '/services/mobile',
  },
  {
    icon: FiCpu,
    title: 'Intelligence Artificielle',
    description: 'Chatbots, automatisation et solutions IA sur mesure. LLMs, RAG, computer vision et NLP pour transformer vos processus metier.',
    features: ['Chatbots WhatsApp', 'RAG / Bases documentaires', 'Automatisation', 'Computer Vision', 'Analyse de donnees'],
    color: colors.services.ia,
    href: '/services/ia',
  },
  {
    icon: FiActivity,
    title: 'Performance IT',
    description: 'Tests de charge, monitoring APM et audit de performance pour garantir la fiabilite et la rapidite de vos systemes en production.',
    features: ['Tests de charge (Neoload)', 'APM Dynatrace / AppDynamics', 'Audit de performance', 'Stress tests', 'Recommandation Go/No Go'],
    color: colors.services.performance,
    href: '/services/performance',
  },
]

export default function ServicesPage() {
  const { ref, isInView } = useScrollAnimation()

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
                Des services sur mesure pour votre{' '}
                <GradientText>ambition digitale</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                Quatre poles d&apos;expertise pour couvrir l&apos;ensemble de vos besoins technologiques,
                de la conception au deploiement.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Services Grid */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1200px">
            <MotionSimpleGrid
              ref={ref}
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={8}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              {services.map((service) => (
                <MotionBox key={service.title} variants={fadeInUp}>
                  <GlowCard glowColor={service.color} h="full" display="flex" flexDirection="column">
                    <VStack align="flex-start" spacing={5} flex={1}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg={`${service.color}15`}
                        border="1px solid"
                        borderColor={`${service.color}30`}
                      >
                        <Icon as={service.icon} boxSize={7} color={service.color} />
                      </Box>
                      <Heading as="h2" fontSize="xl" fontWeight="700" color="white">
                        {service.title}
                      </Heading>
                      <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7" flex={1}>
                        {service.description}
                      </Text>
                      <VStack align="flex-start" spacing={2} w="full">
                        {service.features.map((f) => (
                          <HStack key={f} spacing={2}>
                            <Box w="6px" h="6px" borderRadius="full" bg={service.color} />
                            <Text fontSize="sm" color={colors.text.secondary}>{f}</Text>
                          </HStack>
                        ))}
                      </VStack>
                      <Button
                        as={Link}
                        href={service.href}
                        mt={4}
                        variant="ghost"
                        color={service.color}
                        fontWeight="600"
                        _hover={{ bg: `${service.color}10` }}
                        rightIcon={<FiArrowRight />}
                        px={0}
                      >
                        En savoir plus
                      </Button>
                    </VStack>
                  </GlowCard>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        <CTASection />
      </Box>
      <Footer />
    </Box>
  )
}
