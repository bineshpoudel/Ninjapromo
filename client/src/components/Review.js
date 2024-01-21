import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import ReviewData from '../data/ReviewData'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import PrimaryBtn from './PrimaryBtn'
const Review = () => {
  const Reviews = ReviewData
  const reviewsShown = 3
  const [startIndex, setStartIndex] = useState(0)

  const handlePrevClick = () => {
    setStartIndex((currentIndex) =>
      currentIndex === 0 ? Reviews.length - reviewsShown : currentIndex - 1
    )
  }

  const handleNextClick = () => {
    setStartIndex((currentIndex) =>
      currentIndex === Reviews.length - reviewsShown
        ? 0
        : (currentIndex + 1) % Reviews.length
    )
  }

  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto p-10 pb-20'>
        <h2 className='text-2xl md:text-5xl pb-10'>What people are saying</h2>
        <div className='w-full flex overflow-hidden'>
          {Reviews.map((review, index) => (
            <div
              key={review.id}
              style={{
                flex: `0 0 33.333333%`, // 33.333333% for three cards
                transition: `transform 0.5s ease-in-out`,
                transform: `translateX(-${startIndex * (300 / reviewsShown)}%)`,
              }}
            >
              <ReviewCard
                company={review.company}
                author={review.author}
                position={review.position}
                service={review.serviceProvided}
                reviewText={review.reviewText}
                authorImg={review.authorImg}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-end mt-7 w-full text-gray-600 '>
          <GoArrowLeft
            onClick={handlePrevClick}
            className='h-12  w-12  mr-2 md:mr-4 cursor-pointer hover:text-white duration-200 '
          />
          <GoArrowRight
            onClick={handleNextClick}
            className='h-12  w-12 cursor-pointer  hover:text-white duration-200'
          />
        </div>
        <div className='py-10'>
          <PrimaryBtn label={'Get a proposal'} />
        </div>
      </div>
    </div>
  )
}

export default Review
