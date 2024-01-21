import React from 'react'

const ReviewCard = ({
  reviewText,
  author,
  position,
  service,
  authorImg,
  company,
}) => {
  return (
    <div className=' border-r border-r-white  h-96 w-96'>
      <div className='p-5 flex flex-col gap-5'>
        <div>
          <img className='h-10' src={company} alt='' />
        </div>
        <div className='h-10'>
          <h1 className='text-md'>{service}</h1>
        </div>

        <p className='text-xs pr-4'>{reviewText}</p>
        <div className='flex gap-2 pt-5 items-center'>
          <div>
            <img className='h-10 w-10 rounded-full' src={authorImg} alt='' />
          </div>
          <div className='italic text-gray-600 text-xs'>
            <p className='font-semibold'>{author}</p>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
