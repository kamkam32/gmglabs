export function generateOrganizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': 'https://gmg-labs.com/#organization',
    name: 'GMG Labs',
    url: 'https://gmg-labs.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gmg-labs.com/logo.png',
    },
    description: 'Agence de developpement Web, Mobile et IA basee a Casablanca, Maroc.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-619-061215',
      contactType: 'customer service',
      availableLanguage: ['French', 'Arabic', 'English'],
    },
    sameAs: [
      'https://gmg-labs.com/',
      'https://www.linkedin.com/company/gmglabs',
      'https://www.instagram.com/gmglabs',
    ],
  }
}

export function generateWebSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': 'https://gmg-labs.com/#website',
    url: 'https://gmg-labs.com',
    name: 'GMG Labs',
    publisher: { '@id': 'https://gmg-labs.com/#organization' },
    inLanguage: 'fr-MA',
  }
}

export function generateServiceJsonLd(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { '@id': 'https://gmg-labs.com/#organization' },
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  url: string
  date: string
  author: string
  image?: string
}) {
  return {
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: { '@id': 'https://gmg-labs.com/#organization' },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image,
      },
    }),
  }
}

export function generateCreativeWorkJsonLd(project: {
  name: string
  description: string
  url: string
  technologies: string[]
}) {
  return {
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    creator: { '@id': 'https://gmg-labs.com/#organization' },
    keywords: project.technologies.join(', '),
  }
}
