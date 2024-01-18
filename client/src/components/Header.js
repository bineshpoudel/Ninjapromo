import { LogoSvg } from '../assets/index'
import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import Button from './Button'
const Header = () => {
  return (
    <div className='w-full h-20 bg-gradient-to-r from-[#25246B]  to-[#121213] text-white transition duration-500 hover:bg-[#121212] hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#121212]'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center gap-10 px-10'>
        <div className='flex items-center'>
          <img src={LogoSvg} alt='logo' className='w-30 text-blue-500 ' />
        </div>
        <div className='flex-grow flex justify-between'>
          <div>Marketing by subscription</div>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='hover:text-blue-500 transition-colors duration-300 ease-in-out'
            >
              Services
            </a>
            <SlArrowDown />
          </div>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='hover:text-blue-500 transition-colors duration-300 ease-in-out'
            >
              Industries
            </a>
            <SlArrowDown />
          </div>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='hover:text-blue-500 transition-colors duration-300 ease-in-out'
            >
              Work
            </a>
            <SlArrowDown />
          </div>
          <div className='flex items-center gap-2'>
            <a
              href='#'
              className='hover:text-blue-500 transition-colors duration-300 ease-in-out'
            >
              Company
            </a>
            <SlArrowDown />
          </div>
          <div className='hover:text-blue-500 transition-colors duration-300 ease-in-out'>
            Contact
          </div>
        </div>
        <div>
          <Button label='Discuss the project' />
        </div>
      </div>
    </div>
  )
}

export default Header
