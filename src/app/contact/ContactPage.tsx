'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GradientText from '@/components/shared/GradientText'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function ContactPage() {
  const { locale, dict } = useLocale()

  const contactInfo = [
    {
      icon: FiMail,
      label: dict.contact.emailLabel,
      value: 'contact@ello.ma',
      href: 'mailto:contact@ello.ma',
    },
    {
      icon: FiPhone,
      label: dict.contact.phoneLabel,
      value: '+33 6 19 06 12 15',
      href: 'tel:+33619061215',
    },
    {
      icon: FaWhatsapp,
      label: dict.contact.whatsappLabel,
      value: '+33 6 19 06 12 15',
      href: 'https://wa.me/33619061215',
    },
    {
      icon: FiMapPin,
      label: dict.contact.addressLabel,
      value: dict.contact.addressValue,
      href: undefined,
    },
  ]

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
                {dict.contact.heroTitle}<GradientText>{dict.contact.heroTitleGradient}</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                {dict.contact.heroSubtitle}
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Contact Info */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="600px">
            <VStack spacing={8} align="flex-start">
              <Box>
                <Heading as="h2" fontSize="xl" color="white" mb={3}>
                  {dict.contact.directContact}
                </Heading>
                <Text color={colors.text.secondary} fontSize="sm" lineHeight="1.7">
                  {dict.contact.directContactSubtitle}
                </Text>
              </Box>

              <VStack spacing={5} align="flex-start" w="full">
                {contactInfo.map((info) => (
                  <HStack
                    key={info.label}
                    as={info.href ? 'a' : 'div'}
                    href={info.href}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    spacing={4}
                    p={5}
                    bg={colors.bg.card}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={colors.border.subtle}
                    w="full"
                    _hover={info.href ? { borderColor: colors.border.hover, cursor: 'pointer' } : {}}
                    transition="border-color 0.3s"
                  >
                    <Box
                      p={3}
                      borderRadius="lg"
                      bg={`${colors.accent.cyan}10`}
                    >
                      <Box as={info.icon} size="20px" color={colors.accent.cyan} />
                    </Box>
                    <VStack align="flex-start" spacing={0}>
                      <Text fontSize="xs" color={colors.text.tertiary} textTransform="uppercase" letterSpacing="0.5px">
                        {info.label}
                      </Text>
                      <Text fontSize="sm" color="white" fontWeight="500">
                        {info.value}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
