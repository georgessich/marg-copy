'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import Link from 'next/link'
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='container mx-auto flex flex-col'>
      <h2 className='text-8xl'>Здесь пусто!</h2>
      <Link href="/authors/">Вернуться назад</Link>
    </div>
  )
}