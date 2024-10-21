import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getAllBlogs } from '@/lib/data'
import clsx from 'clsx'
import Link from 'next/link'

export default async function AllBlogsList() {
  const blogs = await getAllBlogs()
  return (
    <div className='flex flex-col gap-8 items-center justify-start mt-8 max-w-[800px] mx-auto'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-4xl text-white'>List of Blogs</h1>
        <Link
          href={''}
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
            <DropdownMenuTrigger className='px-6 py-2 mt-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'>
              Actions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Blog Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
