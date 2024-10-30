import BackButton from '@/components/BackButton'
import Header from '@/components/Header'
import { getAllArticles, getArticleBySlug } from '@/lib/data'
import { customeComponents } from '@/mdx-components'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { mdxRemoteOptions } from '../../../lib/utils'

export async function generateStaticParams() {
  const posts = await getAllArticles()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getArticleBySlug(params.slug)
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.metaDescription,
    keywords: post.frontmatter.keywords,
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const { source } = await getArticleBySlug(slug)

  const { content } = matter(source)

  return (
    <div className=' flex flex-col justify-start items-start gap-2 p-2 w-11/12 mx-auto md:max-w-[800px] my-20 flex-grow'>
      <Header />
      <BackButton />
      <MDXRemote
        source={content}
        components={customeComponents}
        options={mdxRemoteOptions}
      />
    </div>
  )
}
