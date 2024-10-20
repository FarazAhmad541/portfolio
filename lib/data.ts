'use server'
import { prisma } from '@/lib/prisma'
export const getPosts = async () => {
  try {
    const posts = await prisma.article.findMany({
      where: { published: true },
      select: {
        title: true,
        slug: true,
        metaDescription: true,
        createdAt: true,
      },
    })
    return posts
  } catch (e) {
    console.log(e)
  }
}

export const getSlugs = async () => {
  try {
    const slugs = await prisma.article.findMany({
      select: {
        slug: true,
      },
    })
    return slugs
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getPostBySlug = async (slug: string) => {
  try {
    const post = prisma.article.findFirst({
      where: {
        slug: slug,
      },
    })
    return post
  } catch (e) {
    console.log(e)
  }
}
