import React from 'react'
import CMButton from './CMButton'
import Img from "../assets/whiteprofile.jpg"


const CMNavbar = () => {
  return (
    <>
    <nav className='max-w-full mx-auto sticky top-0 z-10 p-1 shadow-xl '>
        <div className="flex items-center justify-between">
            <div className='mx-20'>
                <img src={Img} alt="Img" width={60} height={60} className='rounded-full border border-black'/>
            </div>

            <ul className='flex gap-10'>
                <li className=' hover:text-gray-600'>Home</li>
                <li className=' hover:text-gray-600'>Components</li>
                <li className=' hover:text-gray-600'>Blogs</li>
                <li className=' hover:text-gray-600'>Pages</li>
            </ul>
                <div className='mx-10'>
            <CMButton/>
            </div>
        </div>
    </nav>
      
    </>
  )
}

export default CMNavbar
