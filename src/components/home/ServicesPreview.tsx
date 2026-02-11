'use client'

import { Box, Container, SimpleGrid, Heading, Text, VStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiCpu, FiActivity } from 'react-icons/fi'
import Link from 'next/link'
import { colors } from '@/lib/colors'
import SectionHeading from '../shared/SectionHeading'
import GlowCard from '../shared/GlowCard'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

const servicesMeta = [
  { key: 'web' as const, icon: FiMonitor, color: colors.services.web, href: '/services/web' },
  { key: 'mobile' as const, icon: FiSmartphone, color: colors.services.mobile, href: '/services/mobile' },
  { key: 'ia' as const, icon: FiCpu, color: colors.services.ia, href: '/services/ia' },
  { key: 'performance' as const, icon: FiActivity, color: colors.services.performance, href: '/services/performance' },
]

export default function ServicesPreview() {
  const { ref, isInView } = useScrollAnimation()
  const { locale, dict } = useLocale()

  const services = servicesMeta.map((s) => ({
    ...s,
    title: dict.services[s.key].title,
    description: dict.services[s.key].description,
  }))

  return (
    <Box as="section" py={24} bg={colors.bg.section}>
      <Container maxW="1200px">
        <SectionHeading
          label={dict.services.label}
          title={dict.services.title}
          gradientWord={dict.services.gradientWord}
          subtitle={dict.services.subtitle}
        />

        <MotionSimpleGrid
          ref={ref}
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <MotionBox key={service.key} variants={fadeInUp}>
              <Link href={localePath(service.href, locale)}>
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
                      {dict.services.learnMore}
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
