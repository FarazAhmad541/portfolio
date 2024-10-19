'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { email, password })
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#101012] p-4'>
      <Card className='w-full max-w-md bg-gray-100 text-gray-800'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center text-gray-800'>
            Login
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='password'
                className='text-sm font-medium text-gray-700'
              >
                Password
              </Label>
              <Input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white'
            >
              Log in
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
