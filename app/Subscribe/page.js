import React from 'react'
import Image from "next/image";
 import CallofDuty from '../Image/Subscribe.jpg';
const Subscribe = () => {
  return (
     <section className='w-screen py-15 bg-gray-900 flex items-center justify-center ' >
        <div className='max-w-5xl w-full mx-auto h-[60vh] bg-blue-200 flex items-center justify-center relative ' >
         <Image src = {CallofDuty} alt = "image" fill={true} className = " object-cover" />
         <div className='relative z-5 max-w-4xl w-full justify-center flex flex-col items-center '>
            <p className='text-center text-purple-500
          text-xm font-semibold'>GET UPDATES</p>
         <h2 className='text-white text-5xl font-extrabold text-center'>TINJA NEWSLETTER</h2>
         <div className='text-white max-w-3xl w-full flex flex-wrap md:flex-nowrap  items-center  gap-x-5 px-3 md:px-5  mt-8'>
            <input type='email' placeholder='ENTER YOUR EMAIL ADDRESS' className='text-white border-2 border-white py-3 px-8 w-full -skew-x-25 '/>
            <button type='submit' className=' py-3 md:py-2 bg-purple-500 px-5 text-xs font-semibold -skew-x-25
             tracking-wider mt-5 md:mt-0' >SUBSCRIBE NOW</button>
         </div>
         </div>
         
        </div>
     </section>
  )
}

export default Subscribe

// Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element