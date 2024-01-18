import React from 'react'
import { MarketingAchievement } from '../assets'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'

const MarketingAchievements = () => {
  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 pb-20'>
        <div className='pb-16'>
          <h1 className='text-4xl text-center font-bold'>
            You'll get the experience and resources <br /> of the world's № 1
            digital agency at the <br /> price of 1-2 in-house marketers
          </h1>
        </div>

        <div className='flex gap-2'>
          <div className='flex flex-col gap-5'>
            <div className='underline text-gray-400 flex flex-col gap-5'>
              <p>Best Digital Agencies Worldwide</p>
              <p>Top Digital Marketing Agencies for Startups</p>
              <p>Best Advertising Agency in US</p>
              <p>Best Digital Marketing Agency in the US</p>
              <p>Best Web3 Marketing Agency</p>
              <p>№1 Marketing Agency for Entrepreneurs</p>
              <p>Top E-commerce Marketing Agencies in 2023</p>
              <p>Best Crypto Marketing Agency Worldwide</p>
              <p>Top Blockchain Marketing Agency</p>
            </div>
            <div className='flex justify-center items-center no-underline'>
              <p className='text-gray-200 italic'>
                Ninja Promo team at the Blockchain'Economy Summit, Dubai 2023
              </p>
              <LiaLongArrowAltRightSolid className='w-full text-3xl' />
            </div>
          </div>

          <div>
            <img
              src={MarketingAchievement}
              alt='marketingachievement'
              className='hover:scale-110 duration-500'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingAchievements
