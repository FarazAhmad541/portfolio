import { easeInOut } from 'framer-motion'
import { MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { Inter } from 'next/font/google'
import rehypePrettyCode from 'rehype-pretty-code'
export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      easeInOut,
    },
  },
}

const itemVariants = {
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

const rehypeOptions: import('rehype-pretty-code').Options = {
  theme: 'tokyo-night',
  keepBackground: false,
}

const mdxRemoteOptions: MDXRemoteOptions = {
  parseFrontmatter: false,

  mdxOptions: { rehypePlugins: [[rehypePrettyCode, rehypeOptions]] },
}

export { containerVariants, itemVariants, mdxRemoteOptions }
