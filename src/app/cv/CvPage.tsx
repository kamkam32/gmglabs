'use client'

import { useState } from 'react'
import { Box, Container, Flex, Heading, Text, VStack, HStack, Tag, Icon, Link, SimpleGrid, Divider, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiGlobe, FiLinkedin, FiDownload, FiFileText, FiBookOpen } from 'react-icons/fi'
import { useLocale } from '@/i18n/LocaleContext'

const MotionBox = motion(Box)

const projectLogos: Record<string, string> = {
  'Ello': '/cv/ello-logo.png',
  'GMG Labs': '/cv/gmg-logo.png',
}

const content = {
  fr: {
    subtitle: 'Product Manager - AI Builder',
    summary: 'Product Manager, 6 ans en SaaS B2B — de l\'engagement sportif à la fintech en passant par la beauté & le bien-être. J\'ai amené plusieurs produits de l\'idée à la production : définir la vision, concevoir l\'UX, et quand il le faut, construire moi-même (React Native, Next.js, Supabase). À l\'aise dans les environnements réglementés, l\'intégration d\'IA produit, et le travail ingrat du scaling opérationnel. Background en finance, état d\'esprit de builder.',
    sections: {
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
      projects: 'Projets personnels',
    },
    jobs: [
      {
        title: 'Co-Founder & CEO',
        company: 'Ello — Beauty & Wellness SaaS',
        location: 'Casablanca',
        period: 'Juil. 2025 - Présent',
        links: [
          { label: 'Site web', url: 'https://www.ello.ma/' },
          { label: 'iOS', url: 'https://www.bit.ly/ello-ios' },
          { label: 'Android', url: 'https://www.bit.ly/ello-gplay' },
        ],
        bullets: [
          'Construction de la plateforme entière en solo de zéro : app mobile (React Native), dashboard (Next.js), API, base de données (Supabase). Pas d\'équipe, pas de raccourcis.',
          'Scaling à 100+ salons et des milliers de réservations traitées au Maroc. Démarrage en porte-à-porte, puis recrutement et gestion d\'une équipe terrain de freelances.',
          'Gestion directe du support client et des relations salons. Boucle de feedback courte entre le terrain et le produit.',
          'Pilotage complet du go-to-market : pricing, activation, onboarding, réduction du churn.',
          'Conception du moteur de réservation au cœur du produit : services parallèles, disponibilité staff, réservations de groupe, optimisation des créneaux.',
          'Livraison d\'un bot WhatsApp IA pour les salons (routage d\'intent, gestion de sessions, rate limiting) et d\'un chatbot in-app avec historique de conversation.',
          'Mise en place de l\'observabilité opérationnelle from scratch. 50+ types d\'événements loggés, dashboard analytics comportemental, audit trail admin.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Heavenize',
        location: 'Paris',
        period: 'Déc. 2024 - Juin 2025',
        bullets: [
          'Arrivé comme premier hire produit. Mise en place de l\'environnement agile complet from scratch (ClickUp, processus, rituels) là où rien n\'existait.',
          'Définition de la stratégie produit et marketing : personas, pain points, opportunités marché, roadmap équilibrant quick wins et paris long terme.',
          'Conception et livraison d\'un chatbot IA multi-agents avec ingestion automatisée de documents, pipeline RAG et système de reranking pour répondre précisément depuis les données financières internes.',
          'Construction de flux d\'exploration de données pour des datasets propriétaires complexes. Intégration des contraintes KYC et compliance dans l\'UX sans la rendre pénible.',
          'Mise en place d\'un système d\'analytics comportemental pour suivre les usages et alimenter l\'amélioration continue du produit.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Fanprime',
        location: 'Paris',
        period: 'Mai 2020 - Jan. 2023',
        bullets: [
          'Stratégie produit pour un SaaS B2B utilisé par des organisations sportives majeures : vision, roadmap, KPIs, reporting exécutif.',
          'Construction d\'un moteur points/tiers/challenges. +35% d\'utilisateurs actifs quotidiens sur les cohortes ciblées.',
          'Intégration de mécaniques de fidélité tokenisées (récompenses NFT) pour ouvrir de nouveaux flux de monétisation et booster l\'engagement.',
          'Management d\'équipes cross-fonctionnelles (engineering, design, marketing) sur des cycles agile complets. Amélioration de la prédictibilité des sprints et de la cadence de release.',
        ],
      },
      {
        title: 'Début de carrière en Finance',
        company: 'ProFin Partners (Londres), Zenith Capital (Paris), BNP Paribas (Paris)',
        location: '',
        period: '2015 - 2020',
        bullets: [
          'Vente de produits structurés à des clients institutionnels chez ProFin Partners (Londres) et Zenith Capital (Paris). Passage en banque privée chez BNP Paribas.',
          'Construction d\'une compréhension approfondie des produits financiers complexes, de l\'analyse des besoins clients et des cycles de vente B2B.',
        ],
      },
    ],
    education: [
      { degree: 'MSc International Wealth Management (Finance)', school: 'ESCP Europe, Paris', period: 'Sep. 2017 - Sep. 2018' },
      { degree: 'Bachelor\'s, Business', school: 'NEOMA Business School, Rouen', period: 'Sep. 2010 - Sep. 2014' },
    ],
    languages: ['Français (natif)', 'Anglais (courant)', 'Espagnol'],
    projects: [
      { name: 'Kasba.app', desc: 'Plateforme de gestion pour conciergeries de location courte durée. Biens, réservations (Airbnb, Booking, direct), finances, gestion des tâches et portail propriétaire en un seul dashboard.', url: 'https://kasba.app' },
      { name: 'ChinAuto.ma', desc: 'Premier comparateur de voitures chinoises au Maroc. Prix, fiches techniques, guides de marques et simulateur de financement sur 24+ marques (BYD, MG, Chery, Geely...).', url: 'https://chinauto.ma' },
      { name: 'GMG Labs', desc: 'Agence de développement Web, Mobile & IA', url: 'https://gmg-labs.com' },
    ],
  },
  en: {
    subtitle: 'Product Manager - AI Builder',
    summary: 'Product Manager, 6 years across B2B SaaS — from sports fan engagement to fintech to beauty & wellness. I\'ve repeatedly taken products from idea to production: defining vision, designing UX, and when needed, building the thing myself (React Native, Next.js, Supabase). Comfortable in regulated environments, AI product integration, and the unglamorous work of scaling operations. Background in finance, mindset of a builder.',
    sections: {
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Side Projects',
    },
    jobs: [
      {
        title: 'Co-Founder & CEO',
        company: 'Ello — Beauty & Wellness SaaS',
        location: 'Casablanca',
        period: 'Jul 2025 - Present',
        links: [
          { label: 'Website', url: 'https://www.ello.ma/' },
          { label: 'iOS', url: 'https://www.bit.ly/ello-ios' },
          { label: 'Android', url: 'https://www.bit.ly/ello-gplay' },
        ],
        bullets: [
          'Built the entire platform solo from zero: mobile app (React Native), dashboard (Next.js), API, database (Supabase). No team, no shortcuts.',
          'Scaled to 100+ salons and thousands of bookings processed across Morocco. Started by selling door-to-door, then recruited and managed a field team of freelancers to keep growing.',
          'Handled client support and salon relationships directly. Short feedback loop between the field and the product.',
          'Owned the full go-to-market: pricing, activation, onboarding, churn reduction.',
          'Designed the booking engine at the core of the product: parallel services, staff availability, group bookings, time-slot optimization.',
          'Shipped an AI-powered WhatsApp bot for salons (intent routing, session management, rate limiting) and an in-app chatbot with conversation history.',
          'Added operational observability from scratch. 50+ event types logged, behavioral analytics dashboard, admin audit trail.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Heavenize',
        location: 'Paris',
        period: 'Dec 2024 - Jun 2025',
        bullets: [
          'Joined as first product hire. Set up the full agile environment from scratch (ClickUp, processes, rituals) where none existed.',
          'Defined product and marketing strategy: personas, pain points, market opportunities, roadmap balancing quick wins with long-term bets.',
          'Designed and shipped a multi-agent AI chatbot with automated document ingestion, RAG pipeline and reranking system to surface accurate answers from internal financial data.',
          'Built data exploration flows for complex proprietary datasets. Integrated KYC and compliance constraints into the UX without making it painful.',
          'Put in place a behavioral analytics system to track usage patterns and feed continuous product improvements.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Fanprime',
        location: 'Paris',
        period: 'May 2020 - Jan 2023',
        bullets: [
          'Owned product strategy for a B2B SaaS used by major sports organizations: vision, roadmap, KPIs, executive reporting.',
          'Built a points/tiers/challenges engine. +35% daily active users on targeted cohorts.',
          'Integrated tokenized loyalty mechanics (NFT-backed rewards) to open new monetization streams and boost fan engagement.',
          'Managed cross-functional squads (engineering, design, marketing) through full agile cycles. Improved sprint predictability and release cadence.',
        ],
      },
      {
        title: 'Early career in Finance',
        company: 'ProFin Partners (London), Zenith Capital (Paris), BNP Paribas (Paris)',
        location: '',
        period: '2015 - 2020',
        bullets: [
          'Sold structured products to institutional clients at ProFin Partners (London) and Zenith Capital (Paris). Brief stint in private banking at BNP Paribas.',
          'Built a deep understanding of complex financial products, client needs analysis and B2B sales cycles.',
        ],
      },
    ],
    education: [
      { degree: 'MSc International Wealth Management (Finance)', school: 'ESCP Europe, Paris', period: 'Sep 2017 - Sep 2018' },
      { degree: 'Bachelor\'s, Business', school: 'NEOMA Business School, Rouen', period: 'Sep 2010 - Sep 2014' },
    ],
    languages: ['French (native)', 'English (fluent)', 'Spanish'],
    projects: [
      { name: 'Kasba.app', desc: 'Management platform for short-term rental concierges. Properties, bookings (Airbnb, Booking, direct), finances, task management and owner portal in one dashboard.', url: 'https://kasba.app' },
      { name: 'ChinAuto.ma', desc: 'First comparison platform for Chinese cars in Morocco. Prices, specs, brand guides and financing simulator across 24+ brands (BYD, MG, Chery, Geely...).', url: 'https://chinauto.ma' },
      { name: 'GMG Labs', desc: 'Web, Mobile & AI development agency', url: 'https://gmg-labs.com' },
    ],
  },
}

const skills = [
  'Discovery',
  'Roadmap',
  'Go-to-market',
  'Pricing',
  'Agile',
  'B2B SaaS',
  'LLMs',
  'Prompt Engineering',
  'Conversational AI',
  'React Native',
  'Next.js',
  'Node.js',
  'Supabase',
  'PostgreSQL',
  'REST APIs',
  'Figma',
  'Jira',
  'ClickUp',
]

const story = {
  fr: {
    headline: 'De la finance aux produits IA — l\'histoire d\'un AI Builder.',
    chapters: [
      {
        era: '2015 — 2020',
        title: 'La finance',
        text: 'J\'ai commencé ma carrière dans la finance à Londres, puis Paris. Produits structurés, banque privée, clients institutionnels. J\'ai appris la rigueur, l\'exigence, la capacité à vulgariser des choses complexes. Mais au fond, je voulais construire, pas vendre.',
        accent: 'ProFin Partners (Londres) → BNP Paribas → Zenith Capital',
      },
      {
        era: '2020 — 2023',
        title: 'La découverte du produit',
        text: 'Chez Fanprime, j\'ai découvert le product management. Construire une roadmap, piloter des équipes, voir un produit prendre vie. Gamification, Web3, engagement — j\'ai touché à tout. Mais je dépendais toujours des développeurs pour concrétiser mes idées.',
        accent: 'Fanprime — SaaS de fidélisation pour le sport',
      },
      {
        era: 'Fin 2022',
        title: 'Le déclic',
        text: 'Quand ChatGPT est sorti, j\'ai tout de suite compris que ça allait tout changer. Pas seulement pour les utilisateurs — pour moi. J\'ai réalisé que l\'IA me donnait le pouvoir de construire moi-même ce que j\'imaginais. Plus besoin d\'attendre une équipe dev. Avec la bonne vision produit, la bonne architecture en tête et l\'IA comme copilote, je pouvais passer de l\'idée au produit en production.',
        accent: 'Le moment où tout a basculé',
        highlight: true,
      },
      {
        era: '2024 — 2025',
        title: 'L\'IA en production',
        text: 'Chez Heavenize, j\'ai conçu et livré un assistant IA pour des conseillers financiers — RAG, chatbots multi-agents, le tout dans un environnement réglementé. L\'IA n\'était plus un side project, c\'était mon métier.',
        accent: 'Heavenize — IA pour la finance',
      },
      {
        era: '2025 — Aujourd\'hui',
        title: 'AI Builder',
        text: 'J\'ai lancé Ello. De l\'idée à la production, seul — en pilotant l\'IA pour construire : le backend, l\'app mobile, le dashboard, le moteur de réservation, le bot WhatsApp. 80+ tables Supabase, des milliers de rendez-vous traités. La preuve que le PM qui maîtrise l\'IA peut shipper à la vitesse d\'une équipe entière. Aujourd\'hui je ne m\'arrête plus — Kasba, ChinAuto, GMG Labs... chaque projet est une nouvelle occasion de construire.',
        accent: 'Ello — 100+ salons, des milliers de RDV',
        highlight: true,
      },
    ],
    cta: 'Je ne suis pas un développeur qui fait du produit. Je suis un Product Manager qui a compris comment utiliser l\'IA pour tout construire.',
  },
  en: {
    headline: 'From finance to AI products — the story of an AI Builder.',
    chapters: [
      {
        era: '2015 — 2020',
        title: 'Finance',
        text: 'I started my career in finance in London, then Paris. Structured products, private banking, institutional clients. I learned rigor, high standards, and the ability to simplify complex things. But deep down, I wanted to build, not sell.',
        accent: 'ProFin Partners (London) → BNP Paribas → Zenith Capital',
      },
      {
        era: '2020 — 2023',
        title: 'Discovering product',
        text: 'At Fanprime, I discovered product management. Building a roadmap, leading teams, watching a product come to life. Gamification, Web3, engagement — I touched everything. But I still depended on developers to bring my ideas to life.',
        accent: 'Fanprime — Loyalty SaaS for sports',
      },
      {
        era: 'Late 2022',
        title: 'The turning point',
        text: 'When ChatGPT launched, I immediately understood it would change everything. Not just for users — for me. I realized AI gave me the power to build what I imagined, myself. No more waiting for a dev team. With the right product vision, the right architecture in mind and AI as my copilot, I could go from idea to production.',
        accent: 'The moment everything changed',
        highlight: true,
      },
      {
        era: '2024 — 2025',
        title: 'AI in production',
        text: 'At Heavenize, I designed and shipped an AI assistant for financial advisors — RAG, multi-agent chatbots, all within a regulated environment. AI was no longer a side project, it was my job.',
        accent: 'Heavenize — AI for finance',
      },
      {
        era: '2025 — Now',
        title: 'AI Builder',
        text: 'I launched Ello. From idea to production, solo — using AI to build everything: the backend, the mobile app, the dashboard, the booking engine, the WhatsApp bot. 80+ Supabase tables, thousands of appointments processed. Proof that a PM who masters AI can ship at the speed of an entire team. Today I don\'t stop — Kasba, ChinAuto, GMG Labs... every project is another chance to build.',
        accent: 'Ello — 100+ salons, thousands of appointments',
        highlight: true,
      },
    ],
    cta: 'I\'m not a developer who does product. I\'m a Product Manager who figured out how to use AI to build everything.',
  },
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function CvPage() {
  const { locale } = useLocale()
  const t = content[locale]
  const s = story[locale]
  const [mode, setMode] = useState<'cv' | 'story'>('cv')

  return (
    <Box bg="#0A0A0F" minH="100vh">
      {/* Sticky top bar */}
      <Box
        position="sticky"
        top={0}
        zIndex={50}
        bg="rgba(10,10,15,0.85)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        py={3}
        px={4}
      >
        <Container maxW="900px">
          <Flex justify="space-between" align="center">
            <HStack spacing={3}>
              <Text color="white" fontWeight="600" fontSize="sm">Kamil Alami</Text>
              <Text color="gray.500" fontSize="xs" display={{ base: 'none', md: 'block' }}>|</Text>
              <Text color="purple.400" fontSize="xs" display={{ base: 'none', md: 'block' }}>{t.subtitle}</Text>
            </HStack>
            <HStack spacing={3}>
              {/* CV / Story toggle */}
              <HStack spacing={0} bg="whiteAlpha.100" borderRadius="full" p="2px">
                <Button
                  size="xs"
                  borderRadius="full"
                  bg={mode === 'cv' ? 'purple.500' : 'transparent'}
                  color={mode === 'cv' ? 'white' : 'gray.400'}
                  _hover={{ color: 'white' }}
                  onClick={() => setMode('cv')}
                  leftIcon={<Icon as={FiFileText} boxSize={3} />}
                  px={3}
                  h="26px"
                >
                  CV
                </Button>
                <Button
                  size="xs"
                  borderRadius="full"
                  bg={mode === 'story' ? 'purple.500' : 'transparent'}
                  color={mode === 'story' ? 'white' : 'gray.400'}
                  _hover={{ color: 'white' }}
                  onClick={() => setMode('story')}
                  leftIcon={<Icon as={FiBookOpen} boxSize={3} />}
                  px={3}
                  h="26px"
                >
                  Story
                </Button>
              </HStack>
              <Link href="https://www.linkedin.com/in/kamil-alami-4355b361/" isExternal>
                <Icon as={FiLinkedin} color="gray.400" boxSize={4} _hover={{ color: 'purple.300' }} />
              </Link>
              <Link
                href="/cv"
                color={locale === 'fr' ? 'purple.400' : 'gray.500'}
                fontSize="xs"
                fontWeight={locale === 'fr' ? '600' : '400'}
              >FR</Link>
              <Link
                href="/en/cv"
                color={locale === 'en' ? 'purple.400' : 'gray.500'}
                fontSize="xs"
                fontWeight={locale === 'en' ? '600' : '400'}
              >EN</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 16 }} px={4}>
      <Container maxW="900px">
        {/* Header */}
        <MotionBox {...fade(0)} mb={10}>
          <Flex gap={{ base: 5, md: 8 }} align={{ base: 'center', md: 'start' }} direction={{ base: 'column', md: 'row' }}>
            {/* Photo */}
            <Box flexShrink={0}>
              <Box
                w={{ base: '100px', md: '120px' }}
                h={{ base: '100px', md: '120px' }}
                borderRadius="full"
                overflow="hidden"
                border="3px solid"
                borderColor="purple.500"
                position="relative"
              >
                <Image
                  src="/cv/1706607757106.jpg"
                  alt="Kamil Alami"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>

            {/* Info */}
            <Box flex={1} textAlign={{ base: 'center', md: 'left' }}>
              <Text color="purple.400" fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" mb={2}>
                {t.subtitle}
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="700"
                color="white"
                letterSpacing="-0.03em"
                lineHeight="1.1"
              >
                Kamil Alami
              </Heading>
            </Box>
          </Flex>

          <HStack spacing={4} mt={5} flexWrap="wrap" color="gray.400" fontSize="sm" justify={{ base: 'center', md: 'start' }}>
            <Link href="mailto:alamikamil@gmail.com" _hover={{ color: 'purple.300' }}>
              <HStack spacing={1.5}><Icon as={FiMail} boxSize={3.5} /><Text>alamikamil@gmail.com</Text></HStack>
            </Link>
            <Link href="tel:+33619061215" _hover={{ color: 'purple.300' }}>
              <HStack spacing={1.5}><Icon as={FiPhone} boxSize={3.5} /><Text>+33 6 19 06 12 15</Text></HStack>
            </Link>
            <HStack spacing={1.5}><Icon as={FiMapPin} boxSize={3.5} /><Text>Paris, France</Text></HStack>
            <Link href="https://www.linkedin.com/in/kamil-alami-4355b361/" isExternal _hover={{ color: 'purple.300' }}>
              <HStack spacing={1.5}><Icon as={FiLinkedin} boxSize={3.5} /><Text>LinkedIn</Text></HStack>
            </Link>
          </HStack>

          <Box mt={6} p={5} bg="whiteAlpha.50" borderRadius="lg" borderLeft="3px solid" borderColor="purple.500">
            <Text color="gray.300" fontSize="sm" lineHeight="1.8">
              {t.summary}
            </Text>
          </Box>
        </MotionBox>

        <Divider borderColor="whiteAlpha.100" mb={10} />

        <AnimatePresence mode="wait">
        {mode === 'story' ? (
          <MotionBox
            key="story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Story headline */}
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl' }}
              color="white"
              fontWeight="600"
              lineHeight="1.4"
              mb={12}
              maxW="600px"
            >
              {s.headline}
            </Heading>

            {/* Timeline */}
            <VStack spacing={0} align="stretch" position="relative">
              {/* Vertical line */}
              <Box
                position="absolute"
                left={{ base: '11px', md: '13px' }}
                top="0"
                bottom="0"
                w="2px"
                bg="whiteAlpha.100"
              />

              {s.chapters.map((ch, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  position="relative"
                  pl={{ base: 10, md: 12 }}
                  pb={i < s.chapters.length - 1 ? 12 : 0}
                >
                  {/* Dot */}
                  <Box
                    position="absolute"
                    left={{ base: '4px', md: '6px' }}
                    top="6px"
                    w={ch.highlight ? '18px' : '14px'}
                    h={ch.highlight ? '18px' : '14px'}
                    borderRadius="full"
                    bg={ch.highlight ? 'purple.500' : 'transparent'}
                    border="2px solid"
                    borderColor={ch.highlight ? 'purple.500' : 'whiteAlpha.300'}
                    ml={ch.highlight ? '-2px' : '0'}
                  />

                  <Text color="purple.400" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" mb={1}>
                    {ch.era}
                  </Text>
                  <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white" fontWeight="600" mb={3}>
                    {ch.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" lineHeight="1.9" mb={3}>
                    {ch.text}
                  </Text>
                  <Text color="gray.600" fontSize="xs" fontStyle="italic">
                    {ch.accent}
                  </Text>
                </MotionBox>
              ))}
            </VStack>

            {/* CTA quote */}
            <Box mt={16} p={6} bg="whiteAlpha.50" borderRadius="lg" borderLeft="3px solid" borderColor="purple.500">
              <Text color="white" fontSize={{ base: 'sm', md: 'md' }} fontWeight="500" lineHeight="1.8" fontStyle="italic">
                &laquo; {s.cta} &raquo;
              </Text>
            </Box>

            {/* Projects after story */}
            <Box mt={16}>
              <SectionTitle>{t.sections.projects}</SectionTitle>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {t.projects.map((p) => (
                  <Link key={p.name} href={p.url} isExternal _hover={{ textDecoration: 'none' }}>
                    <Box
                      p={5}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      _hover={{ borderColor: 'purple.500', bg: 'whiteAlpha.50', transform: 'translateY(-2px)' }}
                      transition="all 0.25s"
                      h="full"
                    >
                      <HStack spacing={3} mb={2}>
                        {projectLogos[p.name] && (
                          <Box flexShrink={0} w="32px" h="32px" position="relative" borderRadius="md" overflow="hidden" bg="whiteAlpha.100">
                            <Image src={projectLogos[p.name]} alt={p.name} fill style={{ objectFit: 'contain', padding: '4px' }} />
                          </Box>
                        )}
                        <HStack flex={1} justify="space-between">
                          <Text color="white" fontWeight="600" fontSize="sm">{p.name}</Text>
                          <Icon as={FiExternalLink} color="gray.600" boxSize={3.5} />
                        </HStack>
                      </HStack>
                      <Text color="gray.500" fontSize="xs" lineHeight="1.6">{p.desc}</Text>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Box>
          </MotionBox>
        ) : (
          <MotionBox
            key="cv"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >

        {/* Experience */}
        <MotionBox {...fade(0.1)} mb={12}>
          <SectionTitle>{t.sections.experience}</SectionTitle>
          <VStack spacing={10} align="stretch">
            {t.jobs.map((job, i) => (
              <Box key={i}>
                <Flex justify="space-between" align="baseline" flexWrap="wrap" gap={2}>
                  <Box>
                    <Text color="white" fontWeight="600" fontSize="md">{job.title}</Text>
                    <Text color="purple.300" fontSize="sm">{job.company}{job.location ? ` — ${job.location}` : ''}</Text>
                  </Box>
                  <Text color="gray.500" fontSize="xs" fontWeight="500" letterSpacing="0.05em">{job.period}</Text>
                </Flex>
                {'links' in job && (job as any).links && (
                  <HStack spacing={3} mt={1.5}>
                    {(job as any).links.map((l: { label: string; url: string }) => (
                      <Link key={l.url} href={l.url} isExternal fontSize="xs" color="purple.400" _hover={{ color: 'purple.300' }}>
                        <HStack spacing={1}>
                          <Icon as={FiExternalLink} boxSize={3} />
                          <Text>{l.label}</Text>
                        </HStack>
                      </Link>
                    ))}
                  </HStack>
                )}
                <VStack align="stretch" spacing={2} mt={3} pl={4} borderLeft="2px solid" borderColor="whiteAlpha.100">
                  {job.bullets.map((b, j) => (
                    <Text key={j} color="gray.400" fontSize="sm" lineHeight="1.7">
                      {b}
                    </Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </MotionBox>

        <Divider borderColor="whiteAlpha.100" mb={10} />

        {/* Education */}
        <MotionBox {...fade(0.15)} mb={12}>
          <SectionTitle>{t.sections.education}</SectionTitle>
          <VStack spacing={4} align="stretch">
            {t.education.map((edu, i) => (
              <Flex key={i} justify="space-between" align="baseline" flexWrap="wrap" gap={2}>
                <Box>
                  <Text color="white" fontWeight="500" fontSize="sm">{edu.degree}</Text>
                  <Text color="gray.500" fontSize="sm">{edu.school}</Text>
                </Box>
                <Text color="gray.500" fontSize="xs" letterSpacing="0.05em">{edu.period}</Text>
              </Flex>
            ))}
          </VStack>
        </MotionBox>

        <Divider borderColor="whiteAlpha.100" mb={10} />

        {/* Skills + Languages side by side */}
        <MotionBox {...fade(0.2)} mb={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <SectionTitle>{t.sections.skills}</SectionTitle>
              <Flex gap={2} flexWrap="wrap">
                {skills.map((s) => (
                  <Tag
                    key={s}
                    size="sm"
                    bg="whiteAlpha.100"
                    color="gray.300"
                    borderRadius="full"
                    px={3}
                    py={1.5}
                    fontSize="xs"
                  >
                    {s}
                  </Tag>
                ))}
              </Flex>
            </Box>
            <Box>
              <SectionTitle>{t.sections.languages}</SectionTitle>
              <VStack align="start" spacing={1}>
                {t.languages.map((l) => (
                  <Text key={l} color="gray.400" fontSize="sm">{l}</Text>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>
        </MotionBox>

        <Divider borderColor="whiteAlpha.100" mb={10} />

        {/* Projects */}
        <MotionBox {...fade(0.25)} mb={16}>
          <SectionTitle>{t.sections.projects}</SectionTitle>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {t.projects.map((p) => (
              <Link
                key={p.name}
                href={p.url}
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  p={5}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ borderColor: 'purple.500', bg: 'whiteAlpha.50', transform: 'translateY(-2px)' }}
                  transition="all 0.25s"
                  h="full"
                >
                  <HStack spacing={3} mb={2}>
                    {projectLogos[p.name] && (
                      <Box flexShrink={0} w="32px" h="32px" position="relative" borderRadius="md" overflow="hidden" bg="whiteAlpha.100">
                        <Image src={projectLogos[p.name]} alt={p.name} fill style={{ objectFit: 'contain', padding: '4px' }} />
                      </Box>
                    )}
                    <Box flex={1}>
                      <HStack justify="space-between">
                        <Text color="white" fontWeight="600" fontSize="sm">{p.name}</Text>
                        <Icon as={FiExternalLink} color="gray.600" boxSize={3.5} />
                      </HStack>
                    </Box>
                  </HStack>
                  <Text color="gray.500" fontSize="xs" lineHeight="1.6">{p.desc}</Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </MotionBox>

          </MotionBox>
        )}
        </AnimatePresence>

      </Container>
      </Box>
    </Box>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      as="h2"
      fontSize="xs"
      fontWeight="600"
      color="purple.400"
      textTransform="uppercase"
      letterSpacing="0.15em"
      mb={5}
    >
      {children}
    </Heading>
  )
}
