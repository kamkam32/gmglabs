'use client'

import { Text, TextProps } from '@chakra-ui/react'

interface GradientTextProps extends TextProps {
  gradient?: string
}

export default function GradientText({
  gradient = 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
  children,
  ...props
}: GradientTextProps) {
  return (
    <Text
      as="span"
      bgGradient={gradient}
      bgClip="text"
      {...props}
    >
      {children}
    </Text>
  )
}
