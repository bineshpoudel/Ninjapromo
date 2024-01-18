import React from 'react'

const ServiceBtn = ({ service }) => {
  return (
    <div>
      <button className='bg-[#3c39c6] text-white text-xs px-2 py-1 rounded-md'>
        {service}
      </button>
    </div>
  )
}

export default ServiceBtn
