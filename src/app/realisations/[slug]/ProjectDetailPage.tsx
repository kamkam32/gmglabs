'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Button,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TechBadge from '@/components/services/TechBadge'
import CTASection from '@/components/home/CTASection'
import { colors } from '@/lib/colors'
import type { Project } from '@/lib/projects'

const MotionBox = motion(Box)

const categoryColors: Record<string, string> = {
  web: colors.services.web,
  mobile: colors.services.mobile,
  ia: colors.services.ia,
  'web+mobile': colors.services.web,
}

export default function ProjectDetailPage({ project }: { project: Project }) {
  const accent = categoryColors[project.category] || colors.accent.cyan

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        {/* Hero */}
        <Box py={{ base: 16, md: 24 }} bg={colors.bg.body} position="relative" overflow="hidden">
          <Box
            position="absolute"
            top="-20%"
            left="50%"
            transform="translateX(-50%)"
            w="100%"
            h="100%"
            bgGradient={`radial-gradient(ellipse at 50% 30%, ${accent}15 0%, transparent 60%)`}
            pointerEvents="none"
          />
          <Container maxW="900px" position="relative" zIndex={1}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/realisations">
                <HStack spacing={2} color={colors.accent.cyan} mb={8} _hover={{ opacity: 0.8 }}>
                  <FiArrowLeft />
                  <Text fontSize="sm" fontWeight="500">Retour aux realisations</Text>
                </HStack>
              </Link>

              <VStack align="flex-start" spacing={4}>
                <Badge bg={`${accent}15`} color={accent} px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="600">
                  {project.category === 'web+mobile' ? 'WEB + MOBILE' : project.category.toUpperCase()} — {project.year}
                </Badge>
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="800" color="white" lineHeight="1.2">
                  {project.title}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8">
                  {project.description}
                </Text>
                {project.url && (
                  <Button
                    as="a"
                    href={project.url}
                    target="_blank"
                    variant="outline"
                    borderColor={accent}
                    color={accent}
                    borderRadius="full"
                    _hover={{ bg: `${accent}10` }}
                    rightIcon={<FiExternalLink />}
                    mt={2}
                  >
                    Visiter le site
                  </Button>
                )}
              </VStack>
            </MotionBox>
          </Container>
        </Box>

        {/* Metrics */}
        <Box py={16} bg={colors.bg.section}>
          <Container maxW="900px">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              {project.metrics.map((m) => (
                <Box
                  key={m.label}
                  p={6}
                  bg={colors.bg.card}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={colors.border.subtle}
                  textAlign="center"
                >
                  <Text fontSize="2xl" fontWeight="800" color="white">
                    {m.value}
                  </Text>
                  <Text fontSize="xs" color={colors.text.tertiary} mt={1}>
                    {m.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Challenge & Solution */}
        <Box py={16} bg={colors.bg.body}>
          <Container maxW="900px">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <VStack align="flex-start" spacing={4}>
                <Heading as="h2" fontSize="xl" color="white">
                  Le defi
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {project.challenge}
                </Text>
              </VStack>
              <VStack align="flex-start" spacing={4}>
                <Heading as="h2" fontSize="xl" color="white">
                  Notre solution
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {project.solution}
                </Text>
              </VStack>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Results */}
        <Box py={16} bg={colors.bg.section}>
          <Container maxW="900px">
            <Heading as="h2" fontSize="xl" color="white" mb={6}>
              Resultats
            </Heading>
            <VStack align="flex-start" spacing={3}>
              {project.results.map((r, i) => (
                <HStack key={i} spacing={3} align="flex-start">
                  <Box w="8px" h="8px" borderRadius="full" bg={accent} mt={2} flexShrink={0} />
                  <Text color={colors.text.secondary} lineHeight="1.7">
                    {r}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Container>
        </Box>

        {/* Technologies */}
        <Box py={16} bg={colors.bg.body}>
          <Container maxW="900px">
            <Heading as="h2" fontSize="xl" color="white" mb={6}>
              Technologies
            </Heading>
            <HStack flexWrap="wrap" gap={3}>
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} accentColor={accent} />
              ))}
            </HStack>
          </Container>
        </Box>

        {/* Info */}
        <Box py={16} bg={colors.bg.section}>
          <Container maxW="900px">
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={6}>
              <Box>
                <Text fontSize="xs" color={colors.text.tertiary} textTransform="uppercase" letterSpacing="1px" mb={1}>
                  Client
                </Text>
                <Text color="white" fontWeight="600">{project.client}</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={colors.text.tertiary} textTransform="uppercase" letterSpacing="1px" mb={1}>
                  Duree
                </Text>
                <Text color="white" fontWeight="600">{project.duration}</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={colors.text.tertiary} textTransform="uppercase" letterSpacing="1px" mb={1}>
                  Annee
                </Text>
                <Text color="white" fontWeight="600">{project.year}</Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <CTASection />
      </Box>
      <Footer />
    </Box>
  )
}
