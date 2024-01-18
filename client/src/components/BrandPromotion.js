import React from 'react'
import { Stockmusic, Credible, Htx, Intellectsoft } from '../assets'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import BrandCard from './BrandCard'
import FacilitiesBtn from './FacilitiesBtn'
const BrandPromotion = () => {
  return (
    <div className='w-full text-white bg-gradient-to-br from-[#121212] to-[#25246b] pt-20 pb-20 '>
      <div className='max-w-screen-xl mx-auto px-10'>
        <div>
          <div className='relative'>
            <div className='h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5'>
              <div className=' h-full w-full bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] p-10 flex flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                  <div className='flex justify-between pb-8'>
                    <h1 className='text-3xl text-left'>
                      Proven expertise in promoting top <br /> international
                      brands
                    </h1>
                    <div className='grid grid-cols-4 gap-2 px-24'>
                      <FacilitiesBtn service={'Crypto'} />
                      <FacilitiesBtn service={'Finetech'} />
                      <FacilitiesBtn service={'SAas'} />
                      <FacilitiesBtn service={'Software'} />
                      <FacilitiesBtn service={'Ecom'} />
                      <FacilitiesBtn service={'Gaming'} />
                      <FacilitiesBtn service={'b2b'} />
                      <FacilitiesBtn service={'realstate'} />
                    </div>
                  </div>
                  <div className='w-full grid grid-cols-2 gap-5 pr-24 relative'>
                    <BrandCard
                      logo={Credible}
                      description={
                        "Reached 9M impression's go-to-market journey"
                      }
                    />
                    <BrandCard
                      logo={Stockmusic}
                      description={
                        'Acquired 40,310 signups for StockMusic in just three months'
                      }
                    />
                    <BrandCard
                      logo={Intellectsoft}
                      description={
                        'Attracted 3,000 C-level executives expressing interest in Intellectsofts services'
                      }
                    />
                    <BrandCard
                      logo={Htx}
                      description={'Generated $20 million in revenue for HTX'}
                    />

                    <MdOutlineKeyboardArrowRight className='  h-20 w-20 rounded-full absolute right-1 bottom-36 bg-[#3c3c3c] border border-gray-700 text-gray-300' />
                  </div>
                </div>
              </div>
            </div>

            <div className='h-12 w-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center rounded-full absolute top-[-1.6rem] left-[-1.6rem]'>
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandPromotion
