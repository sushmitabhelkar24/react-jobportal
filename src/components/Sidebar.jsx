import React from 'react'
import {House,Building2,UserRoundPen,Bitcoin} from "lucide-react"

function Sidebar() {
  return (
    <div className='w-80 bg-red-900 min-h-screen text-white'>
      <h2 className='m-4 text-center text-4xl font-bold'>Jobera🏢</h2>
      <div className='flex flex-col justify-around h-60 mt-10'>
      <p className='flex flex-row ml-20'><House/><span className='ml-6'>Home</span></p>
      <p className='flex flex-row ml-20'><Building2/><span className='ml-6'>Companies</span></p>
      <p className='flex flex-row ml-20'><Bitcoin/><span className='ml-6'>Salary Guide</span></p>
      <p className='flex flex-row ml-20'><UserRoundPen/><span className='ml-6'>Profile</span></p>
      </div>
    </div>
  )
}

export default Sidebar
