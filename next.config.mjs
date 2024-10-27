import createMDX from '@next/mdx'
import { rehypePrettyCode } from 'rehype-pretty-code'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'aurora-x',
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
