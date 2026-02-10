export interface Project {
  slug: string
  title: string
  category: 'web' | 'mobile' | 'ia' | 'web+mobile' | 'web+ia'
  description: string
  shortDescription: string
  client: string
  year: string
  duration: string
  technologies: string[]
  challenge: string
  solution: string
  results: string[]
  metrics: { label: string; value: string }[]
  images: string[]
  featured: boolean
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'ello',
    title: 'Ello - Plateforme Beauté & Bien-être',
    category: 'web+mobile',
    description: 'Plateforme complète de réservation et gestion pour les professionnels de la beauté au Maroc. Ello connecte les clients avec les meilleurs salons, instituts et freelances, avec un système de réservation en temps réel, paiement en ligne et gestion d\'agenda intelligent.',
    shortDescription: 'Plateforme de réservation beauté #1 au Maroc',
    client: 'Ello (produit interne)',
    year: '2024',
    duration: '8 mois',
    technologies: ['Next.js 14', 'TypeScript', 'Chakra UI', 'Supabase', 'React Native', 'PostgreSQL', 'WhatsApp API', 'Mapbox'],
    challenge: 'Le marché marocain de la beauté manquait d\'une solution digitale moderne. Les professionnels gèrent encore leurs rendez-vous par téléphone et WhatsApp, causant des no-shows et une perte de revenus.',
    solution: 'Nous avons construit une plateforme full-stack avec une app client (web + mobile), un dashboard pro et un système de rappels WhatsApp automatiques. L\'architecture serverless avec Supabase permet une scalabilité sans limites.',
    results: [
      'Plus de 100 professionnels inscrits en 6 mois',
      'Taux de no-show réduit de 40%',
      'Score Lighthouse 95+ sur toutes les métriques',
      'Temps de chargement < 2s sur 3G',
    ],
    metrics: [
      { label: 'Utilisateurs', value: '10K+' },
      { label: 'Réservations/mois', value: '5K+' },
      { label: 'Score SEO', value: '98' },
      { label: 'Uptime', value: '99.9%' },
    ],
    images: ['/images/6 - Peach plein + texte dark (transparent)(2).png'],
    featured: true,
    url: 'https://www.ello.ma',
  },
  {
    slug: 'messidor-patrimoine',
    title: 'Messidor Patrimoine - Dashboard Financier',
    category: 'web',
    description: 'Plateforme de gestion de patrimoine et d\'investissement financier au Maroc. Dashboard complet avec suivi OPCVM, OPCI, simulateur d\'investissement et suivi boursier en temps réel.',
    shortDescription: 'Plateforme de gestion de patrimoine et investissement',
    client: 'Messidor Patrimoine',
    year: '2024',
    duration: '4 mois',
    technologies: ['Next.js', 'TypeScript', 'Chakra UI', 'Supabase', 'PostgreSQL'],
    challenge: 'Les investisseurs marocains manquaient d\'un outil centralisé pour suivre leurs placements OPCVM, OPCI et boursiers avec des données fiables et actualisées.',
    solution: 'Dashboard web sécurisé avec authentification, suivi en temps réel des OPCVM et OPCI, simulateur d\'investissement interactif et module de suivi boursier.',
    results: [
      'Centralisation de tous les placements en un seul dashboard',
      'Simulateur d\'investissement utilisé par des centaines de clients',
      'Données financières actualisées quotidiennement',
    ],
    metrics: [
      { label: 'OPCVM suivis', value: '200+' },
      { label: 'Utilisateurs', value: '500+' },
      { label: 'Simulations/mois', value: '1K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    images: ['/images/logomessidor.jpg'],
    featured: false,
    url: 'https://www.messidor-patrimoine.com',
  },
  {
    slug: 'ello-pro',
    title: 'Ello Pro - Dashboard de Gestion pour Salons',
    category: 'web+ia',
    description: 'Dashboard SaaS complet pour les professionnels de la beauté et du bien-être. Ello Pro offre un planning interactif en drag-and-drop, un chatbot IA pour la prise de rendez-vous, des notifications en temps réel, un studio de création de contenu avec éditeur vidéo, un portail de recrutement de talents et des analytics avancés.',
    shortDescription: 'Dashboard SaaS de gestion pour salons de beauté et bien-être',
    client: 'Ello (produit interne)',
    year: '2024',
    duration: '10 mois',
    technologies: ['Next.js 14', 'TypeScript', 'Chakra UI', 'Supabase', 'OpenAI', 'SWR', 'Zustand', 'FFmpeg.wasm', 'Fabric.js', 'Recharts', 'Framer Motion', 'React Big Calendar'],
    challenge: 'Les gérants de salons au Maroc utilisent des outils fragmentés (cahiers, WhatsApp, Excel) pour gérer leurs rendez-vous, clients et équipes. Aucune solution locale ne combine planning, analytics, contenu et IA en un seul outil.',
    solution: 'Nous avons développé un dashboard tout-en-un avec planning drag-and-drop, gestion multi-services en parallèle, chatbot IA capable de prendre des RDV en langage naturel, notifications temps réel avec alertes sonores, et un content studio intégré pour créer des reels vidéo directement dans le navigateur.',
    results: [
      'Planning interactif avec gestion de bundles multi-services et phases parallèles',
      'Chatbot IA avec OpenAI pour prise de RDV, gestion clients et insights business',
      'Notifications en temps réel via Supabase Realtime avec alertes sonores',
      'Content Studio avec éditeur vidéo FFmpeg et générateur de reels automatique',
      'Portail de recrutement de talents (coiffeurs, esthéticiennes) avec gestion de profils',
      'Module analytics avec KPIs, graphiques et suivi de performance',
    ],
    metrics: [
      { label: 'Salons actifs', value: '100+' },
      { label: 'RDV gérés/mois', value: '5K+' },
      { label: 'Fichiers source', value: '150+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    images: ['/images/planningello.webp'],
    featured: false,
    url: 'https://www.ello.ma/pro',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}

export function getProjectsByCategory(category?: string): Project[] {
  if (!category || category === 'all') return projects
  return projects.filter(p => p.category === category || p.category.includes(category))
}
