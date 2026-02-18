import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
const Updates = () => {
  return (
    <section className='bg-black text-white py-24'>
        <div className='max-w-6xl w-full mx-auto flex flex-col items-center '>
            <h5 className='text-purple-500 font-semibold'>UPDATES</h5>
            <h3 className='text-4xl font-extrabold'>LATEST NEWS</h3>
            <div className='w-full px-5 py-8 flex flex-col lg:flex-row items-start lg:items-center lg:justify-center gap-x-15 gap-y-6 border border-gray-400 border-l-0 border-r-0 mt-10'>
                <div className='max-w-150 w-full lg:basis-1/3 aspect-2/1 lg:aspect-5/4 '>
                <div className=' w-full h-full bg-red-400'></div>
                </div>
                <div className='basis-1/3 '>
                <h4 className='text-lg font-extrabold hover:text-purple-500'>GAMEPLAY CHRONICLES: UNVEILING DIGITAL REALMS</h4>
                <p className='mt-4 text-[15px]'>Gameplay Chronicles: Unveiling Digital Realms” is a captivating blog that offers readers a deeper insight into the fascinating world of gaming. Whether you’re a casual gamer, a dedicated player, or someone who’s just curious about the gaming universe, this blog has something to offer. Here are some details about what you can expect from this</p>
                </div>
                <div className='basis-1/8 flex items-center justify-end lg:ml-auto'>
                <span className=' text-3xl lg:text-5xl p-4 rounded-full border-2 border-purple-500 hover:bg-purple-500 '><MdOutlineArrowOutward /></span>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Updates