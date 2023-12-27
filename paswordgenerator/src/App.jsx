import { useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

let name = ()=>{

  

}

  return (
    <>
      <div className='bg-slate-600 w-full h-screen p-3 grid place-content-center '>
        <div className='p-20 shadow-2xl rounded-3xl grid col-span-1'>
        <h1 className='text-white text-3xl mb-10'>Pasword Generator</h1>
          <div className='flex '>
              <input type="text" className='w-full py-4 rounded-md outline-none' />
              <button className='bg-green-700 text-white font-bold   px-8 py-4 rounded-md  hover:bg-green-600 outline-none'>Copy</button>
          </div>
          <div className='grid grid-cols-1 my-10 sm:flex sm:my-10 '>
            <div className='mx-2'>
              <input type="range" className='m-2' />
              <label  className='text-white '>length({5})</label>
              </div>
              <div className='mx-2'>
             <input type="checkbox" className='m-2' />
             <label className='text-white '>Special charactor</label>
             </div>
             <div className='mx-2'>
             <input type="checkbox" className='m-2' />
             <label  className='text-white'>Numbers</label>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
