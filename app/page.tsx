import HoemComponent from "@/ui/HomeComponent";
import { getMdxFrontmatter } from "@/utils/getMdxFrontmatter";
export default async function Home() {
  const blogPosts = getMdxFrontmatter();

  return (
    <>
      <HoemComponent blogPosts={blogPosts} />
    </>
  );
}
