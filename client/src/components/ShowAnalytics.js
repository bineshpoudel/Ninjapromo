import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const ShowAnalytics = () => {
  return (
    <div className='flex gap-10 absolute top-0 left-64 p-4 justify-center'>
      <MdArrowRightAlt className='h-5' />

      <div className='w-80 flex flex-col gap-5 text-xl text-gray-500'>
        <p>End-to-end Analytics</p>
        <p>Web Analytics</p>
        <p>Mobile App Analytics</p>
      </div>
    </div>
  )
}

export default ShowAnalytics
