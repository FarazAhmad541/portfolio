import { getPosts } from '@/lib/data'
import HomeComponent from '@/components/HomeComponent'

export default async function Home() {
  const blogPosts = await getPosts()

  if (!blogPosts) {
    console.log('No posts found')
    return
  }

  return (
    <>
      <HomeComponent blogPosts={blogPosts} />
    </>
  )
}
