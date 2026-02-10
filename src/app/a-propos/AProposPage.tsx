'use client'

import { useRef } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiTarget, FiHeart, FiZap, FiUsers, FiExternalLink } from 'react-icons/fi'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GradientText from '@/components/shared/GradientText'
import GlowCard from '@/components/shared/GlowCard'
import SectionHeading from '@/components/shared/SectionHeading'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import CTASection from '@/components/home/CTASection'
import { colors } from '@/lib/colors'
import { useMagnetic } from '@/hooks/useMagnetic'
import {
  useScrollAnimation,
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from '@/hooks/useScrollAnimation'

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

function MagneticButton({ children }: { children: React.ReactNode }) {
  const magneticRef = useMagnetic<HTMLDivElement>(0.3)
  return (
    <Box ref={magneticRef} display="inline-block">
      {children}
    </Box>
  )
}

const cofounders = [
  {
    name: 'Kamil Alami',
    role: 'Co-fondateur – Product Builder',
    description: 'Profil Product Builder avec +5 ans d\'expérience en conception de produits digitaux. De la stratégie produit au développement, en passant par le design UX et le go-to-market. Expertise en IA générative et méthodologies agiles.',
    expertise: ['Product Strategy', 'UX/UI Design', 'Full-stack Dev', 'IA & RAG'],
    formation: 'ESCP Europe / NEOMA Business School',
  },
  {
    name: 'Oualid Tebib',
    role: 'Co-fondateur – Performance IT & Stratégie Digitale',
    description: 'Consultant en stratégie digitale et IT avec 8 ans d\'expérience dans l\'accompagnement de grands groupes (BNP, ENGIE, Saint-Gobain) dans leurs projets de transformation. Expert en performance applicative et architecture IT.',
    expertise: ['Neoload', 'Dynatrace / AppDynamics', 'Tests de charge', 'Architecture IT'],
    formation: 'Paris-Dauphine – Master MIAGE-IF',
  },
  {
    name: 'Mehdi Essakalli',
    role: 'Co-fondateur – Data & Stratégie',
    description: 'Profil stratégie et data avec une expérience en R&D Big Data (MFG Labs) et en conseil en transformation digitale auprès de l\'État et de grands comptes du CAC 40. Expertise en blockchain, IA et automatisation.',
    expertise: ['Data & Big Data', 'Blockchain', 'UX/UI Design', 'IA & Automatisation'],
    formation: 'Sciences-Po Paris x LSE – Finance & Stratégie',
  },
]

const values = [
  { icon: FiTarget, title: 'Excellence', description: 'Chaque ligne de code est écrite avec soin. Nous ne livrons que des produits dont nous sommes fiers.' },
  { icon: FiHeart, title: 'Passion', description: 'Nous aimons ce que nous faisons. Cette passion se reflète dans la qualité de chaque projet.' },
  { icon: FiZap, title: 'Innovation', description: 'Nous restons à la pointe de la technologie pour offrir les meilleures solutions à nos clients.' },
  { icon: FiUsers, title: 'Partenariat', description: 'Nous ne sommes pas un prestataire, mais un partenaire. Votre succès est notre succès.' },
]

const stats = [
  { target: 20, suffix: '+', label: "Ans d'expérience cumulée" },
  { target: 3, suffix: '', label: 'Cofondateurs' },
  { target: 15, suffix: '+', label: 'Projets livrés' },
  { target: 4, suffix: '', label: "Pôles d'expertise" },
]

const timeline = [
  { year: '2025', title: 'Création de GMG Labs', description: 'Fondation de l\'agence à Casablanca avec une vision claire : créer des produits digitaux de classe mondiale.' },
  { year: '2025', title: 'Lancement d\'Ello', description: 'Développement et lancement de notre produit phare : Ello, la plateforme de réservation beauté #1 au Maroc.' },
  { year: '2025', title: 'Messidor Patrimoine', description: 'Conception du dashboard financier pour Messidor Patrimoine : suivi OPCVM, OPCI et simulateur d\'investissement.' },
]

export default function AProposPage() {
  const { ref: valRef, isInView: valInView } = useScrollAnimation()
  const { ref: teamRef, isInView: teamInView } = useScrollAnimation()
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation()

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const gridY = useTransform(heroScroll, [0, 1], [0, 150])
  const blobY = useTransform(heroScroll, [0, 1], [0, 80])
  const contentY = useTransform(heroScroll, [0, 1], [0, 60])

  // Timeline animated line
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  })
  const lineScaleY = useTransform(timelineScroll, [0, 1], [0, 1])

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        {/* ════════ Hero ════════ */}
        <Box
          ref={heroRef}
          py={{ base: 20, md: 28 }}
          bg={colors.bg.body}
          position="relative"
          overflow="hidden"
        >
          {/* Aurora blobs */}
          <MotionBox
            position="absolute"
            inset={0}
            pointerEvents="none"
            zIndex={0}
            style={{ y: blobY }}
            overflow="hidden"
          >
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
                animation: 'aProposBlob1 18s ease-in-out infinite',
                '@keyframes aProposBlob1': {
                  '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                  '33%': { transform: 'translate(12vw, 8vh) scale(1.15)' },
                  '66%': { transform: 'translate(-5vw, 15vh) scale(0.9)' },
                },
              }}
            />
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
                animation: 'aProposBlob2 22s ease-in-out infinite',
                '@keyframes aProposBlob2': {
                  '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                  '33%': { transform: 'translate(-15vw, 5vh) scale(1.1)' },
                  '66%': { transform: 'translate(-8vw, -10vh) scale(0.95)' },
                },
              }}
            />
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
                animation: 'aProposBlob3 25s ease-in-out infinite',
                '@keyframes aProposBlob3': {
                  '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                  '33%': { transform: 'translate(10vw, -12vh) scale(1.08)' },
                  '66%': { transform: 'translate(-8vw, -5vh) scale(1.12)' },
                },
              }}
            />
          </MotionBox>

          {/* Grid pattern overlay with parallax */}
          <MotionBox
            position="absolute"
            inset={0}
            opacity={0.03}
            bgImage="linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
            bgSize="60px 60px"
            pointerEvents="none"
            style={{ y: gridY }}
          />

          <Container maxW="800px" position="relative" zIndex={1}>
            <MotionBox style={{ y: contentY }}>
              <VStack spacing={6} textAlign="center">
                <MotionHeading
                  as="h1"
                  fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                  fontWeight="800"
                  color="white"
                  lineHeight="1.2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  L&apos;équipe derrière <GradientText>GMG Labs</GradientText>
                </MotionHeading>
                <MotionText
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={colors.text.secondary}
                  lineHeight="1.8"
                  maxW="600px"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  GMG Labs est une agence tech premium basée à Casablanca. Nous construisons des produits
                  digitaux qui font la différence pour les entreprises marocaines et au-delà.
                </MotionText>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <HStack spacing={4} flexWrap="wrap" justify="center">
                    <MagneticButton>
                      <Button
                        as="a"
                        href="https://gmg-labs.com/"
                        target="_blank"
                        bgGradient={colors.accent.gradient}
                        color="white"
                        borderRadius="full"
                        px={6}
                        fontWeight="600"
                        _hover={{ opacity: 0.9, transform: 'translateY(-2px)', boxShadow: '0 10px 40px rgba(0, 212, 255, 0.3)' }}
                        transition="all 0.3s"
                        rightIcon={<FiExternalLink />}
                      >
                        GMG Labs
                      </Button>
                    </MagneticButton>
                    <MagneticButton>
                      <Button
                        as="a"
                        href="https://www.ello.ma"
                        target="_blank"
                        variant="outline"
                        borderColor={colors.accent.cyan}
                        color={colors.accent.cyan}
                        borderRadius="full"
                        px={6}
                        _hover={{ bg: 'rgba(0, 212, 255, 0.1)', borderColor: colors.accent.cyan }}
                        rightIcon={<FiExternalLink />}
                      >
                        Découvrir Ello
                      </Button>
                    </MagneticButton>
                  </HStack>
                </MotionBox>
              </VStack>
            </MotionBox>
          </Container>
        </Box>

        {/* ════════ Story ════════ */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="800px">
            <SectionHeading
              label="Notre histoire"
              title="Comment tout a commencé"
              gradientWord="commencé"
            />
            <VStack spacing={6} textAlign="center">
              <MotionText
                color={colors.text.secondary}
                lineHeight="1.8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeInUp}
              >
                GMG Labs est né d&apos;un constat simple : le Maroc regorge de talents tech, mais manque
                d&apos;agences capables de délivrer des produits au niveau des standards internationaux.
                Nous avons décidé de changer cela.
              </MotionText>
              <MotionText
                color={colors.text.secondary}
                lineHeight="1.8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeInUp}
              >
                Notre premier grand projet, Ello, est devenu la plateforme de réservation beauté de
                référence au Maroc. Cette réussite nous a convaincu que nous pouvions reproduire
                ce niveau d&apos;excellence pour d&apos;autres entreprises.
              </MotionText>
              <MotionText
                color={colors.text.secondary}
                lineHeight="1.8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeInUp}
              >
                Aujourd&apos;hui, nous accompagnons startups et grandes entreprises dans leur transformation
                digitale avec quatre pôles d&apos;expertise : Web, Mobile, Intelligence Artificielle et Performance IT.
                Retrouvez-nous sur{' '}
                <Text as="a" href="https://gmg-labs.com/" target="_blank" color={colors.accent.cyan} fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                  gmg-labs.com
                </Text>.
              </MotionText>
            </VStack>
          </Container>
        </Box>

        {/* ════════ Cofounders ════════ */}
        <Box py={20} bg={colors.bg.body}>
          <Container maxW="1100px">
            <SectionHeading
              label="L'équipe"
              title="Les cofondateurs"
              gradientWord="cofondateurs"
              subtitle="Trois profils complémentaires unissant stratégie, technologie et performance."
            />
            <MotionSimpleGrid
              ref={teamRef}
              columns={{ base: 1, lg: 3 }}
              spacing={8}
              initial="hidden"
              animate={teamInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              {cofounders.map((person) => (
                <MotionBox key={person.name} variants={fadeInUp}>
                  <GlowCard enableTilt glowColor={colors.accent.cyan} h="full" display="flex" flexDirection="column">
                    <VStack align="flex-start" spacing={4} flex={1}>
                      <Box>
                        <Heading as="h3" fontSize="lg" color="white" mb={1}>
                          {person.name}
                        </Heading>
                        <Text fontSize="sm" fontWeight="600" color={colors.accent.cyan}>
                          {person.role}
                        </Text>
                      </Box>
                      <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7" flex={1}>
                        {person.description}
                      </Text>
                      <Text fontSize="xs" color={colors.text.tertiary} fontStyle="italic">
                        {person.formation}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {person.expertise.map((skill) => (
                          <Box
                            key={skill}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg={`${colors.accent.cyan}10`}
                            border="1px solid"
                            borderColor={`${colors.accent.cyan}30`}
                          >
                            <Text fontSize="xs" color={colors.accent.cyan} fontWeight="500">
                              {skill}
                            </Text>
                          </Box>
                        ))}
                      </HStack>
                    </VStack>
                  </GlowCard>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        {/* ════════ Stats ════════ */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1000px">
            <SectionHeading
              label="En chiffres"
              title="GMG Labs en quelques chiffres"
              gradientWord="chiffres"
            />
            <MotionSimpleGrid
              ref={statsRef}
              columns={{ base: 2, md: 4 }}
              spacing={6}
              initial="hidden"
              animate={statsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <MotionBox key={stat.label} variants={fadeInUp}>
                  <GlowCard
                    glowColor={colors.accent.violet}
                    textAlign="center"
                    py={10}
                    px={4}
                  >
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      fontSize={{ base: '3xl', md: '4xl' }}
                      fontWeight="800"
                      bgGradient={colors.accent.gradient}
                      bgClip="text"
                      mb={2}
                    />
                    <Text fontSize="sm" color={colors.text.secondary} fontWeight="500">
                      {stat.label}
                    </Text>
                  </GlowCard>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        {/* ════════ Values ════════ */}
        <Box py={20} bg={colors.bg.body}>
          <Container maxW="1000px">
            <SectionHeading
              label="Nos principes"
              title="Nos valeurs fondatrices"
              gradientWord="valeurs"
            />
            <MotionSimpleGrid
              ref={valRef}
              columns={{ base: 1, md: 2 }}
              spacing={8}
              initial="hidden"
              animate={valInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              {values.map((v) => (
                <MotionBox key={v.title} variants={fadeInUp}>
                  <GlowCard glowColor={colors.accent.cyan}>
                    <HStack align="flex-start" spacing={5}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg={`${colors.accent.cyan}10`}
                        flexShrink={0}
                      >
                        <Box as={v.icon} size="24px" color={colors.accent.cyan} />
                      </Box>
                      <VStack align="flex-start" spacing={2}>
                        <Heading as="h3" fontSize="md" color="white">
                          {v.title}
                        </Heading>
                        <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
                          {v.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </GlowCard>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        {/* ════════ Timeline ════════ */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="700px">
            <SectionHeading
              label="Notre parcours"
              title="Les étapes clés"
              gradientWord="étapes clés"
            />
            <VStack ref={timelineRef} spacing={0} align="stretch" position="relative">
              {/* Animated line that draws on scroll */}
              <MotionBox
                position="absolute"
                left={{ base: '20px', md: '24px' }}
                top={0}
                bottom={0}
                w="2px"
                bgGradient={colors.accent.gradient}
                style={{
                  scaleY: lineScaleY,
                  transformOrigin: 'top',
                }}
              />
              {/* Static faded line behind */}
              <Box
                position="absolute"
                left={{ base: '20px', md: '24px' }}
                top={0}
                bottom={0}
                w="2px"
                bgGradient={colors.accent.gradient}
                opacity={0.1}
              />
              {timeline.map((item, idx) => (
                <MotionBox
                  key={`${item.year}-${item.title}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={idx % 2 === 0 ? slideInLeft : slideInRight}
                  pl={{ base: '50px', md: '60px' }}
                  pb={10}
                  position="relative"
                >
                  {/* Pulsing dot */}
                  <Box
                    position="absolute"
                    left={{ base: '14px', md: '18px' }}
                    top="4px"
                    w="14px"
                    h="14px"
                    borderRadius="full"
                    bgGradient={colors.accent.gradient}
                    border="3px solid"
                    borderColor={colors.bg.section}
                    sx={{
                      animation: 'dotPulse 2.5s ease-in-out infinite',
                      '@keyframes dotPulse': {
                        '0%, 100%': { boxShadow: `0 0 0 0 rgba(0, 212, 255, 0.4)` },
                        '50%': { boxShadow: `0 0 0 8px rgba(0, 212, 255, 0)` },
                      },
                    }}
                  />
                  <Text fontSize="sm" fontWeight="700" color={colors.accent.cyan} mb={1}>
                    {item.year}
                  </Text>
                  <Heading as="h3" fontSize="md" color="white" mb={2}>
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
                    {item.description}
                  </Text>
                </MotionBox>
              ))}
            </VStack>
          </Container>
        </Box>

        <CTASection />
      </Box>
      <Footer />
    </Box>
  )
}
