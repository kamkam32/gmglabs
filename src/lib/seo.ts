export function generateOrganizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': 'https://www.gmglabs.ma/#organization',
    name: 'GMG Labs',
    url: 'https://www.gmglabs.ma',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.gmglabs.ma/logo.png',
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
      'https://www.linkedin.com/company/gmglabs',
      'https://www.instagram.com/gmglabs',
    ],
  }
}

export function generateWebSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': 'https://www.gmglabs.ma/#website',
    url: 'https://www.gmglabs.ma',
    name: 'GMG Labs',
    publisher: { '@id': 'https://www.gmglabs.ma/#organization' },
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
    provider: { '@id': 'https://www.gmglabs.ma/#organization' },
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
    publisher: { '@id': 'https://www.gmglabs.ma/#organization' },
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
    creator: { '@id': 'https://www.gmglabs.ma/#organization' },
    keywords: project.technologies.join(', '),
  }
}
