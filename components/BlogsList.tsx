import { itemVariants } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type ParamsType = {
  blogPosts: {
    slug: string
    frontmatter: { title: string; createdAt: Date; metaDescription: string }
  }[]
}

export default function BlogsList({ blogPosts }: ParamsType) {
  return (
    <>
      {blogPosts.map((post, index: number) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className='w-full flex gap-5 items-center justify-between group'
        >
          <Link
            href={`/blogs/${post.slug}`}
            className='block cursor-pointer text-secondaryDark dark:text-secondaryLight rounded-lg py-5 mt-2 transition-all hover:text-dark dark:hover:text-light'
          >
            <div className='flex justify-start items-start gap-5'>
              <div>
                <h2 className='text-dark dark:text-light'>
                  {post.frontmatter.title}
                </h2>
                <p>{post.frontmatter.createdAt.toISOString().slice(0, 10)}</p>
              </div>
              <ArrowRight className='w-6 h-6 transition-transform duration-300 group-hover:transform group-hover:-rotate-45 ease-in-out' />
            </div>
            <p className='mt-3'>{post.frontmatter.metaDescription}</p>
          </Link>
        </motion.div>
      ))}
    </>
  )
}
