import React from 'react'
import BenefitCard from './BenefitCard'

const Benefits = () => {
  return (
    <div className='w-full h-[50vh] md:h-[50vh] bg-gradient-to-br from-[#131318] to-[#121212] text-white pt-20 px-6 md:px-0'>
      <div className='max-w-screen-xl mx-auto px-10 '>
        {/* <div className='flex  justify-center items-center gap-3'> */}
        <div className='flex flex-col w-full md:flex-row gap-3'>
          <BenefitCard
            title={'1-3 month'}
            desc={'You save on hiring an inhouse marketer'}
          />
          <BenefitCard
            title={'$50 000'}
            desc={'You save on agency fees per year'}
          />
          <BenefitCard
            title={'40-60 hours'}
            desc={'Per month you get for rapid growth'}
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits
