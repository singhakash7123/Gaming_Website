import React from 'react'

const About = () => {
  return (
    <section className='w-screen py-10 lg:py-16 flex flex-wrap items-center justify-around bg-black gap-y-10'>
        <div className='text-center text-white basis-full sm:basis-1/2 md:basis-1/4 flex flex-col items-center gap-x-5 gap-y-3  '>
            <span className=' text-4xl md:text-6xl font-extrabold '>12M</span>
            
            <span className='text-purple-500 font-semibold'>ACTIVE USERS</span>
        </div>
        <div className='text-center text-white basis-full sm:basis-1/2 md:basis-1/4 flex flex-col items-center gap-x-5 gap-y-3  '>
            <span className=' text-4xl md:text-6xl font-extrabold '>2.5M</span>
             
            <span className='text-purple-500 font-semibold'>VALID LICENSE</span>
        </div>
        <div className='text-center text-white basis-full sm:basis-1/2 md:basis-1/4 flex flex-col items-center gap-x-5 gap-y-3  '>
           <span className=' text-4xl md:text-6xl font-extrabold '>10+</span>
            
           <span className='text-purple-500 font-semibold'>WINNING AWARD</span>
        </div>
        <div className='text-center text-white basis-full sm:basis-1/2 md:basis-1/4 flex flex-col items-center gap-x-5 gap-y-3  '>
            <span className=' text-4xl md:text-6xl font-extrabold '>9.8/10</span>
             
            <span className='text-purple-500 font-semibold'>RATING</span>
        </div>
    </section>
  )
}

export default About