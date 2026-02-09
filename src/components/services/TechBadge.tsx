'use client'

import { Badge } from '@chakra-ui/react'
import { colors } from '@/lib/colors'

interface TechBadgeProps {
  name: string
  accentColor?: string
}

export default function TechBadge({ name, accentColor = colors.accent.cyan }: TechBadgeProps) {
  return (
    <Badge
      bg={`${accentColor}10`}
      color={accentColor}
      border="1px solid"
      borderColor={`${accentColor}30`}
      px={3}
      py={1.5}
      borderRadius="full"
      fontSize="xs"
      fontWeight="600"
    >
      {name}
    </Badge>
  )
}
