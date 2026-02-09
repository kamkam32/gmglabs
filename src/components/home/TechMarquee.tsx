'use client'

import { Box, HStack, Text } from '@chakra-ui/react'
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
  SiTailwindcss,
  SiStripe,
} from 'react-icons/si'
import { colors } from '@/lib/colors'

const techs = [
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
  { icon: SiReact, name: 'React Native', color: '#61DAFB' },
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
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const direction = reverse ? 'reverse' : 'normal'
  const duration = '35s'

  return (
    <Box overflow="hidden" position="relative" py={3}>
      {/* Fade edges */}
      <Box
        position="absolute"
        left={0}
        top={0}
        bottom={0}
        w="120px"
        bgGradient={`linear(to-r, ${colors.bg.body}, transparent)`}
        zIndex={1}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        w="120px"
        bgGradient={`linear(to-l, ${colors.bg.body}, transparent)`}
        zIndex={1}
        pointerEvents="none"
      />

      <HStack
        spacing={8}
        sx={{
          animation: `marquee ${duration} linear infinite ${direction}`,
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
        w="max-content"
      >
        {/* Double the items for seamless loop */}
        {[...techs, ...techs].map((tech, i) => (
          <HStack
            key={`${tech.name}-${i}`}
            spacing={3}
            px={5}
            py={3}
            bg={colors.bg.card}
            border="1px solid"
            borderColor={colors.border.subtle}
            borderRadius="full"
            flexShrink={0}
            _hover={{
              borderColor: `${tech.color}50`,
              bg: colors.bg.elevated,
            }}
            transition="all 0.3s"
            cursor="default"
          >
            <Box as={tech.icon} size="20px" color={tech.color} />
            <Text fontSize="sm" fontWeight="600" color={colors.text.secondary} whiteSpace="nowrap">
              {tech.name}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  )
}

export default function TechMarquee() {
  return (
    <Box as="section" py={16} bg={colors.bg.body}>
      <MarqueeRow />
      <MarqueeRow reverse />
    </Box>
  )
}
