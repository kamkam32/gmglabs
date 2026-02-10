import { Metadata } from 'next'
import BlogListPage from './BlogListPage'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Actualités Tech, Web & IA',
  description: 'Articles et guides sur le développement web, les applications mobiles et l\'intelligence artificielle. Conseils, tendances et retours d\'expérience.',
  keywords: 'blog tech maroc, développement web, intelligence artificielle, react, next.js, mobile, startup',
  alternates: { canonical: 'https://www.gmg-labs.com/blog' },
  openGraph: {
    title: 'Blog - GMG Labs',
    description: 'Articles et guides sur le dev web, mobile et l\'IA.',
    url: 'https://www.gmg-labs.com/blog',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GMG Labs - Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - GMG Labs',
    description: 'Articles et guides sur le dev web, mobile et l\'IA.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  const posts = getAllPosts()
  return <BlogListPage posts={posts} />
}
