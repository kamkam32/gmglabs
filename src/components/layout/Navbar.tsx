'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Button,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { colors } from '@/lib/colors'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Realisations' },
  { href: '/blog', label: 'Blog' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/a-propos', label: 'A propos' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="rgba(10, 10, 15, 0.85)"
        backdropFilter="blur(20px)"
        borderBottom="1px solid"
        borderColor={colors.border.subtle}
        role="banner"
      >
        <Container maxW="1400px" py={4}>
          <Flex as="nav" justify="space-between" align="center" aria-label="Navigation principale">
            <Link href="/" aria-label="GMG Labs - Accueil">
              <NextImage
                src="/logo-gmg.png"
                alt="GMG Labs"
                width={180}
                height={50}
                style={{ height: 'auto', width: 'auto', maxHeight: '50px' }}
                priority
              />
            </Link>

            <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text
                    color={isActive(link.href) ? colors.accent.cyan : colors.text.secondary}
                    fontWeight={isActive(link.href) ? '600' : '500'}
                    fontSize="sm"
                    _hover={{ color: colors.accent.cyan }}
                    transition="color 0.2s"
                    position="relative"
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <Box
                        position="absolute"
                        bottom="-6px"
                        left="50%"
                        transform="translateX(-50%)"
                        w="20px"
                        h="2px"
                        bgGradient={colors.accent.gradient}
                        borderRadius="full"
                      />
                    )}
                  </Text>
                </Link>
              ))}
            </HStack>

            <HStack spacing={3}>
              <Button
                as={Link}
                href="/contact"
                size="sm"
                bg="transparent"
                border="1px solid"
                borderColor={colors.accent.cyan}
                color={colors.accent.cyan}
                borderRadius="full"
                px={5}
                fontWeight="600"
                fontSize="sm"
                _hover={{
                  bg: 'rgba(0, 212, 255, 0.1)',
                  boxShadow: colors.glow.cyan,
                }}
                display={{ base: 'none', md: 'flex' }}
              >
                Contactez-nous
              </Button>
              <IconButton
                aria-label="Menu"
                icon={<FiMenu size={22} />}
                variant="ghost"
                color="white"
                display={{ base: 'flex', lg: 'none' }}
                onClick={onOpen}
                _hover={{ bg: 'rgba(255,255,255,0.06)' }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      <MobileMenu isOpen={isOpen} onClose={onClose} navLinks={navLinks} pathname={pathname} />
    </>
  )
}
