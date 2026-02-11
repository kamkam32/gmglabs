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
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)


export default function FeaturedProject() {
  const { ref, isInView } = useScrollAnimation()
  const { locale, dict } = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const metrics = [
    { label: dict.featuredProject.metricsLabels.users, value: '10K+' },
    { label: dict.featuredProject.metricsLabels.bookings, value: '5K+' },
    { label: dict.featuredProject.metricsLabels.seoScore, value: '98' },
    { label: dict.featuredProject.metricsLabels.uptime, value: '99.9%' },
  ]

  return (
    <Box as="section" py={24} bg={colors.bg.body} ref={sectionRef}>
      <Container maxW="1200px">
        <SectionHeading
          label={dict.featuredProject.label}
          title={dict.featuredProject.title}
          gradientWord={dict.featuredProject.gradientWord}
          subtitle={dict.featuredProject.subtitle}
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
                {dict.featuredProject.badge}
              </Badge>

              <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="white" fontWeight="700">
                {dict.featuredProject.projectTitle}
              </Heading>

              <Text color={colors.text.secondary} lineHeight="1.8" fontSize="sm">
                {dict.featuredProject.projectDescription}
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
                  href={localePath('/realisations/ello', locale)}
                  size="md"
                  bgGradient={colors.accent.gradient}
                  color="white"
                  borderRadius="full"
                  px={6}
                  fontWeight="600"
                  _hover={{ opacity: 0.9 }}
                  rightIcon={<FiArrowRight />}
                >
                  {dict.featuredProject.caseStudy}
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
                  {dict.featuredProject.visitSite}
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}
