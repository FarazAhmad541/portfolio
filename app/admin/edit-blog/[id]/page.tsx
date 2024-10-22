import { getBlogById } from '@/lib/data'
import ArticleForm from '../../_components/ArticleForm'
type EditBlogParams = {
  id: string
}

export default async function EditBlog({ params }: { params: EditBlogParams }) {
  const id = params.id
  const blog = (await getBlogById(id)) || null
  return <ArticleForm blog={blog} />
}
