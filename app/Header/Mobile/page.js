'use client'
import React, { useState } from 'react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
const MobileMenu = () => {
    // console.log('client')
  const [showMenu, setShowMenu] = useState(false) ;
  return (
    <nav className='w-full bg-black/65 flex lg:hidden items-center justify-between px-8 py-5'>
            <h1 className='font-extrabold text-white text-3xl tracking-wider'>TINJA</h1>
            <ul className={` bg-black absolute top-0  ${showMenu?'right-0':'-right-full'} flex flex-col lg:hidden items-center gap-y-8 max-w-106.5 w-full h-screen px-8 py-5 transition-all duration-700 ease-in-out`}>
              <li className='w-full font-extrabold text-white text-3xl tracking-wider py-5 border-b-2 border-gray-800 mb-5 flex items-center'>

              <h1 className=' w-full font-extrabold text-white text-3xl tracking-wider py-5 '>TINJA</h1>
              <button onClick={()=>{setShowMenu(false)}} className='text-2xl text-white'><RxCross1 /></button>
              </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white '> <Link href={'/'}> HOME</Link> <span>+</span> </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/'}> TOURNAMENT </Link> <span>+</span> </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/PortFolio'}> PORTFOLIO </Link> <span>+</span> </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white'><Link href={'/Shop'}> SHOP </Link> <span>+</span> </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/Blog'}> BLOG </Link> <span>+</span> </li>
                <li className='w-full flex items-center justify-between font-semibold text-xm border-b-2 border-gray-800 hover:text-purple-400 transition-all duration-300  text-white'> <Link href={'/Contact'}> CONTACT </Link> </li>
                <li className='w-full flex items-center gap-x-8 font-semibold text-xm  hover:text-purple-400 transition-all duration-300  text-white text-3xl'> <button><PiShoppingCartSimpleBold /> </button> <button>  <IoSearch /> </button> </li>
            </ul>
    
            <div className='flex items-center gap-x-8'>
                {/* <span className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><PiShoppingCartSimpleBold /></span>
                <span className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><IoSearch /></span> */}
                <button onClick={()=>{setShowMenu(true)}} className=' hover:text-purple-400 transition-all duration-300 flex items-center justify-center text-2xl font-extrabold text-white'><CgMenuRight /></button>
            </div>
        </nav>
  )
}

export default MobileMenu