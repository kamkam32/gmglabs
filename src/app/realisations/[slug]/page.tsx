import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetailPage from './ProjectDetailPage'
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects'
import { generateCreativeWorkJsonLd } from '@/lib/seo'

export function generateStaticParams() {
  return getProjectSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} - Etude de cas`,
    description: project.shortDescription,
    keywords: project.technologies.join(', '),
    alternates: { canonical: `https://www.gmg-labs.com/realisations/${project.slug}` },
    openGraph: {
      title: `${project.title} - GMG Labs`,
      description: project.shortDescription,
      url: `https://www.gmg-labs.com/realisations/${project.slug}`,
      siteName: 'GMG Labs',
      locale: 'fr_MA',
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${project.title} - GMG Labs` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - GMG Labs`,
      description: project.shortDescription,
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
