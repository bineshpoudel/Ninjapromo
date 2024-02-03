import React from 'react'
import Form from './Form'
import { Fantom, Iqoniq, Polkadot } from '../assets'

const JourneyGrowth = () => {
  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto p-10 pb-20'>
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-6 p-10'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl'>Launch your grow now</h1>
              <p className='text-lg'>
                Become a Ninja Promo partner and leap-frog your competition. But
                first, let's:
              </p>
              <ul className='flex flex-col gap-5 list-disc pl-4 pb-20'>
                <li>Take a deep dive into your business and objectives.</li>
                <li>
                  Establish tailored strategies that propel you towards your
                  goals.
                </li>
                <li>Outline expectations, deliverables, and budgets.</li>
              </ul>
              <p className='text-xl'>You're in great hands</p>
              <div className='flex gap-6'>
                <img src={Fantom} alt='fantom' className='w-20' />
                <img src={Iqoniq} alt='iqoniq' className='w-20' />
                <img src={Polkadot} alt='polkadot' className='w-20' />
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default JourneyGrowth
