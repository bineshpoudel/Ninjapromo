import React from 'react'
import { AirBnb, BannerLeft, BannerRight, Logitech, Samsung } from '../assets'
import { PiCrown } from 'react-icons/pi'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import Button from './Button'

const Banner = () => {
  return (
    <div className='w-full h-[80vh] bg-gradient-to-r from-[#25246b] to-[#121212]'>
      <div className='max-w-screen-xl mx-auto px-10 pt-20 text-white flex items-center justify-between'>
        <div className='flex flex-col gap-8'>
          <div className='flex gap-10'>
            <img src={BannerLeft} alt='banner-left' />
            <span className='flex items-center gap-3 border border-gray-200 px-5 rounded-[10rem]'>
              {' '}
              <PiCrown /> Best Marketing Agencies
            </span>
          </div>
          <h1 className='whitespace-pre-line text-5xl font-bold'>
            Get a full marketing <br />
            department for $9600 per <br /> month
          </h1>
          <p>From the #1 agency trusted by the world's biggest brands</p>
          <div className='flex gap-10'>
            <img src={Logitech} alt='logitech ' className='h-8' />
            <img src={Samsung} alt='samsung' className='h-8' />
            <img src={AirBnb} alt='airbnb' className='h-8' />
          </div>
          <div className='flex items-center gap-6'>
            <Button label='Book a call' />
            <IoIosArrowRoundBack className='text-4xl' />
            <p>
              Development, design, content, ads and <br /> all you need in one
              subscription
            </p>
          </div>
        </div>
        <div className='flex relative'>
          <img
            src={BannerRight}
            alt='banner-right-img'
            className='h-[486px] w-[486px] hover:scale-110 duration-500'
          />
          <div className='bg-[#181818] h-40 w-4/5 flex flex-col gap-4 px-6 py-4 absolute text-xl rounded-md bottom-[-1.6rem] right-[-1.6rem]'>
            <h2 className='text-2xl'>Clutch</h2>
            <p className=''>
              "Ninja Promo have become an extension to our team"
            </p>
            <p className='flex'>
              4.8 out of 5,0(28){' '}
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
