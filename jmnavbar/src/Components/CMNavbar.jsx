import React from 'react'
import CMButton from './CMButton'

const CMNavbar = () => {
  return (
    <>
      <div className='flex bg-gray-600'>
        <div className='m-5'>
            <h1 className='font-bold text-white' >JANISAR</h1>
        </div>
        <div className='m-5 ml-[65rem] space-x-4'>
            <a className="hover:font-bold" href="#">Home</a>
            <a className="hover:font-bold" href="#">Galery</a>
            <a className="hover:font-bold" href="#">Services</a>
            <a className="hover:font-bold" href="#">Contact</a>
        </div>
        <div className=' ml-[2rem] m-3'>
            <CMButton/>
        </div>
      </div>
    </>
  )
}

export default CMNavbar
