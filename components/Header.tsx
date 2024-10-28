import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
    <div className='h-16 w-full sticky top-0 bg-light dark:bg-dark md:max-w-[800px] flex items-center gap-3 md:gap-10 justify-between py-5 '>
      <div className='w- h-full flex items-center justify-start gap-5'>
        <Link
          href='/'
          className='text-lg leading-none font-bold  text-dark dark:text-light'
        >
          Faraz Ahmad.
        </Link>

        <div className='h-full w-[2px] bg-secondaryDark dark:bg-secondaryLight'></div>

        <div className='col-span-6 md:col-span-12 lg:col-span-12 flex gap-5 items-center'>
          <SocialLink href='https://github.com/FarazAhmad541' label='Github' />
          <SocialLink
            href='https://www.linkedin.com/in/faraz-ahmad-fsd'
            label='LinkedIn'
          />
        </div>
        <SocialLink href='mailto: faraz.ahmad.fsd@gmail.com' label='Email' />
      </div>
      <ThemeSwitch />
    </div>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center text-sm md:text-base gap-2 text-secondaryDark dark:text-secondaryLight dark:hover:text-light '
    >
      {label}
    </a>
  )
}
