import React from 'react'
import AwardData from '../data/AwardData'
import AwardCard from './AwardCard'

const Award = () => {
  const digitalMarketingAwards = AwardData.filter(
    (award) => award.award === 'digitalmarketing'
  )

  const blockChainMarkeingAwards = AwardData.filter(
    (award) => award.award === 'blockchainmarketing'
  )

  const fineTechMarketingAwards = AwardData.filter(
    (award) => award.award === 'fintechmarketing'
  )

  return (
    <div className='w-full bg-[#121212] text-white pt-10'>
      <div className='max-w-screen-xl mx-auto px-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0'>
          {digitalMarketingAwards.map((award) => (
            <div key={award.id} className='m-4'>
              <AwardCard img={award.img} desc={award.desc} />
            </div>
          ))}
        </div>

        {/* Awards for block chain marketing */}
        <h2>Awards for block chain management</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {blockChainMarkeingAwards.map((award) => (
            <div key={award.id} className='m-4'>
              <AwardCard img={award.img} desc={award.desc} />
            </div>
          ))}
        </div>

        {/* Awards for Finetech marketing */}
        <h2>Awards forFinetechmanagement</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {fineTechMarketingAwards.map((award) => (
            <div key={award.id} className='m-4'>
              <AwardCard img={award.img} desc={award.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Award
