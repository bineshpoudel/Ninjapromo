import React, { useEffect, useState } from 'react'
import { Polygon, Techstars, Iosg, Ycombinator, SignumCapital } from '../assets'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const Partners = () => {
  const partnerImages = [Polygon, Techstars, Iosg, Ycombinator, SignumCapital]
  const partnersPerRowLarge = 4
  const [startIndex, setStartIndex] = useState(0)

  const shownPartners = []

  for (let i = 0; i < partnersPerRowLarge; i++) {
    const partnerIndex = (startIndex + i) % partnerImages.length
    shownPartners.push(partnerImages[partnerIndex])
  }

  const showNext = () => {
    setStartIndex((currentIndex) => (currentIndex + 1) % partnerImages.length)
  }

  const showPrevious = () => {
    setStartIndex(
      (currentIndex) =>
        (currentIndex - 1 + partnerImages.length) % partnerImages.length
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNext()
    }, 3000)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [startIndex])

  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col  items-center'>
          <div className='p-20 '>
            <h1 className='text-4xl'>
              Our partners are backed by the best in the ventures
            </h1>
          </div>
          <div className='flex flex-wrap justify-center gap-[10rem]'>
            {shownPartners.map((image, index) => (
              <div key={index} className='mb-4 md:mb-0'>
                <img className='w-full h-16' src={image} alt='' />
              </div>
            ))}
          </div>

          <div className='flex justify-end mt-4 w-full text-gray-600 '>
            <GoArrowLeft
              onClick={showPrevious}
              className='h-12  w-12  mr-2 md:mr-4 cursor-pointer hover:text-white duration-200 '
            />
            <GoArrowRight
              onClick={showNext}
              className='h-12  w-12 cursor-pointer  hover:text-white duration-200'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
