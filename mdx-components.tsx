/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { ComponentProps, PropsWithChildren } from 'react'

function h1({ children }: PropsWithChildren<object>) {
  return <h1 className='text-light font-bold text-3xl '>{children}</h1>
}

function h2({ children }: PropsWithChildren<object>) {
  return <h2 className='text-2xl font-bold mt-8 text-light'>{children}</h2>
}

function h3({ children }: PropsWithChildren<object>) {
  return <h3 className='text-xl font-bold '>{children}</h3>
}

function h4({ children }: PropsWithChildren<object>) {
  return <h4 className='text-lg font-bold '>{children}</h4>
}

function h5({ children }: PropsWithChildren<object>) {
  return <h5 className='text-base font-bold text-light '>{children}</h5>
}

function h6({ children }: PropsWithChildren<object>) {
  return <h6 className='text-sm font-bold text-light '>{children}</h6>
}

function p({ children }: PropsWithChildren<object>) {
  return (
    <p className='text-base p-2 text-secondaryLigh font-normal leading-7 tracking-wide'>
      {children}
    </p>
  )
}
function li({ children }: PropsWithChildren<object>) {
  return <li className='text-base my-4 leading-7 tracking-wide'>{children}</li>
}

function InfoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-secondaryDark rounded-md p-4 my-4 text-light leading-7 tracking-wide'>
      {children}
    </div>
  )
}

function ol({ children }: PropsWithChildren<object>) {
  return (
    <ol className='text-base list-decimal pl-5 text-light font-bold leading-7 tracking-wide'>
      {children}
    </ol>
  )
}
function ul({ children }: PropsWithChildren<object>) {
  return (
    <ul className='text-base list-disc pl-5 leading-7 tracking-wide'>
      {children}
    </ul>
  )
}
function pre({ children }: PropsWithChildren<object>) {
  return <pre className='text-base'>{children}</pre>
}

type ComponentType<T extends keyof JSX.IntrinsicElements> = ComponentProps<T>

// For the anchor component, we need to properly type it to match MDX expectations
function a(props: ComponentType<'a'>) {
  return (
    <a
      {...props}
      className='text-light hover:text-ligth hover:underline cursor-pointer'
      target='_blank'
    >
      {props.children}
    </a>
  )
}

export const customeComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  ol,
  ul,
  pre,
  a,
  InfoBlock,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customeComponents,
  }
}
