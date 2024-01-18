import React from 'react'

import RatingCard from './RatingCard'
import TestinomialCard from './TestinomialCard'
import { Affyn, Ultron, Innowise } from '../assets'
const Testinomials = () => {
  return (
    <div className='w-full bg-[#121212] text-white'>
      <div className='max-w-screen-xl mx-auto px-10 pb-20'>
        <div className='pb-10'>
          <h1 className='text-4xl text-center font-bold'>Testinomials</h1>
        </div>
        <div className='grid grid-cols-4 gap-3'>
          <RatingCard />
          <TestinomialCard
            review={
              "We were very happy with the team's work. We always received everything on time and with great quality"
            }
            reviewedBy={Ultron}
          />
          <TestinomialCard
            review={
              'NinjaPromo.io is a multi-talented team offering a wide array of skills, creativity, and experience.'
            }
            reviewedBy={Affyn}
          />
          <TestinomialCard
            review={`"Their insights into the industry's and our target audiences continue to surprise us”`}
            reviewedBy={Innowise}
          />
        </div>
      </div>
    </div>
  )
}

export default Testinomials
