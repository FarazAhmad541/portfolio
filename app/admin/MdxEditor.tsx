'use client'
import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import ArticleForm from './ArticleForm'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })
export default function MdxEditor() {
  const [value, setValue] = useState('')

  return (
    <div className='max-w-4xl'>
      <MDEditor value={value} onChange={(value) => setValue(value || '')} />

      <ArticleForm />
    </div>
  )
}
