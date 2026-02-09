'use client'

import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { colors } from '@/lib/colors'

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  color: string
}

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <Box
      bg={colors.bg.card}
      border="1px solid"
      borderColor={colors.border.subtle}
      borderRadius="2xl"
      p={8}
      _hover={{
        borderColor: `${color}50`,
        boxShadow: `0 0 30px ${color}20`,
        transform: 'translateY(-4px)',
      }}
      transition="all 0.3s"
    >
      <VStack align="flex-start" spacing={4}>
        <Box
          p={3}
          borderRadius="xl"
          bg={`${color}15`}
          border="1px solid"
          borderColor={`${color}30`}
        >
          <Icon as={icon} boxSize={6} color={color} />
        </Box>
        <Heading as="h3" fontSize="lg" fontWeight="700" color="white">
          {title}
        </Heading>
        <Text fontSize="sm" color={colors.text.secondary} lineHeight="1.7">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}
