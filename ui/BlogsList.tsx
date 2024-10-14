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
        <motion.div key={index} variants={itemVariants}>
          <Link href={`/blog/${post.slug}`} className='block'>
            <h2 className='text-white'>{post.title}</h2>
          </Link>
        </motion.div>
      ))}
    </>
  )
}
