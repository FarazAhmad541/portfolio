import HoemComponent from '@/ui/HomeComponent'
import { getMdxFrontmatter } from '@/utils/getMdxFrontmatter'
export default async function Home() {
  const blogPosts = await getMdxFrontmatter()

  return (
    <>
      <HoemComponent blogPosts={blogPosts} />
    </>
  )
}
