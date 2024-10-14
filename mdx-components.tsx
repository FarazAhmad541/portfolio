/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'

function h1({ children }: any) {
  return (
    <h1 className='text-white font-bold' style={{ fontSize: '3.5rem' }}>
      {children}
    </h1>
  )
}

function h2({ children }: any) {
  return <h2 className='text-2xl font-bold'>{children}</h2>
}

function h3({ children }: any) {
  return <h3 className='text-xl font-bold'>{children}</h3>
}

function h4({ children }: any) {
  return <h4 className='text-lg font-bold'>{children}</h4>
}

function h5({ children }: any) {
  return <h5 className='text-base font-bold'>{children}</h5>
}

function h6({ children }: any) {
  return <h6 className='text-sm font-bold'>{children}</h6>
}

function p({ children }: any) {
  return <p className='text-base'>{children}</p>
}

function a({ href, children }: any) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-500 hover:underline'
    >
      {children}
    </a>
  )
}

function code({ children }: any) {
  return <code className='text-sm p-10 rounded-md bg-gray-100'>{children}</code>
}

const customeComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  code,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customeComponents,
  }
}
