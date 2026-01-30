import React from 'react'
import Logo from './assets/Logo.png'
export default function Footer() {
  return <>
    <div className='bg-white p-5 relative z-30'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={Logo} alt='Logo' className='w-15'/>
          <p className='w-50 text-2xl'>Recipe</p>
        </div>
        <div>
          <p className='text-2xl text-blue-500'>Route</p>
        </div>
      </div>
      <hr/>
      <div><p className='mb-0 text-gray-500 text-center'>© 2025 Nagy Osama™. All Rights Reserved.</p></div>
    </div>
  </>
}
