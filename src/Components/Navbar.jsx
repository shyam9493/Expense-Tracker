import React from 'react'
import './Login.css'
import { IoIosWallet } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
        <nav className='flex  text-5xl h-screen m-0 pt-5 pl-10'>
          <p className='font-display'>Expense Tracker</p> <p> <IoIosWallet className='' /> </p>
          
          <Link to='./main'><button className="text-blue-500 text-3xl bg-white absolute right-10 z-10 px-5 py-1.5 rounded-full font-display flex items-center gap-2  active:scale-95 transition duration-150 ease-in-out cursor-pointer">
            Login <span><CiLogin /></span>
          </button>
          </Link>
          
        </nav>   
  )
}

export default Navbar;