import Header from '@/components/Header'
import { getAllArticles, getArticleBySlug } from '@/lib/data'
import { customeComponents } from '@/mdx-components'
import matter from 'gray-matter'
import { MoveLeft } from 'lucide-react'
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import rehypePrettyCode from 'rehype-pretty-code'

const rehypeOptions: import('rehype-pretty-code').Options = {
  theme: 'tokyo-night',
  keepBackground: false,
}

const mdxRemoteOptions: MDXRemoteOptions = {
  parseFrontmatter: false,

  mdxOptions: { rehypePlugins: [[rehypePrettyCode, rehypeOptions]] },
}

export async function generateStaticParams() {
  const posts = await getAllArticles()
  return posts.map((post) => ({
    slug: post.slug,
  }))
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
