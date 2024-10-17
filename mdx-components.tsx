/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { PropsWithChildren } from 'react'

function h1({ children }: PropsWithChildren<object>) {
  return (
    <h1 className='text-light font-bold text-3xl col-span-full'>{children}</h1>
  )
}

function h2({ children }: PropsWithChildren<object>) {
  return <h2 className='text-2xl font-bold mt-8 col-span-full'>{children}</h2>
}

function h3({ children }: PropsWithChildren<object>) {
  return <h3 className='text-xl font-bold col-span-full'>{children}</h3>
}

function h4({ children }: PropsWithChildren<object>) {
  return <h4 className='text-lg font-bold col-span-full'>{children}</h4>
}

function h5({ children }: PropsWithChildren<object>) {
  return <h5 className='text-base font-bold col-span-full'>{children}</h5>
}

function h6({ children }: PropsWithChildren<object>) {
  return <h6 className='text-sm font-bold col-span-full'>{children}</h6>
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
function pre({ children }: PropsWithChildren<object>) {
  return <pre className='text-base col-span-full'>{children}</pre>
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
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customeComponents,
  }
}
