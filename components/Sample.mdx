# Create Your Own Blog Using Next.js and MDX
In this article, we will learn how to create a blog using Next.js and MDX. 
We will cover the basics of using MDX, how to create a custom component, 
and how to use MDX with a remote source.
## Why use Markdown?
Markdown is a simple and easy-to-use markup language that can help you 
format a document easily. It is one of the easiest ways to create a simple blog 
or any text-heavy page. Most of the documentation of modern languages, libraries, and 
frameworks is just markdown pages hosted on GitHub or some other database and then rendered 
on their website using one of the Markdown-based frameworks like MDX, Markdoc, etc.

One of the greatest benefits of this approach of creating text-heavy pages is that you don't have to mess with the website's code every time you need to make changes to the content on the page. You just open the document in any text editor, make the changes, save it, and it will be reflected on your website.
## Why did I choose MDX ?

- MDX is a very powerful markdown formatter that lets you render markdown files both from local project repositories and also from some remote source if you choose to host your markdown files on some external source like GitHub Pages or some database.
- One other benefit of using MDX is that it lets you render React Components in between the content of the pages, and you can also use the MDX page or content as you would use a regular React Component, i.e., import it and use anywhere in the React code as you would use any React component.
- The third benefit of this approach is that there is a vast ecosystem of plugins and extensions that let you add more functionalities to the formatter, i.e., code and syntax highlighting, parsing frontmatter, adding custom styles to the headings and text, etc., and many more.

<InfoBlock>The reason I chose to use Next.js for this project instead of React.js is
that the libraries that are used by Markdown formatters like MDX and
Markdoc to format markdown files are quite heavy, and shipping all that JS
code to client side on page request can slow down the page load speeds.</InfoBlock>


This problem is handled by Next.js out of the box as it allows to generate static pages at build time rather than at request time.

Now let's dive deep into how you can use MDX to render your own blogs from markdown files in Next.js.

 1. First, you need to install all the dependencies for the project.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

2. Update the *`next.config.mjs`* file at your Next.js project's root to configure it to use MDX:

```ts showLineNumbers {6,10,11,16} title="./next.config.mjs"
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
```

3. Create a new file *`mdx-component.tsx`* at the root level, i.e., at the same level as the *`app`* directory.

```ts showLineNumbers title="./mdx-components.tsx"
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
```
This file is required by MDX to properly render and format the markdown files.

It should be noted that MDX only adds basic styles to the text like size and font-weight,
but you can extend this functionality by adding custom elements in the object returned from the *`useMDXComponents`* as function shown below.

```tsx showLineNumbers title="./mdx-components.tsx (With Custom Components)"
import type { MDXComponents } from 'mdx/types'
import { PropsWithChildren } from 'react'

// Define your custom components here
function h1({ children }: PropsWithChildren<object>) {
  return (
    <h1 className='text-light font-bold text-3xl col-span-full'>{children}</h1>
  )
}
function p({ children }: PropsWithChildren<object>) {
  return <p className='text-base col-span-full'>{children}</p>
}
function li({ children }: PropsWithChildren<object>) {
  return <li className='text-base my-4'>{children}</li>
}
function ol({ children }: PropsWithChildren<object>) {
  return (
    <ol className='text-base list-decimal pl-5 col-span-full'>{children}</ol>
  )
}
function ul({ children }: PropsWithChildren<object>) {
  return <ul className='text-base col-span-full list-disc pl-5'>{children}</ul>
}

export const customeComponents = {
  h1,
  p,
  li,
  ol,
  ul,
}
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Dstruture the customeComponents object
    ...customeComponents,
  }
}
```
Here we have created a custom component for the *`h1`* tag and other tags that we want to use in our markdown file
and returned them from the *`useMDXComponents`* function.
By doing this, MDX will format these specific HTML tags according to the provided styles.

Another thing to keep in mind is that if you are using Tailwind CSS, in order to properly apply Tailwind styles to our custom elements,
the *`tailwind.config.ts`* needs to be modified accordingly as follows:

```ts showLineNumbers {11} title="./tailwind.config.ts"
import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],

  // Rest of the tailwind config settings

}
export default config
```
Without this the Tailwind classes present in *`mdx-component.tsx`* are removed as a result of tree shaking process at build time. 
This single line of code will tell the Next.js bundler to include the styles of our custom components in the final build.

4. Rendering MDX Component.

Now you are ready to create a new MDX component and render it in your application 
either as a standalone page or import it into your code as you would any other React component.

- ###### Using File Based Routing.

When using file-based routing, you can use MDX pages like any other page.


Create a new MDX page within the *`/app`* directory:

```plaintext showLineNumbers title="Project Structure"
my-project
├── app
│   └── mdx-page
│       └── page.(mdx/md)
|── mdx-components.(tsx/js)
└── package.json
```
Add the following to the `app/mdx-page/page.(mdx/md)` file:

```md showLineNumbers title="Custome MDX Page"
---
title: My MDX Page
---

# My MDX Page

This is my MDX page.
```
Now run a dev server and navigate to the page at *`/app/mdx-page`*. You should see the rendered markdown content.

You can also import and use the MDX component in your code like any other React component.

```tsx showLineNumbers title="Importing MDX Component"
import { MyMdxComponent } from './components/MyMdxComponent.mdx'

export default function Home() {
  return <MyMdxComponent />
}
```

## Using MDX-Remote.

If your markdown files are hosted on some external source like GitHub Pages or some database,
you can use the *`MDXRemote`* component to render the markdown files from the remote source.

- ###### First, you need to install the following package.

```bash
npm install next-mdx-remote-client/rsc
```
This package provides us a function *`MDXRemote`*. It is different from *`next-mdx-remote/rsc`* package mentioned in the Next.js docs, but has better comprehensive documentation and is more actively maintained.

To use this component, just use *`fetch`* or any other method to get the markdown in string format
and pass it to the *`source`* prop of the *`MDXRemote`* component.

```tsx showLineNumbers {1,7} title="Using MDX Remote"
import { MDXRemote } from 'next-mdx-remote-client/rsc'

export default async function Home() {
  const res = await fetch('https://yourexternalsource.com/markdown-file.md')
  const data = await res.json()
  const source = data.markdown
  return <MDXRemote source={source} />
}
```

One thing to keep in mind is that the *`MDXRemote`* component will not pick up our custom components from the *`useMDXComponents`* function.
We have to manually import these and pass them to the *`components`* prop of the *`MDXRemote`* component.

```tsx showLineNumbers {2,8} title="Using MDX Remote (With Custom Components)"
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { components } from '@/mdx-components'

export default async function Home() {
  const res = await fetch('https://yourexternalsource.com/markdown-file.md')
  const data = await res.json()
  const source = data.markdown
  return <MDXRemote source={source} components={components} />
}
```

These are the basics of using MDX with Next.js.

There are many more features and options that you can explore and use to enhance your markdown experience like adding and parsing frontmatter, adding syntax and code highlighting, etc.

These things are not explained here but will try to cover them in a future article.


Hope you find this article useful and learned something new from it.

If you like to look at some example code, this article is also written using the same methods and you can find the code on [Github repository](https://www.github.com/FarazAhmad541/portfolio.git).

Happy coding!
