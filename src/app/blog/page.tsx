import { Metadata } from 'next'
import BlogListPage from './BlogListPage'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Actualites Tech, Web & IA',
  description: 'Articles et guides sur le developpement web, les applications mobiles et l\'intelligence artificielle. Conseils, tendances et retours d\'experience.',
  keywords: 'blog tech maroc, developpement web, intelligence artificielle, react, next.js, mobile, startup',
  alternates: { canonical: 'https://www.gmg-labs.com/blog' },
  openGraph: {
    title: 'Blog - GMG Labs',
    description: 'Articles et guides sur le dev web, mobile et l\'IA.',
    url: 'https://www.gmg-labs.com/blog',
    siteName: 'GMG Labs',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Page() {
  const posts = getAllPosts()
  return <BlogListPage posts={posts} />
}
