import React from 'react'
import { AirBnb, BannerLeft, BannerRight, Logitech, Samsung } from '../assets'
import { PiCrown } from 'react-icons/pi'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import Button from './Button'

const Banner = () => {
  return (
    <div className='w-full h-[110vh] md:h-[80vh] bg-gradient-to-br from-[#25246b] via-[#141414] to-[#121212]'>
      <div className='max-w-screen-xl mx-auto px-10 pt-20 text-white flex items-center justify-between flex-col md:flex-row gap-5'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <div className='flex flex-col items-start md:flex-row gap-2 md:gap-10'>
            <img src={BannerLeft} alt='banner-left' className='h-12' />
            <span className='w-72 flex items-center gap-3 border border-gray-200 px-5 rounded-full'>
              <PiCrown className='h-12' /> Best Marketing Agencies
            </span>
          </div>
          <h1 className='text-xl md:text-5xl  font-bold'>
            Get a full marketing <br />
            department for $9600 per <br /> month
          </h1>
          <p className='w-64 md:w-full text-xs md:text-xl'>
            From the #1 agency trusted by the world's biggest brands
          </p>
          <div className='flex gap-2 md:gap-8'>
            <img src={Logitech} alt='logitech ' className='h-4 md:h-8' />
            <img src={Samsung} alt='samsung' className='h-4 md:h-8' />
            <img src={AirBnb} alt='airbnb' className='h-4 md:h-8' />
          </div>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='w-72'>
              <Button label='Book a call' />
            </div>

            <IoIosArrowRoundBack className='text-4xl hidden md:inline-block' />
            <p className='text-sm font-thin w-full'>
              Development, design, content, ads and <br /> all you need in one
              subscription
            </p>
          </div>
        </div>
        <div className='flex relative p-5 md:p-0'>
          <img
            src={BannerRight}
            alt='banner-right-img'
            className='h-[30.3rem] w-[30.3rem] hover:scale-110 duration-500'
          />
          <div className='bg-[#181818] h-30 md:h-42 w-3/5 md:w-4/5 flex flex-col gap-4 px-6 py-4 absolute text-xs  md:text-xl rounded-md bottom-[-1.8rem] right-[1.2rem] md:right-[-1.6rem]'>
            <h2 className='text-xl md:text-2xl'>Clutch</h2>
            <p className='italic'>
              "Ninja Promo have become an extension to our team"
            </p>
            <p className='flex gap-2 items-center'>
              4.8 out of 5,0(28)
              <span className='flex gap-1 text-yellow-400'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
