import React from 'react'

const SocialMedia = () => {
  return (
    <section className='w-screen min-h-[40vh] bg-red-900 flex flex-col items-center justify-center py-10 ' >
        <p className='text-purple-500 text-center text-xm font-semibold' >OFFICIAL</p>
        <h2 className='text-center text-white font-extrabold text-4xl '> CONNECT EVERYWHERE</h2>
        <div className='max-w-5xl w-full flex flex-wrap items-start md:items-center justify-center gap-8 mt-8 '>

        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >TWITCH</a>
        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >FACEBOOK</a>
        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >TWITTER</a>
        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >TIKTOK</a>
        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >VIMEO</a>
        <a className=' px-6 md:px-7 py-2 md:py-3 text-white font-bold text-xl bg-linear-to-r from-gray-900 to-gray-500' >YOUTUBE</a>

        </div>
        
    </section>
  )
}

export default SocialMedia