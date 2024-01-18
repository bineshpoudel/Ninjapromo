import React from 'react'

const FacilitiesBtn = ({ service }) => {
  return (
    <button className='bg-[#3c39c6] h-7 text-white uppercase text-xs p-1 rounded-md hover:bg-white hover:text-[#3c39c6] duration-200'>
      {service}
    </button>
  )
}

export default FacilitiesBtn
