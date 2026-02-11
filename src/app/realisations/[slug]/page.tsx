import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetailPage from './ProjectDetailPage'
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects'
import { generateCreativeWorkJsonLd } from '@/lib/seo'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export function generateStaticParams() {
  return getProjectSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { locale, dict } = await getLocaleDictionary()
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  const projectDict = dict.projects[project.slug as keyof typeof dict.projects]
  const title = projectDict?.title || project.title
  const description = projectDict?.shortDescription || project.shortDescription
  const baseUrl = 'https://www.gmg-labs.com'
  const path = `/realisations/${project.slug}`

  return {
    title: `${title} - ${locale === 'fr' ? 'Étude de cas' : 'Case Study'}`,
    description,
    keywords: project.technologies.join(', '),
    alternates: {
      canonical: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: { fr: `${baseUrl}${path}`, en: `${baseUrl}/en${path}` },
    },
    openGraph: {
      title: `${title} - GMG Labs`,
      description,
      url: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      siteName: 'GMG Labs',
      locale: locale === 'fr' ? 'fr_MA' : 'en_US',
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${title} - GMG Labs` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - GMG Labs`,
      description,
      images: ['/og-image.png'],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    ...generateCreativeWorkJsonLd({
      name: project.title,
      description: project.description,
      url: `https://www.gmg-labs.com/realisations/${project.slug}`,
      technologies: project.technologies,
    }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetailPage project={project} />
    </>
  )
}
