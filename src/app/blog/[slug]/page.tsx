import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogArticlePage from './BlogArticlePage'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { generateArticleJsonLd } from '@/lib/seo'

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    alternates: { canonical: `https://www.gmglabs.ma/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} - GMG Labs Blog`,
      description: post.excerpt,
      url: `https://www.gmglabs.ma/blog/${post.slug}`,
      siteName: 'GMG Labs',
      locale: 'fr_MA',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
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
      url: `https://www.gmglabs.ma/blog/${post.slug}`,
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
