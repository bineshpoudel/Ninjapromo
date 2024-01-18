import React from 'react'
import { AccessImg, Strategist, ReportImg } from '../assets'

const SubscriptionOnBoarding = () => {
  return (
    <div className='w-full h-[180vh] bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 py-20'>
        <h1 className='text-center text-5xl pb-20'>
          You're now subscribed - <br />
          What comes next?
        </h1>
        <div className='flex gap-40'>
          <div className='h-[120vh] border border-white relative group group-hover:border-red-500'>
            <div className='absolute h-16 w-16 bg-black rounded-full border border-white flex justify-center items-center top-[-0.8rem] left-[-2rem]'>
              1
            </div>
            <div className='absolute h-16 w-16 bg-black rounded-full border border-white flex justify-center items-center top-[25rem] left-[-2rem] '>
              2
            </div>
            <div className='absolute h-16 w-16 bg-black rounded-full border border-white flex justify-center items-center top-[48rem] left-[-2rem]'>
              3
            </div>
            <div className='absolute h-6 w-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex justify-center items-center top-[60rem] left-[-0.8rem]'></div>
          </div>
          <div className='grid grid-cols-2 gap-28'>
            <div className='flex flex-col gap-5 text-xl'>
              <p>
                A skilled marketing strategist, experienced in your industry,
                will join your team
              </p>

              <p className='text-gray-400'>
                Together, you will develop a monthly work plan that aligns with
                your marketing goals. This strategist will hand-pick specialists
                who have a proven track record in similar projects
              </p>
            </div>
            <div>
              <img
                src={Strategist}
                alt='strategist'
                className='hover:scale-110 duration-500'
              />
            </div>
            <div className='flex flex-col gap-5 text-xl'>
              <p className=''>
                You'll have accest-2xls to 40 expert hours to use as you see fit
              </p>
              <p className='text-gray-500'>
                This could be for tackling tasks that were previously out of
                reach due to limited resources — like designing advertising
                creatives, composing email campaigns, or overhauling your
                website's design — or simply for outsourcing routine tasks such
                as managing social media
              </p>
            </div>
            <div>
              <img
                src={AccessImg}
                alt='accessiblethings'
                className='hover:scale-110 duration-500'
              />
            </div>
            <div className='flex flex-col gap-5 text-xl '>
              <p>
                At the end of each week, you'll get a report that clearly
                outlines what was achieved and how many hours were used
              </p>
              <p className='text-gray-500 text-xl'>
                You can easily modify the work plan as needed and request
                different services along the way. If you have unused hours,
                they'll roll over to the next month
              </p>
            </div>
            <div>
              <img
                src={ReportImg}
                alt='reports'
                className='hover:scale-110 duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionOnBoarding
