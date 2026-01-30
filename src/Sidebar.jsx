import React from 'react'
import Logo from './assets/Logo.png'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return <>
  
  <div className='bg-gray-100 fixed top-0 left-0 min-h-screen w-2/12'>
  <div className='p-2'>
    <img src={Logo} alt='logo'/>
    <ul>
      <li className='flex items-center gap-2 bg-orange-400 text-white font-semibold text-2xl rounded-2xl py-3 px-6 mb-2 shadow-md shadow-orange-500 hover:scale-105 duration-300 '><Link to='home'>Meal</Link></li>
      <li className='flex items-center gap-2 border-2 font-semibold text-2xl rounded-2xl py-3 px-6 mb-2  hover:scale-105 duration-300 '><Link to='home'>Ingradients</Link></li>
      <li className='flex items-center gap-2 border-2 font-semibold text-2xl rounded-2xl py-3 px-6 mb-2 hover:scale-105 duration-300 '><Link to='home'>Area</Link></li>
    </ul>
  </div>
  </div>
  
  </>
}
