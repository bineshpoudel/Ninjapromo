import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const AwardCard = ({ img, desc }) => {
  return (
    <div className='relative border p-[0.4rem] md:p-[0.8rem] h-[6rem] w-[8.1rem] md:w-[18rem] md:h-[11rem] rounded-tl-3xl rounded-br-3xl'>
      <div className=' h-full border p-[0.4rem]  border-dotted rounded-tl-2xl rounded-br-2xl flex flex-col items-center'>
        <div className='flex items-center justify-center'>
          <img src={img} alt='' className='h-[4rem] w-full' />
        </div>
        <div className='w-[8rem] md:w-[18rem] p-2'>
          <p className='text-[0.5rem] md:text-sm font-semibold text-center px-3'>
            {desc}
          </p>
        </div>
      </div>
      <div className='absolute top-[-1.4rem] right-[-1.2rem]'>
        <MdOutlineStar className='h-8 w-8 md:h-10 md:w-10  text-[#3C39C6]' />
      </div>
    </div>
  )
}

export default AwardCard
