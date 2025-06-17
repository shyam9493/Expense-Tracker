import React from 'react'

const MainNav = () => {
  return (
   
      <nav className='abosolute'>
        <ul className='flex justify-between p-5 bg-black text-white'>
          <li>
            Logo
          </li>
          <li>
            Expense Tracker
          </li>
          <li>
              {new Date().toLocaleDateString('IND')}    
            </li>
        </ul>
      </nav>
    
  )
}

export default MainNav