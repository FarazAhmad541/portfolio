'use server'
import { ArticleSchema, BlogType } from '@/lib/definitions'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
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

export const getAllBlogs = async () => {
  try {
    const blogs = await prisma.article.findMany()
    return blogs
  } catch (e) {
    console.log(e)
  }
}

export const deleteBlogById = async (id: string) => {
  try {
    await prisma.article.delete({
      where: {
        id: id,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export const getBlogById = async (id: string) => {
  try {
    const blog = await prisma.article.findUnique({
      where: {
        id: id,
      },
    })
    return blog
  } catch (error) {
    console.log(error)
  }
}

export const updateBlogById = async (article: BlogType) => {
  const updatedArticle = {
    ...article,
    createdAt: article.createdAt.toISOString(),
  }
  const parsedArticle = ArticleSchema.parse(updatedArticle)
  try {
    const updatedBlog = await prisma.article.update({
      where: {
        id: parsedArticle.id,
      },
      data: {
        title: parsedArticle.title,
        slug: parsedArticle.slug,
        metaDescription: parsedArticle.metaDescription,
        published: parsedArticle.published,
        body: parsedArticle.body,
        createdAt: parsedArticle.createdAt,
      },
    })
  } catch (error) {
    console.log('Error Updating Blog: ', error)
    throw new Error('Error Updating Blog')
  }
  revalidatePath('/admin')
  redirect('/admin')
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
  }
  revalidatePath('/admin')
  redirect('/admin')
}
