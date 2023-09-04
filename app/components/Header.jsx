import React from 'react'
import Link from 'next/link'
import Logo from '../../public/logo-2x-300x69.png'
import Image from 'next/image'
export default function Header() {
  return (
    <header className='container flex justify-between mx-auto py-10'>
        <Link href={'/'}><Image src={Logo} height={45}/></Link>
    <nav>
        
        <ul className='flex mx-auto gap-7'>
            <li>
                <Link href={'/'}>Книги</Link>
            </li>
            <li>
                <Link href={'/authors'}>Авторы</Link>
            </li>
            <li>
                <Link href={'/'}>Новости</Link>
            </li>
            <li>
                <Link href={'/about'}>О нас</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}
