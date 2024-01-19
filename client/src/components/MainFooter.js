import React from 'react'
import { LogoSvg } from '../assets'
import Social from './Social'
import officeData from '../data/OfficeData'

const MainFooter = () => {
  return (
    <div className='w-full text-white bg-[#121212] h-[90vh]'>
      <div className='max-w-screen-xl mx-auto px-10'>
        <div className='flex gap-10'>
          <div>
            <img src={LogoSvg} alt='logo' />
          </div>

          <div className='flex flex-col gap-3 '>
            <h1 className='text-l'>Services</h1>
            <div className='text-xs flex flex-col gap-2 '>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Marketing Subscription
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Social media
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Paid Social
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Paid Media
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                SEO
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Influencer Marketing
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                PR and Outreach
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Video Production
              </a>
              <a className='hover:text-blue-700 duration-300' href='#'>
                Video Marketing
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <h1 className='text-l'>branding</h1>
            </div>
            <div className='flex flex-col text-xs gap-2'>
              <a href='#'>Branding</a>
              <a href='#'>Community Management</a>
              <a href='#'>Website Development</a>
              <a href='#'>Mobile App Development</a>
              <a href='#'>Web Design</a>
              <a href='#'>Mobile App Design</a>
              <a href='#'>Blockchain Development</a>
              <a href='#'>Lead Generation</a>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <h1 className='text-l'>Comany</h1>
            </div>
            <div className='flex flex-col text-xs gap-2'>
              <a href='#'>Services</a>
              <a href='#'>About Us</a>
              <a href='#'>Blog</a>
              <a href='#'>Careers</a>
              <a href='#'>Contact</a>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <h1 className='text-l'>Industries</h1>
            </div>
            <div className='flex flex-col text-xs gap-2'>
              <a href='#'>B2B</a>
              <a href='#'>Finetech</a>
              <a href='#'>Crypto</a>
              <a href='#'>Software</a>
              <a href='#'>Saas</a>
              <a href='#'>Startup</a>
              <a href='#'>Small business</a>
              <a href='#'>Gaming</a>
              <a href='#'>Esports</a>
              <a href='#'>Software</a>
              <a href='#'>Mobile</a>
              <a href='#'>eCommerce</a>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <h1 className='text-l'>Follow Us</h1>
            </div>
            <Social />
          </div>
        </div>
        <div className='flex gap-10 pt-20'>
          <div className='w-32 bg-[#121212]'></div>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-l'>Contact Us</h1>
              <div className='flex flex-col gap-1 text-xs'>
                <a href='#'> hello@ninjapromo</a>
                <a href='#'>+1 929-492-4413 (US)</a>
                <a href='#'>+44 20 3868 4672 (UK) </a>
                <a href='#'> +65 3165 4789 (SG)</a>
              </div>
              <h1 className='text-l'>
                Want to join{' '}
                <span className='block mt-[-0.5rem]'>the team?</span>
              </h1>
              <div className='text-xs'>
                <a href='#'>careers@ninjapromo.io</a>
              </div>
              <h1 className='text-l'>Press Inquiries</h1>
              <div className='text-xs'>
                <a href='#'>media@ninjapromo.io</a>
              </div>
            </div>
            <div className='flex'>
              {officeData.map((office) => {
                return (
                  <div key={office.id} className='w-32'>
                    <div className='flex flex-col gap-2'>
                      <img
                        src={office.icon}
                        alt={office.country}
                        className='h-6 w-6'
                      />
                      <h1>{office.country}</h1>
                      <p className='w-24 text-xs text-gray-400'>
                        {office.location}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex gap-10 pt-10'>
          <div className='w-32 bg-[#121212]'></div>
          <div className='text-xs flex gap-5 text-gray-400'>
            <p>&copy;2023 Ninja Promo.All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter
