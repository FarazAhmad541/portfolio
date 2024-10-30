'use client'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className='flex max-h-fit justify-start items-center w-fit pb-4 gap-5 text-secondaryDark hover:text-dark dark:text-secondaryLight dark:hover:text-light cursor-pointer transition-transform col-span-full'
    >
      <MoveLeft />
      <p>Back</p>
    </button>
  )
}
