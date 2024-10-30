'use client'
import BlogsList from '@/components/BlogsList'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants } from '../lib/utils'

type ParamsType = {
  blogPosts: {
    slug: string
    frontmatter: { title: string; createdAt: Date; metaDescription: string }
  }[]
}

export default function AllBlogs({ blogPosts }: ParamsType) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='bg-light dark:bg-dark w-full flex-grow mx-auto md:max-w-[800px] mt-10'
    >
      <BlogsList blogPosts={blogPosts} />
    </motion.div>
  )
}
