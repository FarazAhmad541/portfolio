import { Frontmatter } from '@/lib/definitions'
import { itemVariants } from '@/utils/framerMotionVariants'
import { motion } from 'framer-motion'
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
          className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center justify-between'
        >
          <Link
            href={`/blog/${post.slug}`}
            className='block cursor-pointer bg-dark rounded-lg p-5 mt-2 transition-all hover:scale-105 hover:bg-neutral-950'
          >
            <h2 className='text-white'>{post.title}</h2>
            <p>{post.date}</p>
            <p className='mt-3'>{post.description}</p>
          </Link>
        </motion.div>
      ))}
    </>
  )
}
