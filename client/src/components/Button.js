import React from 'react'

const Button = ({ className = '', label }) => {
  return (
    <div>
      <button
        type='button'
        className={`w-full text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 border-2 border-gray-200 border-opacity-20 hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black hover:border-gray-200
   rounded-md px-5 py-3 text-center ${className}`}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
