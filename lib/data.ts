'use server'
import { PrismaClient } from '@prisma/client'
export const getPosts = async () => {
  const prisma = new PrismaClient()
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
  } finally {
    prisma.$disconnect()
  }
}

export const getSlugs = async () => {
  const prisma = new PrismaClient()
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
  } finally {
    prisma.$disconnect()
  }
}

export const getPostBySlug = async (slug: string) => {
  const prisma = new PrismaClient()
  try {
    const post = prisma.article.findFirst({
      where: {
        slug: slug,
      },
    })
    return post
  } catch (e) {
    console.log(e)
  } finally {
    prisma.$disconnect()
  }
}
