import React from 'react'
import Image from 'next/image';
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";
const List = ({content,image}) => {
  return (
   <li className='w-full max-w-90 md:max-w-1/4  aspect-3/5 '>
        <div className='w-full aspect-3/4 border-2 border-gray-600 rounded-lg py-4 relative'>
            <Image src={image} alt='image' fill
            className='object-cover' />
        </div>
        <div className='px-3 mt-3 border-2 border-gray-600 rounded-lg py-4'>
          <h4 className='text-white text-lg lg:text-2xl font-extrabold hover:text-purple-500 '>{content}</h4>
          <p className='flex items-center justify-items-start mt-2 gap-x-3 text-gray-600' >
            <a>WATCH</a>
            <a><FaYoutube /></a>
            <a><FaVimeoV /></a>
            <a><ImTwitch /></a>
          </p>
        </div>
        </li>
  )
}

export default List