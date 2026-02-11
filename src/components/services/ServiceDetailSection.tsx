'use client'

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'
import TechBadge from './TechBadge'
import { useScrollAnimation, fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

interface Feature {
  icon: IconType
  title: string
  description: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ServiceDetailSectionProps {
  accentColor: string
  heroTitle: string
  heroGradientWord: string
  heroSubtitle: string
  features: Feature[]
  technologies: string[]
  processSteps: ProcessStep[]
  technologiesTitle?: string
  processTitle?: string
}

export default function ServiceDetailSection({
  accentColor,
  heroTitle,
  heroGradientWord,
  heroSubtitle,
  features,
  technologies,
  processSteps,
  technologiesTitle = 'Technologies utilisees',
  processTitle = 'Notre processus',
}: ServiceDetailSectionProps) {
  const { ref: featRef, isInView: featInView } = useScrollAnimation()
  const { ref: techRef, isInView: techInView } = useScrollAnimation()
  const { ref: procRef, isInView: procInView } = useScrollAnimation()

  const renderTitle = () => {
    const parts = heroTitle.split(heroGradientWord)
    return (
      <>
        {parts[0]}
        <GradientText gradient={`linear-gradient(135deg, ${accentColor} 0%, ${colors.accent.violet} 100%)`}>
          {heroGradientWord}
        </GradientText>
        {parts[1] || ''}
      </>
    )
  }

  return (
    <Box>
      {/* Hero */}
      <Box
        py={{ base: 20, md: 28 }}
        bg={colors.bg.body}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-20%"
          left="50%"
          transform="translateX(-50%)"
          w="100%"
          h="100%"
          bgGradient={`radial-gradient(ellipse at 50% 30%, ${accentColor}15 0%, transparent 60%)`}
          pointerEvents="none"
        />
        <Container maxW="800px" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color="white"
                lineHeight="1.2"
              >
                {renderTitle()}
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8">
                {heroSubtitle}
              </Text>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20} bg={colors.bg.section}>
        <Container maxW="1200px">
          <VStack spacing={16} ref={featRef}>
            {features.map((feature, idx) => (
              <MotionFlex
                key={feature.title}
                direction={{ base: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }}
                gap={12}
                align="center"
                initial="hidden"
                animate={featInView ? 'visible' : 'hidden'}
                variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              >
                <Box flex={1}>
                  <Box
                    w="80px"
                    h="80px"
                    borderRadius="2xl"
                    bg={`${accentColor}10`}
                    border="1px solid"
                    borderColor={`${accentColor}30`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                  >
                    <Box as={feature.icon} size="32px" color={accentColor} />
                  </Box>
                  <Heading as="h3" fontSize="2xl" color="white" mb={3}>
                    {feature.title}
                  </Heading>
                  <Text color={colors.text.secondary} lineHeight="1.8">
                    {feature.description}
                  </Text>
                </Box>
                <Box
                  flex={1}
                  h="250px"
                  bg={colors.bg.card}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={colors.border.subtle}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box as={feature.icon} size="48px" color={`${accentColor}40`} />
                </Box>
              </MotionFlex>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Technologies */}
      <Box py={20} bg={colors.bg.body}>
        <Container maxW="800px">
          <MotionBox
            ref={techRef}
            textAlign="center"
            initial="hidden"
            animate={techInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Heading as="h2" fontSize="2xl" color="white" mb={8}>
              {technologiesTitle}
            </Heading>
            <HStack flexWrap="wrap" justify="center" gap={3}>
              {technologies.map((tech) => (
                <TechBadge key={tech} name={tech} accentColor={accentColor} />
              ))}
            </HStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Process */}
      <Box py={20} bg={colors.bg.section}>
        <Container maxW="1000px">
          <Heading as="h2" fontSize="2xl" color="white" mb={12} textAlign="center">
            {processTitle}
          </Heading>
          <SimpleGrid
            ref={procRef}
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={8}
          >
            {processSteps.map((step, idx) => (
              <MotionBox
                key={step.number}
                initial="hidden"
                animate={procInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <VStack
                  align="flex-start"
                  spacing={3}
                  p={6}
                  bg={colors.bg.card}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={colors.border.subtle}
                  h="full"
                >
                  <Text
                    fontSize="3xl"
                    fontWeight="800"
                    bgGradient={`linear(to-r, ${accentColor}, ${colors.accent.violet})`}
                    bgClip="text"
                  >
                    {step.number}
                  </Text>
                  <Heading as="h4" fontSize="md" color="white">
                    {step.title}
                  </Heading>
                  <Text fontSize="sm" color={colors.text.tertiary} lineHeight="1.7">
                    {step.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}
