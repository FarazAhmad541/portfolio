import Footer from '@/components/Footer'

import { inter } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faraz Ahmad',
  description: 'Made by Faraz Ahmad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <div className='flex flex-col min-h-screen'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
