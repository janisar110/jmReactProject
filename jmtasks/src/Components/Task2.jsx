import React from 'react'

const Task2 = () => {

  let myName = "Janisar";
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <div className='max-w-[1536] mx-auto shadow-xl rounded-2xl'>
        <div className='text-center p-10'>
        <h1 className='font-bold text-5xl'>Task2</h1>
        </div>
        <div className='m-10 p-5 text-center font-bold text-2xl'>
        <h1>Hey, I am {myName}</h1>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        </div>
      </div>


      
    </>
  )
}

export default Task2
