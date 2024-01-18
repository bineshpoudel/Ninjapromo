import React from 'react'
import Button from './Button'
import { FaChevronDown } from 'react-icons/fa'
const Form = () => {
  return (
    <div>
      <div className='bg-gray-200 flex flex-col  gap-10 w-[40rem] text-black px-20 py-10'>
        <h1 className='text-4xl text-center'>Tell us about you.</h1>

        <div>
          <input
            type='text'
            className='bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='First Name*'
          />

          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div>
          <input
            type='text'
            className='bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='Last Name(optional)'
          />

          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div>
          <input
            type='email'
            className='bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='Email*'
          />

          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div>
          <input
            type='text'
            className='bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='Website(optional)'
          />

          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div className='text-gray-500'>
          <h1 className='text-gray-400'>What is your Budget?*</h1>

          <select
            className='block appearance-none bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='-Please choose an option-'
          >
            <div className='flex'>
              <option value='' selected>
                -Please choose an option-
              </option>
              <FaChevronDown />
            </div>

            <option value='$5,001 - $10,000'>$1 - $5,000</option>
            <option value='$5,001 - $10,000'>$5,001 - $10,000</option>
            <option value='$5,001 - $10,000'>$10,001 - $30,000</option>
            <option value='$5,001 - $10,000'>$30,001 - $50,000</option>
            <option value='$5,001 - $10,000'>$50,001 - $1,00,000</option>
            <option value='$5,001 - $10,000'>Haven't decided yet</option>
          </select>
          <hr />
          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div>
          <input
            type='text'
            className='bg-transparent border-none focus:outline-none w-full border-b border-gray-800'
            placeholder='Your message(optional)'
          />
          <div className='w-full border-t border-solid border-black h-0'></div>
        </div>
        <div>
          <Button label={'Submit'} disabled className='opacity-50 hover:none' />
          <p className='text-l text-gray-8 p-1 text-justify font-thin'>
            By clicking next, you agree to receive communications from
            NinjaPromo in accordance with our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Form
