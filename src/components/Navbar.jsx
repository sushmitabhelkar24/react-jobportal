import React from 'react'

function Navbar() {
  return (
   
    <div className=' bg-blue-500 w-300 h-40 m-8 mt-2 border-4 border-blue-400 rounded-4xl shadow-2xl'>
     <h1 className='text-white font-bold text-2xl my-2 text-center'>Find Job You Wished !</h1>
      <div className='bg-white w-250 h-8 border-2 border-white rounded-lg shadow-gray mx-auto shadow-lg mt-6'>
      <input list="data" type="text" placeholder='Job Titles or keywords' className='mx-12  border-r-2 border-gray-400 focus:outline-none cursor-pointer'/>
      <datalist id="data" >
        <option value="Mern stack developer">Mern stack developer</option>
        <option value="Python developer">Python developer</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="HR Manager">HR Manager</option>
        <option value="Marketing Manager">Marketing Manager</option>
        <option value="Account Manager">Account Manager</option>
        <option value="Sales Executive">Sales Executive</option>

      </datalist>
      <input list="city" type="text" placeholder='Location' className='mx-10 border-r-2 border-gray-400 focus:outline-none cursor-pointer'  />
      <datalist id="city">
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Ahemdabad">Ahemdabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Chennai">Chennai</option>
      </datalist>
      <input list="type" type="text" placeholder='Category' className='mx-10 border-r-2 border-gray-400 focus:outline-none cursor-pointer'/>
      <datalist id="type">
       <option value="IT / Software">IT / Software</option>
       <option value="Human Resources">Human Resources</option>
       <option value="Marketing">Marketing</option>
       <option value="Finance">Finance</option>
       <option value="Engineering">Engineering</option>
       <option value="Healthcare">Healthcare</option>
       <option value="Sales">Sales</option>
      </datalist>
     <button className='ml-10 bg-blue-600 text-white px-6 m-0.5 rounded-lg border-2 border-blue-400 cursor-pointer hover:shadow-yellow-100 shadow-lg hover:text-[14px]'>Search</button>
      </div>

      <div className='bg-white rounded-[6px] border-2 border-gray-400 h-6 w-160 mx-auto mt-2'>
       <span className='w-40 border-r-2 border-gray-400 px-10 cursor-pointer hover:text-red-500 hover:text-shadow-red-800 hover:text-shadow-2xl  '>Full-Time</span> 
       <span className='w-40 border-r-2 border-gray-400 px-10 cursor-pointer hover:text-red-500 hover:text-shadow-red-800 hover:text-shadow-2xl '>Part-Time</span> 
       <span className='w-40 border-r-2 border-gray-400 px-10 cursor-pointer hover:text-red-500 hover:text-shadow-red-800 hover:text-shadow-2xl '>Remote-Time</span> 
       <span className='w-40 cursor-pointer px-10 hover:text-red-500 hover:text-shadow-red-800 hover:text-shadow-2xl '>Intership</span> 
      </div>
    </div>
   
    
  )
}

export default Navbar
