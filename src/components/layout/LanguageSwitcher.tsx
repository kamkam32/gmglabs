'use client'

import { Button, HStack, Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { useLocale } from '@/i18n/LocaleContext'
import { colors } from '@/lib/colors'

export default function LanguageSwitcher() {
  const { locale } = useLocale()
  const pathname = usePathname()

  // Compute the target path for switching locale
  const switchPath = () => {
    if (locale === 'fr') {
      // Currently FR, switch to EN: add /en prefix
      return `/en${pathname}`
    } else {
      // Currently EN, switch to FR: remove /en prefix
      return pathname.replace(/^\/en/, '') || '/'
    }
  }

  return (
    <HStack spacing={0}>
      <Button
        as="a"
        href={locale === 'fr' ? switchPath() : switchPath()}
        size="xs"
        variant="ghost"
        color={locale === 'fr' ? 'white' : colors.text.tertiary}
        fontWeight={locale === 'fr' ? '700' : '400'}
        fontSize="xs"
        px={2}
        minW="auto"
        _hover={{ color: 'white' }}
        borderRadius="md"
      >
        FR
      </Button>
      <Text fontSize="xs" color={colors.text.tertiary} userSelect="none">/</Text>
      <Button
        as="a"
        href={locale === 'en' ? switchPath() : switchPath()}
        size="xs"
        variant="ghost"
        color={locale === 'en' ? 'white' : colors.text.tertiary}
        fontWeight={locale === 'en' ? '700' : '400'}
        fontSize="xs"
        px={2}
        minW="auto"
        _hover={{ color: 'white' }}
        borderRadius="md"
      >
        EN
      </Button>
    </HStack>
  )
}
