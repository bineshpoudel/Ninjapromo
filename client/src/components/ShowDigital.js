import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
const ShowDigital = () => {
  return (
    <div className='flex gap-10 absolute top-[-6rem] left-64 p-4 justify-center items-center'>
      <MdArrowRightAlt className='h-5' />
      <div className='w-80 flex flex-col gap-5 text-xl text-gray-500'>
        <p>Search Engine Optimization</p>
        <p>Social Media Management</p>
        <p>Outbound Lead Generation</p>
        <p>PR and Media</p>
        <p>Influencer Marketing</p>
        <p>Paid Search (Google, Bing)</p>
        <p>Email Marketing</p>
      </div>
    </div>
  )
}

export default ShowDigital
