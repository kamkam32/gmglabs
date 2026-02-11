'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PricingCard from '@/components/pricing/PricingCard'
import GradientText from '@/components/shared/GradientText'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function TarifsPage() {
  const { locale, dict } = useLocale()

  const plans = dict.pricing.plans.map((plan: any) => ({
    ...plan,
    popular: plan.name === 'Business',
  }))

  const faqItems = dict.pricing.faqItems

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
                {dict.pricing.heroTitle}<GradientText>{dict.pricing.heroTitleGradient}</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                {dict.pricing.heroSubtitle}
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Pricing Cards */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1200px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {plans.map((plan: any) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* FAQ */}
        <Box py={20} bg={colors.bg.body}>
          <Container maxW="800px">
            <Heading as="h2" fontSize="2xl" color="white" textAlign="center" mb={12}>
              {dict.pricing.faqTitle}
            </Heading>
            <Accordion allowToggle>
              {faqItems.map((item: any, idx: number) => (
                <AccordionItem
                  key={idx}
                  border="1px solid"
                  borderColor={colors.border.subtle}
                  borderRadius="xl"
                  mb={4}
                  bg={colors.bg.card}
                  overflow="hidden"
                >
                  <AccordionButton py={5} px={6} _hover={{ bg: colors.bg.elevated }}>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="600" color="white" fontSize="sm">
                        {item.question}
                      </Text>
                    </Box>
                    <AccordionIcon color={colors.text.tertiary} />
                  </AccordionButton>
                  <AccordionPanel pb={5} px={6}>
                    <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
                      {item.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
