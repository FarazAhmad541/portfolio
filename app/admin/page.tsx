import AllBlogsList from './_components/AllBlogsList'
import { getAllBlogs } from '@/lib/data'
export default async function Page() {
  const blogs = (await getAllBlogs()) || []
  return (
    <div className='flex-grow'>
      <AllBlogsList blogs={blogs} />
    </div>
  )
}
