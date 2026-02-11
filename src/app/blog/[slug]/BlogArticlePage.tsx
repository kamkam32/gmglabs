'use client'

import { Box, Container, Heading, Text, VStack, HStack, Badge, Flex } from '@chakra-ui/react'
import { FiArrowLeft, FiClock, FiUser, FiInfo } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TableOfContents from '@/components/blog/TableOfContents'
import CallToActionBox from '@/components/blog/CallToActionBox'
import { colors } from '@/lib/colors'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '@/lib/blog'

export default function BlogArticlePage({ post }: { post: BlogPost }) {
  const { locale, dict } = useLocale()
  const dateLocale = locale === 'en' ? 'en-US' : 'fr-FR'

  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        {/* Header */}
        <Box py={{ base: 16, md: 24 }} bg={colors.bg.body} position="relative" overflow="hidden">
          <Box
            position="absolute"
            top="-20%"
            left="50%"
            transform="translateX(-50%)"
            w="100%"
            h="100%"
            bgGradient={colors.accent.gradientRadial}
            pointerEvents="none"
          />
          <Container maxW="800px" position="relative" zIndex={1}>
            <Link href={localePath('/blog', locale)}>
              <HStack spacing={2} color={colors.accent.cyan} mb={8} _hover={{ opacity: 0.8 }}>
                <FiArrowLeft />
                <Text fontSize="sm" fontWeight="500">{dict.blog.backToBlog}</Text>
              </HStack>
            </Link>

            <VStack align="flex-start" spacing={4}>
              <Badge bg={`${colors.accent.cyan}15`} color={colors.accent.cyan} px={3} py={1} borderRadius="full" fontSize="xs">
                {post.category}
              </Badge>
              <Heading as="h1" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="800" color="white" lineHeight="1.3">
                {post.title}
              </Heading>
              <HStack spacing={4} color={colors.text.tertiary} fontSize="sm">
                <HStack spacing={1}>
                  <FiUser size={14} />
                  <Text>{post.author}</Text>
                </HStack>
                <HStack spacing={1}>
                  <FiClock size={14} />
                  <Text>
                    {new Date(post.date).toLocaleDateString(dateLocale, {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Container>
        </Box>

        {/* Content */}
        <Box py={16} bg={colors.bg.section}>
          <Container maxW="1100px">
            <Flex gap={10} direction={{ base: 'column', lg: 'row' }}>
              {/* Article */}
              <Box flex={1} maxW={{ lg: '720px' }}>
                {/* French-only notice for EN locale */}
                {locale === 'en' && (dict.blog as Record<string, unknown>).frenchOnly && (
                  <Box
                    bg={`${colors.accent.cyan}10`}
                    border="1px solid"
                    borderColor={`${colors.accent.cyan}30`}
                    borderRadius="xl"
                    p={4}
                    mb={6}
                  >
                    <HStack spacing={3}>
                      <FiInfo size={18} color={colors.accent.cyan} />
                      <Text fontSize="sm" color={colors.text.secondary}>
                        {(dict.blog as Record<string, unknown>).frenchOnly as string}
                      </Text>
                    </HStack>
                  </Box>
                )}
                <Box
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <CallToActionBox />
              </Box>

              {/* Sidebar */}
              <Box
                w={{ base: 'full', lg: '280px' }}
                flexShrink={0}
                display={{ base: 'none', lg: 'block' }}
              >
                <TableOfContents headings={post.headings} />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
