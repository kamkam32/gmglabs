import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogArticlePage from './BlogArticlePage'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { generateArticleJsonLd } from '@/lib/seo'
import { getLocaleDictionary } from '@/i18n/getLocaleFromHeaders'

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { locale } = await getLocaleDictionary()
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  const baseUrl = 'https://www.gmg-labs.com'
  const path = `/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: { fr: `${baseUrl}${path}`, en: `${baseUrl}/en${path}` },
    },
    openGraph: {
      title: `${post.title} - GMG Labs Blog`,
      description: post.excerpt,
      url: locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      siteName: 'GMG Labs',
      locale: locale === 'fr' ? 'fr_MA' : 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${post.title} - GMG Labs` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    ...generateArticleJsonLd({
      title: post.title,
      description: post.excerpt,
      url: `https://www.gmg-labs.com/blog/${post.slug}`,
      date: post.date,
      author: post.author,
      image: post.image || undefined,
    }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticlePage post={post} />
    </>
  )
}
