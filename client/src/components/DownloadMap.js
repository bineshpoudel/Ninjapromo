import React from 'react'
import Button from './Button'
import { DownloadMapImg } from '../assets'

const DownloadMap = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#14141B] to-[#345CDB] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 py-20'>
        <div className='flex gap-2'>
          <div className='w-2/3 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>
              If you're not ready yet, download <br />
              our free "Ideal Marketing <br />
              Department 2024" mind map
            </h1>
            <p className='text-2xl'>
              Identify weaknesses and growth opportunities in your team
            </p>
            <div className='flex items-center gap-5'>
              <div className='flex flex-col gap-2'>
                <input
                  type='text'
                  className='bg-transparent border-none focus:outline-none w-full'
                  placeholder='Email'
                />
                <span className='w-80 h-0.5 bg-white'></span>
              </div>
              <Button className='w-64' label={'Get the mind map'} />
            </div>
          </div>
          <div className='pr-20'>
            <img
              src={DownloadMapImg}
              alt='downloadimg'
              className='h-80 hover:scale-110 duration-500'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadMap
