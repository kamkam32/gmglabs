'use client'

import { Box, Container, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { colors } from '@/lib/colors'
import AnimatedCounter from '../shared/AnimatedCounter'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'
import { useLocale } from '@/i18n/LocaleContext'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Stats() {
  const { ref, isInView } = useScrollAnimation()
  const { locale, dict } = useLocale()

  const stats = [
    { value: 15, suffix: '+', label: dict.stats.projectsDelivered },
    { value: 30, suffix: 'K+', label: dict.stats.activeUsers },
    { value: 3, suffix: '+', label: dict.stats.yearsExperience },
    { value: 98, suffix: '%', label: dict.stats.clientSatisfaction },
  ]

  return (
    <Box as="section" py={20} bg={colors.bg.section}>
      <Container maxW="1200px">
        <MotionSimpleGrid
          ref={ref}
          columns={{ base: 2, md: 4 }}
          spacing={8}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <MotionBox key={stat.label} variants={fadeInUp}>
              <VStack
                p={8}
                bg={colors.bg.card}
                borderRadius="2xl"
                border="1px solid"
                borderColor={colors.border.subtle}
                spacing={2}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight="800"
                  color="white"
                />
                <Text fontSize="sm" color={colors.text.tertiary} textAlign="center">
                  {stat.label}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}
