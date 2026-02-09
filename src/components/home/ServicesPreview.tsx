'use client'

import { Box, Container, SimpleGrid, Heading, Text, VStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiCpu } from 'react-icons/fi'
import Link from 'next/link'
import { colors } from '@/lib/colors'
import SectionHeading from '../shared/SectionHeading'
import GlowCard from '../shared/GlowCard'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

const services = [
  {
    icon: FiMonitor,
    title: 'Developpement Web',
    description: 'Applications web performantes avec Next.js, React et des architectures modernes. SEO, rapidite et experience utilisateur premium.',
    color: colors.services.web,
    href: '/services/web',
  },
  {
    icon: FiSmartphone,
    title: 'Applications Mobiles',
    description: 'Apps iOS et Android natives et cross-platform avec React Native. Design soigne et performances optimales.',
    color: colors.services.mobile,
    href: '/services/mobile',
  },
  {
    icon: FiCpu,
    title: 'Intelligence Artificielle',
    description: 'Chatbots, automatisation et solutions IA sur mesure. LLMs, RAG, computer vision et NLP pour transformer vos processus.',
    color: colors.services.ia,
    href: '/services/ia',
  },
]

export default function ServicesPreview() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <Box as="section" py={24} bg={colors.bg.section}>
      <Container maxW="1200px">
        <SectionHeading
          label="Nos services"
          title="Expertise technique, resultats concrets"
          gradientWord="resultats concrets"
          subtitle="Trois piliers d'excellence pour couvrir tous vos besoins technologiques."
        />

        <MotionSimpleGrid
          ref={ref}
          columns={{ base: 1, md: 3 }}
          spacing={8}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <MotionBox key={service.title} variants={fadeInUp}>
              <Link href={service.href}>
                <GlowCard glowColor={service.color} h="full" cursor="pointer" enableTilt>
                  <VStack align="flex-start" spacing={5}>
                    <Box
                      p={3}
                      borderRadius="xl"
                      bg={`${service.color}15`}
                      border="1px solid"
                      borderColor={`${service.color}30`}
                    >
                      <Icon as={service.icon} boxSize={6} color={service.color} />
                    </Box>
                    <Heading as="h3" fontSize="xl" fontWeight="700" color="white">
                      {service.title}
                    </Heading>
                    <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
                      {service.description}
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color={service.color}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      En savoir plus →
                    </Text>
                  </VStack>
                </GlowCard>
              </Link>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}
