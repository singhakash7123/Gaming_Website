import React from 'react'
import Image from 'next/image'
import HeroImg from '../../Image/Hero.jpg'
const Community = () => {
  return (
    <section className='min-h-screen  bg-black py-8 lg:py-0'>
        <div className='max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center mx-auto min-h-screen gap-y-15 md:gap-y-20 lg:gap-y-0'>
            <div className='basis-1/2 bg-black flex items-center justify-center  '>
            <div className='w-55 md:w-[320px] aspect-square bg-black relative '>
                <div className=' w-55 md:w-[320px] aspect-square bg-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12  overflow-hidden'>
                   <Image src={HeroImg} fill alt='Image' className='object-cover'/>
                </div>
            </div>
            </div>
            <div className='basis-1/2 bg-black text-white p-3 flex flex-col items-start justify-center'>
            <h5 className='text-purple-500 font-semibold text-xm'>JOIN OUR COMMUNITY</h5>
            <h3 className='mt-3 mb-5 text-2xl md:text-4xl font-extrabold '>COLLABORATIVE GAME PLAY AND TIPS</h3>
            <p className='text-sm lg:text-xm'>Our community is full of experienced players who love to share strategies, tips, and tricks for mastering the game. Whether you need help tackling a difficult boss, finding hidden treasures, or optimizing your elemental powers, you will find a wealth of knowledge and support here.</p>
            <p className='mt-3 text-sm lg:text-xm '>Gain insights from fellow Guardians, share your own tips, and collaborate on in-game challenges and quests.</p>
            <p className='mt-3 mb-6 text-sm lg:text-xm '>Be the first to know about exclusive community events, including in-game challenges, contests, and giveaways.</p>
            <button className='bg-purple-500 px-10 py-4 text-sm font-bold -skew-x-25 hover:bg-purple-600 '>EXPLORE MORE</button>
            </div>
        </div>
    </section>
  )
}

export default Community