import React from 'react'
import Image from 'next/image'
import HeroImg from '../../Image/Call_of_Duty.jpg'
const Hero = () => {
  return (
    <section className='min-h-screen w-screen  flex items-center justify-start bg-black'>
        <Image src={HeroImg} alt='Image' fill className='object-cover' />
        <div className='relative z-10 max-w-2xl px-5'>
            <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white' >STELLAR FRONTIER</h1>
            <div className='flex items-center justify-around mt-6  bg-white/30 px-1 py-3 rounded-xl'>
                <span className='text-white  text-xs lg:text-xm font-bold lg:pr-5  lg:border-r-2'>Space Exploration , Survival</span>
                <span className='text-white  text-xs lg:text-xm font-bold lg:pr-5  lg:border-r-2'>Feburary 10 ,2025</span>
                <span className='text-white  text-xs lg:text-xm font-bold '>4K ULTRA HD</span>
            </div>
            <p className='text-white mt-8 text-sm'>
                Expedition Beyond embarks players on a thrilling space adventure to explore uncharted galaxies. Manage your spacecraft, engage with alien species, and uncover ancient mysteries in a vast, procedurally generated universe.
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start mt-10 gap-4 flex-wrap'>
                <button className='font-semibold text-white px-3 lg:px-6 py-1.5 lg:py-3 border-2   border-purple-500  bg-purple-500 hover:bg-purple-600 -skew-x-25 '>BUY NOW </button>
                <button className='font-semibold text-white px-3 lg:px-6 py-1.5 lg:py-3 border-2  border-white -skew-x-25 '>WATCH TRAILER</button>
            </div>
        </div>
    </section>
  )
}

export default Hero