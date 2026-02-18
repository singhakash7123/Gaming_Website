import React from 'react'
import { FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Team = () => {
  return (
    <section className='text-white py-10 bg-black'>
        <div className='max-w-7xl w-full mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-start  md:items-center justify-between'>
                <div className='flex flex-col items-start gap-y-1'>
                    <span className='text-purple-500'>TEAM</span>
                    <span className='font-extrabold text-2xl lg:text-4xl'>OUR EXPERTS</span>
                </div>
                <div  className='text-purple-500 font-semibold mt-2 md:mt-0'>MEET OUR TEAM</div>
            </div>

            <div className='w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center md:items-stretch justify-center gap-x-5 gap-y-8 mt-10 '>
                <div className=' max-w-lg w-full md:w-xs lg:w-sm bg-green-400'>
                <div className='w-full aspect-square bg-yellow-400'></div>
                <div className='w-full  flex items-center justify-between mt-2 gap-x-2'>
                   <p> <span className='text-sm sm:text-2xl font-extrabold'>Robert Fox</span> <br/> <span className='font-semibold text-xs'>Team Captain</span> </p> 
                    <p className='flex items-center  gap-x-4'>
                    <span><FaTwitch /></span>
                    <span><FaXTwitter /></span>
                    <span><FaFacebookF /></span>
                   </p>
                </div>
                </div>
                <div className='max-w-lg w-full md:w-xs lg:w-sm bg-blue-400'>
                  <div className='w-full aspect-square bg-yellow-400'></div>
                   <div className='w-full  flex items-center justify-between mt-2 gap-x-2'>
                   <p> <span className='text-sm sm:text-2xl font-extrabold'>Esther Howard</span> <br/> <span className='font-semibold text-xs'>Support Player</span> </p> 
                    <p className='flex items-center  gap-x-4'>
                    <span><FaTwitch /></span>
                    <span><FaXTwitter /></span>
                    <span><FaFacebookF /></span>
                   </p>
                </div>
                </div>
                <div className='max-w-lg w-full md:w-xs lg:w-sm bg-yellow-400'>
                  <div className='w-full aspect-square bg-red-400'></div>
                   <div className='w-full  flex items-center justify-between mt-2 gap-x-2'>
                   <p> <span className='text-sm sm:text-2xl font-extrabold'>Jacob Jones</span> <br/> <span className='font-semibold text-xs'>Streamer</span> </p> 
                   <p className='flex items-center  gap-x-4'>
                    <span><FaTwitch /></span>
                    <span><FaXTwitter /></span>
                    <span><FaFacebookF /></span>
                   </p>
                </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Team