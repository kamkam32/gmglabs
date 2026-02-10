'use client'

import { useRef } from 'react'
import { Box, Container, Flex, Heading, Text, VStack, HStack, Button, SimpleGrid, Badge } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { colors } from '@/lib/colors'
import SectionHeading from '../shared/SectionHeading'
import AnimatedCounter, { parseMetricValue } from '../shared/AnimatedCounter'
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const metrics = [
  { label: 'Utilisateurs', value: '10K+' },
  { label: 'Réservations/mois', value: '5K+' },
  { label: 'Score SEO', value: '98' },
  { label: 'Uptime', value: '99.9%' },
]


export default function FeaturedProject() {
  const { ref, isInView } = useScrollAnimation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <Box as="section" py={24} bg={colors.bg.body} ref={sectionRef}>
      <Container maxW="1200px">
        <SectionHeading
          label="Projet vedette"
          title="Ello, notre fierté"
          gradientWord="fierté"
          subtitle="La plateforme de réservation beauté #1 au Maroc, conçue et développée par GMG Labs."
        />

        <Flex
          ref={ref}
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
          align="center"
        >
          {/* Project visual */}
          <MotionBox
            flex={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            style={{ y: imageY }}
          >
            <Box
              bg={colors.bg.card}
              borderRadius="2xl"
              border="1px solid"
              borderColor={colors.border.subtle}
              overflow="hidden"
              position="relative"
            >
              <Box
                h={{ base: '250px', md: '350px' }}
                bg={colors.bg.elevated}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                p={10}
              >
                <Image
                  src="/images/6 - Peach plein + texte dark (transparent)(2).png"
                  alt="Ello - Plateforme Beauté"
                  width={400}
                  height={300}
                  style={{ objectFit: 'contain', maxHeight: '100%' }}
                />
              </Box>
            </Box>
          </MotionBox>

          {/* Project details */}
          <MotionBox
            flex={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInRight}
          >
            <VStack align="flex-start" spacing={6}>
              <Badge
                bg="rgba(0, 212, 255, 0.1)"
                color={colors.accent.cyan}
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                Web + Mobile
              </Badge>

              <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="white" fontWeight="700">
                Ello — Plateforme Beauté & Bien-être
              </Heading>

              <Text color={colors.text.secondary} lineHeight="1.8" fontSize="sm">
                Plateforme complète de réservation et gestion pour les professionnels de la beauté au Maroc.
                Réservation en temps réel, rappels WhatsApp automatiques, dashboard pro et app mobile.
              </Text>

              <SimpleGrid columns={2} spacing={4} w="full">
                {metrics.map((m) => {
                  const parsed = parseMetricValue(m.value)
                  return (
                    <Box
                      key={m.label}
                      p={4}
                      bg={colors.bg.section}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor={colors.border.subtle}
                    >
                      <AnimatedCounter
                        target={parsed.numeric}
                        suffix={parsed.suffix}
                        decimals={parsed.decimals}
                        fontSize="2xl"
                        fontWeight="800"
                        color="white"
                      />
                      <Text fontSize="xs" color={colors.text.tertiary}>
                        {m.label}
                      </Text>
                    </Box>
                  )
                })}
              </SimpleGrid>

              <HStack spacing={4} pt={2}>
                <Button
                  as={Link}
                  href="/realisations/ello"
                  size="md"
                  bgGradient={colors.accent.gradient}
                  color="white"
                  borderRadius="full"
                  px={6}
                  fontWeight="600"
                  _hover={{ opacity: 0.9 }}
                  rightIcon={<FiArrowRight />}
                >
                  Étude de cas
                </Button>
                <Button
                  as="a"
                  href="https://www.ello.ma"
                  target="_blank"
                  variant="ghost"
                  color={colors.accent.cyan}
                  fontWeight="600"
                  _hover={{ bg: 'rgba(0, 212, 255, 0.1)' }}
                  rightIcon={<FiExternalLink />}
                >
                  Visiter ello.ma
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}
