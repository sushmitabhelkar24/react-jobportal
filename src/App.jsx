import React from 'react'
import Sidebar from "./components/Sidebar"
import MainPortal from './components/MainPortal'

function App() {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <MainPortal/>  
    </div>
  )
}

export default App
