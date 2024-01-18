import React from 'react'
import Button from './Button'
import { IoIosCheckmarkCircle } from 'react-icons/io'
const PackageCard = () => {
  return (
    <div className='group h-64 w-1/3 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 hover:p-1 rounded-md '>
      <div className='h-full w-full border-2 border-white bg-[#121212] font-bold rounded-md flex flex-col p-5 gap-12 hover:border-none'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl group-hover:text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-600 bg-clip-text hover:from-rose-400 hover:via-fuchsia-500 hover:to-purple-600'>
            $9600
          </h1>
          <div className='text-xs'>
            <p>/160 Hours per month</p>
            <p className='text-gray-400'>$60 per hour</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <IoIosCheckmarkCircle className='text-2xl ' />
          <p className='text-base'> A full marketing department</p>
        </div>
        <div className='w-84'>
          <Button
            className='text-xl bg-gradient-to-r from-black via-black to-black border-2 border-white border-opacity-100 hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-purple-600'
            label={'Book a call'}
          />
        </div>
      </div>
    </div>
  )
}

export default PackageCard
