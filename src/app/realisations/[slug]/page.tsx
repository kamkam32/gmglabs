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
    alternates: { canonical: `https://www.gmglabs.ma/realisations/${project.slug}` },
    openGraph: {
      title: `${project.title} - GMG Labs`,
      description: project.shortDescription,
      url: `https://www.gmglabs.ma/realisations/${project.slug}`,
      siteName: 'GMG Labs',
      locale: 'fr_MA',
      type: 'article',
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
      url: `https://www.gmglabs.ma/realisations/${project.slug}`,
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
