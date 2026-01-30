import React from 'react'

export default function Navbar() {
  return<>
  <div className='bg-orange-100'>
    

     <h1 className="text-4xl font-bold text-center mb-6 
               bg-gradient-to-r from-yellow-300 via-orange-600 to-amber-700
               bg-clip-text text-transparent  ">
  Learn, Cook, Eat Your Food
</h1>
   <div className='bg-white h-screen  fixed top-0 left-0 bottom-0 w-56' >
    <img className=' mt-8' src='https://assignment-sass.vercel.app/assets/logo-BfNap0Pe.png'/>
  <div>
        
<div className='btn mt-10 space-y-4'>
    <button className='w-44  bg-amber-500 font-bold text-2xl text-white shadow-amber-500 shadow rounded-lg p-1.5 '>Meals</button>
 <button className='w-44 p-1.5 font-bold text-2xl text-black rounded-lg border border-black'>
Ingredients</button>
 <button className=' w-44 p-1.5 font-bold text-2xl text-black  rounded-lg border border-black'>Area</button>
    </div>
    </div> 

  </div>
 
 
    
  </div>

  </>
}

