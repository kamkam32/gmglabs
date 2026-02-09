'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import GradientText from './GradientText'

const MotionVStack = motion(VStack)
const MotionBox = motion(Box)

interface SectionHeadingProps {
  label?: string
  title: string
  gradientWord?: string
  subtitle?: string
  align?: 'center' | 'left'
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function AnimatedTitle({ title, gradientWord }: { title: string; gradientWord?: string }) {
  const words = title.split(' ')

  // Find which word indices belong to the gradient word
  let gradientStart = -1
  let gradientEnd = -1
  if (gradientWord) {
    const gradientWords = gradientWord.split(' ')
    for (let i = 0; i <= words.length - gradientWords.length; i++) {
      if (words.slice(i, i + gradientWords.length).join(' ') === gradientWord) {
        gradientStart = i
        gradientEnd = i + gradientWords.length - 1
        break
      }
    }
  }

  return (
    <Heading
      as="h2"
      fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
      fontWeight="bold"
      color="white"
      lineHeight="1.2"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="0.3em"
    >
      {words.map((word, i) => {
        const isGradient = i >= gradientStart && i <= gradientEnd
        return (
          <MotionBox
            key={i}
            as="span"
            display="inline-block"
            custom={i}
            variants={wordVariants}
            style={{ overflow: 'hidden' }}
          >
            {isGradient ? (
              <GradientText>{word}</GradientText>
            ) : (
              word
            )}
          </MotionBox>
        )
      })}
    </Heading>
  )
}

export default function SectionHeading({
  label,
  title,
  gradientWord,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <MotionVStack
      ref={ref}
      spacing={4}
      align={align}
      textAlign={align}
      mb={16}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {label && (
        <MotionBox
          px={4}
          py={1.5}
          borderRadius="full"
          border="1px solid"
          borderColor="rgba(0, 212, 255, 0.3)"
          bg="rgba(0, 212, 255, 0.05)"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
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
        </MotionBox>
      )}
      <AnimatedTitle title={title} gradientWord={gradientWord} />
      {subtitle && (
        <MotionBox
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { delay: title.split(' ').length * 0.08 + 0.2, duration: 0.5 } },
          }}
        >
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.400"
            maxW="600px"
            lineHeight="1.7"
          >
            {subtitle}
          </Text>
        </MotionBox>
      )}
    </MotionVStack>
  )
}
