import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
 <div className=''>
   <Header />
   <Outlet />
   {/* <h1 className='text-green-600 bg-black'> haa</h1> */}
 </div>
  )
}

export default App