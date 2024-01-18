import React from 'react'
import {
  Team1,
  Team2,
  Team3,
  Team4,
  Team5,
  Team6,
  Team7,
  HostFinger,
  Sortlist,
  StartupStash,
} from '../assets'
const Team = () => {
  return (
    <div className='w-full text-white bg-gradient-to-br from-[#121212] to-[#25246b]  '>
      <div className='max-w-screen-xl mx-auto px-10'>
        <div>
          <div className='flex justify-center py-20'>
            <h1 className='text-center text-5xl'>
              {' '}
              Imagine that for only $9600 <br /> per month, you can get
            </h1>
          </div>

          <div className='relative'>
            <div class='h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5'>
              <div class=' h-full w-full bg-[#121212] p-20 flex flex-col gap-10'>
                <h1 className='text-3xl w-90'>
                  Access a team of 100+ top <br /> global marketing expertss
                </h1>
                <div className='flex relative'>
                  <img src={Team1} alt='teammembers' className='h-24 w-24 ' />
                  <img
                    src={Team2}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[4.5rem]'
                  />
                  <img
                    src={Team3}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[9rem]'
                  />
                  <img
                    src={Team4}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[13.5rem]'
                  />
                  <img
                    src={Team5}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[18rem]'
                  />
                  <img
                    src={Team6}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[22.5rem]'
                  />
                  <img
                    src={Team7}
                    alt='teammembers'
                    className='h-24 w-24 absolute left-[27rem]'
                  />
                </div>
                <div className='flex gap-16'>
                  <div className='flex flex-col gap-10'>
                    <img src={Sortlist} alt='sortlist' className='h-16' />
                    <p className='text-gray-600'>
                      Best Advertising Agency in the US
                    </p>
                  </div>

                  <div className='flex flex-col gap-10'>
                    <img src={HostFinger} alt='hostfinger' className='h-16' />
                    <p className='text-gray-600'>
                      Best Digital Agency Worldwide
                    </p>
                  </div>
                  <div className='flex flex-col gap-10'>
                    <img
                      src={StartupStash}
                      alt='startupstash'
                      className='h-16'
                    />
                    <p className='text-gray-600'>Best Web3 Marketing Agency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-12 w-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center rounded-full absolute top-[-1.6rem] left-[-1.6rem]'>
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
