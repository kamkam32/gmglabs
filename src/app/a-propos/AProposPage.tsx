'use client'

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
import { motion } from 'framer-motion'
import { FiTarget, FiHeart, FiZap, FiUsers, FiExternalLink, FiLinkedin } from 'react-icons/fi'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GradientText from '@/components/shared/GradientText'
import CTASection from '@/components/home/CTASection'
import { colors } from '@/lib/colors'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)

const cofounders = [
  {
    name: 'Kamil Alami',
    role: 'Co-fondateur – Product & Tech',
    description: 'Product Manager avec une double expertise finance & tech. +5 ans d\'experience dans la conception de solutions digitales innovantes. Pilote le cycle de vie produit de bout en bout, de la strategie a la livraison.',
    expertise: ['Product Management', 'UX/UI', 'IA & RAG', 'Agile/Scrum'],
    formation: 'ESCP Europe – MS International Wealth Management',
  },
  {
    name: 'Oualid Tebib',
    role: 'Co-fondateur – Performance IT & Strategie Digitale',
    description: 'Consultant en strategie digitale et IT avec 8 ans d\'experience dans l\'accompagnement de grands groupes (BNP, ENGIE, Saint-Gobain) dans leurs projets de transformation. Expert en performance applicative et architecture IT.',
    expertise: ['Neoload', 'Dynatrace / AppDynamics', 'Tests de charge', 'Architecture IT'],
    formation: 'Paris-Dauphine – Master MIAGE-IF',
  },
  {
    name: 'Mehdi Essakalli',
    role: 'Co-fondateur – Data & Strategie',
    description: 'Profil strategie et data avec une experience chez MFG Labs (Big Data) et en tant que bras droit de Gilles Babinet, Digital Champion de la France. Expertise en blockchain, IA et transformation digitale aupres de grands comptes du CAC 40.',
    expertise: ['Data & Big Data', 'Blockchain', 'Strategie digitale', 'IA & Automatisation'],
    formation: 'Sciences-Po Paris x LSE – Finance & Strategie',
  },
]

const values = [
  { icon: FiTarget, title: 'Excellence', description: 'Chaque ligne de code est ecrite avec soin. Nous ne livrons que des produits dont nous sommes fiers.' },
  { icon: FiHeart, title: 'Passion', description: 'Nous aimons ce que nous faisons. Cette passion se reflete dans la qualite de chaque projet.' },
  { icon: FiZap, title: 'Innovation', description: 'Nous restons a la pointe de la technologie pour offrir les meilleures solutions a nos clients.' },
  { icon: FiUsers, title: 'Partenariat', description: 'Nous ne sommes pas un prestataire, mais un partenaire. Votre succes est notre succes.' },
]

const timeline = [
  { year: '2025', title: 'Creation de GMG Labs', description: 'Fondation de l\'agence a Casablanca avec une vision claire : creer des produits digitaux de classe mondiale.' },
  { year: '2025', title: 'Lancement d\'Ello', description: 'Developpement et lancement de notre produit phare : Ello, la plateforme de reservation beaute #1 au Maroc.' },
  { year: '2025', title: 'Messidor Patrimoine', description: 'Conception du dashboard financier pour Messidor Patrimoine : suivi OPCVM, OPCI et simulateur d\'investissement.' },
]

