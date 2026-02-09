'use client'

import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import { colors } from '@/lib/colors'

export default function CallToActionBox() {
  return (
    <Box
      bg={colors.bg.card}
      border="1px solid"
      borderColor={`${colors.accent.cyan}30`}
      borderRadius="2xl"
      p={8}
      my={10}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bgGradient={colors.accent.gradient}
      />
      <VStack spacing={4} textAlign="center">
        <Heading as="h3" fontSize="xl" color="white">
          Un projet en tete ?
        </Heading>
        <Text fontSize="sm" color={colors.text.secondary} maxW="400px">
          Discutons de votre idee. Premier appel de decouverte gratuit et sans engagement.
        </Text>
        <Button
          as={Link}
          href="/contact"
          bgGradient={colors.accent.gradient}
          color="white"
          borderRadius="full"
          px={6}
          fontWeight="600"
          _hover={{ opacity: 0.9 }}
          rightIcon={<FiArrowRight />}
        >
          Contactez-nous
        </Button>
      </VStack>
    </Box>
  )
}
