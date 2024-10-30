import Footer from '@/components/Footer'

import NextThemeProvider from '@/lib/themeProvider'
import { inter } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
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
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body className='bg-light dark:bg-dark'>
        <NextThemeProvider>
          <div className='flex flex-col min-h-screen'>
            {children}
            <Footer />
          </div>
          <Analytics />
        </NextThemeProvider>
      </body>
    </html>
  )
}
