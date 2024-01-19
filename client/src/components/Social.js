import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaBehance,
} from 'react-icons/fa'
const Social = () => {
  return (
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
  )
}

export default Social
