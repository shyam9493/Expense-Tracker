import React from 'react'
import { IoIosWallet } from "react-icons/io";
import { CiLogin } from "react-icons/ci";


import './Login.css'

const Login = () => {
  return (
    <>
      <div className='bg-amber-100 min-h-screen w-screen m-0 relative overflow-hidden'>
        <div className='flex items-center text-5xl h-screen m-0 pl-36'>
          <p className='font-display p-5 '>Expense Tracker</p> <p> <IoIosWallet className='' /> </p>
          <button className="text-blue-500 text-3xl bg-white absolute right-10 z-10 px-5 py-1.5 rounded-full font-display flex items-center gap-2  active:scale-95 transition duration-150 ease-in-out cursor-pointer">
            Login <span><CiLogin /></span>
          </button>

        </div>
        <div className='absolute bg-blue-500 h-[100vw]  w-[50vw] right-0 -top-1/2  rounded-l-full'>
        </div>
      </div>

    </>
  )
}

export default Login