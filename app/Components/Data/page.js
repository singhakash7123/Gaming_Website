import React from 'react'
import { SlGameController } from "react-icons/sl";
const Data = () => {
  return (
    <section className='py-20 bg-black text-white'>
        <div className='max-w-6xl w-full mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-5 gap-y-15 px-8 '>
            <diV className=' min-w-1/4  sm:max-w-1/4  flex flex-col items-center gap-y-4 '>
            <span className='text-6xl text-purple-500'><SlGameController /></span>
           <h4 className='text-center text-2xl font-bold mt-5 text-purple-500'>ELEMENTAL POWERS</h4>
           <p className='text-center'>Choose your Guardian and master elemental abilities such as fire, water, earth, or air to solve puzzles and combat enemies.</p>
            </diV>
            <diV className=' min-w-1/4  sm:max-w-1/4   flex flex-col items-center gap-y-4 '>
            <span className='text-6xl text-purple-500'><SlGameController /></span>
            <h4 className='text-center text-2xl font-bold mt-5 text-purple-500'>MULTIPLAYER</h4>
             <p className='text-center'>Team up with friends in cooperative game play to tackle challenges and uncover secrets that require multiple Guardians.</p>
            </diV>
            <diV className=' min-w-1/4  sm:max-w-1/4   flex flex-col items-center gap-y-4 '>
            <span className='text-6xl text-purple-500'><SlGameController /></span>
           <h4 className='text-center text-2xl font-bold mt-5 text-purple-500 '>DEEP CRAFTING</h4>
            <p className='text-center'>Collect resources and craft powerful weapons, armor, and potions to enhance your abilities and customize your play style.</p>
            </diV>
        </div>
    </section>
  )
}

export default Data