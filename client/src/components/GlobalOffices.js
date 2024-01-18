import React from 'react'
import OfficeCard from './OfficeCard'

// Now you can use the `officeData` array in this file

const GlobalOffices = () => {
  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 py-48 pb-20'>
        <div className='text-center flex flex-col gap-10 py-10'>
          <h1 className='text-4xl'>We Work worldwide</h1>
          <p className='text-2xl text-center'>
            A fully remote team of over 100 top marketing experts <br /> from
            around the world
          </p>
        </div>
        <div>
          <OfficeCard />
        </div>
      </div>
    </div>
  )
}

export default GlobalOffices
