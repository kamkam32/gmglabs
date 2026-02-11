'use client'

import { Box, Heading, Text, VStack, HStack, Button, Badge } from '@chakra-ui/react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

interface PricingCardProps {
  name: string
  price: string
  priceNote?: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
}

export default function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  popular = false,
  ctaText,
  ctaHref = '/contact',
}: PricingCardProps) {
  const { locale, dict } = useLocale()
  const buttonText = ctaText || dict.pricing.startCta

  return (
    <Box
      bg={colors.bg.card}
      border="1px solid"
      borderColor={popular ? `${colors.accent.cyan}50` : colors.border.subtle}
      borderRadius="2xl"
      p={8}
      position="relative"
      overflow="hidden"
      _hover={{
        borderColor: popular ? colors.accent.cyan : colors.border.hover,
        transform: 'translateY(-4px)',
      }}
      transition="all 0.3s"
      h="full"
      display="flex"
      flexDirection="column"
    >
      {popular && (
        <>
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="2px"
            bgGradient={colors.accent.gradient}
          />
          <Badge
            position="absolute"
            top={4}
            right={4}
            bgGradient={colors.accent.gradient}
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="700"
          >
            {dict.pricing.popular}
          </Badge>
        </>
      )}

      <VStack align="flex-start" spacing={5} flex={1}>
        <Text fontSize="sm" fontWeight="600" color={colors.accent.cyan} textTransform="uppercase" letterSpacing="1px">
          {name}
        </Text>

        <Box>
          <HStack align="baseline" spacing={1}>
            <Text fontSize="4xl" fontWeight="800" color="white">
              {price}
            </Text>
            {priceNote && (
              <Text fontSize="sm" color={colors.text.tertiary}>
                {priceNote}
              </Text>
            )}
          </HStack>
        </Box>

        <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.6">
          {description}
        </Text>

        <Box w="full" h="1px" bg={colors.border.subtle} />

        <VStack align="flex-start" spacing={3} flex={1}>
          {features.map((feature) => (
            <HStack key={feature} spacing={3} align="flex-start">
              <Box mt={1}>
                <FiCheck size={16} color={colors.accent.cyan} />
              </Box>
              <Text fontSize="sm" color={colors.text.secondary}>
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Button
          as={Link}
          href={localePath(ctaHref, locale)}
          w="full"
          size="lg"
          bgGradient={popular ? colors.accent.gradient : undefined}
          bg={popular ? undefined : 'transparent'}
          color="white"
          border={popular ? 'none' : '1px solid'}
          borderColor={popular ? undefined : colors.border.hover}
          borderRadius="xl"
          fontWeight="600"
          _hover={{
            opacity: popular ? 0.9 : undefined,
            bg: popular ? undefined : 'rgba(255,255,255,0.06)',
            transform: 'translateY(-2px)',
          }}
          rightIcon={<FiArrowRight />}
        >
          {buttonText}
        </Button>
      </VStack>
    </Box>
  )
}
