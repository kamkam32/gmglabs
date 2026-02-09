'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import NextImage from 'next/image'
import Link from 'next/link'
import { colors } from '@/lib/colors'

const footerLinks = {
  services: [
    { href: '/services/web', label: 'Developpement Web' },
    { href: '/services/mobile', label: 'Applications Mobiles' },
    { href: '/services/ia', label: 'Intelligence Artificielle' },
    { href: '/tarifs', label: 'Tarifs' },
  ],
  entreprise: [
    { href: '/a-propos', label: 'A propos' },
    { href: '/realisations', label: 'Realisations' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://gmg-labs.com/', label: 'GMG Labs', external: true },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions legales' },
  ],
}

export default function Footer() {
  return (
    <Box as="footer" bg={colors.bg.card} borderTop="1px solid" borderColor={colors.border.subtle} role="contentinfo">
      <Container maxW="1400px" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          {/* Brand */}
          <VStack align="flex-start" spacing={4}>
            <Box as="a" href="https://gmg-labs.com/" target="_blank" rel="noopener noreferrer" _hover={{ opacity: 0.8 }} transition="opacity 0.2s">
              <NextImage
                src="/logo-gmg.png"
                alt="GMG Labs"
                width={250}
                height={60}
                style={{ height: 'auto', width: 'auto' }}
              />
            </Box>
            <Text fontSize="sm" color={colors.text.tertiary} lineHeight="1.8">
              Agence tech premium basee a Casablanca. Nous construisons des produits digitaux qui font la difference.
            </Text>
            <HStack spacing={3} pt={2}>
              <Box
                as="a"
                href="https://www.linkedin.com/company/gmglabs"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.text.tertiary}
                _hover={{ color: colors.accent.cyan }}
                transition="color 0.2s"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Box>
              <Box
                as="a"
                href="https://www.instagram.com/gmglabs"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.text.tertiary}
                _hover={{ color: colors.accent.cyan }}
                transition="color 0.2s"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Box>
              <Box
                as="a"
                href="https://wa.me/33619061215"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.text.tertiary}
                _hover={{ color: '#25D366' }}
                transition="color 0.2s"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </Box>
            </HStack>
          </VStack>

          {/* Services */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="600" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Services
            </Text>
            {footerLinks.services.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }} transition="color 0.2s">
                  {link.label}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* Entreprise */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="600" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Entreprise
            </Text>
            {footerLinks.entreprise.map((link) =>
              'external' in link ? (
                <Box key={link.href} as="a" href={link.href} target="_blank" rel="noopener noreferrer">
                  <Text fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }} transition="color 0.2s">
                    {link.label}
                  </Text>
                </Box>
              ) : (
                <Link key={link.href} href={link.href}>
                  <Text fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }} transition="color 0.2s">
                    {link.label}
                  </Text>
                </Link>
              )
            )}
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="600" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              Contact
            </Text>
            <HStack spacing={3}>
              <FiMail size={16} color={colors.accent.cyan} />
              <Text as="a" href="mailto:contact@ello.ma" fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }}>
                contact@ello.ma
              </Text>
            </HStack>
            <HStack spacing={3}>
              <FiPhone size={16} color={colors.accent.cyan} />
              <Text as="a" href="tel:+33619061215" fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }}>
                +33 6 19 06 12 15
              </Text>
            </HStack>
            <HStack spacing={3} align="flex-start">
              <Box mt={1}>
                <FiMapPin size={16} color={colors.accent.cyan} />
              </Box>
              <Text fontSize="sm" color={colors.text.tertiary}>
                Casablanca, Maroc
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Box borderTop="1px solid" borderColor={colors.border.subtle} mt={12} pt={8}>
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <Text fontSize="sm" color={colors.text.tertiary}>
              &copy; {new Date().getFullYear()} GMG Labs. Tous droits reserves.
            </Text>
            <HStack spacing={6}>
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text fontSize="sm" color={colors.text.tertiary} _hover={{ color: colors.accent.cyan }}>
                    {link.label}
                  </Text>
                </Link>
              ))}
            </HStack>
          </Flex>
        </Box>
      </Container>

      {/* WhatsApp Floating Button */}
      <Box
        as="a"
        href="https://wa.me/33619061215?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet"
        target="_blank"
        rel="noopener noreferrer"
        position="fixed"
        bottom={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        zIndex={999}
        bg="#25D366"
        color="white"
        w={{ base: '56px', md: '60px' }}
        h={{ base: '56px', md: '60px' }}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 20px rgba(37, 211, 102, 0.4)"
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: '0 6px 25px rgba(37, 211, 102, 0.5)',
        }}
        transition="all 0.3s ease"
        aria-label="Nous contacter sur WhatsApp"
      >
        <FaWhatsapp size={28} />
      </Box>
    </Box>
  )
}
