export interface Frontmatter {
  title: string
  slug: string
  date: string
  description: string
  filename: string
}
export type BlogProps = {
  blog: {
    content: string
  }
}
