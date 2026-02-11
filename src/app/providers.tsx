'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/lib/theme'
import CustomCursor from '@/components/shared/CustomCursor'
import { LocaleProvider } from '@/i18n/LocaleContext'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/getDictionary'

export function Providers({
  locale,
  dict,
  children,
}: {
  locale: Locale
  dict: Dictionary
  children: React.ReactNode
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <LocaleProvider locale={locale} dict={dict}>
            <CustomCursor />
            {children}
          </LocaleProvider>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}
