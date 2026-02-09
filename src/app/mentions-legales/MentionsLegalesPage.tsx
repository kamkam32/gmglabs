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
                Mentions legales
              </Heading>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Editeur du site
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Le site gmg-labs.com est edite par GMG Labs, societe basee a Casablanca, Maroc.
                </Text>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Email : contact@ello.ma<br />
                  Telephone : +33 6 19 06 12 15<br />
                  Adresse : Casablanca, Maroc
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Hebergement
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Ce site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Propriete intellectuelle
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  L&apos;ensemble du contenu de ce site (textes, images, logos, design) est la propriete exclusive de GMG Labs
                  et est protege par les lois relatives a la propriete intellectuelle. Toute reproduction, meme partielle,
                  est interdite sans autorisation prealable.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Protection des donnees personnelles
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Les informations collectees via le formulaire de contact sont utilisees uniquement pour repondre
                  a vos demandes. Elles ne sont ni vendues ni transmises a des tiers. Conformement a la loi 09-08
                  relative a la protection des donnees a caractere personnel au Maroc, vous disposez d&apos;un droit
                  d&apos;acces, de rectification et de suppression de vos donnees.
                </Text>
              </VStack>

              <VStack spacing={4} align="flex-start">
                <Heading as="h2" fontSize="xl" color="white">
                  Cookies
                </Heading>
                <Text color={colors.text.secondary} lineHeight="1.8">
                  Ce site utilise des cookies a des fins d&apos;analyse de trafic (Google Analytics). Vous pouvez
                  desactiver les cookies dans les parametres de votre navigateur.
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
