'use client'

import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'

import { submitArticle, updateBlogById } from '@/lib/data'
import { BlogType } from '@/lib/definitions'
import { useAuth } from '@clerk/nextjs'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'

type PropType = {
  blog: BlogType | null
}

const MDXditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const initialState = {
  id: '',
  title: '',
  slug: '',
  createdAt: new Date(),
  metaDescription: '',
  body: '',
  published: false,
}

export default function ArticleForm({ blog }: PropType) {
  const [article, setArticle] = useState<BlogType>(blog || initialState)
  const { signOut } = useAuth()

  const { mutate: submit, isPending: submitPending } = useMutation({
    mutationFn: submitArticle,
    onSuccess: () => console.log('success'),
  })

  const { mutate: updateBlog, isPending: updatePending } = useMutation({
    mutationFn: updateBlogById,
    onSuccess: () => {
      console.log('Blog Updated Succesfully')
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setArticle((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setArticle((prev) => ({ ...prev, createdAt: date || new Date() }))
  }

  const handlePublishedChange = (checked: boolean) => {
    setArticle((prev) => ({ ...prev, published: checked }))
  }

  const handleContentChange = (value: string | undefined) => {
    setArticle((prev) => ({ ...prev, body: value || '' }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (blog) {
      updateBlog(article)
    } else {
      submit(article)
    }
    setArticle(initialState)
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <div className='w-full mx-auto p-4 space-y-4 sm:p-6 sm:space-y-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
      <div className='flex justify-between items-center px-4 sm:px-7'>
        <h1 className='text-xl md:text-3xl font-bold text-center text-primary'>
          {blog ? 'Edit Article' : 'Create New Article'}
        </h1>
        <Button
          className='bg-blue-500 text-white hover:bg-blue-600'
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>

      <form
        onSubmit={handleSubmit}
        className='rounded-lg shadow-lg overflow-hidden text-gray-100'
      >
        <div className='p-3 space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Label htmlFor='title'>Title</Label>
              <Input
                id='title'
                name='title'
                value={article.title}
                onChange={handleChange}
                required
                placeholder='Enter article title'
                className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
              />
            </div>

            <div>
              <Label htmlFor='slug'>Slug</Label>
              <Input
                id='slug'
                name='slug'
                value={article.slug}
                onChange={handleChange}
                required
                placeholder='enter-url-slug'
                className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Label>Publication Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className={`w-full mt-1 justify-start text-left font-normal bg-gray-700 border-gray-600 ${
                      !article.createdAt && 'text-gray-400'
                    }`}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {article.createdAt
                      ? format(article.createdAt, 'PPP')
                      : 'Select a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={blog?.createdAt || article.createdAt}
                    onSelect={handleDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='flex items-center space-x-2'>
              <Checkbox
                id='isPublished'
                checked={article.published}
                onCheckedChange={handlePublishedChange}
                className='border-gray-400 text-primary-foreground'
              />
              <Label htmlFor='isPublished' className='text-gray-100'>
                Published
              </Label>
            </div>
          </div>

          <div>
            <Label htmlFor='metaDescription'>Short Description</Label>
            <Textarea
              id='metaDescription'
              name='metaDescription'
              value={article.metaDescription}
              onChange={handleChange}
              required
              placeholder='Enter a short description'
              rows={3}
              className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
            />
          </div>

          <div>
            <Label htmlFor='body'>Content</Label>
            <div className='mt-1 bg-gray-700 rounded-md overflow-hidden'>
              <MDXditor
                value={article.body}
                onChange={handleContentChange}
                preview='edit'
                height={400}
              />
            </div>
          </div>
        </div>

        <div className='px-6 py-4'>
          <Button
            type='submit'
            className={clsx(
              'w-full bg-blue-500 text-white hover:bg-blue-600',
              updatePending &&
                submitPending &&
                'pointer-events-none cursor-wait'
            )}
          >
            {blog ? 'Edit Article' : 'Create Article'}
          </Button>
        </div>
      </form>
    </div>
  )
}
