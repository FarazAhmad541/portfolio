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

export type BlogsListProps = {
  title: string
  metaDescription: string
  createdAt: Date
  slug: string
}

export type BlogType = {
  id: string
  title: string
  slug: string
  createdAt: Date
  metaDescription: string
  body: string
  published: boolean
}
