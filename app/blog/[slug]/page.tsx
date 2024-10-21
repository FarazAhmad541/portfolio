import Header from '@/components/Header'
import { getPostBySlug, getSlugs } from '@/lib/data'
import { mdxRemoteOptions } from '@/lib/utils'
import { customeComponents } from '@/mdx-components'
import { MoveLeft } from 'lucide-react'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

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

  return (
    <div className='bg-dark grid grid-cols-6 gap-5 md:grid-cols-12 md:gap-5 lg:grid-cols-12 lg:gap-5 p-2 w-11/12 mx-auto md:max-w-[800px] my-20 flex-grow'>
      <div className='max-h-fit'>
        <Header />
        <Link
          href='/'
          className='flex justify-start max-h-5 items-center w-fit pb-4 gap-5 text-secondaryLight hover:text-light cursor-pointer transition-transform col-span-full'
        >
          <MoveLeft />
          <p>Back To Home</p>
        </Link>
      </div>
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
