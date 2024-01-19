import React from 'react'
import { PiArrowRightLight } from 'react-icons/pi'

const BrandCard = ({ logo, description }) => {
  return (
    <div className='border border-gray-500 bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] p-8 rounded-md '>
      <div className='bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] flex flex-col gap-2 md:gap-5'>
        <div>
          <img src={logo} alt={description} className='h-3 md:h-5' />
        </div>

        <p className='text-xs md:text-2xl md:h-20 '>{description}</p>
        <div className='flex flex-row-reverse gap-1 md:gap-5 items-center group hover:group-no-underline'>
          <PiArrowRightLight className='text-2xl w-8 transition-transform transform group-hover:translate-x-1' />
          <a
            href='#'
            className='underline transition-none group-hover:no-underline text-xs md:text-l  '
          >
            See the case
          </a>
        </div>
      </div>
    </div>
  )
}

export default BrandCard
