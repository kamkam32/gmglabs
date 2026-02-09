'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation'
import GradientText from './GradientText'

const MotionVStack = motion(VStack)

interface SectionHeadingProps {
  label?: string
  title: string
  gradientWord?: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({
  label,
  title,
  gradientWord,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, isInView } = useScrollAnimation()

  const renderTitle = () => {
    if (!gradientWord) return title
    const parts = title.split(gradientWord)
    return (
      <>
        {parts[0]}
        <GradientText>{gradientWord}</GradientText>
        {parts[1] || ''}
      </>
    )
  }

  return (
    <MotionVStack
      ref={ref}
      spacing={4}
      align={align}
      textAlign={align}
      mb={16}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      {label && (
        <Box
          px={4}
          py={1.5}
          borderRadius="full"
          border="1px solid"
          borderColor="rgba(0, 212, 255, 0.3)"
          bg="rgba(0, 212, 255, 0.05)"
        >
          <Text
            fontSize="sm"
            fontWeight="600"
            color="brand.500"
            letterSpacing="0.5px"
            textTransform="uppercase"
          >
            {label}
          </Text>
        </Box>
      )}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
        fontWeight="bold"
        color="white"
        lineHeight="1.2"
      >
        {renderTitle()}
      </Heading>
      {subtitle && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.400"
          maxW="600px"
          lineHeight="1.7"
        >
          {subtitle}
        </Text>
      )}
    </MotionVStack>
  )
}
