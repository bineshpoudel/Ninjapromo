import React from 'react'

const BenefitCard = ({ title, desc }) => {
  return (
    <div className='w-1/3 border border-white p-10 rounded-md bg-[#262626] hover:bg-[#fff] hover:text-black  '>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold '>{title}</h1>
        <p className='text-2xl text-center'>{desc}</p>
      </div>
    </div>
  )
}

export default BenefitCard
