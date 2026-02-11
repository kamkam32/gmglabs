'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function MentionsLegalesPage() {
  const { locale, dict } = useLocale()

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <Box py={{ base: 16, md: 24 }} bg={colors.bg.body}>
          <Container maxW="800px">
            <VStack spacing={10} align="flex-start">
              <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} color="white" fontWeight="800">
                {dict.legal.title}
              </Heading>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  {dict.legal.editor}
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {dict.legal.editorText}
                </Text>
                <Text color={colors.text.secondary} lineHeight="1.8" whiteSpace="pre-line">
                  {dict.legal.editorContact}
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  {dict.legal.hosting}
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {dict.legal.hostingText}
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  {dict.legal.ip}
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {dict.legal.ipText}
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  {dict.legal.data}
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {dict.legal.dataText}
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  {dict.legal.cookies}
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  {dict.legal.cookiesText}
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
