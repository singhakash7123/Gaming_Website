import React from 'react'

const ShopItems = ({type,price}) => {
  return (
    <li className='max-w-90 w-full  '>
        <div className=' w-full aspect-square bg-gray-700'></div>
        <div className='mt-5'>
            <h3 className='text-white font-extrabold text-xl'>{type}</h3>
            <h5 className='text-white font-extrabold text-xl mt-2'>{price}</h5>
            <button className='text-white font-extrabold text-xl bg-purple-500 mt-3 py-2 px-6 rounded-lg'>Add to Cart</button>
        </div>
    </li>
  )
}

export default ShopItems