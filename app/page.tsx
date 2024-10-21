import HomeComponent from '@/components/HomeComponent'
import { getPosts } from '@/lib/data'

export default async function Home() {
  const blogPosts = (await getPosts()) || []

  return (
    <>
      <HomeComponent blogPosts={blogPosts} />
    </>
  )
}
