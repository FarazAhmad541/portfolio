import HomeComponent from '@/components/HomeComponent'
import { getAllArticles } from '@/lib/data'

export default async function Home() {
  const posts = await getAllArticles()
  return (
    <>
      <HomeComponent blogPosts={posts} />
    </>
  )
}
