import { useState } from "react"

function App() {

  const [color,setColor] = useState("aqua")

  return (
    <>
    <div className="w-full h-screen"
      style={{backgroundColor:color}}
     >
    <div className="grid">
      <div className="bg-slate-700 w-max px-10 rounded-2xl grid col-span-1">
        <button className="cursor-pointer px-8 py-3 rounded-2xl text-white text-2xl my-6"
        style={{backgroundColor: "red"}}
        onClick={()=>setColor("red")}
        >Red</button>
         <button className="cursor-pointer px-8 py-3 rounded-2xl text-white text-2xl my-6"
        style={{backgroundColor: "blue"}}
        onClick={()=>setColor("blue")}
        >blue</button>
         <button className="cursor-pointer px-8 py-3 rounded-2xl text-white text-2xl my-6"
        style={{backgroundColor: "green"}}
        onClick={()=>setColor("green")}
        >green</button>
         <button className="cursor-pointer px-8 py-3 rounded-2xl text-black text-2xl my-6"
        style={{backgroundColor: "yellow"}}
        onClick={()=>setColor("yellow")}
        >yellow</button>
         <button className="cursor-pointer px-8 py-3 rounded-2xl text-black text-2xl my-6"
        style={{backgroundColor: "white"}}
        onClick={()=>setColor("white")}
        >white</button>
         <button className="cursor-pointer px-8 py-3 rounded-2xl text-white text-2xl my-6"
        style={{backgroundColor: "black"}}
        onClick={()=>setColor("black")}
        >black</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
