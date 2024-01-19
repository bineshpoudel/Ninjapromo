import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
const ShowDesign = () => {
  return (
    <div className='flex gap-10 absolute top-[-10rem] left-64 p-4 justify-center items-center'>
      <MdArrowRightAlt className='h-5' />
      <div className='w-80 flex flex-col justify-center gap-5 text-xl text-gray-500'>
        <p>Branding & Identity</p>
        <p>UX & UI Design</p>
        <p>Graphic Design</p>
        <p>AR/3D Design</p>
        <p>Motion Design</p>
        <p>Video Production</p>
        <p>Pitch Decks</p>
        <p>Whitepapers</p>
      </div>
    </div>
  )
}

export default ShowDesign
