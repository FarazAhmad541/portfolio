'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { revalidateBlogsList } from '@/lib/actions'
import { deleteBlogById } from '@/lib/data'
import { BlogType } from '@/lib/definitions'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  blogs: BlogType[] | []
}

export default function AllBlogsList({ blogs }: Props) {
  //Select Blog by ID
  const [selectedBlog, setSelectedBlog] = useState<string>('')

  const { mutate: deleteBlog, isPending } = useMutation({
    mutationFn: deleteBlogById,
    onSuccess: () => console.log('success'),
  })

  const handleDelete = (id: string) => {
    deleteBlog(id)
    revalidateBlogsList()
  }

  return (
    <div className='flex flex-col gap-8 items-center justify-start mt-8 max-w-[800px] mx-auto'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-4xl text-white'>List of Blogs</h1>
        <Link
          href={'/admin/add-new-blog'}
          className='px-6 py-2 mt-3 bg-green-600 text-white rounded-md hover:bg-green-700                                                                           '
        >
          Add New
        </Link>
      </div>
      {blogs?.map((blog, index: number) => (
        <div
          key={index}
          className='flex gap-5 items-start w-full justify-between p-8 bg-gray-900 rounded-3xl'
        >
          <div className='block cursor-pointer text-secondaryLight rounded-lg mt-2 transition-all hover:text-light'>
            <div className='flex justify-start items-start gap-5'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-light font-semibold text-2xl'>
                  {blog.title}
                </h2>

                <div
                  className={clsx(
                    'px-4 py-2 rounded-full text-white w-fit',
                    blog.published ? 'bg-green-600' : 'bg-blue-500'
                  )}
                >
                  {blog.published ? 'Published' : 'Draft'}
                </div>
              </div>
            </div>
            <p className='mt-3'>{blog.metaDescription}</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={clsx(
                'px-6 py-2 mt-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600',
                isPending && 'cursor-not-allowed pointer-events-none'
              )}
            >
              Actions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Blog Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(blog.id)}
                className='bg-red-500 text-red-950 cursor-pointer focus:bg-red-600'
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
