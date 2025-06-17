import React from 'react'
import MainNav from './MainNav'
import Body from './Body'
import Footer from './Footer'



const Dashboard = () => {
  return (
    <>
    <div className='bg-amber-100 w-screen h-screen relative'>
    <MainNav />
    <Body />
    <Footer />
    </div>
    </>
  )
}

export default Dashboard