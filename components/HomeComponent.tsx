'use client'

import { containerVariants, itemVariants } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { MonitorSmartphone, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import profile from '../assets/Faraz.png'
import BlogsList from './BlogsList'
import ThemeSwitch from './ThemeSwitch'

type HomeProps = {
  blogPosts: {
    slug: string
    frontmatter: { title: string; createdAt: Date; metaDescription: string }
  }[]
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
      className='bg-light dark:bg-dark flex-grow  p-2 w-11/12 mx-auto md:max-w-[800px] mt-20'
    >
      <div className='flex flex-col gap-5 justify-start items-start w-full'>
        <motion.div
          variants={itemVariants}
          className='w-full flex items-center justify-between'
        >
          <div className='flex items-center gap-5 w-full justify-start'>
            <Image
              src={profile}
              alt='Faraz'
              width={50}
              height={50}
              className='rounded-full filter-blur'
            />
            <div className='flex flex-col justify-start items-start gap-0 mt-2'>
              <h1 className='text-lg leading-none font-bold text-dark dark:text-light'>
                Faraz Ahmad.
              </h1>
              <div className='flex gap-2 items-center'>
                <div className='w-4 h-4 mb-1 text-secondaryDark dark:text-secondaryLight'>
                  <MonitorSmartphone />
                </div>
                <p className='text-secondaryDarkdark:text-secondaryLight text-sm leading-8'>
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
          <ThemeSwitch />
        </motion.div>

        <motion.div variants={itemVariants} className='w-full '>
          <p className='text-dark dark:text-light text-base leading-[1.6rem] font-normal'>
            A web developer with a knack for crafting sleek, responsive, and
            user-friendly experiences. Armed with React and Next.js, I turn
            complex problems into elegant solutions. Always eager to expand my
            skill set and bring fresh, innovative approaches to my work.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='w-full  flex gap-5 items-center'
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
          className='w-full  flex gap-5 items-center justify-between'
        >
          <p className='text-md font-bold text-darkdark:text-light'>
            The Stuff I Learned Along The Way
          </p>
          <Link
            href='/blogs'
            className='flex items-center gap-2 text-secondaryDark dark:text-secondaryLight hover:text-dark dark:hover:text-light hover:transform hover:scale-105 cursor-pointer transition-transform'
          >
            <p className='text-sm'>See All</p>
            <MoveRight className='w-5 h-5' />
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='w-full h-px bg-secondaryDark dark:bg-secondaryLight'
        ></motion.div>
        <BlogsList blogPosts={blogPosts} />
      </div>
      <svg width='0' height='0'>
        <filter id='blur-and-scale' y='-50%' x='-50%' width='200%' height='200'>
          <feGaussianBlur
            in='SourceGraphic'
            stdDeviation='8'
            result='blurred'
          />
          <feColorMatrix type='saturate' values='4' />
          <feComposite in='SourceGraphic' operator='over' />
        </filter>
      </svg>
    </motion.div>
  )
}
function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center gap-2 text-secondaryDark hover:text-dark dark:text-secondaryLight dark:hover:text-light '
    >
      {label}
    </a>
  )
}
