import { clsx, type ClassValue } from 'clsx'
import { easeInOut } from 'framer-motion'
import { MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { Inter, Roboto, Space_Grotesk } from 'next/font/google'
import rehypePrettyCode from 'rehype-pretty-code'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      easeInOut,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeInOut,
    },
  },
}

const options: import('rehype-pretty-code').Options = {
  theme: 'tokyo-night',
  keepBackground: false,
}

export const mdxRemoteOptions: MDXRemoteOptions = {
  parseFrontmatter: false,

  mdxOptions: { rehypePlugins: [[rehypePrettyCode, options]] },
}
