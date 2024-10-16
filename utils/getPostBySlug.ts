import { getMdxFrontmatter } from './getMdxFrontmatter'
export async function getPostBySlug(slug: string) {
  const posts = await getMdxFrontmatter()
  return posts.find((post) => post.slug === slug)
}
