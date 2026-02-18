import React from 'react'

const page = ({content}) => {
  return (
    <div className="w-screen h-[50vh] bg-gray-800 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-white font-extrabold text-4xl">{content}</h1>
        <h4 className="text-white font-semibold text-xm">HOME &gt; {content}</h4>
      </div>
  )
}

export default page