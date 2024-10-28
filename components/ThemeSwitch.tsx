'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={32}
        height={32}
        sizes='32x32'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    )

  if (resolvedTheme === 'dark') {
    return (
      <Sun
        className=' w-8 h-8 md:w-9 md:h-9 cursor-pointer text-light hover:text-dark hover:bg-light rounded-full p-1 box-border'
        display='block'
        onClick={() => setTheme('light')}
      />
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <Moon
        className=' w-8 h-8 md:w-9 md:h-9 cursor-pointer text-secondaryDark hover:text-light hover:bg-dark rounded-full p-1 box-border'
        onClick={() => setTheme('dark')}
      />
    )
  }
}
