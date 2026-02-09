'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { colors } from '@/lib/colors'

const MotionBox = motion(Box)

interface GlowCardProps extends BoxProps {
  glowColor?: string
  hoverScale?: number
}

export default function GlowCard({
  glowColor = colors.accent.cyan,
  hoverScale = 1.02,
  children,
  ...props
}: GlowCardProps) {
  return (
    <MotionBox
      bg={colors.bg.card}
      border="1px solid"
      borderColor={colors.border.subtle}
      borderRadius="2xl"
      p={8}
      position="relative"
      overflow="hidden"
      whileHover={{
        scale: hoverScale,
        borderColor: 'rgba(255,255,255,0.16)',
        boxShadow: `0 0 30px ${glowColor}33`,
      }}
      transition={{ duration: 0.3 }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        bgGradient: `linear(to-r, transparent, ${glowColor}, transparent)`,
        opacity: 0,
        transition: 'opacity 0.3s',
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}