export default function AProposPage() {
  const { ref: valRef, isInView: valInView } = useScrollAnimation()
  const { ref: teamRef, isInView: teamInView } = useScrollAnimation()
  const { ref: timeRef, isInView: timeInView } = useScrollAnimation()

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
                L&apos;equipe derriere <GradientText>GMG Labs</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                GMG Labs est une agence tech premium basee a Casablanca. Nous construisons des produits
                digitaux qui font la difference pour les entreprises marocaines et au-dela.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  as="a"
                  href="https://gmg-labs.com/"
                  target="_blank"
                  bgGradient={colors.accent.gradient}
                  color="white"
                  borderRadius="full"
                  px={6}
                  fontWeight="600"
                  _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                  transition="all 0.3s"
                  rightIcon={<FiExternalLink />}
                >
                  GMG Labs
                </Button>
                <Button
                  as="a"
                  href="https://www.ello.ma"
                  target="_blank"
                  variant="outline"
                  borderColor={colors.accent.cyan}
                  color={colors.accent.cyan}
                  borderRadius="full"
                  px={6}
                  _hover={{ bg: `rgba(0, 212, 255, 0.1)` }}
                  rightIcon={<FiExternalLink />}
                >
                  Decouvrir Ello
                </Button>
              </HStack>
            </VStack>
          </Container>
        </Box>

        {/* Story */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="800px">
            <VStack spacing={6} textAlign="center">
              <Heading as="h2" fontSize="2xl" color="white">
                Notre histoire
              </Heading>
              <Text color={colors.text.secondary} lineHeight="1.8">
                GMG Labs est ne d&apos;un constat simple : le Maroc regorge de talents tech, mais manque
                d&apos;agences capables de delivrer des produits au niveau des standards internationaux.
                Nous avons decide de changer cela.
              </Text>
              <Text color={colors.text.secondary} lineHeight="1.8">
                Notre premier grand projet, Ello, est devenu la plateforme de reservation beaute de
                reference au Maroc. Cette reussite nous a convaincu que nous pouvions reproduire
                ce niveau d&apos;excellence pour d&apos;autres entreprises.
              </Text>
              <Text color={colors.text.secondary} lineHeight="1.8">
                Aujourd&apos;hui, nous accompagnons startups et grandes entreprises dans leur transformation
                digitale avec quatre poles d&apos;expertise : Web, Mobile, Intelligence Artificielle et Performance IT.
                Retrouvez-nous sur{' '}
                <Text as="a" href="https://gmg-labs.com/" target="_blank" color={colors.accent.cyan} fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                  gmg-labs.com
                </Text>.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Cofounders */}
        <Box py={20} bg={colors.bg.body}>
          <Container maxW="1100px">
            <Heading as="h2" fontSize="2xl" color="white" textAlign="center" mb={4}>
              Les cofondateurs
            </Heading>
            <Text fontSize="md" color={colors.text.secondary} textAlign="center" mb={12} maxW="600px" mx="auto">
              Trois profils complementaires unissant strategie, technologie et performance.
            </Text>
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
                  <Box
                    p={8}
                    bg={colors.bg.card}
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={colors.border.subtle}
                    _hover={{ borderColor: colors.border.hover }}
                    transition="border-color 0.3s"
                    h="full"
                    display="flex"
                    flexDirection="column"
                  >
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
                  </Box>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        {/* Values */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1000px">
            <Heading as="h2" fontSize="2xl" color="white" textAlign="center" mb={12}>
              Nos valeurs
            </Heading>
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
                  <HStack
                    align="flex-start"
                    spacing={5}
                    p={8}
                    bg={colors.bg.card}
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={colors.border.subtle}
                    _hover={{ borderColor: colors.border.hover }}
                    transition="border-color 0.3s"
                  >
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
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Container>
        </Box>

        {/* Timeline */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="700px">
            <Heading as="h2" fontSize="2xl" color="white" textAlign="center" mb={12}>
              Notre parcours
            </Heading>
            <VStack ref={timeRef} spacing={0} align="stretch" position="relative">
              <Box
                position="absolute"
                left={{ base: '20px', md: '24px' }}
                top={0}
                bottom={0}
                w="2px"
                bgGradient={colors.accent.gradient}
                opacity={0.3}
              />
              {timeline.map((item, idx) => (
                <MotionBox
                  key={item.year}
                  initial="hidden"
                  animate={timeInView ? 'visible' : 'hidden'}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  pl={{ base: '50px', md: '60px' }}
                  pb={10}
                  position="relative"
                >
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
