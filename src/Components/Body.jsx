import React from 'react'
import Cards from './Cards'


const Body = () => {
  return (
    <div>
        <div className='w-[70vw] bg-amber-500 mx-auto ' >
            <form action="" className='flex items-center p-10 mt-10'>

            <input type="number" placeholder='Enter the amount' className='w-[40%] p-1.5 border'/> 
            <select className='w-[35%] ml-8 p-1.5 border' required>
                <option value="" >Select</option>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <input type='submit' className='border p-1 px-8 ml-8' value="Add" />  

            </form>
            
        </div>
       <Cards type="Income"/>
       <Cards type="Expense" /> 
       <Cards type="Savings"/> 
    </div>
  )
}

export default Body