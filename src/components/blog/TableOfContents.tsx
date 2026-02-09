'use client'

import { Box, Text, VStack } from '@chakra-ui/react'
import { colors } from '@/lib/colors'
import type { Heading } from '@/lib/blog'

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null

  return (
    <Box
      position="sticky"
      top="100px"
      bg={colors.bg.card}
      border="1px solid"
      borderColor={colors.border.subtle}
      borderRadius="2xl"
      p={6}
    >
      <Text fontSize="sm" fontWeight="700" color="white" mb={4} textTransform="uppercase" letterSpacing="0.5px">
        Sommaire
      </Text>
      <VStack align="flex-start" spacing={2}>
        {headings.map((heading) => (
          <Box
            key={heading.id}
            as="a"
            href={`#${heading.id}`}
            fontSize="sm"
            color={colors.text.tertiary}
            _hover={{ color: colors.accent.cyan }}
            transition="color 0.2s"
            lineHeight="1.5"
          >
            {heading.text}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
