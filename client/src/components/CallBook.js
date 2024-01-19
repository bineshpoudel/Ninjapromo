import React from 'react'
import { Team1 } from '../assets'
import Button from './Button'

const CallBook = () => {
  return (
    // <div className='w-full h-[40vh] bg-gradient-to-r from-[#121212] via-[#2B2A7F] to-[#3360de] flex items-center '>
    //   <div className='max-w-screen-xl mx-auto text-white '>
    //     <div className='w-full flex items-center justify-between'>
    //       <img src={Team1} alt='team member ' className='h-40' />
    //       <h1 className='text-5xl font-semibold'>
    //         Let's discuss how we'll work <br /> on your project using <br /> the
    //         subscription model
    //       </h1>
    //       <Button label={'Book a call'} />
    //     </div>
    //   </div>
    // </div>

    <div
      className='w-full p-24 bg-gradient-to-r from-[#121212]
      via-[#2B2A7F] to-[#3360de]'
    >
      <div className='max-w-screen-xl mx-auto px-10 text-white  h-full w-full'>
        <div className='flex items-center justify-between '>
          <img src={Team1} alt='' className='h-40' />
          <h1 className='text-4xl font-semibold'>
            Let's discuss how we'll work <br /> on your project using <br /> the
            subscription model
          </h1>
          <div className='w-64'>
            <Button label={'Book a call'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallBook
