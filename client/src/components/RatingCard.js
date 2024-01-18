import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
const RatingCard = () => {
  return (
    <div className=' flex flex-col justify-between'>
      <div className='bg-[#181818] h-36 w-full flex flex-col justify-between gap-4 px-6 py-4 text-xs rounded-md  '>
        <h2 className='text-2xl'>Clutch</h2>
        <p className='italic'>
          "Ninja Promo have become an extension to our team"
        </p>
        <p className='flex'>
          4.8 out of 5,0(28){' '}
          <span className='flex gap-1 text-yellow-400'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </span>
        </p>
      </div>
      <div className='flex items-center justify-between px-5'>
        <p className='underline text-xs'>See all review on Clutch</p>
        <LiaLongArrowAltRightSolid className='text-xl' />
      </div>
    </div>
  )
}

export default RatingCard
