import React from 'react'
import { SubscriptionTestImg } from '../assets'
import Button from './Button'

const SubscriptionTestDetails = () => {
  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 pb-20'>
        <div>
          <div className='pb-20'>
            <h1 className='text-4xl text-center'>
              Test the subscription model
            </h1>
          </div>
          <div className='w-full flex gap-16'>
            <div className='w-1/2 flex flex-col gap-16'>
              <h2 className='text-2xl'>
                Register for the Zoom presentation and receive:
              </h2>
              <ol className='text-gray-400 text-xl flex flex-col gap-5 pt-10 pl-5 list-decimal '>
                <li>
                  A comprehensive blueprint for designing the ideal marketing
                  department
                </li>
                <li>
                  Detailed analysis of successful case studies tailored to your
                  industry
                </li>
                <li>
                  One-on-one consultation with a strategic marketing expert
                </li>
                <li>A preliminary work plan outlining actionable steps</li>
                <li>Exclusive terms for a one-month trial period</li>
              </ol>
              <div className='w-96'>
                <Button
                  className='w-full'
                  label={'Sign up for a presentation'}
                />
              </div>
            </div>
            <div className='w-1/2 '>
              <img
                src={SubscriptionTestImg}
                alt='subscription-test-img'
                className='w-[90%] h-auto hover:scale-110 duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionTestDetails
