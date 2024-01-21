import React from 'react'
import { GiStarSkull } from 'react-icons/gi'
import { FaArrowRight } from 'react-icons/fa'

const CompanyOverview = () => {
  return (
    <div className='w-full '>
      <div className='max-w-screen-xl mx-auto p-10 pb-20'>
        <div className=''>
          <div className='relative h-72 w-72 md:h-96 md:w-[32rem] bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 rounded-tl-3xl rounded-br-3xl'>
            <div className='p-10 flex flex-col gap-6'>
              <h1 className='text-2xl'>We love what we do </h1>
              <p className='text-sm'>
                Some of us are shy, some are influential strategists. What we
                have in common is our burning desire to create meaningful work
                that reaches an audience. NinjaPromo is the perfect home for
                creatives, code enthusiasts and marketing master-minds to
                explore and develop their superpowers. We are grateful for the
                freedom to grow as an agency, grateful for our team, and
                grateful for our clients. We love what we do. And we rock at it.
              </p>
              <div className='flex items-center gap-5'>
                <p className='text-lg'>Explore Services</p>
                <div className='h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center'>
                  <FaArrowRight className='text-white' />
                </div>
              </div>
            </div>
            <div className='absolute top-[-2rem] right-[-2rem]'>
              <GiStarSkull className='h-20 w-20 z-50' />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview
