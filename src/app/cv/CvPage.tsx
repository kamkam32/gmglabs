'use client'

import { Box, Container, Flex, Heading, Text, VStack, HStack, Tag, Icon, Link, SimpleGrid, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiGlobe } from 'react-icons/fi'
import { useLocale } from '@/i18n/LocaleContext'

const MotionBox = motion(Box)

const content = {
  fr: {
    subtitle: 'Product Manager - AI Builder',
    summary: 'Product Manager avec 6+ ans d\'experience dans la construction de plateformes IA de 0 a 1. Combinaison rare de profondeur strategique PM et de capacite technique hands-on — je code, je conçois des systemes et je definis la vision produit de bout en bout. Expertise approfondie en LLMs, integration d\'IA generative et observabilite enterprise. Capacite prouvee a transformer des capacites IA complexes en outils de production fiables et scalables.',
    sections: {
      experience: 'Experience',
      education: 'Formation',
      skills: 'Competences',
      languages: 'Langues',
      projects: 'Projets personnels',
    },
    jobs: [
      {
        title: 'Co-Founder & CEO',
        company: 'Ello — Beauty & Wellness SaaS',
        location: 'Casablanca',
        period: 'Juil. 2025 - Present',
        links: [
          { label: 'Site web', url: 'https://www.ello.ma/' },
          { label: 'iOS', url: 'https://www.bit.ly/ello-ios' },
          { label: 'Android', url: 'https://www.bit.ly/ello-gplay' },
        ],
        bullets: [
          'Lancement et scaling a 100+ salons onboarded et des milliers de rendez-vous traites au Maroc ; gestion complete du go-to-market B2B (pricing, activation, onboarding, churn).',
          'Cycle produit complet en solo : UX/UI, schema Supabase (80+ tables), app React Native, dashboard Next.js, API design — de zero a la production.',
          'Moteur de reservation complexe : planification parallele de services, optimisation de disponibilite staff, algorithmes de gain de temps et reservations de groupe.',
          'Infrastructure d\'observabilite complete : logging granulaire (50+ types d\'evenements), dashboard analytics comportemental et audit trail admin.',
          'Systeme conversationnel IA : bot WhatsApp (gestion de sessions, rate limiting, routage d\'intent) et chatbot in-app avec historique complet.',
          'Module B2B corporate wellness : gestion de campagnes, budgets par utilisateur, suivi de redemption et partenariats multi-salons.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Heavenize',
        location: 'Paris',
        period: 'Dec. 2024 - Juin 2025',
        bullets: [
          'Definition et livraison d\'un assistant IA pour conseillers financiers enterprise from scratch — strategie, roadmap, UX et delivery dans un environnement reglemente (KYC, compliance).',
          'Mise en place d\'un environnement agile de zero (ClickUp), etablissant les fondations des processus produit.',
          'Conception d\'un chatbot multi-agents avec ingestion automatisee de documents internes, methodologie RAG et systeme de reranking avance.',
          'Recherche marche et decouverte utilisateurs complete : persona mapping, priorisation des pain points et definition roadmap.',
          'Conception de flux d\'exploration de donnees intuitifs pour des donnees financieres proprietaires complexes.',
          'Integration des contraintes reglementaires (KYC, compliance) dans l\'architecture pour garantir une experience fluide et securisee.',
        ],
      },
      {
        title: 'Freelance Product Manager & Developpeur',
        company: 'Infinit Patrimoine',
        location: 'Paris',
        period: 'Mars 2024 - Sept. 2024',
        bullets: [
          'Conception UX et developpement d\'un parcours de souscription digital intuitif pour un cabinet de gestion de patrimoine.',
          'Creation d\'une plateforme de conseils en investissement enrichie par l\'IA generative avec recommandations personnalisees.',
          'Implementation d\'un systeme d\'analyse comportementale pour l\'amelioration continue de l\'experience client.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Fanprime',
        location: 'Paris',
        period: 'Mai 2020 - Jan. 2023',
        bullets: [
          'Strategie produit end-to-end pour un SaaS B2B utilise par des organisations sportives majeures : vision, roadmap, framework KPI et reporting executif.',
          'Moteur de gamification (points/tiers/challenges) augmentant les utilisateurs actifs quotidiens de 35% sur les cohortes ciblees.',
          'Integration de mecaniques de fidelite tokenisees (recompenses NFT) pour debloquer de nouveaux flux de monetisation.',
          'Management d\'equipes cross-fonctionnelles (engineering, design, marketing) sur des cycles agile complets.',
          'Implementation d\'un framework agile adapte avec automatisation des processus via Jira.',
          'Developpement de KPIs produit et mise en place d\'un tableau de bord de performance.',
          'Collaboration etroite avec les utilisateurs pour recueillir des retours et integrer des ameliorations continues.',
        ],
      },
      {
        title: 'Sales Produits Structures',
        company: 'Zenith Capital',
        location: 'Paris',
        period: 'Oct. 2018 - Jan. 2020',
        bullets: [
          'Commercialisation de solutions d\'investissement complexes aupres d\'une clientele institutionnelle exigeante.',
          'Identification des besoins clients pour concevoir des produits financiers structures sur mesure.',
          'Collaboration transverse avec les equipes internes pour l\'amelioration continue des offres.',
        ],
      },
      {
        title: 'Banquier Prive',
        company: 'BNP Paribas',
        location: 'Paris',
        period: 'Avr. 2018 - Oct. 2018',
        bullets: [
          'Suivi d\'un portefeuille de clients patrimoniaux avec conseil personnalise en investissements.',
          'Developpement de relations solides contribuant a la fidelisation et l\'accroissement du portefeuille.',
        ],
      },
      {
        title: 'Sales Produits Structures',
        company: 'ProFin Partners',
        location: 'Londres',
        period: 'Fev. 2015 - Jan. 2017',
        bullets: [
          'Commercialisation de produits structures sur les marches internationaux, focus sur les investisseurs institutionnels.',
          'Elaboration d\'approches innovantes pour penetrer de nouveaux marches et segments de clientele.',
          'Developpement d\'une connaissance approfondie des produits derives et strategies d\'investissement complexes.',
        ],
      },
    ],
    education: [
      { degree: 'MSc International Wealth Management (Finance)', school: 'ESCP Europe, Paris', period: 'Sep. 2017 - Sep. 2018' },
      { degree: 'Bachelor\'s, Business', school: 'NEOMA Business School, Rouen', period: 'Sep. 2010 - Sep. 2014' },
    ],
    languages: ['Francais (natif)', 'Anglais (courant)', 'Espagnol'],
    projects: [
      { name: 'Ello', desc: 'Plateforme de reservation beaute & bien-etre — iOS, Android & Web', url: 'https://www.ello.ma/' },
      { name: 'Kasba.app', desc: 'SaaS de location courte duree & conciergerie', url: 'https://kasba.app' },
      { name: 'ChinAuto.ma', desc: 'Marketplace de voitures chinoises pour le Maroc — annonces, comparatifs, guides de marques sur 20+ marques', url: 'https://chinauto.ma' },
      { name: 'NAOMI Gestion', desc: 'Conciergerie de luxe au Maroc', url: 'https://naomigestion.com' },
      { name: 'GMG Labs', desc: 'Agence de developpement Web, Mobile & IA', url: 'https://gmg-labs.com' },
    ],
  },
  en: {
    subtitle: 'Product Manager - AI Builder',
    summary: 'Product Manager with 6+ years of experience building AI-powered platforms from 0 to 1. Rare combination of strategic PM depth and hands-on technical ability — I ship code, design systems, and define product vision end-to-end. Deep expertise in LLMs, generative AI integration, and enterprise observability. Proven ability to transform complex AI capabilities into reliable, scalable production tools.',
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
          'Launched and scaled to 100+ salons onboarded and thousands of appointments processed across Morocco; owned the full B2B go-to-market (pricing, activation, onboarding, churn).',
          'Owned the full product lifecycle solo: UX/UI, Supabase schema (80+ tables), React Native mobile app, Next.js dashboard, API design — from zero to production.',
          'Architected a complex booking engine supporting parallel service scheduling, staff availability optimization, time-saving algorithms and multi-person group bookings.',
          'Built full observability infrastructure: granular activity logging (50+ event types), behavioral analytics dashboard and admin audit trail.',
          'Designed and shipped an AI conversational system: WhatsApp bot (session management, rate limiting, intent routing) and in-app chatbot with full history.',
          'Launched a corporate wellness B2B module: campaign management, per-user budgets, redemption tracking and multi-salon partnerships.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Heavenize',
        location: 'Paris',
        period: 'Dec 2024 - Jun 2025',
        bullets: [
          'Defined and shipped an AI-powered assistant for enterprise financial advisors from scratch — owning strategy, roadmap, UX and delivery end-to-end in a regulated environment (KYC, compliance).',
          'Set up an agile environment from scratch (ClickUp), establishing product process foundations.',
          'Designed a multi-agent chatbot with automated internal document ingestion, RAG methodology and advanced reranking system.',
          'Led full market research and user discovery: persona mapping, pain point prioritization and roadmap definition.',
          'Designed intuitive data exploration flows for complex proprietary financial data, translating strict regulatory constraints into production-ready user experiences.',
          'Integrated regulatory constraints (KYC, compliance) into the architecture to ensure a smooth and secure experience.',
        ],
      },
      {
        title: 'Freelance Product Manager & Developer',
        company: 'Infinit Patrimoine',
        location: 'Paris',
        period: 'Mar 2024 - Sep 2024',
        bullets: [
          'UX design and development of an intuitive digital subscription journey for a wealth management firm.',
          'Built an AI-powered investment advisory platform generating personalized recommendations.',
          'Implemented a behavioral analytics system for continuous improvement of the client experience.',
        ],
      },
      {
        title: 'Head of Product',
        company: 'Fanprime',
        location: 'Paris',
        period: 'May 2020 - Jan 2023',
        bullets: [
          'Owned end-to-end product strategy for a B2B SaaS used by major sports organizations: vision, roadmap, KPI framework and executive reporting.',
          'Built a points/tiers/challenges engine that increased daily active users by 35% in targeted cohorts.',
          'Integrated tokenized loyalty mechanics (NFT-backed rewards) to unlock new monetization streams and drive fan engagement.',
          'Managed cross-functional squads (engineering, design, marketing) across full agile cycles — improved sprint predictability and release cadence significantly.',
          'Implemented a tailored agile framework with process automation via Jira.',
          'Developed product KPIs and built a performance dashboard.',
          'Close collaboration with users to collect feedback and drive continuous improvements.',
        ],
      },
      {
        title: 'Structured Products Sales',
        company: 'Zenith Capital',
        location: 'Paris',
        period: 'Oct 2018 - Jan 2020',
        bullets: [
          'Marketed complex investment solutions to demanding institutional clients.',
          'Identified specific client needs to design bespoke structured financial products.',
          'Cross-team collaboration for continuous improvement of product offerings.',
        ],
      },
      {
        title: 'Private Banker',
        company: 'BNP Paribas',
        location: 'Paris',
        period: 'Apr 2018 - Oct 2018',
        bullets: [
          'Managed a portfolio of high-net-worth clients with personalized investment advisory.',
          'Developed strong client relationships contributing to portfolio retention and growth.',
        ],
      },
      {
        title: 'Structured Products Sales',
        company: 'ProFin Partners',
        location: 'London',
        period: 'Feb 2015 - Jan 2017',
        bullets: [
          'Marketed structured products across international markets, focused on institutional investors.',
          'Developed innovative approaches to penetrate new markets and client segments.',
          'Built deep expertise in derivatives and complex investment strategies.',
        ],
      },
    ],
    education: [
      { degree: 'MSc International Wealth Management (Finance)', school: 'ESCP Europe, Paris', period: 'Sep 2017 - Sep 2018' },
      { degree: 'Bachelor\'s, Business', school: 'NEOMA Business School, Rouen', period: 'Sep 2010 - Sep 2014' },
    ],
    languages: ['French (native)', 'English (fluent)', 'Spanish'],
    projects: [
      { name: 'Ello', desc: 'Beauty & wellness booking platform — iOS, Android & Web', url: 'https://www.ello.ma/' },
      { name: 'Kasba.app', desc: 'Short-term rental & concierge SaaS', url: 'https://kasba.app' },
      { name: 'ChinAuto.ma', desc: 'Chinese car marketplace for Morocco — listings, comparisons, brand guides across 20+ brands', url: 'https://chinauto.ma' },
      { name: 'NAOMI Gestion', desc: 'Luxury concierge service in Morocco', url: 'https://naomigestion.com' },
      { name: 'GMG Labs', desc: 'Web, Mobile & AI development agency', url: 'https://gmg-labs.com' },
    ],
  },
}

const skills = [
  'Generative AI / LLMs',
  'AI Product Integration',
  'Prompt Engineering',
  'Full-stack Development',
  'API Design & REST',
  'SQL / Data Modeling',
  'Supabase / PostgreSQL',
  'React Native / Next.js',
  'Platform Architecture',
  'Figma / Jira / ClickUp',
]

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function CvPage() {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <Box bg="#0A0A0F" minH="100vh" py={{ base: 8, md: 16 }} px={4}>
      <Container maxW="900px">
        {/* Header */}
        <MotionBox {...fade(0)} mb={10}>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="700"
            color="white"
            letterSpacing="-0.02em"
          >
            Kamil Alami
          </Heading>
          <Text color="purple.400" fontSize={{ base: 'md', md: 'lg' }} fontWeight="500" mt={1}>
            {t.subtitle}
          </Text>

          <HStack spacing={4} mt={4} flexWrap="wrap" color="gray.400" fontSize="sm">
            <HStack spacing={1.5}>
              <Icon as={FiMail} boxSize={3.5} />
              <Link href="mailto:alamikamil@gmail.com" _hover={{ color: 'purple.300' }}>alamikamil@gmail.com</Link>
            </HStack>
            <HStack spacing={1.5}>
              <Icon as={FiPhone} boxSize={3.5} />
              <Link href="tel:+33619061215" _hover={{ color: 'purple.300' }}>+33 6 19 06 12 15</Link>
            </HStack>
            <HStack spacing={1.5}>
              <Icon as={FiMapPin} boxSize={3.5} />
              <Text>Paris, France</Text>
            </HStack>
          </HStack>

          <Text color="gray.400" fontSize="sm" lineHeight="1.8" mt={6} maxW="800px">
            {t.summary}
          </Text>
        </MotionBox>

        <Divider borderColor="whiteAlpha.100" mb={10} />

        {/* Experience */}
        <MotionBox {...fade(0.1)} mb={12}>
          <SectionTitle>{t.sections.experience}</SectionTitle>
          <VStack spacing={10} align="stretch">
            {t.jobs.map((job, i) => (
              <Box key={i}>
                <Flex justify="space-between" align="baseline" flexWrap="wrap" gap={2}>
                  <Box>
                    <Text color="white" fontWeight="600" fontSize="md">{job.title}</Text>
                    <Text color="purple.300" fontSize="sm">{job.company} — {job.location}</Text>
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
                  p={4}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ borderColor: 'purple.500', bg: 'whiteAlpha.50' }}
                  transition="all 0.2s"
                >
                  <HStack justify="space-between">
                    <Text color="white" fontWeight="500" fontSize="sm">{p.name}</Text>
                    <Icon as={FiExternalLink} color="gray.500" boxSize={3.5} />
                  </HStack>
                  <Text color="gray.500" fontSize="xs" mt={1}>{p.desc}</Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Language switcher */}
        <Flex justify="center" pb={8}>
          <HStack spacing={3} color="gray.600" fontSize="xs">
            <Icon as={FiGlobe} boxSize={3.5} />
            <Link href="/cv" color={locale === 'fr' ? 'purple.400' : 'gray.500'} fontWeight={locale === 'fr' ? '600' : '400'}>FR</Link>
            <Text>/</Text>
            <Link href="/en/cv" color={locale === 'en' ? 'purple.400' : 'gray.500'} fontWeight={locale === 'en' ? '600' : '400'}>EN</Link>
          </HStack>
        </Flex>
      </Container>
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
