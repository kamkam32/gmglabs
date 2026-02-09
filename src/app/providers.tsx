'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/lib/theme'
import CustomCursor from '@/components/shared/CustomCursor'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <CustomCursor />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}
