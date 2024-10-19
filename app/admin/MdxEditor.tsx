'use client'
import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { format } from 'date-fns'
import { motion } from 'framer-motion'
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
import { useMutation } from '@tanstack/react-query'
import { submitArticle } from './action'

const MDXditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

export default function ArticleForm() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState<Date>()
  const [isPublished, setIsPublished] = useState(false)
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const { mutate: submit } = useMutation({
    mutationFn: submitArticle,
    onSuccess: () => console.log('success'),
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit({
      title,
      slug,
      createdAt: date?.toISOString(),
      published: isPublished,
      metaDescription: description,
      body: content,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-4xl mx-auto p-6 space-y-8'
    >
      <h1 className='text-3xl font-bold text-center text-primary'>
        Create New Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className='rounded-lg shadow-lg overflow-hidden text-gray-100'
      >
        <div className='p-6 space-y-6'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <Label htmlFor='title'>Title</Label>
              <Input
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder='Enter article title'
                className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
              />
            </div>

            <div>
              <Label htmlFor='slug'>Slug</Label>
              <Input
                id='slug'
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                placeholder='enter-url-slug'
                className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
              />
            </div>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <Label>Publication Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className={`w-full mt-1 justify-start text-left font-normal bg-gray-700 border-gray-600 ${
                      !date && 'text-gray-400'
                    }`}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, 'PPP') : 'Select a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='flex items-center space-x-2'>
              <Checkbox
                id='isPublished'
                checked={isPublished}
                onCheckedChange={(checked) =>
                  setIsPublished(checked as boolean)
                }
                className='border-gray-400 text-primary-foreground'
              />
              <Label htmlFor='isPublished' className='text-gray-100'>
                Published
              </Label>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Label htmlFor='description'>Short Description</Label>
            <Textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder='Enter a short description'
              rows={3}
              className='mt-1 bg-gray-700 text-gray-100 border-gray-600'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Label htmlFor='content'>Content</Label>
            <div className='mt-1 bg-gray-700 rounded-md overflow-hidden'>
              <MDXditor
                value={content}
                onChange={(value) => setContent(value || '')}
                preview='edit'
                height={400}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className='px-6 py-4 '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            type='submit'
            className='w-full bg-blue-500 text-white hover:bg-blue-600'
          >
            Create Article
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
