'use client'

import { Box, Container, SimpleGrid, VStack, Text, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiFirebase,
  SiOpenai,
  SiVercel,
  SiFigma,
} from 'react-icons/si'
import { colors } from '@/lib/colors'
import SectionHeading from '../shared/SectionHeading'
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'
import { useLocale } from '@/i18n/LocaleContext'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

const technologies = [
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
  { icon: SiReact, name: 'React / Native', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiSupabase, name: 'Supabase', color: '#3FCF8E' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiOpenai, name: 'OpenAI', color: '#FFFFFF' },
  { icon: SiVercel, name: 'Vercel', color: '#FFFFFF' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
]

export default function TechStack() {
  const { ref, isInView } = useScrollAnimation()
  const { dict } = useLocale()

  return (
    <Box as="section" py={24} bg={colors.bg.body}>
      <Container maxW="1200px">
        <SectionHeading
          label={dict.techStack.label}
          title={dict.techStack.title}
          gradientWord={dict.techStack.gradientWord}
          subtitle={dict.techStack.subtitle}
        />

        <MotionSimpleGrid
          ref={ref}
          columns={{ base: 3, sm: 4, md: 6 }}
          spacing={6}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {technologies.map((tech) => (
            <MotionBox key={tech.name} variants={fadeInUp}>
              <VStack
                p={6}
                bg={colors.bg.card}
                borderRadius="xl"
                border="1px solid"
                borderColor={colors.border.subtle}
                spacing={3}
                _hover={{
                  borderColor: colors.border.hover,
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s"
                cursor="default"
              >
                <Box as={tech.icon} size="32px" color={tech.color} />
                <Text fontSize="xs" color={colors.text.tertiary} fontWeight="500" textAlign="center">
                  {tech.name}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}
