import React from 'react'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { GiStarSkull } from 'react-icons/gi'
import { CiHeart } from 'react-icons/ci'
import { PiSmileyThin } from 'react-icons/pi'
import { GiSpring } from 'react-icons/gi'
const CompanyOverview = () => {
  return (
    <div className='w-full h-[200vh]'>
      <div className='relative max-w-screen-xl mx-auto  pb-20'>
        <div className='grid grid-cols-12 gap-1'>
          <div className='col-span-12 md:col-span-5'>
            <div className='relative h-96 w-[32rem] bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 rounded-tl-3xl rounded-br-3xl flex flex-col gap-6 p-10'>
              <h1 className='text-3xl'>We love what we do</h1>
              <p className='text-md font-thin'>
                Some of us are shy, some are influential strategists. What we
                have in common is our burning desire to create meaningful work
                that reaches an audience. NinjaPromo is the perfect home for
                creatives, code enthusiasts and marketing master-minds to
                explore and develop their superpowers. We are grateful for the
                freedom to grow as an agency, grateful for our team, and
                grateful for our clients. We love what we do. And we rock at it.
              </p>
              <div className='flex gap-3 items-center'>
                <p className='text-xl'>Explore Services</p>
                <div className='h-8 w-8 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center'>
                  <VscArrowSmallRight className='text-white text-xl' />
                </div>
              </div>
              <div className='absolute top-[-2rem]  right-[-2rem]'>
                <GiStarSkull className='h-24 w-24' />
              </div>
            </div>
          </div>
          <div className=' relative col-span-12 md:col-span-7 h-[34rem]'>
            <div className=' w-[45rem] h-96 absolute top-36 border-2 border-black p-10 flex flex-col gap-10 rounded-tl-3xl rounded-br-3xl'>
              <h2 className='text-2xl'>
                Quality Always and No <br /> Matter What
              </h2>
              <p className='text-md font-thin'>
                Producing powerful assets that our clients believe in and can
                see the detail in is our top priority. This means spending time
                to think, strategise, and experiment. We don't rush. We aim to
                deliver pixel-perfect visuals that draw attention and action.
                We're not afraid of a challenge. In our quest for quality, we
                are ready to move mountains.
              </p>
              <div className='flex gap-3 items-center'>
                <p className='text-xl'>See all our projects</p>
                <div className='h-8 w-8 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center'>
                  <VscArrowSmallRight className='text-white text-xl' />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute right-96 bottom-[47rem] z-10'>
            <GiSpring className='h-32 w-32 rotate-[132deg]' />
          </div>

          <div className='col-span-12 px-48 h-96'>
            <div className=' absolute  bg-[#D8D7F4] w-[45rem] h-80 border-black p-10 flex flex-col gap-10 rounded-tl-3xl rounded-br-3xl'>
              <h2 className='text-2xl'>Our Curiosity Never Stops</h2>
              <p className='text-md font-thin'>
                We never rest on past success. We like to push boundaries and
                keep experimenting to be the best partner our clients can find.
                Learning is in our company DNA. It's also a must in our
                industry. Technology advances daily, so r to surprise and
                delight, we need to stay ahead of the curve. Our work starts by
                immersing ourselves in our clients' businesses and their
                audiences' needs. We uncover key value propositions and craft
                powerful brand stories.
              </p>
              <div className='flex gap-3 items-center'>
                <p className='text-xl'>See what's new</p>
                <div className='h-8 w-8 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center'>
                  <VscArrowSmallRight className='text-white text-xl' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-1 px-20'>
            <div></div>
          </div>
          <div className='col-span-12 md:col-span-6 pl-32'>
            <div className='flex gap[-2rem] relative  pt-32'>
              <div className='w-32 h-32 rounded-full border border-black absolute '></div>
              <div className='w-32 h-32 rounded-full border border-black absolute left-20'></div>
              <div className='w-32 h-32 rounded-full border border-black bg-white absolute left-40 z-40'>
                <PiSmileyThin className='w-full h-full' />
              </div>
              <div className='w-32 h-32 rounded-full border border-black absolute left-60 '></div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-5'>
            <div className='relative h-96 w-[32rem] border-2 border-black rounded-tl-3xl rounded-br-3xl flex flex-col gap-6 p-10'>
              <h1 className='text-3xl'>
                We Empower Our Team and <br /> Put People Above All
              </h1>
              <p className='text-md font-thin'>
                We've pushed ourselves to deliver the most forward-thinking
                digital experiences for our clients. We fundamentally believe in
                supporting our people to create the future. More than any
                process or tool, this principle defines much of how we work at
                NinjaPromo.
              </p>
              <div className='flex gap-3 items-center'>
                <p className='text-xl'>Explore Services</p>
                <div className='h-8 w-8 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center'>
                  <VscArrowSmallRight className='text-white text-xl' />
                </div>
              </div>
              <div className='absolute  bottom-[-3rem] right-[2rem]  '>
                <CiHeart className='h-24 w-24 z-50' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview
