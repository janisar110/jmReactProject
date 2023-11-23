import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CMnameInp from './Components/CMnameInp'
import { CMpasword } from './Components/CMpasword'
import CMselect from './Components/CMselect'
import CMemail from './Components/CMemail'
import CMcheckbox from './Components/CMcheckbox'
import CMButton from './Components/CMButton'


function App() {
  return (
    <>
      <div className='shadow-2xl ml-[30rem] mt-[2rem] p-[2rem] w-max'>
        <div className='text-center  rounded-xl p-5 shadow-inner bg-gray-500'>
          <h1 className='font-bold text-3xl'>Registration Form</h1>
        </div>
        <div className='mt-10'>
          <div className='flex space-x-4 '>
            <CMnameInp type="Firstname" />
            <CMnameInp type="Lastname" />
          </div>
          <div className=' mt-[2rem]'><CMemail /></div>
          <div className=' mt-[2rem]'><CMpasword /></div>


          <div className=' mt-[2rem]'>
            <CMselect type="Select department" option={{ first: "CS", second: "SE", third: "BBA" }} />
          </div>
          <div className=' mt-[2rem]'><CMselect type="Select Section" option={{ first: "A1", second: "B1", third: "C1", forth: "D1" }} /></div>
        </div>
        <div className=' mt-[2rem]'><CMcheckbox /></div>
        <div className='ml-[13rem] mt-[2rem]'> <CMButton type="Registor Now" /></div>
      </div >
    </>
  )
}

export default App
