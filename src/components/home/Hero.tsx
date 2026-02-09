'use client'

import { useRef, useEffect, useState } from 'react'
import { Box, Container, Heading, Text, HStack, Button, VStack } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'
import { useMagnetic } from '@/hooks/useMagnetic'

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

function MagneticButton({ children }: { children: React.ReactNode }) {
  const magneticRef = useMagnetic<HTMLDivElement>(0.3)
  return (
    <Box ref={magneticRef} display="inline-block">
      {children}
    </Box>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <Box
      ref={heroRef}
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

      {/* Animated aurora blobs */}
      <MotionBox
        position="absolute"
        inset={0}
        pointerEvents="none"
        zIndex={0}
        style={{ y: gradientY }}
        overflow="hidden"
      >
        {/* Blob 1 - cyan, top-left drift */}
        <Box
          position="absolute"
          top="-20%"
          left="-10%"
          w="70vw"
          h="70vw"
          maxW="800px"
          maxH="800px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(0, 212, 255, 0.02) 40%, transparent 70%)"
          filter="blur(80px)"
          sx={{
            animation: 'blob1 18s ease-in-out infinite',
            '@keyframes blob1': {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '33%': { transform: 'translate(12vw, 8vh) scale(1.15)' },
              '66%': { transform: 'translate(-5vw, 15vh) scale(0.9)' },
            },
          }}
        />
        {/* Blob 2 - purple, center-right drift */}
        <Box
          position="absolute"
          top="10%"
          right="-15%"
          w="60vw"
          h="60vw"
          maxW="700px"
          maxH="700px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(123, 97, 255, 0.07) 0%, rgba(123, 97, 255, 0.02) 40%, transparent 70%)"
          filter="blur(80px)"
          sx={{
            animation: 'blob2 22s ease-in-out infinite',
            '@keyframes blob2': {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '33%': { transform: 'translate(-15vw, 5vh) scale(1.1)' },
              '66%': { transform: 'translate(-8vw, -10vh) scale(0.95)' },
            },
          }}
        />
        {/* Blob 3 - mixed, bottom-center drift */}
        <Box
          position="absolute"
          bottom="-15%"
          left="20%"
          w="55vw"
          h="55vw"
          maxW="650px"
          maxH="650px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, rgba(123, 97, 255, 0.04) 30%, transparent 65%)"
          filter="blur(90px)"
          sx={{
            animation: 'blob3 25s ease-in-out infinite',
            '@keyframes blob3': {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '33%': { transform: 'translate(10vw, -12vh) scale(1.08)' },
              '66%': { transform: 'translate(-8vw, -5vh) scale(1.12)' },
            },
          }}
        />
      </MotionBox>

      {/* Grid pattern overlay */}
      <MotionBox
        position="absolute"
        inset={0}
        opacity={0.03}
        bgImage="linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
        bgSize="60px 60px"
        pointerEvents="none"
        style={{ y: gridY }}
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <MotionBox style={{ y: contentY }}>
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
              <MagneticButton>
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
                    boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)',
                  }}
                  transition="all 0.3s"
                  rightIcon={<FiArrowRight />}
                >
                  Demarrer un projet
                </Button>
              </MagneticButton>
              <MagneticButton>
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
              </MagneticButton>
            </HStack>
          </MotionBox>
        </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
