import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './BookCard.module.css'
export default function BookCard({ item, handleCategoryClick }) {
  
  return (
    <div className='flex flex-col justify-start items-center bg-slate-500 m-1'>
        
        <Image className={classes.bookimage} src={item.image} width={300} height={270}/>
        <button onClick={() => handleCategoryClick(item.genre)} className='px-8 py-1 self-start text-sm text-gray-400 underline'>{item.genre}</button>
        <Link href={`/product/${item.slug}`}  className='px-8 py-1 text-lg self-start'>{item.title}</Link>
        <Link href={`/authors/${item.author_slug}`} className='px-8 py-1 text-base self-start'>{item.author}</Link>
        
        <span className='px-8 py-1 self-start'>{item.price}</span>
    </div>
  )
}
