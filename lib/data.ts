'use server'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const articlesDirectory = path.join(process.cwd(), 'articles')

export async function getAllArticles(): Promise<
  {
    slug: string
    frontmatter: { title: string; createdAt: Date; metaDescription: string }
  }[]
> {
  const files = getAllFiles(articlesDirectory)
  const posts = files.map((filePath) => {
    const slug = filePath
      .replace(articlesDirectory, '')
      .replace(/^\//, '')
      .replace(/\.mdx$/, '')
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { data: frontmatter } = matter(fileContents)
    return {
      slug,
      frontmatter,
    }
  })

  return posts as {
    slug: string
    frontmatter: { title: string; createdAt: Date; metaDescription: string }
  }[]
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content: source, data: frontmatter } = matter(fileContents)
  return {
    frontmatter,
    source,
  }
}

function getAllFiles(dir: string) {
  const files = fs.readdirSync(dir)
  let allFiles: string[] = []

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      allFiles = allFiles.concat(getAllFiles(filePath))
    } else if (path.extname(file) === '.mdx') {
      allFiles.push(filePath)
    }
  })

  return allFiles
}
