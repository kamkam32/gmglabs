export interface Project {
  slug: string
  title: string
  category: 'web' | 'mobile' | 'ia' | 'web+mobile'
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
