import React from 'react'

const Button = ({type}) => {
  return (
    <>
    <div>
      <button className='bg-blue-950 text-white px-8 py-2 rounded-xl hover:bg-blue-900 duration-75'>{type}</button>
      </div>
    </>
  )
}

export default Button
