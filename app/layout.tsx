import ReactQueryProvider from '@/lib/reactQueryProvider'
import Footer from '@/ui/Footer'
import { inter } from '@/utils/fonts'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
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
  const headerList = headers()
  const pathname = headerList.get('x-current-path')
  return (
    <html lang='en' className={inter.className}>
      <body>
        <ReactQueryProvider>
          <div className='flex flex-col min-h-screen'>
            {children}
            {pathname !== '/login' && pathname !== '/admin' && <Footer />}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
