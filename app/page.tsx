import { Laptop } from 'lucide-react'
import Image from 'next/image'
import profile from '../assets/Faraz.png'
export default function Home() {
  return (
    <div className='bg-[#101012] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20'>
      <header className='w-full'>
        <div className='flex items-center gap-10 w-full justify-start'>
          <Image
            src={profile}
            alt='Faraz'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div>
            <h1 className='text-2xl leading-none font-bold'>Faraz A.</h1>
            <div className='flex gap-2 items-center'>
              <p className='font-[#BFBFBF]text-base leading-none'>
                Frontend Developer
              </p>
              <Laptop width={15} height={15} className='mb-1' />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
