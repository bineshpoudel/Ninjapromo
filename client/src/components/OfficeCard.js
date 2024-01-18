import React from 'react'
import officeData from '../data/OfficeData'
const OfficeCard = () => {
  return (
    <div className='flex '>
      {officeData.map((office) => {
        return (
          <div
            key={office.id}
            className='flex-shrink-0 w-1/6 bg-[#181818] border-r border-r-gray-700 '
          >
            <div className='px-2 py-6 flex flex-col gap-4 '>
              <img
                src={office.img}
                alt={office.country}
                className='h-80 w-full object-cover rounded-md'
              />
              <h1 className='text-2xl'>{office.country}</h1>
              <p className='text-gray-500 text-l'>{office.location}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OfficeCard
