import React from 'react'
import TeamData from '../data/teamData'

const OurTeam = () => {
  return (
    <div className='w-full bg-white text-[#121212]'>
      <div className='max-w-screen-xl mx-auto p-20'>
        <div className='py-10'>
          <h1 className='text-3xl'>Our Team</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 items-center'>
          {TeamData.map((team) => (
            <div key={team.id} className='flex flex-col gap-2'>
              <div className='h-full w-full'>
                <img
                  className='h-full w-full'
                  src={team.img}
                  alt='team-members-img'
                />
              </div>

              <div className='text-center flex flex-col gap-1 h-20'>
                <p className='text-center text-xl font-semibold '>
                  {team.name}
                </p>
                <p className='font-thin text-sm'>{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
