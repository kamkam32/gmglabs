'use client'

import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GradientText from '@/components/shared/GradientText'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function NotFound() {
  const { locale, dict } = useLocale()

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <Box
          py={{ base: 24, md: 32 }}
          bg={colors.bg.body}
          position="relative"
          overflow="hidden"
          minH="70vh"
          display="flex"
          alignItems="center"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="600px"
            h="600px"
            bgGradient="radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 60%)"
            pointerEvents="none"
          />
          <Container maxW="600px" position="relative" zIndex={1}>
            <VStack spacing={6} textAlign="center">
              <Text
                fontSize="8xl"
                fontWeight="800"
                bgGradient={colors.accent.gradient}
                bgClip="text"
                lineHeight="1"
              >
                404
              </Text>
              <Heading as="h1" fontSize={{ base: 'xl', md: '2xl' }} color="white">
                {dict.notFound.title}
              </Heading>
              <Text color={colors.text.secondary} lineHeight="1.7">
                {dict.notFound.description}
              </Text>
              <Button
                as={Link}
                href={localePath('/', locale)}
                bgGradient={colors.accent.gradient}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9 }}
                leftIcon={<FiArrowLeft />}
              >
                {dict.notFound.backHome}
              </Button>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
