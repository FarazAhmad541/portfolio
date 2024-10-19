'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = useState<QueryClient>(new QueryClient())
  return (
    <QueryClientProvider client={queryClient[0]}>
      {children}
    </QueryClientProvider>
  )
}
