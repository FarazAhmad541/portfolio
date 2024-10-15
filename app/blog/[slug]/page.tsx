import { customeComponents } from '@/mdx-components'
import { getMdxFrontmatter } from '@/utils/getMdxFrontmatter'
import fs from 'fs'
import matter from 'gray-matter'
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
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { content } = matter(fileContents)

  return (
    <div className='bg-dark grid grid-cols-6 gap-5 md:grid-cols-12 md:gap-5 lg:grid-cols-12 lg:gap-5 p-2 w-11/12 mx-auto md:max-w-[800px] mt-20'>
      <MDXRemote source={content} components={customeComponents} />
    </div>
  )
}
