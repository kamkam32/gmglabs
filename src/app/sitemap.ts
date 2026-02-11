import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/blog'
import { getProjectSlugs } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gmg-labs.com'

  const staticPaths = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/services/web', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/mobile', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/ia', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/performance', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/realisations', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/tarifs', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/a-propos', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/mentions-legales', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const staticPages = staticPaths.flatMap((page) => [
    {
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          fr: `${baseUrl}${page.path}`,
          en: `${baseUrl}/en${page.path}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}${page.path}`,
          en: `${baseUrl}/en${page.path}`,
        },
      },
    },
  ])

  const blogPages = getPostSlugs().flatMap(slug => [
    {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/${slug}`,
          en: `${baseUrl}/en/blog/${slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/${slug}`,
          en: `${baseUrl}/en/blog/${slug}`,
        },
      },
    },
  ])

  const projectPages = getProjectSlugs().flatMap(slug => [
    {
      url: `${baseUrl}/realisations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/realisations/${slug}`,
          en: `${baseUrl}/en/realisations/${slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/realisations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/realisations/${slug}`,
          en: `${baseUrl}/en/realisations/${slug}`,
        },
      },
    },
  ])

  return [...staticPages, ...blogPages, ...projectPages]
}
