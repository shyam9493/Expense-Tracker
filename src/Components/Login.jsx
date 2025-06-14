import React from 'react'
import './Login.css'
import Navbar from './Navbar';


const Login = () => {
  return (
    <>
      <div className='bg-amber-100 min-h-screen w-screen m-0 relative overflow-hidden'>
        <div className='absolute bg-image h-[100vw]  w-[50vw] right-0 -top-1/2  rounded-l-full'>
        </div>
        <Navbar />   
        <div className='absolute top-2/5 font-display text-4xl max-w-1/2 pl-5 text-amber-600'>
          "Your financial journey starts here. Let's make every entry count."
          <ul className='text-3xl pl-8 pt-2.5 text-amber-400'>
            <li>Expense </li>
            <li>Income </li>
            <li>Others</li>
          </ul>
          </div>
      </div>

    </>
  )
}

export default Login