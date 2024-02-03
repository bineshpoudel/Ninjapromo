import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
const ShowDevelopment = () => {
  return (
    <div className='flex gap-10 absolute top-0 left-64 p-4 justify-center'>
      <MdArrowRightAlt className='font-thin text-[5rem]' />
      <div className='w-80 flex flex-col gap-5 text-xl text-gray-500'>
        <p>Mobile Development</p>
        <p>Web Development</p>
      </div>
    </div>
  )
}

export default ShowDevelopment
