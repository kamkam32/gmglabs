'use client'

import { Box, Container, Heading, Text, VStack, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation'

const MotionVStack = motion(VStack)

export default function CTASection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <Box as="section" py={24} bg={colors.bg.body} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="800px"
        h="800px"
        bgGradient="radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(123, 97, 255, 0.04) 40%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="800px" position="relative" zIndex={1}>
        <MotionVStack
          ref={ref}
          spacing={8}
          textAlign="center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontWeight="800"
            color="white"
            lineHeight="1.2"
          >
            Pret a lancer votre{' '}
            <GradientText>projet ?</GradientText>
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} maxW="550px" lineHeight="1.8">
            Discutons de votre vision. Premier appel de decouverte gratuit et sans engagement.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              bgGradient={colors.accent.gradient}
              color="white"
              borderRadius="full"
              px={8}
              fontWeight="600"
              _hover={{
                opacity: 0.9,
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)',
              }}
              transition="all 0.3s"
              rightIcon={<FiArrowRight />}
            >
              Planifier un appel
            </Button>
            <Button
              as="a"
              href="https://wa.me/33619061215?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet"
              target="_blank"
              size="lg"
              bg="#25D366"
              color="white"
              borderRadius="full"
              px={8}
              fontWeight="600"
              _hover={{
                bg: '#20BD5A',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.3s"
              leftIcon={<FaWhatsapp />}
            >
              WhatsApp
            </Button>
          </HStack>
        </MotionVStack>
      </Container>
    </Box>
  )
}
