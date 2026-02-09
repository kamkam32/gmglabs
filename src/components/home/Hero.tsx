'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { Box, Container, Heading, Text, HStack, Button, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 30 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y })
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <Box
      ref={containerRef}
      position="absolute"
      inset={0}
      pointerEvents="auto"
      zIndex={0}
    >
      <Box
        position="absolute"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(123, 97, 255, 0.08) 40%, transparent 70%)"
        filter="blur(60px)"
        transform="translate(-50%, -50%)"
        transition="left 0.3s ease-out, top 0.3s ease-out"
        pointerEvents="none"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
        }}
      />
    </Box>
  )
}

export default function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg={colors.bg.body}
    >
      {/* Mouse-following glow */}
      <MouseGlow />

      {/* Grid pattern overlay */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        bgImage="linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
        bgSize="60px 60px"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center" maxW="900px" mx="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box
              as="a"
              href="https://gmg-labs.com/"
              target="_blank"
              rel="noopener noreferrer"
              px={4}
              py={1.5}
              borderRadius="full"
              border="1px solid"
              borderColor="rgba(0, 212, 255, 0.3)"
              bg="rgba(0, 212, 255, 0.05)"
              display="inline-flex"
              _hover={{ bg: 'rgba(0, 212, 255, 0.1)', borderColor: 'rgba(0, 212, 255, 0.5)' }}
              transition="all 0.2s"
            >
              <Text fontSize="sm" fontWeight="600" color={colors.accent.cyan}>
                Agence Tech Premium — Casablanca
              </Text>
            </Box>
          </MotionBox>

          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            color="white"
            lineHeight="1.1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous construisons le{' '}
            <GradientText>futur digital</GradientText>
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color={colors.text.secondary}
            maxW="650px"
            lineHeight="1.8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            De l&apos;idee au produit. Nous concevons des applications web, mobiles et IA
            qui propulsent les entreprises marocaines vers le succes.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HStack spacing={4} flexWrap="wrap" justify="center">
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
                Demarrer un projet
              </Button>
              <Button
                as={Link}
                href="/realisations"
                size="lg"
                variant="outline"
                borderColor={colors.border.hover}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{
                  bg: 'rgba(255,255,255,0.06)',
                  borderColor: colors.accent.cyan,
                }}
                transition="all 0.3s"
              >
                Voir nos projets
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}
