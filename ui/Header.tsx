import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='col-span-full w-full sticky top-0 bg-dark md:max-w-[800px] flex items-center gap-10 justify-between, py-5 '>
      <Link href='/' className='text-lg leading-none font-bold text-light'>
        Faraz Ahmad.
      </Link>

      <Separator orientation='vertical' />

      <div className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center'>
        <SocialLink href='https://github.com/FarazAhmad541' label='Github' />
        <SocialLink
          href='https://www.linkedin.com/in/faraz-ahmad-fsd'
          label='LinkedIn'
        />
        <SocialLink href='mailto: faraz.ahmad.fsd@gmail.com' label='Email' />
      </div>
    </div>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center text-sm md:text-base gap-2 text-secondaryLight hover:text-light '
    >
      {label}
    </a>
  )
}
