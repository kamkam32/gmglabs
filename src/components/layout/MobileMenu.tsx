'use client'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { colors } from '@/lib/colors'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
  pathname: string
}

export default function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
      <DrawerOverlay bg="rgba(10, 10, 15, 0.9)" backdropFilter="blur(10px)" />
      <DrawerContent bg={colors.bg.body}>
        <DrawerCloseButton color="white" size="lg" mt={2} mr={2} />
        <DrawerBody pt={20}>
          <VStack spacing={6} align="stretch">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={onClose}>
                <Text
                  fontSize="2xl"
                  fontWeight={isActive(link.href) ? '700' : '500'}
                  color={isActive(link.href) ? 'white' : colors.text.secondary}
                  py={2}
                  borderBottom="1px solid"
                  borderColor={colors.border.subtle}
                  _hover={{ color: colors.accent.cyan }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Text>
              </Link>
            ))}
            <Box pt={4}>
              <Button
                as={Link}
                href="/contact"
                onClick={onClose}
                w="full"
                size="lg"
                bgGradient={colors.accent.gradient}
                color="white"
                borderRadius="xl"
                fontWeight="600"
                _hover={{ opacity: 0.9 }}
              >
                Contactez-nous
              </Button>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
