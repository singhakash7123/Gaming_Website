import React from 'react'
import Image from 'next/image';
import Call_of_Duty from '../../Image/Call_of_Duty.jpg'
import { ImQuotesLeft } from "react-icons/im";
const Testimonials = () => {
  return (
    <section className='w-screen bg-black relative'>
         <Image src={Call_of_Duty}  alt='image' fill className='object-cover'/>
        <div className='max-w-6xl w-full min-h-screen mx-auto flex flex-col items-center justify-center text-white relative z-10 '>
           

            <h5 className='text-xm font-bold text-purple-500'>TESTIMONIALS</h5>
            <h3 className=' text-3xl lg:text-4xl text-center font-extrabold mt-1 mb-8'>OUR PLAYERS FEEDBACK</h3>
            <span className='text-purple-500 text-7xl'><ImQuotesLeft /></span>
            <p className=' text-xm md:text-2xl lg:text-3xl max-w-xs md:max-w-xl lg:max-w-3xl mt-8'>Dark City is unlike any game I ve played before. The atmosphere is so richly detailed and immersive that you can almost feel the rain and neon lights around you. The game does a fantastic job of blending classic noir with a modern dystopian vibe.</p>
        </div>
    </section>
  )
}

export default Testimonials