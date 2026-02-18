import React from 'react'
import Banner from '../Banner/page.js'
import ShopItems from './ShopItems/page.js'
import { IoSearch } from "react-icons/io5";
import array from '../Array/Shop.js'
const Shop = () => {
  const ShopArray = array.map((item)=>{
    return(
      <ShopItems type = {item.item_type} key={item.id} price={item.price}/>
    )
  })
  return (
    <>
      <Banner content='SHOP'/>
     <div className='w-screen bg-black'>
        <div className='max-w-7xl w-full mx-auto py-20 flex flex-col lg:flex-row  items-center lg:items-start bg-black justify-between  ' >
          <ul className='max-w-3xl  w-full flex flex-wrap items-center justify-center gap-8'>
         {ShopArray}
          </ul>
          <div className='max-w-3xl lg:max-w-125 w-full bg-black py-10 px-5 mt-20 lg:mt-0 '>
            <div className=' max-w-3xl mx-auto border border-white flex items-center rounded-lg '>
              <input type='text' placeholder='Search Products' className='text-gray-400 p-3 w-full outline-0'/>
              <button className='bg-purple-500 text-white text-3xl p-3 rounded-lg'><IoSearch /></button>
            </div>

            <ul className='w-full text-white font-bold mt-6'>
              <li className=' mt-4 text-2xl text-white '>Product Categories</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >All</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >Chair</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >Headphone</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >Headset</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >Mouse</li>
              <li className=' hover:text-purple-500 mt-4 w-full text-lg' >T-Shirt</li>
              

            </ul>

            <div className='mt-8'>
              <h2 className='text-white font-extrabold text-xl'>PRODUCTS TAGS</h2>
              <div className='flex items-center gap-3 flex-wrap mt-5'>
                <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >CHAIR</button>
              <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >ESPORTS</button>
              <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >GAMES</button>
              <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >HEADPHONES</button>
              <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >HEADSET</button>
              <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >MOUSE</button>
              </div>
            </div>
          </div>
        </div>
     
</div>
    </>
  )
}

export default Shop