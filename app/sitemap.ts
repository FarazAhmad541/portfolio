import { getAllArticles } from '@/lib/data'

export default async function sitemap() {
  const baseUrl = 'https://madebyfaraz.vercel.app'

  // Get all articles
  const posts = await getAllArticles()
  const urls =
    posts.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.frontmatter.createdAt,
    })) ?? []

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    ...urls,
  ]
}
