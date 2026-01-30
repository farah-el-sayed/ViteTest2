import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
export default function Layout() {
  return <>
  <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='flex-2'>
                <div>
                    <Sidebar/>
                </div>
            </div>
            <div className='flex-10'>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
       <Footer/>
  
  </>
}

  
