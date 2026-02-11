'use client'

import { HStack, Button } from '@chakra-ui/react'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

interface ProjectFilterProps {
  active: string
  onFilter: (key: string) => void
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  const { locale, dict } = useLocale()

  const filters = [
    { key: 'all', label: dict.portfolio.filterAll },
    { key: 'web', label: dict.portfolio.filterWeb, color: colors.services.web },
    { key: 'mobile', label: dict.portfolio.filterMobile, color: colors.services.mobile },
    { key: 'ia', label: dict.portfolio.filterIA, color: colors.services.ia },
  ]

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
