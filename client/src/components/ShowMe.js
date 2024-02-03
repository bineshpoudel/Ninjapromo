import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const ShowMe = () => {
  return (
    <div className='flex gap-10 absolute top-0 left-64 p-4 justify-center'>
      <MdArrowRightAlt className='font-thin text-[5rem]' />
      <div className='w-80 flex flex-col gap-5 text-xl text-gray-500'>
        <p>Marketing Audit</p>
        <p>Market Research</p>
        <p>Customer Journey Mapping</p>
        <p>Brand Strategy</p>
        <p>Marketing Funnel Development</p>
        <p>Content Strategy</p>
        <p>Channels Strategy</p>
        <p>Metrics</p>
        <p>Timeline</p>
        <p>Budget Allocation</p>
      </div>
    </div>
  )
}

export default ShowMe
