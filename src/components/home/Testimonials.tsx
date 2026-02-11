'use client'

import { Box, Container, SimpleGrid, Text, VStack, HStack, Avatar } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { colors } from '@/lib/colors'
import SectionHeading from '../shared/SectionHeading'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'
import { useLocale } from '@/i18n/LocaleContext'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation()
  const { locale, dict } = useLocale()

  const testimonials = dict.testimonials.quotes.map((q) => ({
    ...q,
    rating: 5,
  }))

  return (
    <Box as="section" py={24} bg={colors.bg.section}>
      <Container maxW="1200px">
        <SectionHeading
          label={dict.testimonials.label}
          title={dict.testimonials.title}
          gradientWord={dict.testimonials.gradientWord}
          subtitle={dict.testimonials.subtitle}
        />

        <MotionSimpleGrid
          ref={ref}
          columns={{ base: 1, md: 3 }}
          spacing={8}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {testimonials.map((t) => (
            <MotionBox key={t.name} variants={fadeInUp}>
              <Box
                bg={colors.bg.card}
                border="1px solid"
                borderColor={colors.border.subtle}
                borderRadius="2xl"
                p={8}
                h="full"
                _hover={{ borderColor: colors.border.hover }}
                transition="border-color 0.3s"
              >
                <VStack align="flex-start" spacing={5} h="full">
                  <HStack spacing={1}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Box key={i} as={FiStar} fill={colors.accent.amber} color={colors.accent.amber} size="16px" />
                    ))}
                  </HStack>
                  <Text color={colors.text.secondary} fontSize="sm" lineHeight="1.8" flex={1}>
                    &quot;{t.content}&quot;
                  </Text>
                  <HStack spacing={3} pt={2}>
                    <Avatar size="sm" name={t.name} bg={colors.bg.elevated} color="white" />
                    <VStack spacing={0} align="flex-start">
                      <Text fontSize="sm" fontWeight="600" color="white">
                        {t.name}
                      </Text>
                      <Text fontSize="xs" color={colors.text.tertiary}>
                        {t.role}
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}
