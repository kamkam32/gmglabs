'use client'

import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { FiActivity, FiBarChart2, FiShield, FiZap, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import { colors } from '@/lib/colors'

export default function PerformanceServicePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <ServiceDetailSection
          accentColor={colors.services.performance}
          heroTitle="Performance IT au service de votre business"
          heroGradientWord="votre business"
          heroSubtitle="Tests de charge, monitoring applicatif et audit de performance pour garantir la fiabilité et la rapidité de vos systèmes en production."
          features={[
            {
              icon: FiActivity,
              title: 'Tests de charge & stress tests',
              description: 'Campagnes de tests de performance avec Neoload : simulation de charge utilisateur, identification des goulots d\'étranglement et validation de la capacité de vos systèmes avant mise en production.',
            },
            {
              icon: FiBarChart2,
              title: 'APM & monitoring production',
              description: 'Mise en place de Dynatrace et AppDynamics pour le suivi en temps réel de la performance applicative. Détection proactive des anomalies et alerting intelligent.',
            },
            {
              icon: FiShield,
              title: 'Audit de performance IT',
              description: 'Analyse complète de votre architecture technique, identification des points de faiblesse et recommandations Go/No Go basées sur des données concrètes.',
            },
            {
              icon: FiZap,
              title: 'Optimisation & gouvernance',
              description: 'Reporting opérationnel, comitologie performance et plans d\'action pour améliorer continuellement la rapidité et la fiabilité de vos applications.',
            },
          ]}
          technologies={['Neoload', 'Dynatrace', 'AppDynamics', 'JMeter', 'Grafana', 'Jenkins', 'Docker', 'Git', 'Jira', 'Confluence']}
          processSteps={[
            { number: '01', title: 'Audit', description: 'Analyse de l\'architecture technique, définition des scénarios de test et des seuils de performance attendus.' },
            { number: '02', title: 'Campagne de tests', description: 'Scripting, exécution des tests de charge et stress tests sur vos environnements avec Neoload.' },
            { number: '03', title: 'Analyse & Go/No Go', description: 'Analyse détaillée des résultats, identification des bottlenecks et recommandation Go/No Go argumentée.' },
            { number: '04', title: 'Monitoring continu', description: 'Mise en place de l\'APM en production, dashboards de suivi et alerting pour une performance garantie dans la durée.' },
          ]}
        />

        <Box py={16} bg={colors.bg.body} textAlign="center">
          <Container maxW="600px">
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                bgGradient={`linear(135deg, ${colors.services.performance}, ${colors.accent.cyan})`}
                color="white"
                borderRadius="full"
                px={8}
                fontWeight="600"
                _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
                rightIcon={<FiArrowRight />}
              >
                Auditer ma performance IT
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
