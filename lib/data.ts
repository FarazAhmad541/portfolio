'use server'
import { ArticleSchema } from '@/lib/definitions'
import { prisma } from '@/lib/prisma'
export const getPosts = async () => {
  console.log('GETTING POSTS')
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
  console.log('GETTING SLUGS')
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
  console.log('GETTING POST BY SLUG')
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

export async function submitArticle(article: unknown) {
  const parsedArticle = ArticleSchema.parse(article)
  try {
    const newArticle = await prisma.article.create({
      data: parsedArticle,
    })
    return newArticle
  } catch (error) {
    console.log(error)
    return error
  }
}
