import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { Ultron } from '../assets'

const TestinomialCard = ({ review, reviewedBy }) => {
  return (
    <div
      className='h-80 w-full border-2 border-[#1f1f1f] rounded-lg
bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b]
    '
    >
      <div className='p-6 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <ImQuotesLeft className='text-4xl' />
          <p className='text-l h-28'>{review}</p>
        </div>

        <img className='w-48' src={reviewedBy} alt='' />
      </div>
    </div>
  )
}

export default TestinomialCard
