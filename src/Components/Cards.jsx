import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div className='container border text-center p-3 bg-amber-300'>
      <h3>{props.type} : $ {(props.value >= 0)?props.value:0}</h3>
    </div>
    </>
  )
}

export default Cards