import React from 'react'

const BenefitCard = ({ title, desc }) => {
  return (
    <div className='w-full md:w-1/3 h-28 md:h-52 border border-white rounded-md bg-gradient-to-r from-[#151515] to-[#272727] hover:gradient-to-r hover:from-white hover:to-white hover:text-black p-5 md:p-10  '>
      <div className='flex flex-col items-center gap-3 md:gap-5 '>
        <h1 className=' text-2xl md:text-3xl font-bold '>{title}</h1>
        <p className=' text-sm md:text-2xl text-center'>{desc}</p>
      </div>
    </div>
  )
}

export default BenefitCard
