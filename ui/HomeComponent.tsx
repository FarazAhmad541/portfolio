'use client'

import { Frontmatter } from '@/lib/definitions'
import { containerVariants, itemVariants } from '@/utils/framerMotionVariants'
import { Separator } from '@radix-ui/react-menubar'
import { motion, useInView } from 'framer-motion'
import { MonitorSmartphone, MoveRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import profile from '../assets/Faraz.png'
import BlogsList from './BlogsList'

type HomeProps = {
  blogPosts: Frontmatter[]
}

export default function Home({ blogPosts }: HomeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='bg-dark grid grid-cols-6 gap-5 md:grid-cols-12 md:gap-5 lg:grid-cols-12 lg:gap-5 p-2 w-11/12 mx-auto md:max-w-[800px] mt-20'
    >
      <motion.div
        variants={itemVariants}
        className='col-span-6 md:col-span-12 lg:col-span-12'
      >
        <div className='flex items-center gap-5 w-full justify-start'>
          <Image
            src={profile}
            alt='Faraz'
            width={50}
            height={50}
            className='rounded-full'
          />
          <div className=''>
            <h1 className='text-lg leading-none font-bold text-light'>
              Faraz Ahmad.
            </h1>
            <div className='flex gap-2 items-center'>
              <MonitorSmartphone
                width={15}
                height={15}
                className='mb-1'
                color='#bfbfbf'
              />
              <p className='text-secondaryLight text-sm leading-none'>
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='col-span-6 md:col-span-12 lg:col-span-12'
      >
        <p className='text-light text-base leading-[1.6rem] font-base'>
          A passionate web developer with a knack for crafting sleek,
          responsive, and user-friendly experiences. Armed with React and
          Next.js, I turn complex problems into elegant solutions. Always eager
          to expand my skill set and bring fresh, innovative approaches to my
          work.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center'
      >
        <SocialLink href='https://github.com/FarazAhmad541' label='Github' />
        <SocialLink
          href='https://www.linkedin.com/in/faraz-ahmad-fsd'
          label='LinkedIn'
        />
        <SocialLink href='mailto: faraz.ahmad.fsd@gmail.com' label='Email' />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center justify-between'
      >
        <p className='text-md font-semibold text-light'>
          The Stuff I Learned Along The Way
        </p>
        <div className='flex items-center gap-2 text-secondaryLight hover:text-light hover:transform hover:scale-105 cursor-pointer transition-transform'>
          <p className='text-sm'>See All</p>
          <MoveRight className='w-5 h-5' />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='col-span-6 md:col-span-12 lg:col-span-12'
      >
        <Separator className=' bg-secondaryLight h-px' />
      </motion.div>
      <BlogsList blogPosts={blogPosts} />
    </motion.div>
  )
}
function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center gap-2 text-secondaryLight hover:text-light '
    >
      {label}
    </a>
  )
}
