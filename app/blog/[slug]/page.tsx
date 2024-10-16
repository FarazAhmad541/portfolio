import { customeComponents } from '@/mdx-components'
import { getMdxFrontmatter } from '@/utils/getMdxFrontmatter'
import { getPostBySlug } from '@/utils/getPostBySlug'
import fs from 'fs'
import matter from 'gray-matter'
import { Metadata } from 'next'
import type { MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { notFound } from 'next/navigation'
import path from 'path'
import rehypePrettyCode from 'rehype-pretty-code'

const options: import('rehype-pretty-code').Options = {
  theme: 'aurora-x',
  keepBackground: true,
}

export async function generateStaticParams() {
  const posts = await getMdxFrontmatter()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    // Add any other metadata you want to include
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  console.log(params)
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const filePath = path.join(process.cwd(), 'content', `${post.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { content } = matter(fileContents)

  const mdxRemoteOptions: MDXRemoteOptions = {
    parseFrontmatter: false,
    mdxOptions: { rehypePlugins: [[rehypePrettyCode, options]] },
  }

  return (
    <div className='bg-dark grid grid-cols-6 gap-5 md:grid-cols-12 md:gap-5 lg:grid-cols-12 lg:gap-5 p-2 w-11/12 mx-auto md:max-w-[800px] mt-20'>
      <MDXRemote
        source={content}
        components={customeComponents}
        options={mdxRemoteOptions}
      />
    </div>
  )
}
