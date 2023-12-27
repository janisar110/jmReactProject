import React, { useCallback, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);



  return (
    <div>
      <div className="w-full h-screen grid place-content-center bg-slate-500 ">

        <div className=' bg-slate-600 mx-auto p-20 rounded-xl'>
          <p className='text-center text-4xl text-white font-bold mb-10'>Counter</p>
          <div className='sm:grid sm:grid-cols-3'>
            <div>
              <button className='text-3xl text-white bg-slate-800 px-10 py-2 font-bold hover:bg-slate-700  rounded-xl shadow-2xl m-10'
              onClick={(increaser)=> setCounter(counter + 1)}
              >+</button>
            </div>
            <div className='sm:mt-5'>
              <p className=' text-3xl text-white py-6 text-center font-bold bg-slate-700 rounded-xl'>{counter}</p>
            </div>
            <div>
              <button className='text-3xl text-white bg-slate-800 px-10 py-2 font-bold  hover:bg-slate-700  rounded-xl shadow-2xl m-10'
              onClick={(decrease)=> setCounter(counter - 1)}
              >-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
