import { headers } from 'next/headers'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import React from 'react'
import MobileMenu from './Mobile/page';
import Link from 'next/link';

const Navbar = () => {
    // console.log('server')
  return (
   <header className='fixed top-0 left-0 right-0 z-100 '>
    <nav className='w-full bg-black/65 hidden lg:flex items-center justify-between px-8 py-5'>
        <h1 className='font-extrabold text-white text-3xl tracking-wider'>TINJA</h1>
        <ul className='hidden lg:flex  items-center gap-x-8 w-full justify-center'>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/'}> HOME + </Link> </li>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/'}> TOURNAMENT + </Link> </li>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/PortFolio'}> PORTFOLIO + </Link> </li>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/Shop'}> SHOP + </Link> </li>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/Blog'}> BLOG + </Link> </li>
            <li className='font-semibold text-xs hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/Contact'}> CONTACT </Link> </li>
        </ul>

        <div className='flex items-center gap-x-8'>
            <button className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><PiShoppingCartSimpleBold /></button>
            <button className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><IoSearch /></button>
            {/* <span className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><CgMenuRight /></span> */}
        </div>
    </nav>
    <MobileMenu/>
   </header>
  )
}

export default Navbar