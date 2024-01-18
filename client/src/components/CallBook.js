import React from 'react'
import { Team1 } from '../assets'
import Button from './Button'

const CallBook = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#151520] to-[#3360de]'>
      <div className='max-w-screen-xl mx-auto px-10 py-20 text-white flex justify-between items-center'>
        <img src={Team1} alt='' />
        <h1 className='text-5xl font-semibold'>
          Let's discuss how we'll work <br /> on your project using <br /> the
          subscription model
        </h1>
        <Button label={'Book a call'} />
      </div>
    </div>
  )
}

export default CallBook
