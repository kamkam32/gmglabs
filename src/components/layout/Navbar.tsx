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
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { colors } from '@/lib/colors'
import GradientText from '../shared/GradientText'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale } from '@/i18n/LocaleContext'
import { localePath } from '@/i18n/config'

export default function Navbar() {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { locale, dict } = useLocale()

  const navLinks = [
    { href: '/', label: dict.nav.home },
    { href: '/services', label: dict.nav.services },
    { href: '/realisations', label: dict.nav.realisations },
    { href: '/blog', label: dict.nav.blog },
    { href: '/tarifs', label: dict.nav.pricing },
    { href: '/a-propos', label: dict.nav.about },
  ]

  const isActive = (href: string) => {
    // Strip /en prefix from pathname for comparison
    const cleanPath = pathname.replace(/^\/en/, '') || '/'
    if (href === '/') return cleanPath === '/'
    return cleanPath.startsWith(href)
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
          <Flex as="nav" justify="space-between" align="center" aria-label={dict.nav.mainNavAriaLabel}>
            <Link href={localePath('/', locale)} aria-label={dict.nav.homeAriaLabel}>
              <GradientText fontSize="xl" fontWeight="800">
                GMG Labs
              </GradientText>
            </Link>

            <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={localePath(link.href, locale)}>
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
              <LanguageSwitcher />
              <Button
                as={Link}
                href={localePath('/contact', locale)}
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
                {dict.nav.contact}
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
