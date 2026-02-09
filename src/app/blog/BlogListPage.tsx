'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogCard from '@/components/blog/BlogCard'
import GradientText from '@/components/shared/GradientText'
import { colors } from '@/lib/colors'
import type { BlogPost } from '@/lib/blog'

export default function BlogListPage({ posts }: { posts: BlogPost[] }) {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        {/* Hero */}
        <Box py={{ base: 20, md: 28 }} bg={colors.bg.body} position="relative" overflow="hidden">
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
            <VStack spacing={6} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color="white"
                lineHeight="1.2"
              >
                Le <GradientText>blog</GradientText> GMG Labs
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={colors.text.secondary} lineHeight="1.8" maxW="600px">
                Articles, guides et retours d&apos;experience sur le developpement web, mobile et l&apos;intelligence artificielle !
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Posts */}
        <Box py={20} bg={colors.bg.section}>
          <Container maxW="1200px">
            {posts.length === 0 ? (
              <VStack py={20} spacing={4}>
                <Text fontSize="lg" color={colors.text.secondary}>
                  Aucun article pour le moment.
                </Text>
                <Text fontSize="sm" color={colors.text.tertiary}>
                  Revenez bientot, nous preparons du contenu de qualite !
                </Text>
              </VStack>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </SimpleGrid>
            )}
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
