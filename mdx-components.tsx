/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { PropsWithChildren } from 'react'

function h1({ children }: PropsWithChildren<object>) {
  return (
    <h1 className='text-white font-bold col-span-6 md:col-span-12 lg:col-span-12 text-3xl'>
      {children}
    </h1>
  )
}

function h2({ children }: PropsWithChildren<object>) {
  return (
    <h2 className='text-2xl font-bold col-span-6 md:col-span-12 lg:col-span-12 mt-8'>
      {children}
    </h2>
  )
}

function h3({ children }: PropsWithChildren<object>) {
  return (
    <h3 className='text-xl font-bold col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </h3>
  )
}

function h4({ children }: PropsWithChildren<object>) {
  return (
    <h4 className='text-lg font-bold col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </h4>
  )
}

function h5({ children }: PropsWithChildren<object>) {
  return (
    <h5 className='text-base font-bold col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </h5>
  )
}

function h6({ children }: PropsWithChildren<object>) {
  return (
    <h6 className='text-sm font-bold col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </h6>
  )
}

function p({ children }: PropsWithChildren<object>) {
  return (
    <p className='text-base col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </p>
  )
}
function li({ children }: PropsWithChildren<object>) {
  return (
    <li className='text-base col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </li>
  )
}
function ol({ children }: PropsWithChildren<object>) {
  return (
    <ol className='text-base col-span-6 md:col-span-12 lg:col-span-12 list-decimal pl-5'>
      {children}
    </ol>
  )
}
function ul({ children }: PropsWithChildren<object>) {
  return (
    <ul className='text-base col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </ul>
  )
}
function pre({ children }: PropsWithChildren<object>) {
  return (
    <pre className='text-base col-span-6 md:col-span-12 lg:col-span-12'>
      {children}
    </pre>
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
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customeComponents,
  }
}
