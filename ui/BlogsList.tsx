import { Frontmatter } from '@/lib/definitions'
import { itemVariants } from '@/utils/framerMotionVariants'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type BlogsListProps = {
  blogPosts: Frontmatter[]
}

export default function BlogsList({ blogPosts }: BlogsListProps) {
  return (
    <>
      {blogPosts?.map((post: Frontmatter, index: number) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center justify-between group'
        >
          <Link
            href={`/blog/${post.slug}`}
            className='block cursor-pointer text-secondaryLight bg-dark rounded-lg py-5 mt-2 transition-all hover:text-light'
          >
            <div className='flex justify-start items-start gap-5'>
              <div>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </div>
              <ArrowRight className='w-6 h-6 transition-transform duration-300 group-hover:transform group-hover:-rotate-45 ease-in-out' />
            </div>
            <p className='mt-3'>{post.description}</p>
          </Link>
        </motion.div>
      ))}
    </>
  )
}
