import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='w-full text-center flex flex-col gap-2'>
        <h1 className='font-bold text-3xl'>404</h1>
        <p className='text-[20px] w-full text-center'>Oops Page Not Found</p>
        <Link to='/'><button className='text-blue-700 underline cursor-pointer'>Go back</button></Link>
      </div>
    </div>
  )
}

export default NotFound
