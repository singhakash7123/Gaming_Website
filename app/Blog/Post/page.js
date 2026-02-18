import React from 'react'
import Image from 'next/image'
const Post = () => {
  return (
    <>
   
    <li className='w-full max-w-3xl  rounded-xl overflow-hidden border-2 border-gray-500 mb-10'>

        <div className='w-full max-w-3xl aspect-2/1 bg-red-500'>
        {/* <Image alt='image' fill className='object-cover hover:scale-120' /> */}
    </div>
    <div className='p-8 bg-black'>
        <h3 className='hover:text-purple-600 text-3xl text-white font-extrabold '>
            WORLDS IMAGINED: CRAFTING NARRATIVES IN GAMING
        </h3>
        <p className='mt-3'> 
            <span className='text-purple-600 font-bold'>TINJA</span> 
            <span className='hover:text-purple-600 font-bold text-white ml-8' >  October 23, 2023 </span> 
        </p>
    </div >

    </li>
     </>
  )
}

export default Post