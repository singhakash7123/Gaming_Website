import React from 'react'
import Banner from '../Banner/page.js'
import List from './List/page.js'
import array from '../Array/PortFolio.js'
const PortFolio = () => {
  const Lists = array.map((item,index)=>{
    return <List content={item} key={index} />
  })
  return (
    <>
      <Banner content={'PORTFOLIO'}/>
    <div className='w-screen bg-gray-900'>
    <div className=' w-full max-w-6xl mx-auto  py-5 flex items-center justify-center gap-x-5'>
      <button className='p-2 text-gray-400 border-2 border-gray-400 rounded-3xl hover:bg-purple-500 hover:text-white '>ALL</button>
      <button className='p-2 text-gray-400 border-2 border-gray-400 rounded-3xl hover:bg-purple-500 hover:text-white '>OFFLINE GAMES</button>
      <button className='p-2 text-gray-400 border-2 border-gray-400 rounded-3xl hover:bg-purple-500 hover:text-white '>ESPORTS</button>
      <button className='p-2 text-gray-400 border-2 border-gray-400 rounded-3xl hover:bg-purple-500 hover:text-white '>ONLINE GAMES</button>
       </div>
       <ul className=' w-full max-w-6xl mx-auto  py-5 flex flex-col sm:flex-row flex-nowrap sm:flex-wrap items-center justify-center gap-5 px-8'>
        
        {Lists}
       </ul>
    </div>
    </>
  )
}

export default PortFolio