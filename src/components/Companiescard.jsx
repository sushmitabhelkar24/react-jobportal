import React from 'react'
import {MapPin} from "lucide-react"

function Companiescard({name,logo,postname,salary,location}) {
  return (
    <div className='flex flex-row justify-around w-180 bg-blue-200 border-2 border-gray-400 rounded-lg ml-10 mb-6'>
      <img src={logo} alt={name} className='border-2 border-gray-500 w-16 h-16 m-2' />
      <div>
        <p className='text-[18px] font-bold'>{postname}</p>
        <p className='font-semibold'>{name}</p>
         <div className='flex flex-row'>
           <div className='flex flex-row'>
            <MapPin className='w-4'/>
            <span>{location}</span>
           </div>
           <p className='ml-4 p-0.5 bg-gray-300'>{salary}/year</p>
         </div>  
      </div>
      <button className='bg-yellow-300 h-10 p-2 rounded-lg shadow-lg shadow-amber-100 cursor-pointer mt-4'>Apply Now</button>
       
     
    </div>
  )
}

export default Companiescard
