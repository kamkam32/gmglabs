'use client'

import { Box, Heading, Text, VStack, HStack, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import { colors } from '@/lib/colors'
import type { BlogPost } from '@/lib/blog'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function BlogCard({ post }: { post: BlogPost }) {
  const { locale, dict } = useLocale()

  return (
    <Link href={localePath(`/blog/${post.slug}`, locale)}>
      <Box
        bg={colors.bg.card}
        border="1px solid"
        borderColor={colors.border.subtle}
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        _hover={{
          borderColor: colors.border.hover,
          boxShadow: `0 0 30px ${colors.accent.cyan}10`,
          transform: 'translateY(-4px)',
        }}
        transition="all 0.3s"
        h="full"
      >
        <Box
          h="180px"
          bgGradient={`linear(135deg, ${colors.accent.cyan}10, ${colors.accent.violet}10)`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="5xl" opacity={0.1}>
            {post.category === 'Tech' ? '{ }' : post.category === 'IA' ? 'AI' : 'Web'}
          </Text>
        </Box>
        <VStack align="flex-start" spacing={3} p={6}>
          <HStack spacing={2}>
            <Badge
              bg={`${colors.accent.cyan}15`}
              color={colors.accent.cyan}
              px={2.5}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="600"
            >
              {post.category}
            </Badge>
            <Text fontSize="xs" color={colors.text.tertiary}>
              {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </Text>
          </HStack>
          <Heading as="h3" fontSize="lg" fontWeight="700" color="white" noOfLines={2} lineHeight="1.4">
            {post.title}
          </Heading>
          <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.6" noOfLines={3}>
            {post.excerpt}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}
