import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
  return (
    <div className='w-full  bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 pb-32'>
        <div className='pb-20'>
          <h1 className='text-center text-4xl '>
            If you have fewer tasks right now, <br /> choose the 80 or 40-hour
            package
          </h1>
        </div>

        <div className='flex gap-5'>
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  )
}

export default Packages
