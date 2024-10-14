import createMDX from '@next/mdx'
import { rehypePrettyCode } from 'rehype-pretty-code'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [[remarkFrontmatter], [remarkMdxFrontmatter]],
    rehypePlugins: [[rehypePrettyCode]],
  },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
