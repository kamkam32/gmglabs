'use client'

import { Box, Heading, Text, VStack, HStack, Badge } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { colors } from '@/lib/colors'
import { useTiltEffect } from '@/hooks/useTiltEffect'
import type { Project } from '@/lib/projects'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

const categoryColors: Record<string, string> = {
  web: colors.services.web,
  mobile: colors.services.mobile,
  ia: colors.services.ia,
  'web+mobile': colors.services.web,
  'web+ia': colors.services.ia,
}

const categoryLabels: Record<string, string> = {
  web: 'Web',
  mobile: 'Mobile',
  ia: 'IA',
  'web+mobile': 'Web + Mobile',
  'web+ia': 'Web + IA',
}

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, dict } = useLocale()
  const accent = categoryColors[project.category] || colors.accent.cyan
  const tiltRef = useTiltEffect<HTMLDivElement>({
    maxTilt: 8,
    glowColor: `${accent}25`,
  })

  return (
    <Link href={localePath(`/realisations/${project.slug}`, locale)}>
      <Box
        ref={tiltRef}
        bg={colors.bg.card}
        border="1px solid"
        borderColor={colors.border.subtle}
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        _hover={{
          borderColor: `${accent}50`,
        }}
        transition="border-color 0.3s"
        h="full"
      >
        {/* Image */}
        <Box
          h="200px"
          bg={project.images[0]?.endsWith('.jpg') ? 'white' : colors.bg.elevated}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          p={6}
        >
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              width={300}
              height={180}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
            />
          ) : (
            <Text fontSize="4xl" fontWeight="800" color={`${accent}30`}>
              {project.title.charAt(0)}
            </Text>
          )}
          {project.featured && (
            <Badge
              position="absolute"
              top={4}
              right={4}
              bgGradient={colors.accent.gradient}
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="700"
            >
              {dict.portfolio.featured}
            </Badge>
          )}
        </Box>

        <VStack align="flex-start" spacing={3} p={6}>
          <HStack spacing={2}>
            <Badge
              bg={`${accent}15`}
              color={accent}
              px={2.5}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="600"
            >
              {categoryLabels[project.category]}
            </Badge>
            <Text fontSize="xs" color={colors.text.tertiary}>
              {project.year}
            </Text>
          </HStack>
          <Heading as="h3" fontSize="lg" fontWeight="700" color="white" noOfLines={1}>
            {project.title}
          </Heading>
          <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.6" noOfLines={2}>
            {project.shortDescription}
          </Text>
          <HStack flexWrap="wrap" gap={1.5} pt={1}>
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                bg={colors.bg.elevated}
                color={colors.text.tertiary}
                px={2}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge bg={colors.bg.elevated} color={colors.text.tertiary} px={2} py={0.5} borderRadius="full" fontSize="xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </HStack>
        </VStack>
      </Box>
    </Link>
  )
}
