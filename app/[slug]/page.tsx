import Header from '@/components/Header'
import { getAllArticles, getArticleBySlug } from '@/lib/data'
import { customeComponents } from '@/mdx-components'
import matter from 'gray-matter'
import { MoveLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import { mdxRemoteOptions } from '../../lib/utils'

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
      <Link
        href='/'
        className='flex max-h-fit justify-start items-center w-fit pb-4 gap-5 text-secondaryDark hover:text-dark dark:text-secondaryLight dark:hover:text-light cursor-pointer transition-transform col-span-full'
      >
        <MoveLeft />
        <p>Back To Home</p>
      </Link>
      <MDXRemote
        source={content}
        components={customeComponents}
        options={mdxRemoteOptions}
      />
    </div>
  )
}
