import React from 'react'
import { LogoSvg } from '../assets'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaBehance,
} from 'react-icons/fa'

import Button from './Button'
const Footer = () => {
  return (
    <div className='w-full bg-[#121212] pb-20 pt-20 text-white'>
      <div className='max-w-screen-xl mx-auto px-10'>
        <hr className='pb-8' />
        <div className=' flex justify-between'>
          <div className='flex flex-col gap-10'>
            <div className='flex gap-5 items-center'>
              <img src={LogoSvg} alt='logo' className='w-36' />
              <p className='font-thin'>Marketing by subscription</p>
            </div>
            <Button label={'Book a call'} />
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-4 items-center'>
              <FaEnvelope />
              <p className='font-thin text-xl'>hello@gmail.com</p>
            </div>

            <div>
              <div className='flex gap-4'>
                <FaPhone />
                <div className='text-xl font-thin'>
                  <p>+1 929-492-4413 (US) </p>
                  <p>+44 20 3868 4672 (UK)</p>
                  <p>+65 3165 4789 (SG)</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex gap-2 pl-3'>
              <FaFacebook
                className='border-2 border-white rounded-full h-8 w-8 bg-black p-1
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300
              '
              />
              <FaTwitter className='border-2 border-white rounded-full h-8 w-8 bg-black p-1 hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300 ' />
              <FaYoutube
                className='border-2 border-white rounded-full h-8 w-8 bg-black p-1 
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300'
              />
              <FaLinkedin
                className='border-2 border-white rounded-full h-8 w-8 bg-black p-1
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300'
              />
              <FaInstagram
                className='border-2 border-white rounded-full h-8 w-8 bg-black p-1 
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300'
              />
              <FaBehance
                className='text-white border-2 border-white rounded-full h-8 w-8 bg-black p-1 
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 hover:border-none duration-300'
              />
            </div>
            <p className='text-gray-500 text-sm'>
              &copy;2024 Ninja Promo. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
