import React from 'react'

import Award from '../components/Award'
import Partners from '../components/Partners'
import Review from '../components/Review'
import OurTeam from '../components/OurTeam'
import CompanyOverview from '../components/CompanyOverview'
import JourneyGrowth from '../components/JourneyGrowth'
import AboutBanner from '../components/AboutBanner'

const About = () => {
  return (
    <div className=''>
      <AboutBanner />
      <Award />
      <Partners />
      <Review />
      <OurTeam />
      <CompanyOverview />
      <JourneyGrowth />
    </div>
  )
}

export default About
