import { z } from 'zod'

// Define the Zod schema for ArticleSchema
export const ArticleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  createdAt: z.string().optional(),
  metaDescription: z.string().min(1, 'Meta description is required'),
  body: z.string().min(1, 'Body is required'),
  published: z.boolean().optional(),
})
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
