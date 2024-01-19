import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { ArrowRight } from '../assets'
const ShowDevelopment = () => {
  return (
    <div className='flex gap-10 absolute top-0 left-64 p-4 justify-center'>
      <MdArrowRightAlt className='w-full h-5' />
      <img src={ArrowRight} className='' alt='' />
      <div className='w-80 flex flex-col gap-5 text-xl text-gray-500'>
        <p>Mobile Development</p>
        <p>Web Development</p>
      </div>
    </div>
  )
}

export default ShowDevelopment
