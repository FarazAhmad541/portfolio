'use server'

import { revalidatePath } from 'next/cache'

export const revalidateBlogsList = async () => {
  console.log('REVALIDATING BLOGS LIST')
  revalidatePath('/admin')
}
