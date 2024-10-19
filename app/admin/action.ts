'use server'

import { ArticleSchema } from '@/lib/definitions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
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
