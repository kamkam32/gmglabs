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
    title: 'Ello - Plateforme Beaute & Bien-etre',
    category: 'web+mobile',
    description: 'Plateforme complete de reservation et gestion pour les professionnels de la beaute au Maroc. Ello connecte les clients avec les meilleurs salons, instituts et freelances, avec un systeme de reservation en temps reel, paiement en ligne et gestion d\'agenda intelligent.',
    shortDescription: 'Plateforme de reservation beaute #1 au Maroc',
    client: 'Ello (produit interne)',
    year: '2024',
    duration: '8 mois',
    technologies: ['Next.js 14', 'TypeScript', 'Chakra UI', 'Supabase', 'React Native', 'PostgreSQL', 'WhatsApp API', 'Mapbox'],
    challenge: 'Le marche marocain de la beaute manquait d\'une solution digitale moderne. Les professionnels gerent encore leurs rendez-vous par telephone et WhatsApp, causant des no-shows et une perte de revenus.',
    solution: 'Nous avons construit une plateforme full-stack avec une app client (web + mobile), un dashboard pro et un systeme de rappels WhatsApp automatiques. L\'architecture serverless avec Supabase permet une scalabilite sans limites.',
    results: [
      'Plus de 100 professionnels inscrits en 6 mois',
      'Taux de no-show reduit de 40%',
      'Score Lighthouse 95+ sur toutes les metriques',
      'Temps de chargement < 2s sur 3G',
    ],
    metrics: [
      { label: 'Utilisateurs', value: '10K+' },
      { label: 'Reservations/mois', value: '5K+' },
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
    description: 'Plateforme de gestion de patrimoine et d\'investissement financier au Maroc. Dashboard complet avec suivi OPCVM, OPCI, simulateur d\'investissement et suivi boursier en temps reel.',
    shortDescription: 'Plateforme de gestion de patrimoine et investissement',
    client: 'Messidor Patrimoine',
    year: '2024',
    duration: '4 mois',
    technologies: ['Next.js', 'TypeScript', 'Chakra UI', 'Supabase', 'PostgreSQL'],
    challenge: 'Les investisseurs marocains manquaient d\'un outil centralise pour suivre leurs placements OPCVM, OPCI et boursiers avec des donnees fiables et actualisees.',
    solution: 'Dashboard web securise avec authentification, suivi en temps reel des OPCVM et OPCI, simulateur d\'investissement interactif et module de suivi boursier.',
    results: [
      'Centralisation de tous les placements en un seul dashboard',
      'Simulateur d\'investissement utilise par des centaines de clients',
      'Donnees financieres actualisees quotidiennement',
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
    description: 'Dashboard SaaS complet pour les professionnels de la beaute et du bien-etre. Ello Pro offre un planning interactif en drag-and-drop, un chatbot IA pour la prise de rendez-vous, des notifications en temps reel, un studio de creation de contenu avec editeur video, un portail de recrutement de talents et des analytics avances.',
    shortDescription: 'Dashboard SaaS de gestion pour salons de beaute et bien-etre',
    client: 'Ello (produit interne)',
    year: '2024',
    duration: '10 mois',
    technologies: ['Next.js 14', 'TypeScript', 'Chakra UI', 'Supabase', 'OpenAI', 'SWR', 'Zustand', 'FFmpeg.wasm', 'Fabric.js', 'Recharts', 'Framer Motion', 'React Big Calendar'],
    challenge: 'Les gerants de salons au Maroc utilisent des outils fragmentes (cahiers, WhatsApp, Excel) pour gerer leurs rendez-vous, clients et equipes. Aucune solution locale ne combine planning, analytics, contenu et IA en un seul outil.',
    solution: 'Nous avons developpe un dashboard tout-en-un avec planning drag-and-drop, gestion multi-services en parallele, chatbot IA capable de prendre des RDV en langage naturel, notifications temps reel avec alertes sonores, et un content studio integre pour creer des reels video directement dans le navigateur.',
    results: [
      'Planning interactif avec gestion de bundles multi-services et phases paralleles',
      'Chatbot IA avec OpenAI pour prise de RDV, gestion clients et insights business',
      'Notifications en temps reel via Supabase Realtime avec alertes sonores',
      'Content Studio avec editeur video FFmpeg et generateur de reels automatique',
      'Portail de recrutement de talents (coiffeurs, estheticiennes) avec gestion de profils',
      'Module analytics avec KPIs, graphiques et suivi de performance',
    ],
    metrics: [
      { label: 'Salons actifs', value: '100+' },
      { label: 'RDV geres/mois', value: '5K+' },
      { label: 'Fichiers source', value: '150+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    images: ['/images/6 - Peach plein + texte dark (transparent)(2).png'],
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
