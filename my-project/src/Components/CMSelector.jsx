import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { BiChevronDown } from "react-icons/bi";


const CMSelector = () => {
    const [countries, setCountries] = useState(null)
    // const [search, setSearch] = useState("")


    useEffect(()=>{
        fetch('https://restcountries.com/v2/all?fields=name')
        .then((res)=>res.json())
        .then((data)=>{
            setCountries(data)
        })
    },[]);


  return (
    <>
    <div className='w-60  h-80'>
            
        <input type="text"
         value={inpValue} 
         placeholder='select country' 
         className='p-3 w-60'/>

        <ul className='bg-white mt-2 overflow-y-auto max-h-60'>
          {
          
            countries?.map((country)=>(
            <li key={country?.name} className="p-2"> 
             {country?.name} </li>
            ))
        }
        
        </ul>
        </div>
    
    </>
  )
}

export default CMSelector
