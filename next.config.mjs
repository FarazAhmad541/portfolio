import createMDX from "@next/mdx";
import { rehypePrettyCode } from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import mdxRemoveImports from "next-remove-imports";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "aurora-x",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [[remarkFrontmatter], [remarkMdxFrontmatter]],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

const removeImports = mdxRemoveImports({})();
export { removeImports };

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
