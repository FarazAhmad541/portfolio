import { clsx, type ClassValue } from 'clsx'
import { easeInOut } from 'framer-motion'
import fs from 'fs'
import { Inter } from 'next/font/google'
import path from 'path'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      easeInOut,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeInOut,
    },
  },
}



export { containerVariants, itemVariants }
