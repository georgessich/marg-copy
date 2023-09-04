import React from 'react'
import SearchIcon from '../../public/searchicon.svg'
import BasketIcon from '../../public/basketicon.svg'
import Image from 'next/image'
import Link from 'next/link'
import classes from './HeaderTop.module.css'
export default function HeaderTop() {
  return (
    <div className={`container border-b font-semibold flex mx-auto items-center justify-end`}>
        <Link className={`p-6 border-l ${classes.linktext}`} href={'/search'}><Image width={14} height={14} src={SearchIcon} /></Link>
        <Link className={`p-6 border-l ${classes.linktext}`} href={'/basket'}><Image width={12} height={14} src={BasketIcon} /></Link>
        <Link className={`p-6 border-l ${classes.linktext}`} href={'/favourites'}>ИЗБРАННОЕ</Link>
        <Link className={`p-6 border-l ${classes.linktext}`} href={'/favourites'}>ПОДПИШИТЕСЬ</Link>
    </div>
  )
}
