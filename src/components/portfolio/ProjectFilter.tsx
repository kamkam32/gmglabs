'use client'

import { HStack, Button } from '@chakra-ui/react'
import { colors } from '@/lib/colors'

const filters = [
  { key: 'all', label: 'Tous' },
  { key: 'web', label: 'Web', color: colors.services.web },
  { key: 'mobile', label: 'Mobile', color: colors.services.mobile },
  { key: 'ia', label: 'IA', color: colors.services.ia },
]

interface ProjectFilterProps {
  active: string
  onFilter: (key: string) => void
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <HStack spacing={3} flexWrap="wrap" justify="center" mb={12}>
      {filters.map((f) => (
        <Button
          key={f.key}
          size="sm"
          borderRadius="full"
          px={5}
          fontWeight="600"
          bg={active === f.key ? (f.color || colors.accent.cyan) : colors.bg.card}
          color={active === f.key ? 'white' : colors.text.secondary}
          border="1px solid"
          borderColor={active === f.key ? 'transparent' : colors.border.subtle}
          _hover={{
            bg: active === f.key ? (f.color || colors.accent.cyan) : colors.bg.elevated,
          }}
          onClick={() => onFilter(f.key)}
          transition="all 0.2s"
        >
          {f.label}
        </Button>
      ))}
    </HStack>
  )
}
