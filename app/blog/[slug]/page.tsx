import Header from '@/components/Header'
import { getPostBySlug, getSlugs } from '@/lib/data'
import { customeComponents } from '@/mdx-components'
import { MoveLeft } from 'lucide-react'
import { Metadata } from 'next'
import type { MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'

const options: import('rehype-pretty-code').Options = {
  theme: 'tokyo-night',
  keepBackground: false,
}

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs ?? []
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
    description: post.metaDescription,
    // Add any other metadata you want to include
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const content = post.body

  const mdxRemoteOptions: MDXRemoteOptions = {
    parseFrontmatter: false,

    mdxOptions: { rehypePlugins: [[rehypePrettyCode, options]] },
  }

  return (
    <div className=' flex flex-col justify-start items-start gap-2 p-2 w-11/12 mx-auto md:max-w-[800px] my-20 flex-grow'>
      <Header />
      <Link
        href='/'
        className='flex max-h-fit justify-start items-center w-fit pb-4 gap-5 text-secondaryLight hover:text-light cursor-pointer transition-transform col-span-full'
      >
        <MoveLeft />
        <p>Back To Home</p>
      </Link>

      <Suspense fallback={<div>Loading...</div>}>
        <MDXRemote
          source={content}
          components={customeComponents}
          options={mdxRemoteOptions}
        />
      </Suspense>
    </div>
  )
}
