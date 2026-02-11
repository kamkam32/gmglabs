'use client'

import { useState } from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectCard from '@/components/portfolio/ProjectCard'
import ProjectFilter from '@/components/portfolio/ProjectFilter'
import GradientText from '@/components/shared/GradientText'
import CTASection from '@/components/home/CTASection'
import { colors } from '@/lib/colors'
import { projects } from '@/lib/projects'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function RealisationsPage() {
  const { locale, dict } = useLocale()
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || p.category.includes(filter))

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
                {dict.portfolio.heroTitle}<GradientText>{dict.portfolio.heroTitleGradient}</GradientText>
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                {dict.portfolio.heroSubtitle}
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Projects */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1200px">
            <ProjectFilter active={filter} onFilter={setFilter} />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <CTASection />
      </Box>
      <Footer />
    </Box>
  )
}
