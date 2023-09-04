import React from 'react'
import Logo from '../../public/logo-2x-300x69.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='container flex justify-between mx-auto py-10'>
        <Link href={'/'}>
            <Image src={Logo} width={150} height={100}/>
        </Link>
    </footer>
  )
}
