'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { colors } from '@/lib/colors'

export default function MentionsLegalesPage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <Box py={{ base: 16, md: 24 }} bg={colors.bg.body}>
          <Container maxW="800px">
            <VStack spacing={10} align="flex-start">
              <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} color="white" fontWeight="800">
                Mentions légales
              </Heading>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Éditeur du site
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Le site gmg-labs.com est édité par GMG Labs, société basée à Casablanca, Maroc.
                </Text>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Email : contact@ello.ma<br />
                  Téléphone : +33 6 19 06 12 15<br />
                  Adresse : Casablanca, Maroc
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Hébergement
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Propriété intellectuelle
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  L&apos;ensemble du contenu de ce site (textes, images, logos, design) est la propriété exclusive de GMG Labs
                  et est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, même partielle,
                  est interdite sans autorisation préalable.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Protection des données personnelles
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre
                  à vos demandes. Elles ne sont ni vendues ni transmises à des tiers. Conformément à la loi 09-08
                  relative à la protection des données à caractère personnel au Maroc, vous disposez d&apos;un droit
                  d&apos;accès, de rectification et de suppression de vos données.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Cookies
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Ce site utilise des cookies à des fins d&apos;analyse de trafic (Google Analytics). Vous pouvez
                  désactiver les cookies dans les paramètres de votre navigateur.
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
