import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { Clutch, Crunchbase, DigitalAgencyNetwork, Manifest } from '../assets'
const AboutBanner = () => {
  return (
    <div className='w-full h-[90vh] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0D115A] via-[#732BF7] to-[#FD99D3] text-white '>
      <div className='max-w-screen-xl mx-auto pt-20 '>
        <div className='flex flex-col items-center gap-20'>
          <h1 className='text-5xl text-center'>
            The Brightest Minds <br /> in Digital at Your Service
          </h1>
          <p className='text-xl px-32 text-center'>
            Established in 2017, NinjaPromo is an agency with influence around
            the world. We help brands connect with their customers by creating
            personal connections in this digital world. Most of them are still
            with us. The key to our success? We bring personal to digital.
          </p>
          <div className='flex gap-6'>
            <div className=' border border-white'>
              <PrimaryBtn label={'Get a proposol'} className='w-72' />
            </div>

            <div className='flex gap-2 items-center group'>
              <p className='text-xl'>Meet Ninjapromo</p>
              <div className='h-12 w-12 bg-white rounded-full text-blue-800 flex items-center justify-center   group-hover:bg-blue-600 group-hover:text-white duration-400'>
                <VscArrowSmallRight className='text-3xl' />
              </div>
            </div>
            <div></div>
          </div>
          <div className='flex gap-5'>
            <img className='w-40 h-16' src={Crunchbase} alt='crunchbase' />
            <img
              className='w-40 h-16'
              src={DigitalAgencyNetwork}
              alt='digitalagencynetwork'
            />
            <img className='w-40 h-16 ' src={Manifest} alt='manifest' />
            <img className='w-40 h-16 ' src={Clutch} alt='clutch' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner
