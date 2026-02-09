'use client'

import { useRef, useEffect, useState } from 'react'
import { Box, Container, Heading, Text, HStack, Button, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const TYPEWRITER_TEXT = "De l'idee au produit. Nous concevons des applications web, mobiles et IA qui propulsent les entreprises marocaines vers le succes."

function Typewriter({ text, delay = 0.8 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, 25)
    return () => clearTimeout(timeout)
  }, [started, displayed, text])

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <Box as="span" display="inline-block" w="2px" h="1em" bg={colors.accent.cyan} ml="2px" verticalAlign="text-bottom"
          sx={{ animation: 'blink 1s step-end infinite', '@keyframes blink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } } }}
        />
      )}
    </>
  )
}

function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    const rect = container.getBoundingClientRect()
    current.current = { x: rect.width / 2, y: rect.height * 0.3 }
    mouse.current = { ...current.current }

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect()
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.08
      current.current.y += (mouse.current.y - current.current.y) * 0.08
      if (glow) {
        glow.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    container.addEventListener('mousemove', onMouseMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <Box
      ref={containerRef}
      position="absolute"
      inset={0}
      pointerEvents="auto"
      zIndex={0}
    >
      <Box
        ref={glowRef}
        position="absolute"
        top={0}
        left={0}
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(123, 97, 255, 0.08) 40%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
        willChange="transform"
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

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              color={colors.text.secondary}
              maxW="650px"
              lineHeight="1.8"
              minH={{ base: '80px', md: '60px' }}
            >
              <Typewriter text={TYPEWRITER_TEXT} delay={0.8} />
            </Text>
          </MotionBox>

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
