import React from 'react'

const MarketingServices = () => {
  return (
    <div className='w-full text-white bg-gradient-to-br from-[#121212] to-[#25246b]  '>
      <div className='max-w-screen-xl mx-auto px-10 py-20'>
        <div className='relative'>
          <div class='h-[40vh] w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5'>
            <div class=' h-full w-full bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] p-10 flex flex-col gap-10'>
              <h1 className='text-3xl'>
                All marketing services <br />
                in one subscription
              </h1>

              <div className='flex'>
                <button className='w-40 rounded-md bg-[#3C39C6] px-2 py-4'>
                  Your ninja Promo marketing department
                </button>
                <div className='flex flex-col'></div>

                <div className='flex flex-col'>
                  <button>Development</button>
                  <button>Design & Creative</button>
                  <button>Ditigal</button>
                  <button>Analytics</button>
                </div>
              </div>
            </div>
          </div>

          <div className='h-12 w-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center rounded-full absolute top-[-1.6rem] left-[-1.6rem]'>
            3
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingServices
