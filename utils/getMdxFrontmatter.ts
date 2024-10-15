import { Frontmatter } from '@/lib/definitions'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getMdxFrontmatter(): Frontmatter[] {
  const contentDirectory = path.join(process.cwd(), 'content')
  const filenames = fs.readdirSync(contentDirectory)

  const frontmatterArray = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(contentDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        ...data,
        filename,
      } as Frontmatter
    })

  return frontmatterArray
}
