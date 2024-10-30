import AllBlogs from '@/components/AllBlogs'
import Header from '@/components/Header'
import { getAllArticles } from '@/lib/data'
import BackButton from '@/components/BackButton'

export default async function Page() {
  const posts = (await getAllArticles()) || []
  return (
    <div className='bg-light dark:bg-dark flex-grow  p-2 w-11/12 mx-auto md:max-w-[800px] mt-20'>
      <Header />
      <BackButton />  
      <AllBlogs blogPosts={posts} />
    </div>
  )
}
