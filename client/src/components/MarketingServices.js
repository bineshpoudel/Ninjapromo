import React, { useState } from 'react'
import ShowMe from './ShowMe'
import ShowDevelopment from './ShowDevelopment'
import ShowDesign from './ShowDesign'
import ShowDigital from './ShowDigital'
import ShowAnalytics from './ShowAnalytics'

const MarketingServices = () => {
  const [isDivVisible, setDivVisibility] = useState(false)
  const [isDevelopmentVisible, setDevelopmentVisible] = useState(false)
  const [isDesignVisible, setDesignVisible] = useState(false)
  const [isDigitalVisible, setDigitalVisible] = useState(false)
  const [isAnalyticsVisible, setAnalyticsVisible] = useState(false)
  return (
    <div className='w-full text-white bg-[#121212] '>
      <div className='max-w-screen-xl mx-auto px-10 py-20'>
        <div className='relative'>
          <div class='h-[90vh] w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5'>
            <div class=' h-full w-full bg-gradient-to-r from-[#191919] to-[#282828]  p-10 flex flex-col gap-10'>
              <h1 className='text-3xl'>
                All marketing services <br />
                in one subscription
              </h1>

              <div className='flex gap-28 items-center'>
                <button className='w-40 rounded-md bg-[#3C39C6] px-2 py-4'>
                  Your ninja Promo marketing department
                </button>
                <div className='flex flex-col'></div>

                <div className=' flex flex-col gap-5'>
                  <div className=' relative flex gap-20'>
                    <button
                      onClick={() => {
                        setDivVisibility(!isDivVisible)
                        setDevelopmentVisible(false)
                        setDesignVisible(false)
                        setAnalyticsVisible(false)
                        setDigitalVisible(false)
                      }}
                      className='border border-white w-52 py-6 px-4 rounded-md text-left text-xl bg-[#333333]'
                    >
                      Strategy
                    </button>

                    <div>{isDivVisible && <ShowMe />}</div>
                  </div>
                  <div className=' relative flex gap-20'>
                    <button
                      onClick={() => {
                        setDevelopmentVisible(!isDevelopmentVisible)
                        setDivVisibility(false)
                        setDesignVisible(false)
                        setAnalyticsVisible(false)
                        setDigitalVisible(false)
                      }}
                      className='border border-white w-52 py-6 px-4 rounded-md  text-black text-left text-xl bg-white'
                    >
                      Development
                    </button>
                    <div>{isDevelopmentVisible && <ShowDevelopment />}</div>
                  </div>
                  <div className=' relative flex gap-20'>
                    <button
                      onClick={() => {
                        setDesignVisible(!isDesignVisible)
                        setDevelopmentVisible(false)
                        setAnalyticsVisible(false)
                        setDigitalVisible(false)
                        setDivVisibility(false)
                      }}
                      className='border border-white w-52 py-6 px-4 rounded-md text-left text-xl bg-[#333333]'
                    >
                      Design & Creative
                    </button>
                    <div>{isDesignVisible && <ShowDesign />}</div>
                  </div>
                  <div className=' relative flex gap-20'>
                    <button
                      onClick={() => {
                        setDigitalVisible(!isDigitalVisible)
                        setDevelopmentVisible(false)
                        setDesignVisible(false)
                        setDivVisibility(false)
                        setAnalyticsVisible(false)
                      }}
                      className='border border-white w-52 py-6 px-4 rounded-md text-left text-xl bg-[#333333]'
                    >
                      Digital
                    </button>
                    <div>{isDigitalVisible && <ShowDigital />}</div>
                  </div>
                  <div className=' relative flex gap-20'>
                    <button
                      onClick={() => {
                        setAnalyticsVisible(!isAnalyticsVisible)
                        setDigitalVisible(false)
                        setDevelopmentVisible(false)
                        setDesignVisible(false)
                        setDivVisibility(false)
                      }}
                      className='border border-white w-52 py-6 px-4 rounded-md text-left text-xl bg-[#333333]'
                    >
                      Analytics
                    </button>
                    <div>{isAnalyticsVisible && <ShowAnalytics />}</div>
                  </div>
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
