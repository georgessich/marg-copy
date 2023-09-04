import React from 'react'
import SearchIcon from '../../public/searchicon.svg'
import BasketIcon from '../../public/basketicon.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function HeaderTop() {
  return (
    <div className='container flex m-auto'>
        <Link href={'/search'}><Image src={SearchIcon} /></Link>
        <Link href={'/basket'}><Image src={BasketIcon} /></Link>
        <Link href={'/favourites'}>Избранное</Link>
    </div>
  )
}
