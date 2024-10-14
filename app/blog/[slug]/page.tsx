import { getMdxFrontmatter } from '@/utils/getMdxFrontmatter'
import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import path from 'path'

export async function generateStaticParams() {
  const posts = await getMdxFrontmatter()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPostBySlug(slug: string) {
  const posts = await getMdxFrontmatter()
  return posts.find((post) => post.slug === slug)
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  console.log('PARAMS: ', params)

  if (!post) {
    notFound()
  }

  const filePath = path.join(process.cwd(), 'content', `${post.slug}.mdx`)

  // Read the MDX file content using fs (file system)
  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <article className='prose dark:prose-invert mx-auto'>
      <h1>{post.title}</h1>
      <MDXRemote source={source} />
    </article>
  )
}
